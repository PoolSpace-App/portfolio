"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import {
  Briefcase,
  Clock,
  Code1,
  Designtools,
  Link21,
  Location,
  ShieldTick,
  Sms,
  type Icon,
} from "iconsax-react"
import { Dribbble, LinkedIn, Mail } from "@/components/icons"
import GitHubContributionGraphSection from "@/components/github-contribution-graph"
import HomeProjectGrid from "@/components/home-project-grid"
import PortfolioBleedLine from "@/components/portfolio-bleed-line"
import PortfolioChatPanel from "@/components/portfolio-chat-panel"
import Testimonials from "@/components/testimonials"
import type { GitHubContributionGraph } from "@/lib/github-contributions"
import type { BlogPost } from "@/lib/notion"

interface HomePageProps {
  latestBlogs: BlogPost[]
  githubContributions: GitHubContributionGraph | null
}

const profileMeta = [
  { icon: Designtools, label: "Senior Product Designer + AI product builder" },
  { icon: ShieldTick, label: "Fintech, AI, SaaS, 0→1 Product & Banking Platforms" },
  { icon: Location, label: "Johannesburg, South Africa" },
  { icon: Code1, label: "Next.js, React, TypeScript, Supabase, Convex" },
  { icon: Sms, label: "nqovun@gmail.com", href: "mailto:nqovun@gmail.com" },
  { icon: Briefcase, label: "Building · PoolSpace, OrangeRuturns, BrandSpace" },
  { icon: Link21, label: "linkedin.com/in/mrq", href: "https://www.linkedin.com/in/mrq/" },
] as const

type ProfileFact = {
  icon: Icon
  label: string
  href?: string
  suffix?: string
}

function ProfileMetaItem({ icon: Icon, label, href, suffix }: ProfileFact) {
  const className =
    "cursor-target group relative flex items-start gap-3 overflow-visible border-b border-dashed border-slate-200 p-3 text-sm leading-relaxed text-slate-600 transition-colors last:border-b-0 hover:bg-slate-50 hover:text-slate-900 sm:odd:border-r sm:[&:nth-last-child(-n+2)]:border-b-0"

  const content = (
    <>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 z-40 border border-dashed border-transparent transition-[border-color] group-hover:border-slate-900"
      />
      <Icon
        size={16}
        variant="Linear"
        color="currentColor"
        className="relative z-10 mt-0.5 shrink-0 text-slate-400 transition-colors group-hover:text-slate-900"
      />
      <span className="relative z-10">
        {label}
        {suffix ? <span className="placeholder:text-slate-400"> {suffix}</span> : null}
      </span>
    </>
  )

  if (href) {
    return (
      <Link href={href} target={href.startsWith("http") ? "_blank" : undefined} className={className}>
        {content}
      </Link>
    )
  }

  return <div className={className}>{content}</div>
}

function greetingForHour(hour: number) {
  if (hour < 12) {
    return "Good morning"
  }

  if (hour < 17) {
    return "Good afternoon"
  }

  return "Good evening"
}

function TimeOfDayGreeting() {
  const [greeting, setGreeting] = useState("Good afternoon")

  useEffect(() => {
    const update = () => {
      setGreeting(greetingForHour(new Date().getHours()))
    }

    update()
    const intervalId = window.setInterval(update, 60_000)
    return () => window.clearInterval(intervalId)
  }, [])

  return (
    <h2 className="mb-5 text-xl font-semibold tracking-tight text-slate-800 md:text-2xl">
      {greeting}
    </h2>
  )
}

function getTimezoneOffsetHours(timeZone: string, date = new Date()) {
  const utc = new Date(date.toLocaleString("en-US", { timeZone: "UTC" }))
  const local = new Date(date.toLocaleString("en-US", { timeZone }))
  return (local.getTime() - utc.getTime()) / 3_600_000
}

function LocalTimeFact() {
  const [timeLabel, setTimeLabel] = useState("")
  const [suffix, setSuffix] = useState("")

  useEffect(() => {
    const update = () => {
      const now = new Date()
      const time = new Intl.DateTimeFormat("en-US", {
        timeZone: "Africa/Johannesburg",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }).format(now)

      setTimeLabel(time)

      const localZone = Intl.DateTimeFormat().resolvedOptions().timeZone
      const diff = getTimezoneOffsetHours("Africa/Johannesburg", now) - getTimezoneOffsetHours(localZone, now)

      if (Math.abs(diff) < 0.5) {
        setSuffix("// same time")
      } else if (diff > 0) {
        setSuffix(`// ${Math.round(diff)}h ahead`)
      } else {
        setSuffix(`// ${Math.abs(Math.round(diff))}h behind`)
      }
    }

    update()
    const intervalId = window.setInterval(update, 30_000)
    return () => window.clearInterval(intervalId)
  }, [])

  if (!timeLabel) {
    return <ProfileMetaItem icon={Clock} label="Loading time..." />
  }

  return <ProfileMetaItem icon={Clock} label={timeLabel} suffix={suffix} />
}

const professionalSummary =
  "Product engineer and senior product designer with 10+ years building 0-1 products, fintech and regulated workflows. I work across product strategy, UX and implementation — from founding and shipping my own software products to working directly inside client codebases and backend workflows. I use AI-assisted development to move from problem definition and interface design into working product, integration and production code."

const coreSkills = [
  {
    title: "Product Engineering",
    body: "React, Next.js, HTML/CSS, API integration, backend workflows, Git/GitHub, technical architecture",
  },
  {
    title: "AI Engineering",
    body: "AI-assisted development, Cursor, document analysis/extraction, LLM workflows, structured data capture, rapid prototyping",
  },
  {
    title: "Product",
    body: "0-1 product development, MVPs, product strategy, experimentation, enterprise UX, design systems, user research",
  },
  {
    title: "Domains",
    body: "Fintech, banking, KYC/KYB, AML, onboarding, document-heavy workflows, regulated systems",
  },
]

const socialLinks = [
  { href: "https://www.linkedin.com/in/mrq/", label: "LinkedIn", icon: LinkedIn },
  { href: "https://dribbble.com/mrnqoe", label: "Dribbble", icon: Dribbble },
  { href: "mailto:nqovun@gmail.com", label: "Email", icon: Mail },
]

export default function HomePage({ latestBlogs, githubContributions }: HomePageProps) {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="portfolio-dot-grid relative bg-white">
        <PortfolioBleedLine />

        <div className="portfolio-layout-guides relative mx-auto w-full py-10 lg:py-14">
          <div className="w-full min-w-0 px-5 md:px-8">
            <div className="portfolio-line-nodes portfolio-line-nodes-top portfolio-border-x bg-white p-8 md:p-10 lg:p-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
              <div className="shrink-0">
                <div className="relative h-28 w-28 overflow-hidden border border-dashed border-slate-200 bg-slate-50 md:h-32 md:w-32">
                  <Image
                    src="/cover-image.png"
                    alt="Nqobile Vundla"
                    width={128}
                    height={128}
                    priority
                    className="h-full w-full object-cover object-top grayscale"
                  />
                </div>
              </div>

              <div className="min-w-0 flex-1 space-y-8">
                <div className="space-y-1">
                  <h1 className="text-4xl font-semibold tracking-tight text-slate-800 md:text-5xl">
                    Nqobile Vundla
                  </h1>
                  <p className="max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
                    Senior Product Designer, Product Engineer &amp; Product Builder (0-1)
                  </p>
                </div>

                <div className="grid overflow-visible portfolio-border sm:grid-cols-2">
                  {profileMeta.map((fact) => (
                    <ProfileMetaItem key={fact.label} {...fact} />
                  ))}
                  <LocalTimeFact />
                </div>

                <div className="portfolio-border-t pt-6">
                  <div className="inline-flex items-stretch portfolio-border">
                    {socialLinks.map((social) => {
                      const Icon = social.icon
                      return (
                        <Link
                          key={social.label}
                          href={social.href}
                          target={social.href.startsWith("http") ? "_blank" : undefined}
                          rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="cursor-target group relative inline-flex h-9 w-9 items-center justify-center overflow-visible portfolio-border-r bg-white text-slate-600 transition last:border-r-0 hover:bg-slate-50 hover:text-slate-900"
                          aria-label={social.label}
                        >
                          <span
                            aria-hidden
                            className="pointer-events-none absolute inset-0 z-40 border border-dashed border-transparent transition-[border-color] group-hover:border-slate-900"
                          />
                          <Icon className="relative z-10 h-4 w-4" />
                        </Link>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>

          <PortfolioBleedLine />

          <div className="w-full min-w-0 px-5 md:px-8">
            <div className="portfolio-line-nodes portfolio-line-nodes-y portfolio-border-x bg-white">
            <div className="min-w-0 p-5 md:p-7">
              <GitHubContributionGraphSection graph={githubContributions} />
            </div>
            </div>
          </div>

          <PortfolioBleedLine />

          <div className="w-full min-w-0 px-5 md:px-8">
            <div className="portfolio-line-nodes portfolio-line-nodes-bottom portfolio-border-x bg-white">
            <div className="grid items-start gap-8 p-5 md:p-8 lg:grid-cols-[1fr_360px]">
              <div>
                <TimeOfDayGreeting />
                <div className="space-y-6 text-sm leading-relaxed text-slate-500">
                  <div>
                    <h3 className="mb-2 font-semibold text-slate-900">Professional Summary</h3>
                    <p>{professionalSummary}</p>
                  </div>
                  <div>
                    <h3 className="mb-3 font-semibold text-slate-900">Core Skills</h3>
                    <ul className="space-y-3">
                      {coreSkills.map((skill) => (
                        <li key={skill.title} className="grid grid-cols-[12px_1fr] gap-4">
                          <span className="mt-2 h-2 w-2 rounded-full bg-slate-300" />
                          <span>
                            <strong className="font-semibold text-slate-900">{skill.title}:</strong> {skill.body}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <PortfolioChatPanel />
            </div>
            </div>
          </div>

          <PortfolioBleedLine />

          <div className="w-full min-w-0 px-5 md:px-8">
            <div className="portfolio-line-nodes portfolio-line-nodes-y overflow-visible portfolio-border-x bg-white">
              <HomeProjectGrid />
            </div>
          </div>

          <PortfolioBleedLine />

          <div className="w-full min-w-0 px-5 md:px-8">
            <div className="portfolio-line-nodes portfolio-line-nodes-y portfolio-border-x bg-white">
            <div className="grid gap-3 p-5 md:grid-cols-3 md:p-7">
              {latestBlogs.map((blog) => (
                <Link
                  key={blog.id}
                  href={`/blog/${blog.slug}`}
                  className="cursor-target block h-full portfolio-border bg-white p-4 transition hover:border-slate-900"
                >
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-slate-400">{blog.category}</span>
                  <h3 className="mt-3 line-clamp-2 text-lg font-semibold leading-tight text-slate-900">{blog.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-500">{blog.excerpt}</p>
                </Link>
              ))}
            </div>
            </div>
          </div>

          <PortfolioBleedLine />

          <div className="w-full min-w-0 px-5 md:px-8">
            <div className="portfolio-line-nodes portfolio-line-nodes-y portfolio-border-x bg-white">
            <div className="grid gap-0 text-center text-slate-500 md:grid-cols-4">
              {["nCino", "DocFox", "Mortgage Market", "PoolSpace"].map((name) => (
                <div
                  key={name}
                  className="portfolio-border-b p-8 font-mono text-lg font-semibold md:border-b-0 md:portfolio-border-r md:last:border-r-0"
                >
                  {name}
                </div>
              ))}
            </div>
            </div>
          </div>

          <PortfolioBleedLine />

          <div className="w-full min-w-0 px-5 md:px-8">
            <div className="portfolio-line-nodes portfolio-line-nodes-bottom overflow-visible portfolio-border-x bg-white">
              <div className="p-8 md:p-10 lg:p-12">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-800 md:text-3xl">
                  Referrals
                </h2>
              </div>
              <div className="portfolio-dashed-divider-bleed" aria-hidden />
              <Testimonials />
            </div>
          </div>

          <PortfolioBleedLine />
        </div>
      </section>
    </main>
  )
}
