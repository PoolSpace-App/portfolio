import PortfolioBleedLine from "@/components/portfolio-bleed-line"

export default function BlogLoading() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="portfolio-dot-grid relative bg-white">
        <PortfolioBleedLine />
        <div className="portfolio-layout-guides relative mx-auto w-full max-w-7xl py-10 lg:py-14">
          <div className="px-5 md:px-8">
            <div className="portfolio-border-x bg-white p-8 md:p-10 lg:p-12">
              <div className="mb-4 h-12 w-48 animate-pulse bg-slate-100" />
              <div className="h-6 w-96 max-w-full animate-pulse bg-slate-100" />
            </div>
          </div>
          <PortfolioBleedLine />
          <div className="px-5 md:px-8">
            <div className="grid grid-cols-1 gap-0 portfolio-border-x md:grid-cols-6">
              {[1, 2, 3, 4, 5].map((item) => (
                <div
                  key={item}
                  className={`h-96 animate-pulse portfolio-border-b bg-white md:portfolio-border-r ${
                    item === 1 || item === 5 ? "md:col-span-4" : "md:col-span-2"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        <PortfolioBleedLine />
      </section>
    </main>
  )
}
