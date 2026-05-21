import { cn } from "@/lib/utils"

interface GridLinesBackgroundProps {
  className?: string
  gridSize?: number
  fade?: "bottom" | "top" | "both" | "none"
  variant?: "light" | "dark"
}

export default function GridLinesBackground({
  className,
  gridSize = 40,
  fade = "bottom",
  variant = "light",
}: GridLinesBackgroundProps) {
  const isDark = variant === "dark"
  const lineColor = isDark ? "rgb(255 255 255 / 0.04)" : "rgb(226 232 240)"
  const dotColor = isDark ? "rgb(255 255 255 / 0.07)" : "rgb(203 213 225)"
  const lineOpacity = isDark ? "opacity-100" : "opacity-20"
  const dotOpacity = isDark ? "opacity-100" : "opacity-50"
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
        className={cn("absolute inset-0", lineOpacity)}
        style={{
          backgroundImage: `
            linear-gradient(to right, ${lineColor} 1px, transparent 1px),
            linear-gradient(to bottom, ${lineColor} 1px, transparent 1px)
          `,
          backgroundSize: `${gridSize}px ${gridSize}px`,
          backgroundPosition: "0 0",
        }}
      />
      <div
        className={cn("absolute inset-0", dotOpacity)}
        style={{
          backgroundImage: `radial-gradient(circle at 0 0, ${dotColor} 2.5px, transparent 2.5px)`,
          backgroundSize: `${gridSize}px ${gridSize}px`,
          backgroundPosition: "0 0",
        }}
      />
    </div>
  )
}
