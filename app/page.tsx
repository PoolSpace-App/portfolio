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

// Background Cells Component
interface BackgroundCellsProps {
  children?: React.ReactNode
  className?: string
}

const BackgroundCells = ({ children, className }: BackgroundCellsProps) => {
  return (
    <div className={cn("relative h-screen w-screen flex justify-center overflow-hidden", className)}>
      <BackgroundCellCore />
      {children && <div className="relative z-50 pointer-events-none select-none w-full">{children}</div>}
    </div>
  )
}

const BackgroundCellCore = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect()
    if (rect) {
      setMousePosition({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      })
    }
  }

  const size = 300
  return (
    <div ref={ref} onMouseMove={handleMouseMove} className="h-full w-full absolute inset-0">
      <div className="absolute h-[20rem] w-full inset-0 overflow-hidden">
        <div className="absolute h-full w-full pointer-events-none -bottom-2 z-40 bg-[#050510] [mask-image:linear-gradient(to_bottom,transparent,black)]" />
        <div
          className="absolute inset-0 z-20 bg-transparent w-full"
          style={{
            maskImage: `radial-gradient(${size / 4}px circle at center, white, transparent)`,
            WebkitMaskImage: `radial-gradient(${size / 4}px circle at center, white, transparent)`,
            WebkitMaskPosition: `${mousePosition.x - size / 2}px ${mousePosition.y - size / 2}px`,
            WebkitMaskSize: `${size}px`,
            maskSize: `${size}px`,
            pointerEvents: "none",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
          }}
        >
          <Pattern cellClassName="border-blue-600 relative z-[100]" />
        </div>
        <Pattern className="opacity-[0.5]" cellClassName="border-neutral-700" />
      </div>
    </div>
  )
}

interface PatternProps {
  className?: string
  cellClassName?: string
}

const Pattern = ({ className, cellClassName }: PatternProps) => {
  const [dimensions, setDimensions] = useState({ cols: 47, rows: 30 })
  
  useEffect(() => {
    const updateDimensions = () => {
      const cellSize = 48 // 48px per cell (h-12 w-12)
      const cols = Math.ceil(window.innerWidth / cellSize) + 2 // +2 for overflow
      const rows = Math.ceil(window.innerHeight / cellSize) + 2 // +2 for overflow
      setDimensions({ cols, rows })
    }
    
    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])
  
  const x = new Array(dimensions.cols).fill(0)
  const y = new Array(dimensions.rows).fill(0)
  const matrix = x.map((_, i) => y.map((_, j) => [i, j]))
  const [clickedCell, setClickedCell] = useState<[number, number] | null>(null)
  const controls = useAnimation()

  const handleCellClick = useCallback((rowIdx: number, colIdx: number) => {
    setClickedCell([rowIdx, colIdx])
  }, [])

  useEffect(() => {
    if (clickedCell) {
      const [rowIdx, colIdx] = clickedCell
      matrix.forEach((row, i) => {
        row.forEach((_, j) => {
          const distance = Math.sqrt(Math.pow(rowIdx - i, 2) + Math.pow(colIdx - j, 2))
          controls.start({
            opacity: [0, 1 - distance * 0.1, 0],
            transition: { duration: distance * 0.2 },
          })
        })
      })
    }
  }, [clickedCell, controls, matrix])

  return (
    <div className={cn("flex flex-row relative z-30", className)}>
      {matrix.map((row, rowIdx) => (
        <div key={`matrix-row-${rowIdx}`} className="flex flex-col relative z-20 border-b">
          {row.map((column, colIdx) => {
            return (
              <div
                key={`matrix-col-${colIdx}`}
                className={cn("bg-transparent border-l border-b border-neutral-600", cellClassName)}
                onClick={() => handleCellClick(rowIdx, colIdx)}
              >
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  whileHover={{
                    opacity: [0, 1, 0.5],
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "backOut",
                  }}
                  animate={controls}
                  className="bg-[rgba(14,165,233,0.3)] h-12 w-12"
                />
              </div>
            )
          })}
        </div>
      ))}
    </div>
  )
}

function GlitchingTitle() {
  const [isFirstTitle, setIsFirstTitle] = useState(true)
  const [displayText, setDisplayText] = useState<string[]>([])
  const [isTyping, setIsTyping] = useState(true)
  const [isDeleting, setIsDeleting] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

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
        setIsComplete(true) // Set complete when typing is finished
        timeout = setTimeout(() => {
          setIsComplete(false) // Turn off glitch when starting to delete
          setIsDeleting(true)
          setCurrentIndex(currentTitle.length - 1)
        }, 3000) // Increased pause before deleting to give more time for the glitch effect
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
            className={`${isComplete ? "glitch-text" : ""} relative font-titling text-gray-300 inline-block ${
              isCurrentWord && !isDeleting ? "after:content-['|'] after:ml-1 after:animate-blink" : ""
            }`}
            data-text={displayWord}
          >
            {displayWord}
          </span>
        )
      })}
    </>
  )
}

type FilterCategory = "Mobile Applications" | "Desktop Applications" | "Branding"

// Helper function to ensure all image paths have leading slashes
const normalizeImagePath = (path: string): string => {
  if (!path) return "/placeholder.svg";
  return path.startsWith("/") ? path : `/${path}`;
};

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("Mobile Applications")
  const [showFilter, setShowFilter] = useState(false)
  const projectsRef = useRef<HTMLDivElement>(null)

  // Use projects data from the shared lib/projects.ts file
  const projects = projectsArray;

  // Filter projects based on active category
  const filteredProjects = projects.filter((project) => project.category === activeFilter)

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
          <div className="flex items-center justify-center flex-grow">
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

      {/* Projects section - 2 COLUMN GRID LAYOUT */}
      <div ref={projectsRef} className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full">
          {filteredProjects.map((project, index) => {
            // Create URL-friendly slug from project name
            const slug = project.name.toLowerCase().replace(/\s+/g, "-")
            
            return (
              <CardContainer key={project.id} className="inter-var">
                <CardBody className="bg-transparent relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] w-full h-[600px] rounded-[48px] overflow-hidden">
                  <Link
                    href={`/${slug}`}
                    className="group block relative overflow-hidden rounded-[48px] h-full w-full"
                  >
                    {/* Image */}
                    <CardItem translateZ="50" className="w-full h-full">
                      <Image
                        src={normalizeImagePath(project.imageUrl)}
                        alt={project.name}
                        width={800}
                        height={600}
                        priority={index < 6} // Prioritize loading the first 6 images
                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 rounded-[48px]"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `/placeholder.svg?height=600&width=800&text=${project.name.replace(/\s+/g, "+")}`;
                        }}
                      />
                    </CardItem>

                    {/* Overlay content - visible on mobile by default, hover on desktop */}
                    <CardItem translateZ="80" className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent md:opacity-0 opacity-100 md:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 rounded-[48px]">
                      <div className="transform md:translate-y-8 md:group-hover:translate-y-0 transition-transform duration-300">
                        <CardItem translateZ="20" className="mb-3">
                          <span className="text-xs text-white uppercase tracking-wider inline-block hover-glitch">
                            {project.category}
                          </span>
                        </CardItem>
                        <CardItem translateZ="40" className="mb-3">
                          <div className="text-2xl font-medium text-white hover-glitch">
                            {project.name}
                          </div>
                        </CardItem>
                        <CardItem translateZ="30" className="mb-4">
                          <p className="text-white line-clamp-3 hover-glitch">
                            {project.tagline}
                          </p>
                        </CardItem>
                        <CardItem translateZ="30" className="mb-4">
                          <p className="text-white text-sm line-clamp-2 hover-glitch">
                            {project.description}
                          </p>
                        </CardItem>
                        <CardItem translateZ="60">
                          <span className="inline-flex items-center text-white border-b border-white pb-1 md:group-hover:pl-2 transition-all duration-300 hover-glitch">
                            View Project <span className="ml-2 md:group-hover:ml-3 transition-all duration-300">→</span>
                          </span>
                        </CardItem>
                      </div>
                    </CardItem>
                  </Link>
                </CardBody>
              </CardContainer>
            )
          })}
        </div>
      </div>

      {/* Full-width white background section with mission statement */}
      <div className="w-full bg-white text-black py-24 my-24">
        <div className="container mx-auto px-4">
          <div className="text-6xl md:text-8xl lg:text-8xl max-w-5xl mx-auto text-center leading-tight">
            Creating interfaces. Guided by insights. Designed with intention. Made for humans. Generated by AI. Creating real value.
          </div>
        </div>
      </div>
    </main>
  )
}
