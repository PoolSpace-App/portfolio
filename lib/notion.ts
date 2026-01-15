import { Client } from "@notionhq/client"
import { NotionToMarkdown } from "notion-to-md"

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

const n2m = new NotionToMarkdown({ notionClient: notion })

const DATABASE_ID = (process.env.NOTION_DATABASE_ID || "").replace(/-/g, "").trim().replace(/^["']|["']$/g, "")
const NOTION_TOKEN = (process.env.NOTION_TOKEN || "").trim().replace(/^["']|["']$/g, "")

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  author: string
  publishedAt: string
  readTime: string
  category: string
  tags: string[]
  coverImage: string
}

export async function getAllBlogsFromNotion(): Promise<BlogPost[]> {
  if (!DATABASE_ID || !NOTION_TOKEN) return []

  try {
    const response = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${NOTION_TOKEN}`,
        "Notion-Version": "2022-06-28",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ page_size: 100 }),
      next: { revalidate: 0 }, 
    })

    if (!response.ok) return []

    const data = await response.json()
    
    const blogs = data.results.map((page: any) => {
      const props = page.properties
      
      const getText = (prop: any) => {
        if (!prop) return ""
        if (prop.title) return prop.title[0]?.plain_text || ""
        if (prop.rich_text) return prop.rich_text[0]?.plain_text || ""
        return ""
      }

      // Helper to extract image URL from properties or cover
      const getImageUrl = () => {
        // 1. Check specific property "CoverImage" or "Cover Image"
        const coverProp = props.CoverImage || props["Cover Image"]
        if (coverProp) {
          if (coverProp.files?.[0]) {
            return coverProp.files[0].file?.url || coverProp.files[0].external?.url
          }
          if (coverProp.url) return coverProp.url
        }
        
        // 2. Fallback to built-in Notion Page Cover
        return page.cover?.external?.url || page.cover?.file?.url || "/placeholder.jpg"
      }

      return {
        id: page.id,
        title: getText(props.Title) || getText(props.Name) || "Untitled",
        slug: getText(props.Slug) || "",
        excerpt: getText(props.Excerpt) || "",
        content: "",
        author: getText(props.Author) || "Nqobile Vundla",
        publishedAt: props.PublishedAt?.date?.start || props.Date?.date?.start || page.created_time,
        readTime: getText(props.ReadTime) || "5 min read",
        category: props.Category?.select?.name || "General",
        tags: props.Tags?.multi_select?.map((tag: any) => tag.name) || [],
        coverImage: getImageUrl(),
      }
    })

    // Filter out "Untitled" posts or posts without a slug
    // This prevents empty Notion rows from appearing as blog posts
    const filteredBlogs = blogs.filter(blog => 
      blog.title !== "Untitled" && 
      blog.slug !== "" && 
      blog.slug !== "untitled"
    )

    // Sort by published date (latest first)
    return filteredBlogs.sort((a, b) => 
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
  } catch (error: any) {
    console.error("Notion API Error:", error.message)
    return []
  }
}

export async function getBlogBySlugFromNotion(slug: string): Promise<BlogPost | null> {
  if (!DATABASE_ID || !NOTION_TOKEN) return null

  try {
    const response = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${NOTION_TOKEN}`,
        "Notion-Version": "2022-06-28",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        filter: { property: "Slug", rich_text: { equals: slug } },
      }),
      next: { revalidate: 60 },
    })

    if (!response.ok) return null
    const data = await response.json()
    if (data.results.length === 0) return null

    const page = data.results[0]
    const mdblocks = await n2m.pageToMarkdown(page.id)
    const mdString = n2m.toMarkdownString(mdblocks)
    const props = page.properties

    const getText = (prop: any) => {
      if (!prop) return ""
      if (prop.title) return prop.title[0]?.plain_text || ""
      if (prop.rich_text) return prop.rich_text[0]?.plain_text || ""
      return ""
    }

    const getImageUrl = () => {
      const coverProp = props.CoverImage || props["Cover Image"]
      if (coverProp) {
        if (coverProp.files?.[0]) {
          return coverProp.files[0].file?.url || coverProp.files[0].external?.url
        }
        if (coverProp.url) return coverProp.url
      }
      return page.cover?.external?.url || page.cover?.file?.url || "/placeholder.jpg"
    }

    return {
      id: page.id,
      title: getText(props.Title) || getText(props.Name) || "Untitled",
      slug: getText(props.Slug) || "",
      excerpt: getText(props.Excerpt) || "",
      content: mdString.parent,
      author: getText(props.Author) || "Nqobile Vundla",
      publishedAt: props.PublishedAt?.date?.start || props.Date?.date?.start || page.created_time,
      readTime: getText(props.ReadTime) || "5 min read",
      category: props.Category?.select?.name || "General",
      tags: props.Tags?.multi_select?.map((tag: any) => tag.name) || [],
      coverImage: getImageUrl(),
    }
  } catch (error: any) {
    return null
  }
}
