import { readFile } from "fs/promises"
import path from "path"
import { Client } from "@notionhq/client"
import { getCoverImageUrlFromPage } from "@/lib/notion-cover-image"
import { NextResponse } from "next/server"

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

export const revalidate = 86400

async function placeholderResponse() {
  try {
    const filePath = path.join(process.cwd(), "public", "placeholder.jpg")
    const buffer = await readFile(filePath)

    return new NextResponse(buffer, {
      headers: {
        "Content-Type": "image/jpeg",
        "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=604800",
      },
    })
  } catch {
    return NextResponse.json({ error: "Cover image not found" }, { status: 404 })
  }
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params

  if (!process.env.NOTION_TOKEN || !id) {
    return placeholderResponse()
  }

  try {
    const page = await notion.pages.retrieve({ page_id: id })
    const imageUrl = getCoverImageUrlFromPage(page)

    if (!imageUrl || imageUrl.startsWith("/")) {
      return placeholderResponse()
    }

    const imageResponse = await fetch(imageUrl, {
      next: { revalidate: 3600 },
    })

    if (!imageResponse.ok) {
      return placeholderResponse()
    }

    const contentType = imageResponse.headers.get("content-type") || "image/jpeg"
    const buffer = await imageResponse.arrayBuffer()

    return new NextResponse(buffer, {
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=604800",
      },
    })
  } catch {
    return placeholderResponse()
  }
}
