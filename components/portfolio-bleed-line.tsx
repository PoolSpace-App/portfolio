import { cn } from "@/lib/utils"

export default function PortfolioBleedLine({
  className,
  showCenter = false,
}: {
  className?: string
  showCenter?: boolean
}) {
  return (
    <div className={cn("portfolio-bleed-line-x", className)} aria-hidden>
      <span className="portfolio-bleed-node portfolio-bleed-node-l" />
      {showCenter ? <span className="portfolio-bleed-node left-1/2" /> : null}
      <span className="portfolio-bleed-node portfolio-bleed-node-r" />
    </div>
  )
}

export function PortfolioDashedDivider({ className }: { className?: string }) {
  return (
    <div className={cn("portfolio-dashed-divider-bleed", className)} aria-hidden>
      <span className="portfolio-bleed-node left-0" />
      <span className="portfolio-bleed-node left-full" />
    </div>
  )
}
