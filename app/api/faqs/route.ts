import { getFAQsFromNotion } from "@/lib/notion";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const faqs = await getFAQsFromNotion();
    return NextResponse.json(faqs);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch FAQs" }, { status: 500 });
  }
}
