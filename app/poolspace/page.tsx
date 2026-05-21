"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "@/components/icons"
import ProjectCarousel from "@/components/project-carousel"
import ProjectNavigation from "@/components/project-navigation"
import PageGridShell from "@/components/page-grid-shell"

export default function PoolspacePage() {
  const router = useRouter()

  const project = {
    id: 15,
    name: "PoolSpace",
    tagline: "PoolSpace is a platform that helps people collect money from groups using one simple payment link.",
    description:
      "Instead of chasing people individually, organizers can create a payment request, share it with the group, and track who has paid in one place.",
    imageUrl: "/cover-image.png",
    category: "Desktop Applications" as const,
    type: "venture",
    details:
      "Built as part of the CardSpace product family, PoolSpace removes the friction of collecting contributions across chats and spreadsheets.",
    role: "Founder, UX/UI Designer & Product Lead",
    duration: "Ongoing",
    year: "2024-25",
    processDetails: [
      "Designed flows for creating pools, inviting contributors, tracking progress, and releasing funds when targets are met.",
      "Focused on trust and transparency with real-time balance updates, contributor visibility, and clear payout rules.",
      "Applied lean UX and AI-assisted workflows to ship quickly on React Native and Supabase.",
    ],
    images: {
      main: "/cover-image.png",
      secondary: ["/cover-image.png", "/placeholder.jpg"],
    },
    fallback: "/placeholder.svg?height=1200&width=1600&text=PoolSpace",
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <PageGridShell>
      <div className="container mx-auto px-4 pt-32 pb-8">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center mb-8 hover:opacity-70 transition-opacity text-blue-950 hover-glitch"
        >
          <ArrowLeft className="mr-2 h-4 w-4 text-blue-950" />
          Back
        </button>

        <div className="w-full mx-auto">
          <div className="text-3xl md:text-4xl font-medium mb-4 text-blue-950">{project.name}</div>
          <p className="text-xl text-blue-950 mb-8">{project.description}</p>

          <ProjectCarousel project={project} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <div className="text-sm text-blue-950 mb-1 font-bold">ROLE</div>
              <p className="text-blue-950">{project.role}</p>
            </div>
            <div>
              <div className="text-sm text-blue-950 mb-1 font-bold">DURATION</div>
              <p className="text-blue-950">{project.duration}</p>
            </div>
            <div>
              <div className="text-sm text-blue-950 mb-1 font-bold">YEAR</div>
              <p className="text-blue-950">{project.year}</p>
            </div>
          </div>

          <div className="space-y-6 text-lg text-blue-950 mb-24">
            <p>{project.details}</p>
            {project.processDetails.map((detail, index) => (
              <p key={index}>{detail}</p>
            ))}
          </div>

          <div className="mt-24 py-16 bg-white text-black text-center border-t border-gray-100">
            <div className="text-3xl font-bold mb-2">{project.name}</div>
            <p className="text-md max-w-2xl mx-auto">{project.description}</p>
          </div>

          <ProjectNavigation currentProjectId={project.id} />
        </div>
      </div>
    </PageGridShell>
  )
}
