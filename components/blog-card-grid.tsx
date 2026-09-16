"use client"

import Link from "next/link"
import BlogCoverImage from "@/components/blog-cover-image"
import { PortfolioDashedDivider } from "@/components/portfolio-bleed-line"
import { IconArrowRight, IconCalendar, IconClock } from "@/components/icons"
import { cn } from "@/lib/utils"

type BlogCard = {
  id: string
  title: string
  slug: string
  excerpt: string
  publishedAt: string
  readTime: string
  category: string
  tags: string[]
  coverImage: string
}

function getLayoutClass(index: number, totalBlogs: number) {
  if (totalBlogs === 1) {
    return "md:col-span-6"
  }

  if (totalBlogs === 2) {
    return index === 0 ? "md:col-span-4" : "md:col-span-2"
  }

  if (totalBlogs === 3) {
    if (index === 0) return "md:col-span-4"
    if (index === 1) return "md:col-span-2"
    return "md:col-span-6"
  }

  if (totalBlogs >= 4) {
    if (totalBlogs >= 5 && index === 4) {
      return "md:col-span-6"
    }
    const patterns = ["md:col-span-4", "md:col-span-2", "md:col-span-2", "md:col-span-4"]
    return patterns[index % 4]
  }

  return "md:col-span-2"
}

export default function BlogCardGrid({ blogs }: { blogs: BlogCard[] }) {
  return (
    <div className="grid grid-cols-1 divide-y divide-dashed divide-slate-200 overflow-visible md:grid-cols-6 md:divide-x md:divide-y">
      {blogs.map((blog, index) => (
        <Link
          key={blog.id}
          href={`/blog/${blog.slug}`}
          className={cn(
            "cursor-target group relative flex h-full min-h-0 w-full flex-col overflow-visible bg-white",
            getLayoutClass(index, blogs.length)
          )}
        >
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 z-40 border border-dashed border-transparent transition-[border-color] group-hover:border-slate-900"
          />
          <div className="relative h-[200px] w-full overflow-hidden portfolio-border-b bg-slate-50">
            <BlogCoverImage
              src={blog.coverImage}
              alt={blog.title}
              priority={index < 3}
              className="grayscale transition-all duration-500 group-hover:scale-[1.02] group-hover:grayscale-0"
            />
          </div>

          <div className="flex min-h-0 flex-1 flex-col">
            <div className="flex flex-1 flex-col p-4">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-slate-400">
                {blog.category}
              </span>
              <h2 className="mt-3 line-clamp-2 text-lg font-semibold leading-tight text-slate-900 transition-colors group-hover:text-slate-900">
                {blog.title}
              </h2>
              <p className="mt-2 flex-1 line-clamp-3 text-sm leading-relaxed text-slate-500">
                {blog.excerpt}
              </p>

              <div className="mt-4 flex items-center gap-4 text-xs text-slate-400">
                <div className="flex items-center gap-1">
                  <IconClock className="h-3 w-3" />
                  <span>{blog.readTime}</span>
                </div>
                <div className="flex items-center gap-1">
                  <IconCalendar className="h-3 w-3" />
                  <span>
                    {new Date(blog.publishedAt).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </div>
              </div>

              {blog.tags.length > 0 ? (
                <div className="mt-3 flex flex-wrap gap-1">
                  {blog.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="border border-dashed border-slate-200 bg-white px-2 py-1 text-xs text-slate-500"
                    >
                      {tag}
                    </span>
                  ))}
                  {blog.tags.length > 3 ? (
                    <span className="border border-dashed border-slate-200 bg-white px-2 py-1 text-xs text-slate-500">
                      +{blog.tags.length - 3}
                    </span>
                  ) : null}
                </div>
              ) : null}
            </div>

            <div className="mt-auto">
              <PortfolioDashedDivider />
              <div className="p-4 pt-4">
                <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-900">
                  Read more
                  <IconArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </div>
              <PortfolioDashedDivider />
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
