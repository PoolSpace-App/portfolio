"use client"

import React, { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface StatCardProps {
  title: string
  subtitle: string
  description: string
  className?: string
  titleClassName?: string
  isYellow?: boolean
  buttonText?: string
  buttonHref?: string
  onButtonClick?: (e: React.MouseEvent) => void
}

const StatCard = ({
  title,
  subtitle,
  description,
  className,
  titleClassName,
  isYellow = false,
  buttonText,
  buttonHref,
  onButtonClick,
}: StatCardProps) => {
  return (
    <div
      className={cn(
        "stat-card-gsap relative p-8 md:p-10 rounded-[56px] flex flex-col justify-between h-full transition-all duration-300",
        isYellow 
          ? "bg-[#11111a] text-white border border-white/10" 
          : "bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20",
        className
      )}
    >
      <div>
        <div className={cn(
          "text-3xl md:text-[48px] font-normal mb-2 tracking-tighter leading-[1.2]",
          "text-white",
          titleClassName
        )}>
          {title}
        </div>
        <div className={cn(
          "text-xl md:text-xl font-normal mb-4 leading-tight",
          "text-white"
        )}>
          {subtitle}
        </div>
        <div className={cn(
          "w-16 h-[2px] mb-8",
          "bg-white/20"
        )} />
        <div className={cn(
          "text-lg leading-relaxed mb-8 font-light",
          isYellow ? "text-white" : "text-gray-400"
        )}>
          {description}
        </div>
      </div>
      
      {buttonText && (
        <div className="mt-auto">
          {buttonHref ? (
            <Link href={buttonHref} onClick={onButtonClick}>
              <button
                className={cn(
                  "flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold transition-all duration-300 group",
                  isYellow 
                    ? "border border-white/20 hover:bg-white hover:text-black text-white" 
                    : "border border-white/20 hover:bg-white hover:text-black"
                )}
              >
                {buttonText}
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </Link>
          ) : (
            <button
              onClick={onButtonClick}
              className={cn(
                "flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold transition-all duration-300 group",
                isYellow 
                  ? "border border-white/20 hover:bg-white hover:text-black text-white" 
                  : "border border-white/20 hover:bg-white hover:text-black"
              )}
            >
              {buttonText}
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          )}
        </div>
      )}
    </div>
  )
}

interface BentoStatsProps {
  onViewCaseStudyClick?: (e: React.MouseEvent) => void
}

export default function BentoStats({ onViewCaseStudyClick }: BentoStatsProps) {
  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".stat-card-gsap")
      cards.forEach((card: any, i: number) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 30,
            scale: 0.99,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: i * 0.05,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        )
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="w-full py-20 bg-[#050510]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <StatCard
            title="9+ Years"
            subtitle="Building products from zero to scale"
            description="Helping founders turn ideas into real products — from first MVP to growth-stage platforms."
          />
          <StatCard
            title="20+"
            subtitle="Products shipped"
            description="Hands-on across discovery, UX, product strategy, and delivery — not just concepts."
          />
          <StatCard
            title="Millions"
            subtitle="Users reached"
            description="Across consumer apps, fintech platforms, and internal tools used at scale."
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 text-white">
            <StatCard
              title="From idea to shipped product"
              subtitle="I help founders turn messy ideas into clear, usable products — fast, lean, and ready for real users."
              description="Combining long-term product vision with measurable business outcomes."
              buttonText="View case studies"
              buttonHref="#projects"
              onButtonClick={onViewCaseStudyClick}
            />
          </div>
          <div className="md:col-span-1">
            <StatCard
              title="Results matter."
              subtitle="Momentum matters more."
              description="I take ownership, make decisions, and help teams move forward with confidence."
              isYellow={true}
              buttonText="About me"
              buttonHref="/info"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
