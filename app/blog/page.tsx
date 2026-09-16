import { getAllBlogsFromNotion } from "@/lib/notion"
import BlogCardGrid from "@/components/blog-card-grid"
import PortfolioBleedLine from "@/components/portfolio-bleed-line"

export const revalidate = 60

export default async function BlogPage() {
  const blogs = await getAllBlogsFromNotion()

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="portfolio-dot-grid relative bg-white">
        <PortfolioBleedLine />

        <div className="portfolio-layout-guides relative mx-auto w-full py-10 lg:py-14">
          <div className="w-full min-w-0 px-5 md:px-8">
            <div className="portfolio-line-nodes portfolio-line-nodes-top portfolio-border-x bg-white p-8 md:p-10 lg:p-12">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">Blogs</h1>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-500 md:text-base">
                My thoughts on design, technology, and the creative process. Sharing insights from my journey as a
                Product Designer.
              </p>
            </div>
          </div>

          <PortfolioBleedLine />

          <div className="w-full min-w-0 px-5 md:px-8">
            <div className="portfolio-line-nodes portfolio-line-nodes-y overflow-visible portfolio-border-x bg-white">
              {blogs.length === 0 ? (
                <div className="p-8 text-center md:p-12">
                  <p className="text-sm text-slate-500">
                    No blog posts found. Please check your Notion database connection.
                  </p>
                </div>
              ) : (
                <BlogCardGrid
                  blogs={blogs.map((blog) => ({
                    id: blog.id,
                    title: blog.title,
                    slug: blog.slug,
                    excerpt: blog.excerpt,
                    publishedAt: blog.publishedAt,
                    readTime: blog.readTime,
                    category: blog.category,
                    tags: blog.tags,
                    coverImage: blog.coverImage,
                  }))}
                />
              )}
            </div>
          </div>

          <PortfolioBleedLine />

          <div className="w-full min-w-0 px-5 md:px-8">
            <div className="portfolio-line-nodes portfolio-line-nodes-bottom portfolio-border-x bg-white">
              <div className="grid gap-0 text-center text-slate-500 md:grid-cols-4">
                {["nCino", "DocFox", "Mortgage Market", "PoolSpace"].map((name) => (
                  <div
                    key={name}
                    className="portfolio-border-b p-8 font-mono text-lg font-semibold md:border-b-0 md:portfolio-border-r md:last:border-r-0"
                  >
                    {name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <PortfolioBleedLine />
        </div>
      </section>
    </main>
  )
}
