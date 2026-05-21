"use client"

import React, { useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const stats = [
  {
    title: "9+ Years",
    subtitle: "Building products from zero to scale",
    description:
      "Helping founders turn ideas into real products — from first MVP to growth-stage platforms.",
  },
  {
    title: "20+",
    subtitle: "Products shipped",
    description:
      "Hands-on across discovery, UX, product strategy, and delivery — not just concepts.",
  },
  {
    title: "Millions",
    subtitle: "Users reached",
    description:
      "Across consumer apps, fintech platforms, and internal tools used at scale.",
  },
]

interface BentoStatsProps {
  onViewCaseStudyClick?: (e: React.MouseEvent) => void
}

export default function BentoStats({ onViewCaseStudyClick }: BentoStatsProps) {
  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".stat-item-gsap")
      items.forEach((item: Element, i: number) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            delay: i * 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          },
        )
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="w-full py-20 md:py-28 bg-[#050510]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 lg:items-center">
          {/* Left: hero-scale stats */}
          <div className="flex flex-col gap-14 md:gap-20">
            {stats.map((stat) => (
              <div key={stat.title} className="stat-item-gsap border-b border-white/10 pb-14 md:pb-20 last:border-0 last:pb-0">
                <div className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-normal tracking-tighter text-white leading-[0.95]">
                  {stat.title}
                </div>
                <div className="mt-4 text-xl md:text-2xl text-white font-normal leading-snug">
                  {stat.subtitle}
                </div>
                <p className="mt-4 text-base md:text-lg text-gray-400 font-light leading-relaxed max-w-md">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right: narrative + CTAs */}
          <div className="stat-item-gsap">
            <div className="relative p-8 md:p-12 rounded-[56px] bg-white/5 backdrop-blur-md border border-white/10 flex flex-col justify-between min-h-full">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-white tracking-tight leading-[1.15] mb-6">
                  From idea to shipped product
                </h2>
                <p className="text-lg md:text-xl text-white font-normal leading-relaxed mb-6">
                  I help founders turn messy ideas into clear, usable products — fast, lean, and ready for real users.
                </p>
                <p className="text-base md:text-lg text-gray-400 font-light leading-relaxed mb-10">
                  Combining long-term product vision with measurable business outcomes.
                </p>

                <div className="w-full h-px bg-white/10 mb-10" />

                <h3 className="text-2xl md:text-3xl font-normal text-white tracking-tight mb-3">
                  Results matter. Momentum matters more.
                </h3>
                <p className="text-base md:text-lg text-gray-400 font-light leading-relaxed">
                  I take ownership, make decisions, and help teams move forward with confidence.
                </p>
              </div>

              <div className="mt-10 md:mt-12 flex flex-col sm:flex-row flex-wrap gap-4">
                <Link href="#projects" onClick={onViewCaseStudyClick}>
                  <button
                    type="button"
                    className="flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 group"
                  >
                    View case studies
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </button>
                </Link>
                <Link href="/info">
                  <button
                    type="button"
                    className="flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 group"
                  >
                    About me
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
