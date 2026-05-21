import { cn } from "@/lib/utils"

interface GridLinesBackgroundProps {
  className?: string
  gridSize?: number
  fade?: "bottom" | "top" | "both" | "none"
}

export default function GridLinesBackground({
  className,
  gridSize = 40,
  fade = "bottom",
}: GridLinesBackgroundProps) {
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
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(226 232 240) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(226 232 240) 1px, transparent 1px)
          `,
          backgroundSize: `${gridSize}px ${gridSize}px`,
          backgroundPosition: "0 0",
        }}
      />
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle at 0 0, rgb(203 213 225) 2.5px, transparent 2.5px)",
          backgroundSize: `${gridSize}px ${gridSize}px`,
          backgroundPosition: "0 0",
        }}
      />
    </div>
  )
}
