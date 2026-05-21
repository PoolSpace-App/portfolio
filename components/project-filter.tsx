"use client"

import { cn } from "@/lib/utils"

type FilterCategory = "Enterprise & Product Design" | "Independent & Client Projects"

interface ProjectFilterProps {
  onFilterChange: (category: FilterCategory) => void
  activeFilter: FilterCategory
}

export default function ProjectFilter({ onFilterChange, activeFilter }: ProjectFilterProps) {
  const categories: FilterCategory[] = ["Enterprise & Product Design", "Independent & Client Projects"]

  return (
    <div className="flex justify-center">
      <div className="inline-flex rounded-full bg-black/5 p-1">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onFilterChange(category)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 md:px-6",
              activeFilter === category
                ? "bg-blue-600 text-white"
                : "text-slate-600 hover:text-blue-600"
            )}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}
