const PLACEHOLDER = "/placeholder.jpg"

export function getCoverImageUrlFromPage(page: {
  cover?: { external?: { url?: string }; file?: { url?: string } }
  properties?: Record<string, unknown>
}): string {
  const props = page.properties ?? {}
  const coverProp =
    (props.CoverImage as NotionFileProperty | undefined) ||
    (props["Cover Image"] as NotionFileProperty | undefined)

  if (coverProp?.files?.[0]) {
    return coverProp.files[0].file?.url || coverProp.files[0].external?.url || PLACEHOLDER
  }

  if (coverProp?.url) {
    return coverProp.url
  }

  return page.cover?.external?.url || page.cover?.file?.url || PLACEHOLDER
}

export function getBlogCoverSrc(pageId: string, rawUrl: string): string {
  if (!rawUrl || rawUrl === PLACEHOLDER || rawUrl.startsWith("/")) {
    return rawUrl || PLACEHOLDER
  }

  return `/api/blog-cover/${pageId}`
}

type NotionFileProperty = {
  files?: Array<{ file?: { url?: string }; external?: { url?: string } }>
  url?: string
}

export const BLOG_COVER_BLUR =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="

export const BLOG_COVER_SIZES = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 480px"
