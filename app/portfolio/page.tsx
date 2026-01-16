import Logo from "@/components/logo"
import ProjectCard from "@/components/project-card"
import { projectsArray } from "@/lib/projects"

export default function Portfolio() {
  // Use the actual project data from lib/projects.ts
  const projects = projectsArray.map(project => ({
    id: project.id,
    title: project.name,
    name: project.name,
    description: project.tagline,
    imageUrl: project.imageUrl,
  }))

  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </main>
  )
}
