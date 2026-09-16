"use client"

import { useMemo, useState } from "react"
import { IconArrowRight, Search } from "@/components/icons"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { UnderlineTabs } from "@/components/ui/underline-tabs"
import { BOOK_CATEGORY_ORDER, type Book, type BookCategory } from "@/lib/books"

type SortOption = "title-asc" | "title-desc" | "author-asc"
type CategoryFilter = "All" | BookCategory

function sortBooks(list: Book[], sort: SortOption): Book[] {
  const sorted = [...list]
  sorted.sort((a, b) => {
    if (sort === "author-asc") return a.author.localeCompare(b.author)
    if (sort === "title-desc") return b.title.localeCompare(a.title)
    return a.title.localeCompare(b.title)
  })
  return sorted
}

function matchesSearch(book: Book, query: string): boolean {
  const normalized = query.trim().toLowerCase()
  if (!normalized) return true
  return (
    book.title.toLowerCase().includes(normalized) ||
    book.author.toLowerCase().includes(normalized) ||
    book.description.toLowerCase().includes(normalized) ||
    book.category.toLowerCase().includes(normalized)
  )
}

function BookCard({ book }: { book: Book }) {
  return (
    <article className="cursor-target group relative flex h-full flex-col overflow-visible bg-white">
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 z-40 border border-dashed border-transparent transition-[border-color] group-hover:border-slate-900"
      />
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <span className="font-mono text-xs uppercase tracking-[0.18em] text-slate-400">
          {book.category}
        </span>
        <h2 className="mt-3 text-lg font-semibold leading-tight tracking-tight text-slate-900 md:text-xl">
          {book.title}
        </h2>
        <p className="mt-1 text-sm text-slate-500">by {book.author}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-500">{book.description}</p>
        <a
          href={book.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-slate-900"
        >
          View book
          <IconArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </a>
      </div>
    </article>
  )
}

function BookGrid({ books: items }: { books: Book[] }) {
  return (
    <div className="grid grid-cols-1 divide-y divide-dashed divide-slate-200 overflow-visible md:grid-cols-2 md:divide-x lg:grid-cols-4">
      {items.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  )
}

interface BooksCatalogProps {
  books: Book[]
}

export default function BooksCatalog({ books }: BooksCatalogProps) {
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState<CategoryFilter>("All")
  const [sort, setSort] = useState<SortOption>("title-asc")

  const filteredBooks = useMemo(() => {
    const filtered = books.filter(
      (book) =>
        matchesSearch(book, search) && (category === "All" || book.category === category)
    )
    return sortBooks(filtered, sort)
  }, [books, search, category, sort])

  const showGrouped = category === "All" && !search.trim()

  const groupedBooks = useMemo(() => {
    if (!showGrouped) return []
    return BOOK_CATEGORY_ORDER.map((group) => ({
      category: group,
      books: sortBooks(
        books.filter((book) => book.category === group),
        sort
      ),
    })).filter((group) => group.books.length > 0)
  }, [books, showGrouped, sort])

  const categoryTabs: CategoryFilter[] = ["All", ...BOOK_CATEGORY_ORDER]

  return (
    <div>
      <div className="flex flex-col gap-4 p-8 md:flex-row md:items-center md:justify-between md:p-10 lg:p-12">
        <div className="w-full lg:max-w-md">
          <div className="cursor-target relative w-full">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search by title, author, or topic…"
              className="h-11 rounded-none border-dashed border-slate-200 bg-white pl-10 text-slate-900 placeholder:text-slate-400 focus-visible:ring-1 focus-visible:ring-slate-900 focus-visible:ring-offset-0"
              aria-label="Search books"
            />
          </div>
        </div>

        <Select value={sort} onValueChange={(value) => setSort(value as SortOption)}>
          <SelectTrigger className="h-11 w-full rounded-none border-dashed border-slate-200 bg-white text-slate-900 focus:ring-1 focus:ring-slate-900 focus:ring-offset-0 lg:w-[220px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent className="rounded-none border-dashed border-slate-200 bg-white text-slate-900 shadow-none">
            <SelectItem
              value="title-asc"
              className="rounded-none text-slate-900 focus:bg-slate-50 focus:text-slate-900"
            >
              Title (A–Z)
            </SelectItem>
            <SelectItem
              value="title-desc"
              className="rounded-none text-slate-900 focus:bg-slate-50 focus:text-slate-900"
            >
              Title (Z–A)
            </SelectItem>
            <SelectItem
              value="author-asc"
              className="rounded-none text-slate-900 focus:bg-slate-50 focus:text-slate-900"
            >
              Author (A–Z)
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="portfolio-dashed-divider-bleed" aria-hidden />

      <div className="px-8 py-6 md:px-10 lg:px-12">
        <UnderlineTabs
          items={categoryTabs.map((tab) => ({ value: tab, label: tab }))}
          value={category}
          onValueChange={(value) => setCategory(value as CategoryFilter)}
          layoutId="books-category-tabs"
          size="sm"
        />
        <p className="mt-2 text-sm text-slate-400">
          {filteredBooks.length} {filteredBooks.length === 1 ? "book" : "books"}
          {category !== "All" ? ` in ${category}` : ""}
          {search.trim() ? ` matching “${search.trim()}”` : ""}
        </p>
      </div>

      {filteredBooks.length === 0 ? (
        <>
          <div className="portfolio-dashed-divider-bleed" aria-hidden />
          <div className="px-8 py-16 text-center md:px-10 lg:px-12">
            <p className="text-lg font-medium text-slate-900">No books found</p>
            <p className="mt-2 text-sm text-slate-500">Try a different search or category.</p>
          </div>
        </>
      ) : showGrouped ? (
        groupedBooks.map((group) => (
          <div key={group.category}>
            <div className="portfolio-dashed-divider-bleed" aria-hidden />
            <div className="px-8 py-6 md:px-10 lg:px-12">
              <h2 className="text-lg font-semibold tracking-tight text-slate-900 md:text-xl">
                {group.category}
              </h2>
            </div>
            <div className="portfolio-dashed-divider-bleed" aria-hidden />
            <BookGrid books={group.books} />
          </div>
        ))
      ) : (
        <>
          <div className="portfolio-dashed-divider-bleed" aria-hidden />
          <BookGrid books={filteredBooks} />
        </>
      )}
    </div>
  )
}
