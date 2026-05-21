import PageGridShell from "@/components/page-grid-shell"
import BooksCatalog from "@/components/books-catalog"
import { books } from "@/lib/books"

export const metadata = {
  title: "Books",
  description: "Books on design, product, and building better digital experiences.",
}

export default function BooksPage() {
  return (
    <PageGridShell>
      <div className="container mx-auto px-4 pt-32 pb-32">
        <h1 className="mb-4 text-4xl font-medium text-blue-950 md:text-5xl">Books</h1>
        <p className="mb-12 max-w-2xl text-xl text-blue-950">
          A curated list of books that have shaped how I think about product design, user experience,
          leadership, relationships, and building teams that ship.
        </p>

        <BooksCatalog books={books} />
      </div>
    </PageGridShell>
  )
}
