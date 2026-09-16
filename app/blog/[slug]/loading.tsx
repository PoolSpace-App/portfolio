import PortfolioBleedLine from "@/components/portfolio-bleed-line"

export default function BlogPostLoading() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="portfolio-dot-grid relative bg-white">
        <PortfolioBleedLine />
        <div className="portfolio-layout-guides relative mx-auto w-full max-w-7xl py-10 lg:py-14">
          <div className="px-5 md:px-8">
            <div className="portfolio-border-x bg-white p-8 md:p-10 lg:p-12">
              <div className="mb-8 h-5 w-20 animate-pulse bg-slate-100" />
              <div className="mb-6 flex gap-4">
                <div className="h-4 w-24 animate-pulse bg-slate-100" />
                <div className="h-4 w-20 animate-pulse bg-slate-100" />
                <div className="h-4 w-32 animate-pulse bg-slate-100" />
              </div>
              <div className="mb-6 h-14 w-3/4 animate-pulse bg-slate-100" />
              <div className="mb-8 h-20 w-full animate-pulse bg-slate-100" />
              <div className="flex gap-2">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="h-6 w-16 animate-pulse bg-slate-100" />
                ))}
              </div>
            </div>
          </div>
          <PortfolioBleedLine />
          <div className="px-5 md:px-8">
            <div className="aspect-[16/9] animate-pulse portfolio-border-x bg-slate-100" />
          </div>
          <PortfolioBleedLine />
          <div className="px-5 md:px-8">
            <div className="space-y-4 portfolio-border-x bg-white p-8 md:p-10 lg:p-12">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="h-4 animate-pulse bg-slate-100" />
              ))}
            </div>
          </div>
        </div>
        <PortfolioBleedLine />
      </section>
    </main>
  )
}
