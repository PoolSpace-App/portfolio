"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import ProjectCarousel from "@/components/project-carousel"
import ProjectNavigation from "@/components/project-navigation"

export default function LexmasftCoalAppPage() {
  const router = useRouter()

  const project = {
    "id": 3,
    "name": "LexMasFT Coal App",
    "tagline": "Track, manage and summarize weekly deliveries and pickups of material (like coal, duff, pease and blend) via containers",
    "description": "This App is ideal for Coal or bulk mineral operations, Transport & logistics companies and site supervisers needing real-time oversight of stock and container movements.",
    "imageUrl": "/projects/lexmasft-coal-app/hero.jpg",
    "category": "Mobile Applications" as const,
    "type": "freelance",
    "details": "It is designed for businesses that handle bulk materials like coal.",
    "role": "UX Researcher, User Testing & Designer",
    "duration": "6 - 8 months",
    "year": "2023 - 2024",
    "processDetails": [
        "It provides a weekly summary of deliveries and pickups, showing the total weight moved, scheduled dates, and container details. Users can monitor current stock levels by material type and view a daily activity heatmap to track operations. With clear container logs and real-time updates, the app helps streamline scheduling, improve visibility, and ensure efficient coordination across delivery and pickup activities."
    ],
    "images": {
        "main": "/projects/lexmasft-coal-app/main.jpg",
        "secondary": [
            "/projects/lexmasft-coal-app/feature1.jpg",
            "/projects/lexmasft-coal-app/feature2.jpg",
            "/projects/lexmasft-coal-app/feature3.jpg",
            "/projects/lexmasft-coal-app/feature4.jpg",
            "/projects/lexmasft-coal-app/feature5.jpg"
        ]
    },
    "fallback": "/placeholder.svg?height=1200&width=1600&text=LexMasFT+Coal+App"
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
