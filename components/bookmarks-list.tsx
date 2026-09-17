"use client"

import { useMemo, useState } from "react"
import { ExportSquare } from "iconsax-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { bookmarkHost, type Bookmark } from "@/lib/bookmarks"

type SortOption = "saved" | "title-asc" | "title-desc" | "site-asc" | "site-desc"

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "saved", label: "Saved order" },
  { value: "title-asc", label: "Title (A–Z)" },
  { value: "title-desc", label: "Title (Z–A)" },
  { value: "site-asc", label: "Website (A–Z)" },
  { value: "site-desc", label: "Website (Z–A)" },
]

function sortBookmarks(list: Bookmark[], sort: SortOption): Bookmark[] {
  if (sort === "saved") return list

  const sorted = [...list]
  sorted.sort((a, b) => {
    switch (sort) {
      case "title-asc":
        return a.title.localeCompare(b.title)
      case "title-desc":
        return b.title.localeCompare(a.title)
      case "site-asc":
        return bookmarkHost(a.href).localeCompare(bookmarkHost(b.href))
      case "site-desc":
        return bookmarkHost(b.href).localeCompare(bookmarkHost(a.href))
      default: {
        const _exhaustive: never = sort
        return _exhaustive
      }
    }
  })
  return sorted
}

export default function BookmarksList({ bookmarks }: { bookmarks: Bookmark[] }) {
  const [sort, setSort] = useState<SortOption>("saved")
  const sortedBookmarks = useMemo(() => sortBookmarks(bookmarks, sort), [bookmarks, sort])
  const evenCount = sortedBookmarks.length % 2 === 0

  return (
    <div className="overflow-visible portfolio-border">
      <div className="flex flex-col gap-3 border-b border-dashed border-slate-200 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-400">
          {sortedBookmarks.length} {sortedBookmarks.length === 1 ? "bookmark" : "bookmarks"}
        </p>
        <Select value={sort} onValueChange={(value) => setSort(value as SortOption)}>
          <SelectTrigger
            aria-label="Sort bookmarks"
            className="h-11 w-full rounded-none border-dashed border-slate-200 bg-white text-slate-900 focus:ring-1 focus:ring-slate-900 focus:ring-offset-0 sm:w-[220px]"
          >
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent className="rounded-none border-dashed border-slate-200 bg-white text-slate-900 shadow-none">
            {sortOptions.map((option) => (
              <SelectItem
                key={option.value}
                value={option.value}
                className="rounded-none text-slate-900 focus:bg-slate-50 focus:text-slate-900"
              >
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid overflow-visible sm:grid-cols-2">
        {sortedBookmarks.map((bookmark) => (
          <a
            key={bookmark.href}
            href={bookmark.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`cursor-target group relative flex items-start justify-between gap-3 overflow-visible border-b border-dashed border-slate-200 p-4 text-sm leading-relaxed text-slate-700 transition-colors last:border-b-0 hover:bg-slate-50 hover:text-slate-900 sm:odd:border-r ${
              evenCount ? "sm:[&:nth-last-child(-n+2)]:border-b-0" : ""
            }`}
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 z-40 border border-dashed border-transparent transition-[border-color] group-hover:border-slate-900"
            />
            <span className="relative z-10 min-w-0">
              <span className="block font-medium">{bookmark.title}</span>
              <span className="mt-1 block font-mono text-xs text-slate-400">{bookmarkHost(bookmark.href)}</span>
            </span>
            <ExportSquare
              size={16}
              variant="Linear"
              color="currentColor"
              className="relative z-10 mt-0.5 shrink-0 text-slate-400 transition-colors group-hover:text-slate-900"
            />
          </a>
        ))}
      </div>
    </div>
  )
}
