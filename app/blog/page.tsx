"use client"

import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/navbar"
import { getAllBlogs } from "@/lib/blogs"

export default function BlogPage() {
  const blogs = getAllBlogs()

  return (
    <main className="min-h-screen bg-white text-black">
      {/* White header variant */}
      <header className="container mx-auto px-4 py-8 flex justify-between items-center bg-white text-blue-950 border-b border-gray-200">
        <Navbar variant="white" />
      </header>
      
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-medium mb-4 text-blue-950">Blog</h1>
        <p className="text-xl text-blue-950 mb-16 max-w-2xl">
          My thoughts on design, technology, and the creative process. Sharing insights from my journey as a Product Designer.
        </p>
        
        <div className="space-y-16">
            {blogs.map((blog) => (
              <article key={blog.id} className="group">
                <Link href={`/blog/${blog.slug}`} className="block">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    {/* Blog Image */}
                    <div className="relative overflow-hidden rounded-4xl aspect-[4/2] bg-gray-100">
                      <Image
                        src={blog.coverImage}
                        alt={blog.title}
                        width={600}
                        height={450}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `/placeholder.svg?height=450&width=600&text=${blog.title.replace(/\s+/g, "+")}`;
                        }}
                      />
                    </div>
                    
                    {/* Blog Content */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mt-8">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                          {blog.category}
                        </span>
                        <span>{blog.readTime}</span>
                        <span>{new Date(blog.publishedAt).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</span>
                      </div>
                      
                      <h2 className="text-2xl md:text-3xl font-medium text-blue-950 transition-colors hover-glitch">
                        {blog.title}
                      </h2>
                      
                      <p className="text-gray-700 leading-relaxed">
                        {blog.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 pt-2">
                        {blog.tags.map((tag) => (
                          <span 
                            key={tag} 
                            className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="pt-4">
                        <span className="text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                          Read more →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
        </div>
      </div>
    </main>
  )
} 