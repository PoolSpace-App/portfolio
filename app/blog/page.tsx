import Link from "next/link"
import Image from "next/image"
import { getAllBlogsFromNotion } from "@/lib/notion"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { 
  IconCalendar, 
  IconClock, 
  IconArrowRight 
} from "@tabler/icons-react"

export default async function BlogPage() {
  const blogs = await getAllBlogsFromNotion()

  return (
    <main className="min-h-screen bg-white text-black">
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
                    <div className="relative overflow-hidden rounded-[32px] bg-gray-100 mb-4 w-full h-[200px]">
                      <Image
                        src={blog.coverImage}
                        alt={blog.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105 w-full h-full"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                          {blog.category}
                        </span>
                      </div>
                    </div>
                  }
                  title={
                    <h2 className="font-bold text-blue-950 group-hover:text-blue-700 transition-colors line-clamp-2 text-lg md:text-xl">
                      {blog.title}
                    </h2>
                  }
                  description={
                    <div className="space-y-3">
                      <p className="text-gray-700 leading-relaxed line-clamp-3 text-sm">
                        {blog.excerpt}
                      </p>
                      
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <IconClock className="h-3 w-3" />
                          <span>{blog.readTime}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <IconCalendar className="h-3 w-3" />
                          <span>{new Date(blog.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-1">
                        {blog.tags.slice(0, 3).map((tag) => (
                          <span 
                            key={tag} 
                            className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                        {blog.tags.length > 3 && (
                          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                            +{blog.tags.length - 3}
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-2 text-blue-600 font-medium group-hover:text-blue-700 transition-colors pt-2">
                        <span className="text-sm">Read more</span>
                        <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
    </main>
  )
}
