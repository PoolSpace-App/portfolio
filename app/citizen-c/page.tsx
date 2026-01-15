"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Navbar from "@/components/navbar"
import { ArrowLeft } from "lucide-react"
import ProjectCarousel from "@/components/project-carousel"
import ProjectNavigation from "@/components/project-navigation"

export default function CitizenCPage() {
  const router = useRouter()

  const project = {
    "id": 7,
    "name": "Citizen C",
    "tagline": "Your Daily Companion for Learning, Growth, and Wellbeing",
    "description": "CitizenC is more than just a virtual school\u2014it's a smart, supportive learning guide designed to meet students where they are.",
    "imageUrl": "/projects/citizen-c/hero.jpg",
    "category": "Mobile Applications" as const,
    "type": "freelance",
    "details": "CitizenC helps students stay engaged, confident, and organized. From personalized learning paths and career-focused goal setting to daily challenges, reminders, and mental health check-ins.",
    "role": "Lead Designer",
    "duration": "4 months",
    "year": "2024",
    "processDetails": [
        "Whether you're dreaming of becoming a game developer, a doctor, or an entrepreneur, CitizenC adapts to your strengths, helps you tackle your weak spots, and celebrates every win\u2014big or small.",
        "Key Features:",
        "\u2022 Personalized learning guided by 'Edu,' your smart companion",
        "\u2022 Career goal setting based on student aspirations",
        "\u2022 Gamified challenges and a rewards passport system",
        "\u2022 Homework planner, reminders, and progress tracker",
        "\u2022 Emoji mood check-ins and daily tips/jokes to keep it light",
        "\u2022 Literacy boosters like 'Word of the Day' and 'Book of the Week'",
        "\u2022 Built-in access to psycho-social support and wellness resources",
        "\u2022 Collaborative study groups and discussion forums",
        "\u2022 Strong parental controls and data privacy for peace of mind"
    ],
    "images": {
        "main": "/projects/citizen-c/main.jpg",
        "secondary": [
            "/projects/citizen-c/feature1.jpg",
            "/projects/citizen-c/feature2.jpg",
            "/projects/citizen-c/feature3.jpg",
            "/projects/citizen-c/feature4.jpg",
            "/projects/citizen-c/feature5.jpg"
        ]
    },
    "fallback": "/placeholder.svg?height=1200&width=1600&text=Citizen+C"
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
