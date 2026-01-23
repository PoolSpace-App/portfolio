import { getAllBlogsFromNotion } from "@/lib/notion";
import { NextResponse } from "next/server";

export const revalidate = 3600; // Cache for 1 hour

export async function GET() {
  try {
    const blogs = await getAllBlogsFromNotion();
    return NextResponse.json(blogs.slice(0, 2));
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 });
  }
}
