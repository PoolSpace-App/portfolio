"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "@/components/icons"
import ProjectCarousel from "@/components/project-carousel"
import ProjectNavigation from "@/components/project-navigation"
import PageGridShell from "@/components/page-grid-shell"
import { PortfolioDashedDivider } from "@/components/portfolio-bleed-line"

export default function NotifyGovPage() {
  const router = useRouter()

  const project = {
    "id": 6,
    "name": "Notify.Gov",
    "tagline": "Citizens had to prove who they were before they could use government services online. That had to be secure without shutting out people with low digital confidence.",
    "description": "Citizens had to prove who they were before they could use government services online. That had to be secure without shutting out people with low digital confidence.",
    "imageUrl": "/projects/notify.gov/hero.jpg",
    "category": "Mobile Applications" as const,
    "type": "freelance",
    "role": "Lead Designer",
    "duration": "3 months",
    "year": "2024",
    "designed": [
        "Identity verification with two-factor authentication, facial biometrics and guided ID image capture.",
        "A secure document store where people upload and manage personal records, link relatives and dependants, and see details like credit scores and property information.",
        "Service access for notifications, reporting municipal issues and reaching emergency services.",
        "An AI assistant that helps people check their health, find qualified practitioners, book appointments and track daily activity.",
    ],
    "approach": "I designed consent and disclosure screens for each sensitive step.",
    "outcome": "A complete mobile design and a design system, ready to hand over to engineering.",
    "images": {
        "main": "/projects/notify.gov/main.jpg",
        "secondary": [
            "/projects/notify.gov/feature1.jpg",
            "/projects/notify.gov/feature2.jpg",
            "/projects/notify.gov/feature3.jpg",
            "/projects/notify.gov/feature4.jpg",
            "/projects/notify.gov/feature5.jpg"
        ]
    },
    "fallback": "/placeholder.svg?height=1200&width=1600&text=Notify.Gov"
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
          <div className="text-sm text-slate-900 mb-1 font-bold">THE CHALLENGE</div>
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
            <div>
              <div className="text-sm text-slate-900 mb-1 font-bold">WHAT I DESIGNED</div>
              <ul className="list-disc space-y-3 pl-5">
                {project.designed.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-sm text-slate-900 mb-1 font-bold">HOW I APPROACHED IT</div>
              <p>{project.approach}</p>
            </div>
            <div>
              <div className="text-sm text-slate-900 mb-1 font-bold">OUTCOME</div>
              <p>{project.outcome}</p>
            </div>
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
