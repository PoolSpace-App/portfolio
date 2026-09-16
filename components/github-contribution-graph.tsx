import Link from "next/link"
import type { GitHubContributionGraph } from "@/lib/github-contributions"

const LEVEL_CLASSES = [
  "bg-slate-100",
  "bg-slate-200",
  "bg-slate-300",
  "bg-slate-400",
  "bg-slate-500",
] as const

type GitHubContributionGraphProps = {
  graph: GitHubContributionGraph | null
}

function buildContributionCells() {
  return Array.from({ length: 53 * 7 }, (_, index) => {
    const week = Math.floor(index / 7)
    const day = index % 7
    const wave = Math.sin((week + 2) / 4) + Math.cos((day + week) / 3)
    const pulse = (week * 7 + day * 11) % 13
    if (wave > 1.1 || pulse === 0) return 4
    if (wave > 0.45) return 3
    if (wave > -0.35) return 2
    if (pulse < 4) return 1
    return 0
  })
}

const decorativeCells = buildContributionCells()

function DecorativeGraph() {
  return (
    <>
      <div className="mb-3 flex justify-between font-mono text-sm text-slate-400">
        {["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"].map((month) => (
          <span key={month}>{month}</span>
        ))}
      </div>

      <div
        className="grid w-full min-w-0 grid-rows-7 gap-1"
        style={{ gridTemplateColumns: "repeat(53, minmax(0, 1fr))" }}
        aria-label="GitHub contribution style activity graph"
      >
        {decorativeCells.map((level, index) => (
          <span
            key={index}
            className={`block aspect-square w-full rounded-[2px] ${LEVEL_CLASSES[level]}`}
          />
        ))}
      </div>
    </>
  )
}

export default function GitHubContributionGraphSection({ graph }: GitHubContributionGraphProps) {
  if (!graph) {
    return <DecorativeGraph />
  }

  const content = (
    <>
      <div
        className="mb-3 grid font-mono text-sm text-slate-400"
        style={{ gridTemplateColumns: `repeat(${graph.weekCount}, minmax(0, 1fr))` }}
      >
        {Array.from({ length: graph.weekCount }, (_, weekIndex) => {
          const marker = graph.monthMarkers.find((item) => item.weekIndex === weekIndex)
          return (
            <span key={weekIndex} className="truncate text-[11px] md:text-sm">
              {marker?.label ?? ""}
            </span>
          )
        })}
      </div>

      <div
        className="grid w-full min-w-0 grid-rows-7 gap-1"
        style={{ gridTemplateColumns: `repeat(${graph.weekCount}, minmax(0, 1fr))` }}
        aria-label={`GitHub contributions for ${graph.username}`}
      >
        {graph.cells.map((level, index) => (
          <span
            key={index}
            className={`block aspect-square w-full rounded-[2px] ${LEVEL_CLASSES[level] ?? LEVEL_CLASSES[0]}`}
          />
        ))}
      </div>
    </>
  )

  return (
    <Link
      href={graph.profileUrl}
      target="_blank"
      rel="noreferrer"
      className="block rounded-sm transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-900"
    >
      {content}
    </Link>
  )
}
