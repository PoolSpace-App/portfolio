import { NextResponse } from "next/server"
import { getLocalPortfolioAnswer, portfolioKnowledge } from "@/lib/portfolio-knowledge"

export const runtime = "nodejs"

export async function POST(request: Request) {
  const { question } = await request.json().catch(() => ({ question: "" }))
  const cleanQuestion = String(question || "").trim()

  if (!cleanQuestion) {
    return NextResponse.json({ error: "Question is required" }, { status: 400 })
  }

  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json({ ...getLocalPortfolioAnswer(cleanQuestion), source: "local" })
  }

  try {
    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: process.env.PORTFOLIO_AI_MODEL || "gpt-4.1-mini",
        input: [
          {
            role: "system",
            content:
              "You are the AI guide for Nqobile Vundla's portfolio. Answer warmly, confidently and specifically using only the supplied knowledge. Do not invent facts. Return JSON with keys headline, body and focus.",
          },
          {
            role: "user",
            content: `Knowledge base:\n${portfolioKnowledge}\n\nQuestion: ${cleanQuestion}`,
          },
        ],
        text: {
          format: {
            type: "json_schema",
            name: "portfolio_answer",
            schema: {
              type: "object",
              additionalProperties: false,
              properties: {
                headline: { type: "string" },
                body: { type: "string" },
                focus: { type: "string" },
              },
              required: ["headline", "body", "focus"],
            },
          },
        },
      }),
    })

    if (!response.ok) {
      return NextResponse.json({ ...getLocalPortfolioAnswer(cleanQuestion), source: "local" })
    }

    const data = await response.json()
    const text = data.output_text || data.output?.flatMap((item: any) => item.content || []).find((item: any) => item.type === "output_text")?.text
    const answer = JSON.parse(text)

    return NextResponse.json({ ...answer, source: "ai" })
  } catch {
    return NextResponse.json({ ...getLocalPortfolioAnswer(cleanQuestion), source: "local" })
  }
}
