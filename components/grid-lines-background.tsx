import { cn } from "@/lib/utils"

interface GridLinesBackgroundProps {
  className?: string
  gridSize?: number
  fade?: "bottom" | "top" | "both" | "none"
  variant?: "light" | "dark" | "portfolio"
  showDots?: boolean
}

function dashedGridImage(size: number, stroke: string) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">
    <path d="M0 .5H${size}" fill="none" stroke="${stroke}" stroke-width="1" stroke-dasharray="4 4"/>
    <path d="M.5 0V${size}" fill="none" stroke="${stroke}" stroke-width="1" stroke-dasharray="4 4"/>
  </svg>`

  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`
}

export default function GridLinesBackground({
  className,
  gridSize = 40,
  fade = "bottom",
  variant = "light",
  showDots = true,
}: GridLinesBackgroundProps) {
  const isDark = variant === "dark"
  const isPortfolio = variant === "portfolio"
  const useDashedGrid = isPortfolio || isDark
  const lineColor = isDark ? "rgba(148,163,184,0.28)" : "#e2e8f0"
  const dotColor = isDark ? "rgb(255 255 255 / 0.07)" : "rgb(203 213 225)"
  const fadeClass =
    fade === "bottom"
      ? "[mask-image:linear-gradient(to_bottom,black,black_70%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,black,black_70%,transparent)]"
      : fade === "top"
        ? "[mask-image:linear-gradient(to_top,black,black_70%,transparent)] [-webkit-mask-image:linear-gradient(to_top,black,black_70%,transparent)]"
        : fade === "both"
          ? "[mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]"
          : undefined

  return (
    <div
      className={cn("pointer-events-none absolute inset-0 z-0", fadeClass, className)}
      aria-hidden
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: useDashedGrid
            ? dashedGridImage(gridSize, lineColor)
            : `
            linear-gradient(to right, ${lineColor} 1px, transparent 1px),
            linear-gradient(to bottom, ${lineColor} 1px, transparent 1px)
          `,
          backgroundSize: `${gridSize}px ${gridSize}px`,
          backgroundPosition: "0 0",
        }}
      />
      {showDots ? (
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `radial-gradient(circle at 0 0, ${dotColor} 2.5px, transparent 2.5px)`,
            backgroundSize: `${gridSize}px ${gridSize}px`,
            backgroundPosition: "0 0",
          }}
        />
      ) : null}
    </div>
  )
}
