"use client"

import ProfileCard from "@/components/ProfileCard"
import TextType from "@/components/TextType/TextType"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronRight } from "@/components/icons"
import { useMemo, useRef, useState } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { cn } from "@/lib/utils"
import { projectsArray, type Project } from "@/lib/projects"
import BentoStats from "@/components/bento-stats"
import GridLinesBackground from "@/components/grid-lines-background"
import { GlowingEffect } from "@/components/ui/glowing-effect"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const heroHeadlines = [
  "Designing lean and scalable products for startups.",
  "Scaling digital products with AI-assisted workflows.",
  "Helping ambitious teams move faster.",
]

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

type ProjectTab = "Enterprise & Product Design" | "Independent & Client Projects"

const tabs: ProjectTab[] = ["Enterprise & Product Design", "Independent & Client Projects"]

const normalizeImagePath = (path: string): string => {
  if (!path) return "/placeholder.svg"
  return path.startsWith("/") ? path : `/${path}`
}

const logos = [
  { name: "Client 2", src: "/logos/Frame@3x-1.png" },
  { name: "Client 3", src: "/logos/Frame@3x-2.png" },
  { name: "Client 4", src: "/logos/Frame@3x-3.png" },
  { name: "Client 5", src: "/logos/Frame@3x-4.png" },
  { name: "Client 6", src: "/logos/Frame@3x-5.png" },
  { name: "Client 7", src: "/logos/Frame@3x-6.png" },
  { name: "Client 8", src: "/logos/Frame@3x-7.png" },
  { name: "Client 9", src: "/logos/Frame@3x-8.png" },
  { name: "Client 10", src: "/logos/Frame@3x-9.png" },
  { name: "Client 11", src: "/logos/Frame@3x-10.png" },
  { name: "Client 12", src: "/logos/Frame@3x-11.png" },
  { name: "Client 13", src: "/logos/Frame@3x-12.png" },
  { name: "Client 14", src: "/logos/Frame@3x-13.png" },
]

function ProjectCarouselCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/${project.slug}`}
      className="group/card relative flex w-[400px] flex-shrink-0 snap-start flex-col self-stretch overflow-visible rounded-[48px] border border-neutral-200 bg-white shadow-none transition duration-200 hover:shadow-xl md:w-[520px]"
    >
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={1.5}
        className="z-10 rounded-[inherit]"
      />
      <div className="relative z-10 aspect-[4/3] w-full shrink-0 overflow-hidden rounded-t-[48px]">
        <Image
          src={normalizeImagePath(project.imageUrl)}
          alt={project.name}
          fill
          className="object-cover transition-transform duration-500 group-hover/card:scale-105"
          sizes="520px"
        />
      </div>
      <div className="relative z-10 flex min-h-[17.5rem] flex-1 flex-col p-5 md:min-h-[18rem] md:p-6">
        <div className="flex flex-1 flex-col">
          <span className="mb-3 inline-block text-xs font-medium uppercase tracking-wider text-slate-500">
            {project.category}
          </span>
          <div className="mb-3 line-clamp-2 min-h-[4.5rem] text-2xl font-semibold leading-tight tracking-tight text-blue-950">
            {project.name}
          </div>
          <p className="mb-4 line-clamp-2 min-h-[3.5rem] text-lg leading-snug text-slate-700">
            {project.tagline}
          </p>
          <p className="line-clamp-2 min-h-[2.75rem] text-sm leading-snug text-slate-500">
            {project.description}
          </p>
        </div>
        <div className="mt-auto shrink-0 pt-6">
          <span className="btn-secondary group/btn inline-flex shrink-0 items-center">
            View case study
            <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  )
}

interface HeroSectionProps {
  onViewPortfolio: (e: React.MouseEvent) => void
  onCopyEmail: (e: React.MouseEvent) => void
}

export default function HeroSection({ onViewPortfolio, onCopyEmail }: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeTab, setActiveTab] = useState<ProjectTab>("Enterprise & Product Design")

  const filteredProjects = useMemo(
    () =>
      projectsArray.filter((project) =>
        activeTab === "Enterprise & Product Design"
          ? project.type === "permanent"
          : project.type === "freelance"
      ),
    [activeTab]
  )

  useGSAP(
    () => {
      const loadTexts = gsap.utils.toArray<HTMLElement>("[data-hero-animate='load']", sectionRef.current)
      const scrollTexts = gsap.utils.toArray<HTMLElement>("[data-hero-animate='scroll']", sectionRef.current)

      if (loadTexts.length > 0) {
        gsap.fromTo(loadTexts, textRevealFrom, {
          ...textRevealTo,
          stagger: 0.12,
          delay: 0.1,
        })
      }

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
    { scope: sectionRef, dependencies: [filteredProjects, activeTab] }
  )

  const scrollCards = () => {
    scrollRef.current?.scrollBy({ left: 536, behavior: "smooth" })
  }

  const handleTabChange = (tab: ProjectTab) => {
    setActiveTab(tab)
    scrollRef.current?.scrollTo({ left: 0, behavior: "smooth" })
  }

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-white pb-20 pt-28">
      <GridLinesBackground fade="none" />
      <div className="relative z-10">
      <div className="container mx-auto px-4">
        <div className="mb-14 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <TextType
              as="h1"
              data-hero-animate="load"
              className="max-w-xl text-4xl font-semibold leading-[1.1] tracking-tight text-blue-950 md:text-5xl lg:text-[3.25rem]"
              text={heroHeadlines}
              typingSpeed={35}
              initialDelay={350}
              pauseDuration={2500}
              loop
              showCursor
              cursorCharacter="|"
              cursorClassName="font-light text-blue-600"
            />
            <p
              data-hero-animate="load"
              className="mt-6 max-w-lg text-lg leading-relaxed text-slate-600"
            >
              Partnering with teams and founders to design thoughtful user experiences, ship
              production-ready products, and move faster with AI-assisted workflows and lean
              execution.
            </p>
            <div data-hero-animate="load" className="mt-8 flex flex-wrap gap-3">
              <button onClick={onViewPortfolio} className="btn-primary">
                View portfolio
              </button>
              <button onClick={onCopyEmail} className="btn-secondary">
                Let&apos;s chat
              </button>
            </div>
            <p data-hero-animate="load" className="mt-6 text-sm text-slate-500">
              Trusted by teams at leading enterprises • Available for freelance &amp; contract work
            </p>
          </div>

          <div className="relative mx-auto aspect-[4/3] w-full max-w-[640px] overflow-visible lg:aspect-square lg:ml-auto">
            <ProfileCard
              className="hero-profile-card h-full w-full"
              avatarUrl="/cover-image.png"
              iconUrl="/profile-card/iconpattern.png"
              grainUrl="/profile-card/grain.webp"
              name="Nqobile Vundla"
              title="Product Designer & Builder"
              showUserInfo={false}
              behindGlowColor="rgba(113, 196, 255, 0.5)"
              behindGlowSize="45%"
            />
          </div>
        </div>

        <div className="mb-0">
          <p data-hero-animate="scroll" className="mb-6 text-sm text-slate-500">
            Trusted by teams at
          </p>
          <div className="overflow-hidden">
            <motion.div
              className="flex w-max items-center gap-12 px-2"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 35, ease: "linear", repeat: Infinity }}
            >
              {[...logos, ...logos].map((logo, i) => (
                <div
                  key={`${logo.name}-${i}`}
                  className="relative flex aspect-[18/10] w-28 flex-shrink-0 items-center justify-center grayscale opacity-50 transition-opacity duration-500 hover:opacity-80 md:w-32"
                >
                  <Image
                    src={logo.src}
                    alt={`${logo.name} logo`}
                    fill
                    className="object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = `/placeholder.svg?height=80&width=200&text=${logo.name.replace(/\s+/g, "+")}`
                    }}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <BentoStats onViewCaseStudyClick={onViewPortfolio} />

      <div className="container mx-auto px-4">
        <div id="projects" className="mb-6 flex justify-start overflow-x-auto">
          <div className="inline-flex rounded-full bg-black/5 p-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={cn(
                  "whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 md:px-6",
                  activeTab === tab
                    ? "bg-blue-600 text-white"
                    : "text-slate-600 hover:text-blue-600"
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="relative">
          <div
            ref={scrollRef}
            className="scrollbar-hide flex snap-x snap-mandatory items-stretch gap-4 overflow-x-auto pb-12 pt-6 px-6"
          >
            {filteredProjects.map((project) => (
              <ProjectCarouselCard key={project.id} project={project} />
            ))}
          </div>

          {filteredProjects.length > 0 && (
            <button
              onClick={scrollCards}
              aria-label="Scroll project cards"
              className="absolute -right-2 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white shadow-sm transition-colors hover:bg-neutral-50 md:flex"
            >
              <ChevronRight className="h-5 w-5 text-blue-950" />
            </button>
          )}
        </div>
      </div>
      </div>
    </section>
  )
}
