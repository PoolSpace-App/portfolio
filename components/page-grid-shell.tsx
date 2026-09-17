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
        <PortfolioBleedLine className="sticky top-[5.5rem] z-30 md:top-[6rem]" />

        <div className="portfolio-layout-guides relative mx-auto w-full">
          <div className="w-full min-w-0 px-5 md:px-8">
            <div className="portfolio-line-nodes portfolio-line-nodes-y overflow-visible portfolio-border-x bg-white">
              <div className="portfolio-case-study relative z-10">{children}</div>
            </div>
          </div>
        </div>

        <PortfolioBleedLine />
      </section>
    </Component>
  )
}
