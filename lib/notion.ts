import { Client } from "@notionhq/client"
import { NotionToMarkdown } from "notion-to-md"
import { getBlogCoverSrc, getCoverImageUrlFromPage } from "@/lib/notion-cover-image"

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

const n2m = new NotionToMarkdown({ notionClient: notion })

const DATABASE_ID = (process.env.NOTION_DATABASE_ID || "").replace(/-/g, "").trim().replace(/^["']|["']$/g, "")
const FAQ_DATABASE_ID = (process.env.NOTION_FAQ_DATABASE_ID || "").replace(/-/g, "").trim().replace(/^["']|["']$/g, "")
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

export interface FAQ {
  id: string
  question: string
  answer: string
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
      next: { revalidate: 3600 }, 
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

      const rawCoverImage = getCoverImageUrlFromPage(page)

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
        coverImage: getBlogCoverSrc(page.id, rawCoverImage),
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
      next: { revalidate: 3600 },
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

    const rawCoverImage = getCoverImageUrlFromPage(page)

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
      coverImage: getBlogCoverSrc(page.id, rawCoverImage),
    }
  } catch (error: any) {
    return null
  }
}

export async function getFAQsFromNotion(): Promise<FAQ[]> {
  if (!FAQ_DATABASE_ID || !NOTION_TOKEN) return []

  try {
    const response = await fetch(`https://api.notion.com/v1/databases/${FAQ_DATABASE_ID}/query`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${NOTION_TOKEN}`,
        "Notion-Version": "2022-06-28",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sorts: [
          {
            property: "Order",
            direction: "ascending",
          },
        ],
      }),
      next: { revalidate: 3600 },
    })

    if (!response.ok) return []

    const data = await response.json()

    const faqs = await Promise.all(data.results.map(async (page: any) => {
      const props = page.properties

      const getText = (prop: any) => {
        if (!prop) return ""
        if (prop.title) return prop.title[0]?.plain_text || ""
        if (prop.rich_text) return prop.rich_text[0]?.plain_text || ""
        return ""
      }

      // Get page content as markdown for the answer
      let content = ""
      try {
        const mdblocks = await n2m.pageToMarkdown(page.id)
        const mdString = n2m.toMarkdownString(mdblocks)
        content = mdString.parent
      } catch (err) {
        console.error(`Error fetching content for FAQ ${page.id}:`, err)
      }

      return {
        id: page.id,
        question: getText(props.Question) || getText(props.Name) || "Untitled",
        answer: content || getText(props.Answer) || "",
      }
    }))

    // Filter out "Untitled" questions or empty rows
    return faqs.filter(faq => 
      faq.question !== "Untitled" && 
      faq.question.trim() !== ""
    )
  } catch (error: any) {
    console.error("Notion FAQ Error:", error.message)
    return []
  }
}
