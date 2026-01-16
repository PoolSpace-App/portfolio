"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import ProjectCarousel from "@/components/project-carousel"
import ProjectNavigation from "@/components/project-navigation"

export default function MyperksPage() {
  const router = useRouter()

  const project = {
    "id": 2,
    "name": "MyPerks",
    "tagline": "Welcome to our world of customer and employee perks & incentives!",
    "description": "MyPerks provides Kicks which are points organizations can use as incentives to unlock brand loyalty from their customers and employees.",
    "imageUrl": "/projects/myperks/hero.jpg",
    "category": "Mobile Applications" as const,
    "type": "freelance",
    "details": "MyPerks also provides a wide variety of rewards, guaranteeing that every employee can find something that truly resonates with their preferences.",
    "role": "UX/UI Designer, AI/ML Engineer",
    "duration": "4 - 6 months",
    "year": "2024",
    "processDetails": [
        "With their awesome retail partners, users could enjoy the rewards and treat themselves to something special!"
    ],
    "images": {
        "main": "/projects/myperks/main.jpg",
        "secondary": [
            "/projects/myperks/feature1.jpg",
            "/projects/myperks/feature2.jpg",
            "/projects/myperks/feature3.jpg",
            "/projects/myperks/feature4.jpg",
            "/projects/myperks/feature5.jpg"
        ]
    },
    "fallback": "/placeholder.svg?height=1200&width=1600&text=MyPerks"
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
