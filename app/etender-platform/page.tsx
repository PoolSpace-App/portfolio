"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Navbar from "@/components/navbar"
import { ArrowLeft } from "lucide-react"
import ProjectCarousel from "@/components/project-carousel"
import ProjectNavigation from "@/components/project-navigation"

export default function EtenderPlatformPage() {
  const router = useRouter()

  const project = {
    "id": 10,
    "name": "eTender Platform",
    "tagline": "Creative workflow management for design teams.",
    "description": "The eTender platform is a locally developed digital procurement system designed to streamline and automate the tendering process for both public and private sectors in South Africa.",
    "imageUrl": "/projects/etender-platform/hero.jpg",
    "category": "Desktop Applications" as const,
    "type": "freelance",
    "details": "Its primary audience is the public sector \u2014 including government departments, municipalities, and SOEs \u2014 while the secondary audience is private companies with procurement needs.",
    "role": "Lead Designer",
    "duration": "4 months",
    "year": "2023",
    "processDetails": [
        "The system addresses critical challenges faced by the public sector such as:",
        "\u2022 Non-compliance with procurement regulations",
        "\u2022 Manual, error-prone processes",
        "\u2022 Loss or mismanagement of physical documents",
        "\u2022 Inability to link procurement plans to actual spending",
        "\u2022 Over-invoicing and poor audit trails",
        "For the private sector, it solves the issue of reliance on costly and inflexible international systems not tailored to local needs.",
        "What makes this platform stand out is its deep local understanding \u2014 created by a procurement auditor with firsthand experience \u2014 and its affordability versus international solutions like SAP. The team is still defining the visual identity and tone but leans toward a friendly, casual communication style and seeks input on branding and UX inspiration.",
        "The goal is to build a clear, user-friendly system that not only reduces fraud and inefficiencies but also instills confidence and compliance across South African procurement ecosystems."
    ],
    "images": {
        "main": "/projects/etender-platform/main.jpg",
        "secondary": [
            "/projects/etender-platform/feature1.jpg",
            "/projects/etender-platform/feature2.jpg",
            "/projects/etender-platform/feature3.jpg",
            "/projects/etender-platform/feature4.jpg",
            "/projects/etender-platform/feature5.jpg"
        ]
    },
    "fallback": "/placeholder.svg?height=1200&width=1600&text=eTender+Platform"
}

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen bg-white text-black">
      <header className="container mx-auto px-4 py-8 flex justify-between items-center bg-white text-blue-950 border-b border-gray-200">
        <Navbar variant="white" />
      </header>
      
      <div className="container mx-auto px-4 py-8">
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
