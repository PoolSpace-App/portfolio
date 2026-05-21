"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Layers, Profile, Rocket } from "@/components/icons"
import { cn } from "@/lib/utils"

interface LargeBentoCardProps {
  title: string
  description: string
  children: React.ReactNode
  className?: string
  buttonText?: string
  buttonHref?: string
  onButtonClick?: (e: React.MouseEvent) => void
}

const LargeBentoCard = ({
  title,
  description,
  children,
  className,
  buttonText,
  buttonHref,
  onButtonClick,
}: LargeBentoCardProps) => (
  <div
    className={cn(
      "flex h-full flex-col overflow-hidden rounded-[40px] bg-neutral-100",
      className
    )}
  >
    <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden">
      {children}
    </div>
    <div className="p-6 md:p-8">
      <h3
        data-hero-animate="scroll"
        className="mb-2 text-xl font-semibold tracking-tight text-blue-950 md:text-2xl"
      >
        {title}
      </h3>
      <p
        data-hero-animate="scroll"
        className="mb-4 text-sm leading-relaxed text-slate-600 md:text-base"
      >
        {description}
      </p>
      {buttonText && buttonHref && (
        <Link href={buttonHref} onClick={onButtonClick}>
          <button data-hero-animate="scroll" className="btn-secondary group text-sm">
            {buttonText}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </Link>
      )}
    </div>
  </div>
)

interface SmallBentoCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

const SmallBentoCard = ({ icon, title, description }: SmallBentoCardProps) => (
  <div className="flex h-full flex-col rounded-[40px] bg-neutral-100 p-6 md:p-8">
    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-blue-950">
      {icon}
    </div>
    <h3
      data-hero-animate="scroll"
      className="mb-3 text-lg font-semibold tracking-tight text-blue-950"
    >
      {title}
    </h3>
    <p data-hero-animate="scroll" className="text-sm leading-relaxed text-slate-600 md:text-base">
      {description}
    </p>
  </div>
)

interface BentoStatsProps {
  onViewCaseStudyClick?: (e: React.MouseEvent) => void
}

export default function BentoStats({ onViewCaseStudyClick }: BentoStatsProps) {
  return (
    <section className="relative w-full overflow-hidden pb-24 pt-0">
      <div className="relative z-10">
      <div className="container mx-auto px-4 pt-10">
        <div className="mb-12 max-w-2xl">
          <h2
            data-hero-animate="scroll"
            className="text-3xl font-semibold leading-tight tracking-tight text-blue-950 md:text-4xl lg:text-5xl"
          >
            Everything needed to turn ideas into shipped products.
          </h2>
          <p
            data-hero-animate="scroll"
            className="mt-6 text-base leading-relaxed text-slate-600 lg:text-lg"
          >
            I partner with founders and teams to design thoughtful user experiences, build
            scalable digital products, and move faster with lean, AI-assisted workflows — from
            early concepts to production-ready platforms used by real people.
          </p>
        </div>

        <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <LargeBentoCard
            title="From strategy to shipped product"
            description="Blending UX, product thinking, and modern AI tooling to help teams move from messy ideas to clean, scalable product experiences — without the unnecessary process."
            buttonText="View case studies"
            buttonHref="#projects"
            onButtonClick={onViewCaseStudyClick}
          >
            <Image
              src="/marquee/02.jpg"
              alt="Product design case study preview"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </LargeBentoCard>

          <LargeBentoCard
            title="Discovery to delivery."
            description="Turning product vision into scalable digital experiences — combining UX, strategy, and execution to build products used by real teams and real users."
            buttonText="About me"
            buttonHref="/info"
          >
            <Image
              src="/marquee/06.jpg"
              alt="Discovery to delivery case study preview"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </LargeBentoCard>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <SmallBentoCard
            icon={<Rocket className="h-5 w-5" />}
            title="10+ years designing products that scale"
            description="Hands-on across discovery, UX, product strategy, prototyping, and delivery — helping startups and modern teams build products people actually use."
          />
          <SmallBentoCard
            icon={<Layers className="h-5 w-5" />}
            title="20+ products shipped"
            description="Hands-on across discovery, UX, product strategy, and delivery — turning ideas into production-ready products used by real people."
          />
          <SmallBentoCard
            icon={<Profile className="h-5 w-5" />}
            title="Millions of users reached"
            description="Designing products across fintech, SaaS, and consumer platforms — from startup MVPs to tools used at scale by real teams and customers."
          />
        </div>
      </div>
      </div>
    </section>
  )
}
