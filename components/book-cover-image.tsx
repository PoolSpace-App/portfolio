"use client"

import Image from "next/image"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { BOOK_COVER_PLACEHOLDER, bookCoverUrl, openLibraryCoverUrl } from "@/lib/book-cover"

interface BookCoverImageProps {
  book: { id: string; link: string; imageUrl: string; title: string }
  className?: string
  sizes?: string
}

export default function BookCoverImage({
  book,
  className,
  sizes = "(max-width: 768px) 100vw, 20vw",
}: BookCoverImageProps) {
  const [src, setSrc] = useState(() => bookCoverUrl(book))
  const [fallbackStage, setFallbackStage] = useState(0)

  return (
    <Image
      src={src}
      alt={book.title}
      fill
      className={cn("object-cover", className)}
      sizes={sizes}
      onError={() => {
        if (fallbackStage === 0) {
          setFallbackStage(1)
          setSrc(openLibraryCoverUrl(book.link))
          return
        }
        if (fallbackStage === 1 && src !== BOOK_COVER_PLACEHOLDER) {
          setFallbackStage(2)
          setSrc(BOOK_COVER_PLACEHOLDER)
        }
      }}
    />
  )
}
