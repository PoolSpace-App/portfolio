"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "@/components/icons"
import ProjectCarousel from "@/components/project-carousel"
import ProjectNavigation from "@/components/project-navigation"
import PageGridShell from "@/components/page-grid-shell"
import { PortfolioDashedDivider } from "@/components/portfolio-bleed-line"

export default function BrandspacePage() {
  const router = useRouter()

  const project = {
    id: 16,
    name: "BrandSpace",
    tagline:
      "BrandSpace is a platform that helps businesses create and manage digital loyalty campaigns and rewards.",
    description:
      "Businesses can launch things like stamp cards, rewards programs, vouchers, referrals, and promotional campaigns through a simple dashboard.",
    imageUrl: "/nqobile-vundla-strategy.png",
    category: "Desktop Applications" as const,
    type: "venture",
    details:
      "BrandSpace extends the CardSpace ecosystem with tools for merchants to design, publish, and optimize loyalty programs without custom development.",
    role: "Founder, UX/UI Designer & Product Lead",
    duration: "Ongoing",
    year: "2024-25",
    processDetails: [
      "Defined brand strategy, visual identity, and a modular design system for merchant-facing dashboards.",
      "Designed onboarding, program builder, and analytics views to help businesses launch loyalty in days, not months.",
      "Iterated with early adopters using rapid prototyping and AI-assisted design-to-code workflows.",
    ],
    images: {
      main: "/nqobile-vundla-strategy.png",
      secondary: ["/nqobile-vundla-strategy.png", "/nqobile-vundla-discovery.png"],
    },
    fallback: "/placeholder.svg?height=1200&width=1600&text=BrandSpace",
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <PageGridShell>
      <div className="container mx-auto px-4 pt-32 pb-8">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center mb-8 hover:opacity-70 transition-opacity text-slate-900 hover-glitch"
        >
          <ArrowLeft className="mr-2 h-4 w-4 text-slate-900" />
          Back
        </button>

        <div className="w-full mx-auto">
          <div className="text-3xl md:text-4xl font-medium mb-4 text-slate-900">{project.name}</div>
          <p className="text-xl text-slate-900 mb-8">{project.description}</p>

          <ProjectCarousel project={project} />

          <div className="mt-16 mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <div className="text-sm text-slate-900 mb-1 font-bold">ROLE</div>
              <p className="text-slate-900">{project.role}</p>
            </div>
            <div>
              <div className="text-sm text-slate-900 mb-1 font-bold">DURATION</div>
              <p className="text-slate-900">{project.duration}</p>
            </div>
            <div>
              <div className="text-sm text-slate-900 mb-1 font-bold">YEAR</div>
              <p className="text-slate-900">{project.year}</p>
            </div>
          </div>

          <div className="space-y-6 text-lg text-slate-900 mb-24">
            <p>{project.details}</p>
            {project.processDetails.map((detail, index) => (
              <p key={index}>{detail}</p>
            ))}
          </div>

          <div className="relative mt-24 py-16 bg-white text-black text-center">
            <PortfolioDashedDivider className="absolute inset-x-0 top-0" />
            <div className="text-3xl font-bold mb-2">{project.name}</div>
            <p className="text-md max-w-2xl mx-auto">{project.description}</p>
          </div>

          <ProjectNavigation currentProjectId={project.id} />
        </div>
      </div>
    </PageGridShell>
  )
}
