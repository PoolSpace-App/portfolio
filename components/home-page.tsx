"use client"

import type React from "react"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import Link from "next/link"
import Testimonials from "@/components/testimonials"
import ImageMarquee from "@/components/image-marquee"
import HeroSection from "@/components/hero-section"
import GridLinesBackground from "@/components/grid-lines-background"
import BlogCoverImage from "@/components/blog-cover-image"
import { type BlogPost } from "@/lib/notion"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { IconCalendar, IconClock, IconArrowRight } from "@/components/icons"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const textRevealFrom = {
  opacity: 0,
  y: 40,
  filter: "blur(8px)",
}

const textRevealTo = {
  opacity: 1,
  y: 0,
  filter: "blur(0px)",
  duration: 1.2,
  ease: "expo.out",
}

interface HomePageProps {
  latestBlogs: BlogPost[]
}

export default function HomePage({ latestBlogs }: HomePageProps) {
  const contentSectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.location.hash) return

    window.history.scrollRestoration = "manual"
    window.scrollTo(0, 0)

    return () => {
      window.history.scrollRestoration = "auto"
    }
  }, [])

  useGSAP(
    () => {
      const scrollTexts = gsap.utils.toArray<HTMLElement>(
        "[data-home-animate='scroll']",
        contentSectionRef.current
      )

      scrollTexts.forEach((el) => {
        gsap.fromTo(el, textRevealFrom, {
          ...textRevealTo,
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        })
      })
    },
    { scope: contentSectionRef, dependencies: [latestBlogs.length] }
  )

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <HeroSection onViewPortfolio={scrollToProjects} />

      <div ref={contentSectionRef} className="relative w-full overflow-hidden bg-white pb-24">
        <GridLinesBackground fade="both" />
        <div className="relative z-10">
          <div className="container mx-auto mb-32 px-4">
            <div
              data-home-animate="scroll"
              className="mx-auto max-w-5xl text-center text-4xl font-semibold leading-tight tracking-tight text-blue-950 md:text-6xl lg:text-7xl"
            >
              Creating interfaces guided by insight, shaped with intention, built for humans,
              accelerated by AI, and focused on real-world value.
            </div>
          </div>
          <Testimonials />

          {latestBlogs.length > 0 && (
            <div className="container mx-auto mt-40 px-4">
              <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <div>
                  <h2
                    data-home-animate="scroll"
                    className="mb-4 text-4xl font-semibold tracking-tight text-blue-950 md:text-5xl"
                  >
                    Latest stories
                  </h2>
                  <p data-home-animate="scroll" className="max-w-xl text-lg text-slate-600">
                    Insights on design, AI, and the future of product development.
                  </p>
                </div>
                <Link data-home-animate="scroll" href="/blog" className="btn-secondary group">
                  View all blogs
                  <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              <BentoGrid className="w-full gap-6 md:grid-cols-3">
                {latestBlogs.map((blog, index) => (
                  <Link key={blog.id} href={`/blog/${blog.slug}`} className="block h-full">
                    <BentoGridItem
                      variant="carousel"
                      className="group/card cursor-pointer rounded-[48px]"
                      header={
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-[48px] bg-neutral-100">
                          <BlogCoverImage
                            src={blog.coverImage}
                            alt={blog.title}
                            priority={index === 0}
                            className="transition-transform duration-500 group-hover/card:scale-105"
                          />
                        </div>
                      }
                      title={
                        <>
                          <span
                            data-home-animate="scroll"
                            className="mb-3 inline-block text-xs font-medium uppercase tracking-wider text-slate-500"
                          >
                            {blog.category}
                          </span>
                          <div
                            data-home-animate="scroll"
                            className="mb-3 text-2xl font-semibold tracking-tight text-blue-950"
                          >
                            {blog.title}
                          </div>
                        </>
                      }
                      description={
                        <>
                          <p
                            data-home-animate="scroll"
                            className="mb-4 line-clamp-2 text-lg text-slate-700"
                          >
                            {blog.excerpt}
                          </p>
                          <div className="flex items-center gap-6 text-sm text-slate-500">
                            <div data-home-animate="scroll" className="flex items-center gap-2">
                              <IconClock className="h-4 w-4" />
                              <span>{blog.readTime}</span>
                            </div>
                            <div data-home-animate="scroll" className="flex items-center gap-2">
                              <IconCalendar className="h-4 w-4" />
                              <span>
                                {new Date(blog.publishedAt).toLocaleDateString("en-GB", {
                                  day: "numeric",
                                  month: "short",
                                  year: "numeric",
                                })}
                              </span>
                            </div>
                          </div>
                        </>
                      }
                    />
                  </Link>
                ))}
              </BentoGrid>
            </div>
          )}
        </div>
      </div>

      <ImageMarquee />
    </main>
  )
}
