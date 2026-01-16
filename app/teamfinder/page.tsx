"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import ProjectCarousel from "@/components/project-carousel"
import ProjectNavigation from "@/components/project-navigation"

export default function TeamfinderPage() {
  const router = useRouter()

  const project = {
    "id": 14,
    "name": "TeamFinder",
    "tagline": "The leading provider of tech talent solutions in Europe, expanding services to include AI-driven workforce integration across multiple industries.",
    "description": "To revolutionise talent engagement by providing flexible, risk-free, and strategic talent solutions that empower businesses.",
    "imageUrl": "/projects/teamfinder/hero.jpg",
    "category": "Branding" as const,
    "type": "freelance",
    "details": "TeamFinder's Talent-as-a-Service (TaaS) platform specialises in tech industries, offering AI-driven talent matching and flexible contractual terms.",
    "role": "Lead Designer \u2013 Branding & UI",
    "duration": "4 months",
    "year": "2024-25",
    "processDetails": [
        "Defined the brand strategy and visual identity, reflecting TeamFinder\u2019s positioning at the intersection of technology, flexibility, and human connection.",
        "Created a bold, tech-forward logo, color palette, and typography system to communicate trust, innovation, and adaptability.",
        "Designed UI concepts for key platform screens to ensure brand consistency across digital touchpoints."
    ],
    "images": {
        "main": "/projects/teamfinder/main.jpg",
        "secondary": [
            "/projects/teamfinder/feature1.jpg",
            "/projects/teamfinder/feature2.jpg",
            "/projects/teamfinder/feature3.jpg",
            "/projects/teamfinder/feature4.jpg",
            "/projects/teamfinder/feature5.jpg",
            "/projects/teamfinder/feature6.jpg",
            "/projects/teamfinder/feature7.jpg",
            "/projects/teamfinder/feature8.jpg",
            "/projects/teamfinder/feature9.jpg",
            "/projects/teamfinder/feature10.jpg",
            "/projects/teamfinder/feature11.jpg",
            "/projects/teamfinder/feature12.jpg",
            "/projects/teamfinder/feature13.jpg",
            "/projects/teamfinder/feature14.jpg",
            "/projects/teamfinder/feature15.jpg",
            "/projects/teamfinder/feature16.jpg",
            "/projects/teamfinder/feature17.jpg",
            "/projects/teamfinder/feature18.jpg"
        ]
    },
    "fallback": "/placeholder.svg?height=1200&width=1600&text=TeamFinder"
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
