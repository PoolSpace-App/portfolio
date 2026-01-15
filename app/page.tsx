"use client"

import type React from "react"

import { useState, useEffect, useRef, useCallback } from "react"
import Navbar from "@/components/navbar"
import Logo from "@/components/logo"
import ProjectFilter from "@/components/project-filter"
import Image from "next/image"
import Link from "next/link"
import { motion, useAnimation } from "framer-motion"
import { cn } from "@/lib/utils"
import { projectsArray } from "@/lib/projects"
import SparklesPreview from "@/components/sparkles-demo"
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"
import BentoStats from "@/components/bento-stats"
import Testimonials from "@/components/testimonials"
import ImageMarquee from "@/components/image-marquee"
import MyValues from "@/components/my-values"
import { getAllBlogsFromNotion, type BlogPost } from "@/lib/notion"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { IconCalendar, IconClock, IconArrowRight } from "@tabler/icons-react"

// Background Cells Component
interface BackgroundCellsProps {
  children?: React.ReactNode
  className?: string
}

const BackgroundCells = ({ children, className }: BackgroundCellsProps) => {
  return (
    <div className={cn("relative h-screen w-screen flex justify-center overflow-hidden", className)}>
      {children && <div className="relative z-50 pointer-events-none select-none w-full">{children}</div>}
    </div>
  )
}

function GlitchingTitle() {
  const [isFirstTitle, setIsFirstTitle] = useState(true)
  const [displayText, setDisplayText] = useState<string[]>([])
  const [isTyping, setIsTyping] = useState(true)
  const [isDeleting, setIsDeleting] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const firstTitle = ["Product", "", "Designer"]
  const secondTitle = ["AI", "UX", "", "Engineer"]

  const currentTitle = isFirstTitle ? firstTitle : secondTitle

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (isTyping && !isDeleting) {
      // Typing effect
      if (currentIndex < currentTitle.length) {
        const word = currentTitle[currentIndex]
        const currentLength = displayText[currentIndex]?.length || 0

        if (currentLength < word.length) {
          timeout = setTimeout(() => {
            setDisplayText((prev) => {
              const newText = [...prev]
              newText[currentIndex] = word.substring(0, currentLength + 1)
              return newText
            })
          }, 100) // Typing speed
        } else {
          // Move to next word
          timeout = setTimeout(() => {
            setCurrentIndex((prev) => prev + 1)
          }, 200)
        }
      } else {
        // All words typed
        timeout = setTimeout(() => {
          setIsDeleting(true)
          setCurrentIndex(currentTitle.length - 1)
        }, 3000)
      }
    } else if (isDeleting) {
      // Deleting effect
      if (currentIndex >= 0) {
        const currentLength = displayText[currentIndex]?.length || 0

        if (currentLength > 0) {
          timeout = setTimeout(() => {
            setDisplayText((prev) => {
              const newText = [...prev]
              newText[currentIndex] = newText[currentIndex].substring(0, currentLength - 1)
              return newText
            })
          }, 50) // Deleting speed (faster than typing)
        } else {
          // Move to previous word
          timeout = setTimeout(() => {
            setCurrentIndex((prev) => prev - 1)
          }, 100)
        }
      } else {
        // All words deleted
        timeout = setTimeout(() => {
          setIsFirstTitle((prev) => !prev)
          setIsDeleting(false)
          setCurrentIndex(0)
          setDisplayText([])
        }, 500)
      }
    }

    return () => clearTimeout(timeout)
  }, [currentTitle, currentIndex, displayText, isDeleting, isTyping, isFirstTitle])

  return (
    <>
      {currentTitle.map((word, index) => {
        const displayWord = displayText[index] || ""
        const isCurrentWord = index === currentIndex

        return (
          <span
            key={index}
            className={`relative font-titling text-gray-300 inline-block ${
              isCurrentWord && !isDeleting ? "after:content-['|'] after:ml-1 after:animate-blink" : ""
            }`}
          >
            {displayWord}
          </span>
        )
      })}
    </>
  )
}

type FilterCategory = "Enterprise & Product Design" | "Independent & Client Projects"

// Helper function to ensure all image paths have leading slashes
const normalizeImagePath = (path: string): string => {
  if (!path) return "/placeholder.svg";
  return path.startsWith("/") ? path : `/${path}`;
};

const logos = [
  { name: "WhereIsMyTransport", src: "/logos/whereismytransport.svg" },
  { name: "Old Mutual", src: "/logos/old-mutual.svg" },
  { name: "nCino", src: "/logos/ncino.svg" },
  { name: "Suppple", src: "/logos/suppple.svg" },
  { name: "MTN", src: "/logos/mtn.svg" },
  { name: "Gravity Payments", src: "/logos/gravity-payments.svg" },
  { name: "DocFox", src: "/logos/docfox.svg" },
  { name: "Capitec Bank", src: "/logos/capitec-bank.svg" },
  { name: "CardSpace", src: "/logos/cardspace.svg" },
  { name: "Visio", src: "/logos/visio.svg" },
  { name: "HSRC", src: "/logos/hsrc.svg" },
  { name: "Mortgage Market", src: "/logos/mortgage-market.svg" },
  { name: "Standard Bank", src: "/logos/standard-bank.svg" },
  { name: "FCM", src: "/logos/fcm.svg" },
];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("Enterprise & Product Design")
  const [showFilter, setShowFilter] = useState(false)
  const [latestBlogs, setLatestBlogs] = useState<BlogPost[]>([])
  const projectsRef = useRef<HTMLDivElement>(null)

  // Fetch latest blogs
  useEffect(() => {
    fetch('/api/blogs/latest')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setLatestBlogs(data)
        }
      })
      .catch(err => console.error("Error fetching blogs:", err))
  }, [])

  // Use projects data from the shared lib/projects.ts file
  const projects = projectsArray;

  // Split projects by type
  const enterpriseProjects = projects.filter(p => p.type === 'permanent');
  const independentProjects = projects.filter(p => p.type === 'freelance');

  // Filter projects based on active tab
  const displayedProjects = activeFilter === "Enterprise & Product Design" 
    ? enterpriseProjects 
    : independentProjects;

  // Handle scroll to show filter
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      if (scrollPosition > 300) {
        setShowFilter(true)
      } else {
        setShowFilter(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle filter change
  const handleFilterChange = (category: FilterCategory) => {
    setActiveFilter(category)
    // Scroll to projects section if not already there
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <main className="min-h-screen flex flex-col bg-[#050510]">
      <header className="container mx-auto px-4 py-8 flex justify-between items-center">
        <Navbar />
      </header>

      {/* Hero section with background effect */}
      <BackgroundCells className="bg-[#050510] w-screen mx-auto">
        <div className="flex-1 flex flex-col justify-between min-h-[calc(100vh-90px)] container mx-auto">
          {/* Main content area */}
          <div className="flex flex-col items-center justify-center flex-grow">
            <div className="flex flex-col items-center text-center max-w-3xl px-4 pointer-events-auto">
              {/* Fixed height container for the glitching title */}
              <div className="text-4xl sm:mb-0 md:text-9xl font-light tracking-tight flex gap-3 md:mb-12 md:h-40">
                <GlitchingTitle />
              </div>

              {/* Sparkles effect underneath the title */}
              <div className="w-full max-w-5xl mx-auto mb-8 sm:mb-0 md:mb-12">
                <SparklesPreview />
              </div>

              {/* Static text container */}
              <div className="z-10 -mt-24 static md:w-[800px] px-4 min-h-[200px] sm:min-h-[160px]">
                <div className="text-2xl md:text-5xl font-light text-gray-300 mb-6">
                  Designing and building lean, scalable products for startups.
                </div>
                <div className="sm:text-lg md:text-xl text-gray-400 leading-relaxed">
                  <div className="sm:text-lg md:text-3xl">Helping teams and founders:</div>
                  <div className="sm:text-lg md:text-lg">→ Design great user experiences</div>
                  <div className="sm:text-lg md:text-lg">→ Build functional products using AI, Cursor, React Native, Next.js </div>
                  <div className="sm:text-lg md:text-lg">→ Save costs and ship faster (without needing huge dev teams)</div>
                </div>
              </div>
            </div>

            {/* Logo section */}
            <div className="mt-16 w-full max-w-7xl grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3 px-4 pointer-events-auto mx-auto pb-12">
              {logos.map((logo, i) => (
                <div key={i} className="aspect-[18/10] bg-[#11111a] border border-white/5 rounded-xl flex items-center justify-center p-6 grayscale opacity-50 hover:opacity-100 hover:bg-[#1a1a2e] transition-all duration-500 group cursor-default shadow-2xl shadow-black/50">
                  <div className="w-full h-full flex items-center justify-center relative">
                    <Image
                      src={logo.src}
                      alt={`${logo.name} logo`}
                      width={120}
                      height={40}
                      className="object-contain max-h-full transition-all duration-500"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `/placeholder.svg?height=40&width=120&text=${logo.name.replace(/\s+/g, "+")}`;
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Media Links - Full width at bottom of landing screen */}
          <div className="w-full py-8 mt-8 pointer-events-auto">
            <div className="w-full border-t border-gray-800 pt-8">
              <div className="container mx-auto flex justify-center space-x-16 md:space-x-24">
                <a
                  href="https://dribbble.com/mrnqoe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative pb-1 uppercase tracking-wider text-xs md:text-xs hover:opacity-80 transition-opacity after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-white hover-glitch"
                >
                  Dribbble
                </a>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    navigator.clipboard.writeText("nqovun@gmail.com").then(() => {
                      // Create and show toast notification
                      const toast = document.createElement("div");
                      toast.className = "fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-black px-4 py-2 rounded-md shadow-lg z-50 text-sm";
                      toast.innerText = "Email copied to clipboard!";
                      document.body.appendChild(toast);
                      
                      // Remove toast after 3 seconds
                      setTimeout(() => {
                        toast.classList.add("opacity-0", "transition-opacity", "duration-300");
                        setTimeout(() => {
                          document.body.removeChild(toast);
                        }, 300);
                      }, 3000);
                    });
                  }}
                  className="relative pb-1 uppercase tracking-wider text-xs md:text-xs hover:opacity-80 transition-opacity after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-white hover-glitch cursor-pointer"
                >
                  Let's Chat
                </a>
                <a
                  href="https://www.linkedin.com/in/mrq/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative pb-1 uppercase tracking-wider text-xs md:text-xs hover:opacity-80 transition-opacity after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-white hover-glitch"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </BackgroundCells>

      <BentoStats />

      <MyValues />

      {/* Filter section that appears on scroll */}
      <div
        className={`sticky h-24 px-4 sm:h-20 sm:px-32 top-0 z-20 bg-[#050510]/40 backdrop-blur-2xl transition-all duration-500 ${
          showFilter ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="container mx-auto">
          <ProjectFilter onFilterChange={handleFilterChange} activeFilter={activeFilter} />
        </div>
      </div>

      {/* Projects section */}
      <div ref={projectsRef} className="container mx-auto px-4 py-16">
        <div className="mb-24">
          <h2 className="text-3xl md:text-5xl font-light text-gray-300 mb-12 border-b border-gray-800 pb-4">
            {activeFilter}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full">
            {displayedProjects.map((project, index) => {
              const slug = project.name.toLowerCase().replace(/\s+/g, "-")
              return (
                <CardContainer key={project.id} className="inter-var w-full" containerClassName="py-4 w-full">
                  <CardBody className="bg-[#0a0a15]/50 border border-white/5 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] w-full rounded-[48px] p-4">
                    <Link
                      href={`/${slug}`}
                      className="group block relative overflow-hidden rounded-[40px] aspect-[4/5] w-full mb-6"
                    >
                      <CardItem translateZ="25" className="w-full h-full">
                        <Image
                          src={normalizeImagePath(project.imageUrl)}
                          alt={project.name}
                          width={800}
                          height={1000}
                          priority={index < 2}
                          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = `/placeholder.svg?height=1000&width=800&text=${project.name.replace(/\s+/g, "+")}`;
                          }}
                        />
                      </CardItem>
                    </Link>

                    <div className="px-4 pb-4">
                      <CardItem translateZ="10" className="mb-3">
                        <span className="text-xs text-gray-400 uppercase tracking-wider inline-block">
                          {project.category}
                        </span>
                      </CardItem>
                      <CardItem translateZ="20" className="mb-3">
                        <div className="text-3xl font-medium text-white">
                          {project.name}
                        </div>
                      </CardItem>
                      <CardItem translateZ="15" className="mb-4">
                        <p className="text-gray-300 text-lg line-clamp-2">
                          {project.tagline}
                        </p>
                      </CardItem>
                      <CardItem translateZ="15" className="mb-8">
                        <p className="text-gray-400 text-sm line-clamp-2">
                          {project.description}
                        </p>
                      </CardItem>
                      <CardItem translateZ="30">
                        <Link
                          href={`/${slug}`}
                          className="inline-flex items-center px-10 py-4 bg-white text-black rounded-full text-sm font-bold hover:bg-neutral-200 transition-all duration-300 shadow-2xl shadow-white/10"
                        >
                          View Case Study
                        </Link>
                      </CardItem>
                    </div>
                  </CardBody>
                </CardContainer>
              )
            })}
          </div>
        </div>
      </div>

      {/* Full-width white background section with mission statement and testimonials */}
      <div className="w-full bg-white text-black py-24 mt-24">
        <div className="container mx-auto px-4 mb-32">
          <div className="text-6xl md:text-8xl lg:text-8xl max-w-5xl mx-auto text-center leading-tight">
            Creating interfaces. Guided by insights. Designed with intention. Made for humans. Generated by AI. Creating real value.
          </div>
        </div>
        <Testimonials />

        {/* Latest Blogs Section */}
        {latestBlogs.length > 0 && (
          <div className="container mx-auto px-4 mt-40">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
              <div>
                <h2 className="text-4xl md:text-6xl font-medium text-blue-950 mb-4">Latest Stories</h2>
                <p className="text-xl text-gray-600 max-w-xl">
                  Insights on design, AI, and the future of product development.
                </p>
              </div>
              <Link 
                href="/blog" 
                className="group flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors pb-1 border-b-2 border-transparent hover:border-blue-600"
              >
                View all blogs
                <IconArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            
            <BentoGrid className="w-full">
              {latestBlogs.map((blog) => (
                <Link 
                  key={blog.id} 
                  href={`/blog/${blog.slug}`} 
                  className="block h-full md:col-span-3"
                >
                  <BentoGridItem
                    className="group cursor-pointer rounded-[40px] border-neutral-100 bg-neutral-50/50"
                    header={
                      <div className="relative overflow-hidden rounded-[32px] bg-gray-100 mb-6 w-full h-[300px]">
                        <Image
                          src={blog.coverImage}
                          alt={blog.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-xs font-semibold">
                            {blog.category}
                          </span>
                        </div>
                      </div>
                    }
                    title={
                      <h3 className="font-bold text-blue-950 group-hover:text-blue-700 transition-colors line-clamp-2 text-2xl md:text-3xl mb-2">
                        {blog.title}
                      </h3>
                    }
                    description={
                      <div className="space-y-4">
                        <p className="text-gray-700 leading-relaxed line-clamp-2 text-lg">
                          {blog.excerpt}
                        </p>
                        
                        <div className="flex items-center gap-6 text-sm text-gray-500 pt-2">
                          <div className="flex items-center gap-2">
                            <IconClock className="h-4 w-4" />
                            <span>{blog.readTime}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <IconCalendar className="h-4 w-4" />
                            <span>{new Date(blog.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                          </div>
                        </div>
                      </div>
                    }
                  />
                </Link>
              ))}
            </BentoGrid>
          </div>
        )}
      </div>

      <ImageMarquee />
    </main>
  )
}
