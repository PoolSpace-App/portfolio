import { cn } from "@/lib/utils"
import PortfolioBleedLine from "@/components/portfolio-bleed-line"

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
}: PageGridShellProps) {
  return (
    <Component className={cn("min-h-screen overflow-x-clip bg-white text-slate-900", className)}>
      <section className="portfolio-dot-grid relative bg-white">
        <div className="portfolio-case-frame pointer-events-none absolute inset-0 z-20" aria-hidden>
          <span className="portfolio-case-frame-v portfolio-case-frame-v-l" />
          <span className="portfolio-case-frame-v portfolio-case-frame-v-r" />
          <PortfolioBleedLine className="sticky top-[5.5rem] md:top-[6rem]" />
        </div>

        <div className="portfolio-layout-guides relative mx-auto w-full">
          <div className="portfolio-case-study relative z-10">{children}</div>
        </div>

        <PortfolioBleedLine />
      </section>
    </Component>
  )
}
