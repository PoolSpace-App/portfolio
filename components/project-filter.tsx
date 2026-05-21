"use client"

import { UnderlineTabs } from "@/components/ui/underline-tabs"

type FilterCategory = "Enterprise & Product Design" | "Independent & Client Projects"

interface ProjectFilterProps {
  onFilterChange: (category: FilterCategory) => void
  activeFilter: FilterCategory
}

export default function ProjectFilter({ onFilterChange, activeFilter }: ProjectFilterProps) {
  const categories: FilterCategory[] = ["Enterprise & Product Design", "Independent & Client Projects"]

  return (
    <UnderlineTabs
      items={categories.map((category) => ({ value: category, label: category }))}
      value={activeFilter}
      onValueChange={(category) => onFilterChange(category as FilterCategory)}
      layoutId="project-filter-tabs"
      size="sm"
      className="justify-center"
    />
  )
}
