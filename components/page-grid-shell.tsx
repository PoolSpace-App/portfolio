import { cn } from "@/lib/utils"
import GridLinesBackground from "@/components/grid-lines-background"

interface PageGridShellProps {
  children: React.ReactNode
  className?: string
  as?: "main" | "div"
  fade?: "bottom" | "top" | "both" | "none"
}

export default function PageGridShell({
  children,
  className,
  as: Component = "main",
  fade = "both",
}: PageGridShellProps) {
  return (
    <Component
      className={cn(
        "relative min-h-screen overflow-hidden bg-white font-sans text-black",
        className
      )}
    >
      <GridLinesBackground fade={fade} />
      <div className="relative z-10">{children}</div>
    </Component>
  )
}
