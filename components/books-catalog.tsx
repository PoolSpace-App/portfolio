"use client"

import { useMemo, useState } from "react"
import { cn } from "@/lib/utils"
import BookCoverImage from "@/components/book-cover-image"
import { IconArrowRight, Search } from "@/components/icons"
import { BentoGridItem } from "@/components/ui/bento-grid"
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
    <div className="flex h-full w-[min(78vw,300px)] flex-shrink-0 snap-start md:w-auto md:max-w-none md:flex-shrink md:snap-align-none">
      <BentoGridItem
        className="h-full overflow-hidden rounded-[32px] border border-neutral-200 bg-neutral-100 p-0 shadow-none transition duration-200 hover:shadow-xl md:rounded-[40px]"
        header={
          <div className="relative aspect-[3/4] w-full shrink-0 overflow-hidden bg-neutral-100">
            <BookCoverImage book={book} />
          </div>
        }
        description={
          <div className="flex flex-1 flex-col px-5 pb-5 pt-5 md:px-6 md:pb-6 md:pt-6">
            <h2 className="text-xl font-semibold tracking-tight text-blue-950 md:text-2xl">
              {book.title}
            </h2>
            <p className="mt-1 text-sm text-slate-500 md:text-base">by {book.author}</p>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 md:text-base">
              {book.description}
            </p>
            <a
              href={book.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary group mt-6 inline-flex shrink-0 items-center self-start"
            >
              View book
              <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        }
      />
    </div>
  )
}

function BookGrid({ books: items }: { books: Book[] }) {
  return (
    <div className="relative -mx-4 md:mx-0">
      {items.length > 1 && (
        <div
          aria-hidden
          className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-white to-transparent md:hidden"
        />
      )}
      <div
        className={cn(
          "scrollbar-hide flex snap-x snap-mandatory items-stretch gap-4 overflow-x-auto scroll-pl-4 pb-2 pl-4 pr-8",
          "md:grid md:w-full md:scroll-pl-0 md:grid-cols-4 md:overflow-visible md:pb-0 md:pl-0 md:pr-0 md:snap-none"
        )}
      >
        {items.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
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
    <div className="space-y-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full lg:max-w-md">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <Input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search by title, author, or topic…"
            className="h-11 rounded-2xl border-neutral-200 bg-white pl-11 text-blue-950 placeholder:text-slate-400 focus-visible:ring-blue-400"
            aria-label="Search books"
          />
        </div>

        <Select value={sort} onValueChange={(value) => setSort(value as SortOption)}>
          <SelectTrigger className="h-11 w-full rounded-2xl border-[var(--el-accent)] bg-[var(--el-accent)] text-white focus:ring-blue-400 focus:ring-offset-0 lg:w-[220px] [&_svg]:text-white [&_svg]:opacity-100">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent className="overflow-hidden rounded-2xl border-[var(--el-accent)] bg-[var(--el-accent)] text-white shadow-lg">
            <SelectItem
              value="title-asc"
              className="rounded-xl text-white focus:bg-[var(--el-accent-hover)] focus:text-white"
            >
              Title (A–Z)
            </SelectItem>
            <SelectItem
              value="title-desc"
              className="rounded-xl text-white focus:bg-[var(--el-accent-hover)] focus:text-white"
            >
              Title (Z–A)
            </SelectItem>
            <SelectItem
              value="author-asc"
              className="rounded-xl text-white focus:bg-[var(--el-accent-hover)] focus:text-white"
            >
              Author (A–Z)
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <UnderlineTabs
        items={categoryTabs.map((tab) => ({ value: tab, label: tab }))}
        value={category}
        onValueChange={(value) => setCategory(value as CategoryFilter)}
        layoutId="books-category-tabs"
        size="sm"
        className="rounded-2xl bg-sky-50 px-4 py-3 md:px-6 md:py-4"
      />

      <p className="text-sm text-slate-500">
        {filteredBooks.length} {filteredBooks.length === 1 ? "book" : "books"}
        {category !== "All" ? ` in ${category}` : ""}
        {search.trim() ? ` matching “${search.trim()}”` : ""}
      </p>

      {filteredBooks.length === 0 ? (
        <div className="rounded-[32px] border border-neutral-200 bg-neutral-100 px-6 py-16 text-center md:rounded-[40px]">
          <p className="text-lg font-medium text-blue-950">No books found</p>
          <p className="mt-2 text-sm text-slate-600">Try a different search or category.</p>
        </div>
      ) : showGrouped ? (
        <div className="space-y-14">
          {groupedBooks.map((group) => (
            <section key={group.category}>
              <h2 className="mb-6 text-2xl font-semibold tracking-tight text-blue-950 md:text-3xl">
                {group.category}
              </h2>
              <BookGrid books={group.books} />
            </section>
          ))}
        </div>
      ) : (
        <BookGrid books={filteredBooks} />
      )}
    </div>
  )
}
