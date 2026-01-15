import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Navbar from "@/components/navbar"
import { getBlogBySlugFromNotion, getAllBlogsFromNotion } from "@/lib/notion"
import MarkdownRenderer from "@/components/markdown-renderer"
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

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const blog = await getBlogBySlugFromNotion(slug)
  const allBlogs = await getAllBlogsFromNotion()
  
  // Find related blogs (same category, excluding current)
  const relatedBlogs = allBlogs
    .filter(b => b.category === blog?.category && b.id !== blog?.id)
    .slice(0, 2)

  if (!blog) {
    return (
      <main className="min-h-screen bg-white text-black">
        <header className="container mx-auto px-4 py-8 flex justify-between items-center bg-white text-blue-950 border-b border-gray-200">
          <Navbar variant="white" />
        </header>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-medium mb-4 text-blue-950">Blog Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link href="/blog" className="text-blue-600 hover:text-blue-700 font-medium">
            ← Back to Blog
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white text-black">
      {/* White header variant */}
      <header className="container mx-auto px-4 py-8 flex justify-between items-center bg-white text-blue-950 border-b border-gray-200">
        <Navbar variant="white" />
      </header>
      
      <div className="container mx-auto px-4 py-8 pb-32">
          {/* Back button */}
          <Link
            href="/blog"
            className="inline-flex items-center mb-8 hover:opacity-70 transition-opacity text-blue-950 hover-glitch"
          >
            <ArrowLeft className="mr-2 h-4 w-4 text-blue-950" />
            Back
          </Link>
          
          {/* Blog header */}
          <div className="mb-12">
            <div className="flex items-center space-x-4 text-sm mb-6">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                {blog.category}
              </span>
              <span className="text-gray-700 font-medium">{blog.readTime}</span>
              <span className="text-gray-600">{new Date(blog.publishedAt).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-medium mb-6 text-blue-950 leading-tight">
              {blog.title}
            </h1>
            
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              {blog.excerpt}
            </p>
            
            <div className="flex items-center space-x-4 text-sm text-gray-600 mb-8">
              <span>By {blog.author}</span>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {blog.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          {/* Cover image */}
          <div className="relative overflow-hidden rounded-4xl aspect-[16/9] bg-gray-100 mb-12">
            <Image
              src={blog.coverImage}
              alt={blog.title}
              width={1200}
              height={675}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          
          {/* Blog content */}
          <MarkdownRenderer content={blog.content} />
          
          {/* Related posts */}
          {relatedBlogs.length > 0 && (
            <div className="border-t border-gray-200 pt-16">
              <h3 className="text-2xl font-medium mb-8 text-blue-950">Related Posts</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedBlogs.map((relatedBlog) => (
                  <Link 
                    key={relatedBlog.id} 
                    href={`/blog/${relatedBlog.slug}`}
                    className="group block"
                  >
                    <div className="relative overflow-hidden rounded-[32px] aspect-[4/3] bg-gray-100 mb-4">
                      <Image
                        src={relatedBlog.coverImage}
                        alt={relatedBlog.title}
                        width={400}
                        height={300}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm text-gray-700 font-medium">
                        {relatedBlog.category} • {relatedBlog.readTime}
                      </div>
                      <h4 className="text-lg font-medium text-blue-950 transition-colors">
                        {relatedBlog.title}
                      </h4>
                      <p className="text-gray-700 text-sm line-clamp-2">
                        {relatedBlog.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
          
          {/* Navigation */}
          <div className="border-t border-gray-200 pt-8 mt-16">
            <Link 
              href="/blog"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to all posts
            </Link>
          </div>
      </div>
    </main>
  )
}
