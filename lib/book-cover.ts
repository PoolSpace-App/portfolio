const PLACEHOLDER = "/placeholder.jpg"

export function amazonAsin(link: string): string | null {
  const match = link.match(/\/dp\/([A-Z0-9]{10})(?:[/?]|$)/i)
  return match?.[1]?.toUpperCase() ?? null
}

/** Open Library cover by ISBN/ASIN — hotlink-friendly, no Amazon scraping. */
export function openLibraryCoverUrl(link: string, size: "S" | "M" | "L" = "L"): string {
  const asin = amazonAsin(link)
  if (!asin) return PLACEHOLDER
  return `https://covers.openlibrary.org/b/isbn/${asin}-${size}.jpg`
}

export function localBookCoverUrl(id: string): string {
  return `/books/${id}.jpg`
}

export function bookCoverUrl(book: { id: string; link: string; imageUrl: string }): string {
  return localBookCoverUrl(book.id)
}

export { PLACEHOLDER as BOOK_COVER_PLACEHOLDER }
