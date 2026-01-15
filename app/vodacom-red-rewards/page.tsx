"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Navbar from "@/components/navbar"
import { ArrowLeft } from "lucide-react"
import ProjectCarousel from "@/components/project-carousel"
import ProjectNavigation from "@/components/project-navigation"

export default function VodacomRedRewardsPage() {
  const router = useRouter()

  const project = {
    "id": 5,
    "name": "Vodacom RED Rewards",
    "tagline": "Vodacom Red Rewards is a premium loyalty and benefits program designed for Vodacom Red customers in South Africa.",
    "description": "Vodacom RED Rewards offers exclusive perks and experiences such as: Discounts and vouchers on travel, dining, lifestyle, entertainment, exclusive event access, like concerts or sports games. Vodacom RED also offers travel benefits, including airport lounge access and concierge services.",
    "imageUrl": "/projects/vodacom-red-rewards/hero.jpg",
    "category": "Mobile Applications" as const,
    "type": "freelance",
    "details": "Vodacom Red Rewards also offers exclusive travel, lifestyle, digital, and connectivity perks.",
    "role": "UI Designer & Brand Identity",
    "duration": "3 months",
    "year": "2025",
    "processDetails": [
        "The new interface simplifies reward discovery, highlights monthly perks, and brings clarity to loyalty tiers and top partner deals. With a cleaner layout, vibrant visuals, and intuitive navigation, the redesign elevates the overall user journey while encouraging reward redemption and increased engagement with Vodacom's partner ecosystem."
    ],
    "images": {
        "main": "/projects/vodacom-red-rewards/main.jpg",
        "secondary": [
            "/projects/vodacom-red-rewards/feature1.jpg",
            "/projects/vodacom-red-rewards/feature2.jpg",
            "/projects/vodacom-red-rewards/feature3.jpg",
            "/projects/vodacom-red-rewards/feature4.jpg",
            "/projects/vodacom-red-rewards/feature5.jpg"
        ]
    },
    "fallback": "/placeholder.svg?height=1200&width=1600&text=Vodacom+RED+Rewards"
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
