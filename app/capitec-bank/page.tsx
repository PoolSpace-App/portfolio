"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Navbar from "@/components/navbar"
import { ArrowLeft } from "lucide-react"
import ProjectCarousel from "@/components/project-carousel"
import ProjectNavigation from "@/components/project-navigation"

export default function CapitecBankPage() {
  const router = useRouter()

  const project = {
    "id": 11,
    "name": "Capitec Bank",
    "tagline": "Simplified banking - banking that works for you.",
    "description": "Lead UI designer, redesigning the Capitec Bank's digital banking platform",
    "imageUrl": "/projects/capitec-bank/hero.jpg",
    "category": "Desktop Applications" as const,
    "type": "freelance",
    "details": "Capitec Bank is a South African commercial bank, and as of February 2024 the bank was the largest retail bank in South Africa.",
    "role": "Lead UI Designer",
    "duration": "3 months",
    "year": "2023",
    "processDetails": [
        "Focused purely on UI Design, working closely with UX designers, developers, and the product team.",
        "Redesigned core flows like home dashboard, transactions, accounts, and payments to improve clarity and reduce visual noise.",
        "Introduced modular design components to streamline future feature additions"
    ],
    "images": {
        "main": "/projects/capitec-bank/main.jpg",
        "secondary": [
            "/projects/capitec-bank/feature1.jpg",
            "/projects/capitec-bank/feature2.jpg",
            "/projects/capitec-bank/feature3.jpg",
            "/projects/capitec-bank/feature4.jpg",
            "/projects/capitec-bank/feature5.jpg"
        ]
    },
    "fallback": "/placeholder.svg?height=1200&width=1600&text=Capitec+Bank"
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
