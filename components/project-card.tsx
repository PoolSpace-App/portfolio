import Image from "next/image"
import Link from "next/link"

interface Project {
  id: number
  title: string
  description: string
  imageUrl: string
  name?: string
  slug: string
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/${project.slug}`} className="group block">
      <div className="overflow-hidden rounded-lg">
        <Image
          src={project.imageUrl || "/placeholder.svg"}
          alt={project.title || project.name || "Project"}
          width={800}
          height={600}
          className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    </Link>
  )
}
