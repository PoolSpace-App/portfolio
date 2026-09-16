"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "@/components/icons"
import { UnderlineTabs } from "@/components/ui/underline-tabs"
import { projectsArray, type Project } from "@/lib/projects"

type ProjectTab = "Enterprise & Product Design" | "Independent & Client Projects" | "Independent Ventures"

const tabs: ProjectTab[] = [
  "Enterprise & Product Design",
  "Independent & Client Projects",
  "Independent Ventures",
]

const ventureProjectOrder = ["poolspace", "brandspace", "cardspace"]

function normalizeImagePath(path: string): string {
  if (!path) return "/placeholder.svg"
  return path.startsWith("/") ? path : `/${path}`
}

function ProjectCaseCard({ project }: { project: Project }) {
  const href = project.link ?? `/${project.slug}`
  const isExternal = href.startsWith("http")

  return (
    <Link
      href={href}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="cursor-target group relative flex h-full flex-col overflow-visible bg-white"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 z-40 border border-dashed border-transparent transition-[border-color] group-hover:border-slate-900"
      />
      <div className="relative aspect-[4/3] w-full overflow-hidden portfolio-border-b bg-slate-50">
        <Image
          src={normalizeImagePath(project.imageUrl)}
          alt={project.name}
          fill
          className="object-cover grayscale transition-all duration-500 group-hover:scale-[1.02] group-hover:grayscale-0"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <span className="font-mono text-xs uppercase tracking-[0.18em] text-slate-400">
          {project.category}
        </span>
        <h3 className="mt-3 text-lg font-semibold leading-tight tracking-tight text-slate-900 md:text-xl">
          {project.name}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-500">{project.tagline}</p>
        <p className="mt-2 flex-1 line-clamp-3 text-sm leading-relaxed text-slate-500">
          {project.description}
        </p>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-slate-900">
          {project.type === "venture" ? "View link" : "View case study"}
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  )
}

export default function HomeProjectGrid() {
  const [activeTab, setActiveTab] = useState<ProjectTab>("Enterprise & Product Design")

  const filteredProjects = useMemo(() => {
    const filtered = projectsArray.filter((project) => {
      if (activeTab === "Enterprise & Product Design") return project.type === "permanent"
      if (activeTab === "Independent Ventures") return project.type === "venture"
      return project.type === "freelance"
    })

    if (activeTab === "Independent Ventures") {
      return [...filtered].sort(
        (a, b) => ventureProjectOrder.indexOf(a.slug) - ventureProjectOrder.indexOf(b.slug)
      )
    }

    return filtered
  }, [activeTab])

  return (
    <div>
      <div className="px-5 py-5 md:px-7 md:py-6">
        <UnderlineTabs
          items={tabs.map((tab) => ({ value: tab, label: tab }))}
          value={activeTab}
          onValueChange={(tab) => setActiveTab(tab as ProjectTab)}
          layoutId="home-project-tabs"
          size="sm"
        />
      </div>

      <div className="portfolio-dashed-divider-bleed" aria-hidden />

      {filteredProjects.length === 0 ? (
        <div className="p-8 text-center text-sm text-slate-500 md:p-12">No projects in this category yet.</div>
      ) : (
        <div className="grid grid-cols-1 divide-y divide-dashed divide-slate-200 overflow-visible md:grid-cols-3 md:divide-x md:divide-y">
          {filteredProjects.map((project) => (
            <ProjectCaseCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  )
}
