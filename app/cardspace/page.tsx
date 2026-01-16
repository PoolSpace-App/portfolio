"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import ProjectCarousel from "@/components/project-carousel"
import ProjectNavigation from "@/components/project-navigation"

export default function CardspacePage() {
  const router = useRouter()

  const project = {
    "id": 1,
    "name": "CardSpace",
    "tagline": "Your all-in-one loyalty app, for all your loyalty needs.",
    "description": "CardSpace is a digital wallet platform for loyalty cards, gift cards, and rewards experiences, designed to replace the clutter of physical cards with a seamless, eco-friendly, and data-driven solution.",
    "imageUrl": "/projects/cardspace/hero.jpg",
    "category": "Mobile Applications" as const,
    "type": "freelance",
    "details": "Users can: Scan and store loyalty cards in one app (no more carrying dozens of cards) and use digital cards at checkout via barcode scanning or tap-to-pay (coming soon).",
    "role": "UX/UI Designer, AI/ML Engineer",
    "duration": "12 months",
    "year": "2024-25",
    "processDetails": [
        "As, a mobile-first platform that digitizes physical loyalty and gift cards, CardSpace users scan, store, and redeem loyalty cards, eliminating the need to carry plastic cards. Businesses can create and manage digital loyalty programs, reducing printing costs and providing real-time insights.",
        "We also expored loyalty card scanning and storage, Virtual gift card system (SpaceGifts), Group contribution feature (CardSpace Pools), Business dashboard for tracking customer engagement, Eco-friendly and data-driven alternative to physical cards.",
        "I applied lean UX, worked across design and development using tools like React Native, Supabase, and AI-assisted design platforms to iterate quickly and reduce build costs."
    ],
    "images": {
        "main": "/projects/cardspace/main.jpg",
        "secondary": [
            "/projects/cardspace/feature1.jpg",
            "/projects/cardspace/feature2.jpg",
            "/projects/cardspace/feature3.jpg",
            "/projects/cardspace/feature4.jpg",
            "/projects/cardspace/feature5.jpg"
        ]
    },
    "fallback": "/placeholder.svg?height=1200&width=1600&text=CardSpace"
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
