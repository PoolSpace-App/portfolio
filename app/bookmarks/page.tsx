import BookmarksList from "@/components/bookmarks-list"
import PortfolioBleedLine from "@/components/portfolio-bleed-line"
import { bookmarks } from "@/lib/bookmarks"

export const metadata = {
  title: "Bookmarks",
  description: "A running list of tools, components, and references I keep coming back to.",
}

export default function BookmarksPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="portfolio-dot-grid relative bg-white">
        <PortfolioBleedLine />

        <div className="portfolio-layout-guides relative mx-auto w-full py-10 lg:py-14">
          <div className="w-full min-w-0 px-5 md:px-8">
            <div className="portfolio-line-nodes portfolio-line-nodes-top portfolio-border-x bg-white p-8 md:p-10 lg:p-12">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
                Bookmarks
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-500 md:text-base">
                Favorite tools, component libraries, motion references, and design links I reach for
                while building.
              </p>
            </div>
          </div>

          <PortfolioBleedLine />

          <div className="w-full min-w-0 px-5 md:px-8">
            <div className="portfolio-line-nodes portfolio-line-nodes-bottom overflow-visible portfolio-border-x bg-white">
              <BookmarksList bookmarks={bookmarks} />
            </div>
          </div>

          <PortfolioBleedLine />
        </div>
      </section>
    </main>
  )
}
