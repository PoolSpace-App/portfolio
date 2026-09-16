import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowLeft, IconArrowRight, IconCalendar, IconClock } from "@/components/icons"
import { getBlogBySlugFromNotion, getAllBlogsFromNotion } from "@/lib/notion"
import MarkdownRenderer from "@/components/markdown-renderer"
import BlogCoverImage from "@/components/blog-cover-image"
import PortfolioBleedLine from "@/components/portfolio-bleed-line"
import { Metadata } from "next"

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const blog = await getBlogBySlugFromNotion(slug)
  return {
    title: blog ? `${blog.title} | Blog` : "Blog Post Not Found",
    description: blog?.excerpt,
  }
}

export const revalidate = 60

function BlogPostShell({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="portfolio-dot-grid relative bg-white">
        <PortfolioBleedLine />
        <div className="portfolio-layout-guides relative mx-auto w-full max-w-7xl content-start py-10 lg:py-14">
          {children}
        </div>
        <PortfolioBleedLine />
      </section>
    </main>
  )
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params

  const [blog, allBlogs] = await Promise.all([getBlogBySlugFromNotion(slug), getAllBlogsFromNotion()])

  const relatedBlogs = blog
    ? allBlogs.filter((item) => item.category === blog.category && item.id !== blog.id).slice(0, 2)
    : []

  if (!blog) {
    return (
      <BlogPostShell>
        <div className="px-5 md:px-8">
          <div className="portfolio-line-nodes portfolio-line-nodes-top portfolio-border-x bg-white p-8 text-center md:p-12">
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900">Blog Post Not Found</h1>
            <p className="mt-4 text-sm text-slate-500">The blog post you&apos;re looking for doesn&apos;t exist.</p>
            <Link
              href="/blog"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-slate-900 transition hover:opacity-70"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </div>
        </div>
      </BlogPostShell>
    )
  }

  return (
    <BlogPostShell>
      <div className="px-5 md:px-8">
        <div className="portfolio-line-nodes portfolio-line-nodes-top portfolio-border-x bg-white p-8 md:p-10 lg:p-12">
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-slate-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-400">
            <span className="font-mono uppercase tracking-[0.18em] text-slate-400">{blog.category}</span>
            <div className="flex items-center gap-1">
              <IconClock className="h-3 w-3" />
              <span>{blog.readTime}</span>
            </div>
            <div className="flex items-center gap-1">
              <IconCalendar className="h-3 w-3" />
              <span>
                {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">{blog.title}</h1>
          <p className="mt-4 w-full text-sm leading-relaxed text-slate-500 md:text-base">{blog.excerpt}</p>
          <p className="mt-4 text-sm text-slate-400">By {blog.author}</p>

          {blog.tags.length > 0 ? (
            <div className="mt-6 flex flex-wrap gap-2">
              {blog.tags.map((tag) => (
                <span key={tag} className="border border-dashed border-slate-200 bg-slate-50 px-2 py-1 text-xs text-slate-500">
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </div>

      <PortfolioBleedLine />

      <div className="px-5 md:px-8">
        <div className="portfolio-line-nodes portfolio-line-nodes-y portfolio-border-x bg-white">
          <div className="group relative aspect-[16/9] overflow-hidden bg-slate-50">
            <BlogCoverImage
              src={blog.coverImage}
              alt={blog.title}
              priority
              className="grayscale transition-all duration-500 group-hover:scale-[1.02] group-hover:grayscale-0"
            />
          </div>
        </div>
      </div>

      <PortfolioBleedLine />

      <div className="px-5 md:px-8">
        <div className="portfolio-line-nodes portfolio-line-nodes-y portfolio-border-x bg-white p-8 md:p-10 lg:p-12">
          <MarkdownRenderer content={blog.content} />
        </div>
      </div>

      {relatedBlogs.length > 0 ? (
        <>
          <PortfolioBleedLine />

          <div className="px-5 md:px-8">
            <div className="portfolio-line-nodes portfolio-line-nodes-bottom portfolio-border-x bg-white">
              <div className="portfolio-border-b p-5 md:p-7">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Related Posts</h2>
              </div>
              <div className="grid grid-cols-1 divide-y divide-dashed divide-slate-200 md:grid-cols-2 md:divide-x md:divide-y">
                {relatedBlogs.map((relatedBlog) => (
                  <Link
                    key={relatedBlog.id}
                    href={`/blog/${relatedBlog.slug}`}
                    className="group flex h-full flex-col bg-white transition hover:outline hover:outline-1 hover:-outline-offset-1 hover:outline-slate-900"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden portfolio-border-b bg-slate-50">
                      <BlogCoverImage
                        src={relatedBlog.coverImage}
                        alt={relatedBlog.title}
                        className="grayscale transition-all duration-500 group-hover:scale-[1.02] group-hover:grayscale-0"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-4">
                      <span className="font-mono text-xs uppercase tracking-[0.18em] text-slate-400">
                        {relatedBlog.category}
                      </span>
                      <h3 className="mt-3 line-clamp-2 text-lg font-semibold leading-tight text-slate-900">
                        {relatedBlog.title}
                      </h3>
                      <p className="mt-2 flex-1 line-clamp-2 text-sm leading-relaxed text-slate-500">
                        {relatedBlog.excerpt}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-slate-900">
                        Read more
                        <IconArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </>
      ) : null}

      <PortfolioBleedLine />

      <div className="px-5 md:px-8">
        <div className="portfolio-line-nodes portfolio-line-nodes-bottom portfolio-border-x bg-white p-5 md:p-7">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 transition hover:opacity-70"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to all posts
          </Link>
        </div>
      </div>
    </BlogPostShell>
  )
}
