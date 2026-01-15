"use client"

import React from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface StatCardProps {
  title: string
  subtitle: string
  description: string
  className?: string
  isYellow?: boolean
  buttonText?: string
  buttonHref?: string
}

const StatCard = ({
  title,
  subtitle,
  description,
  className,
  isYellow = false,
  buttonText,
  buttonHref,
}: StatCardProps) => {
  return (
    <div
      className={cn(
        "relative p-8 md:p-10 rounded-[40px] flex flex-col justify-between h-full transition-all duration-300",
        isYellow 
          ? "bg-[#FACC15] text-black" 
          : "bg-[#1A1A1A] text-white border border-white/5 hover:border-white/10",
        className
      )}
    >
      <div>
        <div className={cn(
          "text-7xl md:text-8xl font-bold mb-2 tracking-tighter",
          !isYellow && "text-[#FACC15]"
        )}>
          {title}
        </div>
        <div className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
          {subtitle}
        </div>
        <div className={cn(
          "w-16 h-[2px] mb-8",
          isYellow ? "bg-black/20" : "bg-white/20"
        )} />
        <div className={cn(
          "text-xl leading-relaxed mb-8 font-light",
          isYellow ? "text-black/80" : "text-gray-400"
        )}>
          {description}
        </div>
      </div>
      
      {buttonText && (
        <div className="mt-auto">
          <button
            className={cn(
              "flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold transition-all duration-300 group",
              isYellow 
                ? "border border-black/20 hover:bg-black hover:text-white" 
                : "border border-white/20 hover:bg-white hover:text-black"
            )}
          >
            {buttonText}
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      )}
    </div>
  )
}

export default function BentoStats() {
  return (
    <section className="w-full py-20 bg-[#050510]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <StatCard
            title="8+"
            subtitle="Years of leadership"
            description="Across enterprise, startups, and design communities."
          />
          <StatCard
            title="22"
            subtitle="Teams directed"
            description="In a single leadership role with up to 9 direct reports."
          />
          <StatCard
            title="151M"
            subtitle="Users impacted"
            description="From the products I've led and shipped."
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <StatCard
              title="$1.2 Billion"
              subtitle="Valuation achieved from a 4 year vision and strategy"
              description="Combining long-term product vision with measurable business outcomes."
              buttonText="View case study"
            />
          </div>
          <div className="md:col-span-1">
            <StatCard
              title="Results matter."
              subtitle="But so do people."
              description="Learn about my background and leadership approach."
              isYellow={true}
              buttonText="About me"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
