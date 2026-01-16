"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import ProjectCarousel from "@/components/project-carousel"
import ProjectNavigation from "@/components/project-navigation"

export default function NcinoOnboardingPage() {
  const router = useRouter()

  const project = {
    "id": 101,
    "name": "nCino Onboarding",
    "tagline": "Modernizing digital banking experiences for millions of users.",
    "description": "As a Senior Product Designer, I led the redesign of the core mobile banking experience, focusing on accessibility and seamless cross-border transactions.",
    "imageUrl": "/placeholder.jpg",
    "category": "Desktop Applications" as const,
    "type": "permanent",
    "details": "Redesigned the onboarding flow, reducing dropout rates by 25%. Implemented a new design system that unified the brand across all digital touchpoints.",
    "role": "Senior Product Designer",
    "duration": "2 years",
    "year": "2021-2023",
    "processDetails": [
        "Conducted extensive user research across multiple regions to identify pain points in international transfers.",
        "Collaborated with engineering teams to build a scalable component library using React and Tailwind.",
        "Presented design strategies to stakeholders, ensuring alignment with business goals and user needs."
    ],
    "images": {
        "main": "/placeholder.jpg",
        "secondary": [
            "/placeholder.jpg",
            "/placeholder.jpg",
            "/placeholder.jpg",
            "/placeholder.jpg",
            "/placeholder.jpg"
        ]
    },
    "fallback": "/placeholder.svg?height=1200&width=1600&text=nCino+Onboarding"
}

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen bg-white text-black">
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
    </main>
  )
}
