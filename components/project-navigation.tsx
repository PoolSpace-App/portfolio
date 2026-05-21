"use client"

import { useRouter } from "next/navigation"
import { ChevronLeft, ChevronRight } from "@/components/icons"
import { projectsArray } from "@/lib/projects"

interface ProjectNavigationProps {
  currentProjectId: number
}

export default function ProjectNavigation({ currentProjectId }: ProjectNavigationProps) {
  const router = useRouter()
  
  // Total number of projects
  const totalProjects = projectsArray.length

  // Find current project index in the array
  const currentIndex = projectsArray.findIndex(p => p.id === currentProjectId);
  
  // Calculate next and previous project indices
  const nextIndex = (currentIndex + 1) % totalProjects;
  const prevIndex = (currentIndex - 1 + totalProjects) % totalProjects;
  
  // Get next and previous projects
  const nextProject = projectsArray[nextIndex];
  const prevProject = projectsArray[prevIndex];
  
  // Navigate to next or previous project
  const navigateToProject = (slug: string) => {
    router.push(`/${slug}`)
  }

  return (
    <div className="mt-16 flex justify-between items-center py-6 border-t border-b border-gray-200 bg-white text-black">
      <button
        onClick={() => navigateToProject(prevProject.slug)}
        className="flex items-center space-x-2 group hover:text-gray-600 transition-colors"
      >
        <ChevronLeft className="h-5 w-5 transform group-hover:-translate-x-1 transition-transform" />
        <div className="text-left">
          <div className="text-sm text-gray-500">Previous</div>
          <div className="font-medium hover-glitch">{prevProject.name}</div>
        </div>
      </button>

      <div className="hidden md:flex space-x-2">
        {projectsArray.map((p, i) => {
          return (
            <button
              key={i}
              onClick={() => navigateToProject(p.slug)}
              className={`w-2 h-2 rounded-full transition-all ${
                p.id === currentProjectId ? "bg-black scale-125" : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to ${p.name}`}
            />
          )
        })}
      </div>

      <button
        onClick={() => navigateToProject(nextProject.slug)}
        className="flex items-center space-x-2 group hover:text-gray-600 transition-colors"
      >
        <div className="text-right">
          <div className="text-sm text-gray-500">Next</div>
          <div className="font-medium hover-glitch">{nextProject.name}</div>
        </div>
        <ChevronRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  )
}
