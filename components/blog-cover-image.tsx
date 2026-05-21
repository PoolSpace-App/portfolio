import Image from "next/image"
import { cn } from "@/lib/utils"
import { BLOG_COVER_BLUR, BLOG_COVER_SIZES } from "@/lib/notion-cover-image"

interface BlogCoverImageProps {
  src: string
  alt: string
  priority?: boolean
  className?: string
}

export default function BlogCoverImage({
  src,
  alt,
  priority = false,
  className,
}: BlogCoverImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={BLOG_COVER_SIZES}
      priority={priority}
      placeholder="blur"
      blurDataURL={BLOG_COVER_BLUR}
      className={cn("object-cover", className)}
    />
  )
}
