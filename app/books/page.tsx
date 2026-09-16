import BooksCatalog from "@/components/books-catalog"
import PortfolioBleedLine from "@/components/portfolio-bleed-line"
import { books } from "@/lib/books"

export const metadata = {
  title: "Books",
  description: "Books on design, product, and building better digital experiences.",
}

export default function BooksPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="portfolio-dot-grid relative bg-white">
        <PortfolioBleedLine />

        <div className="portfolio-layout-guides relative mx-auto w-full py-10 lg:py-14">
          <div className="w-full min-w-0 px-5 md:px-8">
            <div className="portfolio-line-nodes portfolio-line-nodes-top portfolio-border-x bg-white p-8 md:p-10 lg:p-12">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
                Books
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-500 md:text-base">
                A curated list of books that have shaped how I think about product design, user
                experience, leadership, relationships, and building teams that ship.
              </p>
            </div>
          </div>

          <PortfolioBleedLine />

          <div className="w-full min-w-0 px-5 md:px-8">
            <div className="portfolio-line-nodes portfolio-line-nodes-bottom overflow-visible portfolio-border-x bg-white">
              <BooksCatalog books={books} />
            </div>
          </div>

          <PortfolioBleedLine />
        </div>
      </section>
    </main>
  )
}
