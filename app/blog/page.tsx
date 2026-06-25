import Link from "next/link"
import { getAllBlogsFromNotion } from "@/lib/notion"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import BlogCoverImage from "@/components/blog-cover-image"
import PageGridShell from "@/components/page-grid-shell"
import { 
  IconCalendar, 
  IconClock, 
  IconArrowRight 
} from "@/components/icons"

export const revalidate = 60

export default async function BlogPage() {
  const blogs = await getAllBlogsFromNotion()

  return (
    <PageGridShell>
      <div className="container mx-auto px-4 pt-32 pb-32">
        <h1 className="text-4xl md:text-5xl font-medium mb-4 text-blue-950">Blogs</h1>
        <p className="text-xl text-blue-950 mb-16 max-w-2xl">
          My thoughts on design, technology, and the creative process. Sharing insights from my journey as a Product Designer.
        </p>
        
        {blogs.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No blog posts found. Please check your Notion database connection.</p>
          </div>
        ) : (
          <BentoGrid className="w-full mb-16">
            {blogs.map((blog, index) => {
              // Dynamic layout based on total blog count (using 6-column grid)
              const getLayoutClass = (index: number, totalBlogs: number) => {
                if (totalBlogs === 1) {
                  return "md:col-span-6"; // Full width
                } 
                
                if (totalBlogs === 2) {
                  return index === 0 ? "md:col-span-4" : "md:col-span-2"; // Large + Small
                }
                
                if (totalBlogs === 3) {
                  if (index === 0) return "md:col-span-4"; // Large
                  if (index === 1) return "md:col-span-2"; // Small  
                  return "md:col-span-6"; // Full width third
                }
                
                // For 4+ blogs: Special handling for 5th blog to be full width
                if (totalBlogs >= 4) {
                  if (totalBlogs >= 5 && index === 4) {
                    return "md:col-span-6"; // 5th blog full width
                  }
                  const patterns = ["md:col-span-4", "md:col-span-2", "md:col-span-2", "md:col-span-4"];
                  return patterns[index % 4];
                }
                
                return "md:col-span-2"; // Fallback
              }
              
              const layoutClass = getLayoutClass(index, blogs.length);
              
              return (
              <Link 
                key={blog.id} 
                href={`/blog/${blog.slug}`} 
                className={`block h-full ${layoutClass}`}
              >
                <BentoGridItem
                  className="group cursor-pointer rounded-[40px]"
                  header={
                    <div className="relative mb-4 h-[200px] w-full overflow-hidden rounded-[32px] bg-gray-100">
                      <BlogCoverImage
                        src={blog.coverImage}
                        alt={blog.title}
                        priority={index < 3}
                        className="transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                          {blog.category}
                        </span>
                      </div>
                    </div>
                  }
                  title={null}
                  description={
                    <div className="flex flex-1 flex-col">
                      <h2 className="mb-3 line-clamp-2 min-h-[3.5rem] text-lg font-bold text-blue-950 transition-colors group-hover:text-blue-700 md:text-xl">
                        {blog.title}
                      </h2>
                      <div className="space-y-3">
                        <p className="line-clamp-3 text-sm leading-relaxed text-gray-700">
                          {blog.excerpt}
                        </p>

                        <div className="flex items-center gap-4 text-xs text-gray-500">
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

                        <div className="flex flex-wrap gap-1">
                          {blog.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-500"
                            >
                              {tag}
                            </span>
                          ))}
                          {blog.tags.length > 3 && (
                            <span className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-500">
                              +{blog.tags.length - 3}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="mt-auto shrink-0 pt-6">
                        <span className="btn-secondary group/btn inline-flex shrink-0 items-center">
                          Read more
                          <IconArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
                        </span>
                      </div>
                    </div>
                  }
                />
              </Link>
              )
            })}
          </BentoGrid>
        )}
      </div>
    </PageGridShell>
  )
}
