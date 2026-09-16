"use client"

import { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"
import CoachingProfileCards from "@/components/expandable-card-demo"
import PortfolioBleedLine from "@/components/portfolio-bleed-line"
import Testimonials from "@/components/testimonials"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import type { FAQ } from "@/lib/notion"
import { coachingTestimonials } from "@/lib/testimonials"

export default function CoachingPage() {
  const [faqs, setFaqs] = useState<FAQ[]>([])

  useEffect(() => {
    fetch("/api/faqs")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setFaqs(data)
        }
      })
      .catch((err) => console.error("Error fetching FAQs:", err))
  }, [])

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="portfolio-dot-grid relative bg-white">
        <PortfolioBleedLine />

        <div className="portfolio-layout-guides relative mx-auto w-full py-10 lg:py-14">
          <div className="w-full min-w-0 px-5 md:px-8">
            <div className="portfolio-line-nodes portfolio-line-nodes-top portfolio-border-x bg-white p-8 md:p-10 lg:p-12">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
                Coaching
              </h1>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-500 md:text-base">
                I mentor junior UX designers with an annual goal of coaching 6+ designers a year.
                My approach is a structured 2-month program where designers work through
                comprehensive case studies — ideation, research, AI integration, and Cursor
                workflows — with direct mentorship throughout.
              </p>
            </div>
          </div>

          <PortfolioBleedLine />

          <div className="w-full min-w-0 px-5 md:px-8">
            <div className="portfolio-line-nodes portfolio-line-nodes-y overflow-visible portfolio-border-x bg-white">
              <CoachingProfileCards />
            </div>
          </div>

          <PortfolioBleedLine />

          <div className="w-full min-w-0 px-5 md:px-8">
            <div className="portfolio-line-nodes portfolio-line-nodes-y overflow-visible portfolio-border-x bg-white">
              <div className="p-8 md:p-10 lg:p-12">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                  Testimonials from students who have completed the coaching program
                </h2>
              </div>
              <div className="portfolio-dashed-divider-bleed" aria-hidden />
              <Testimonials data={coachingTestimonials} />
            </div>
          </div>

          {faqs.length > 0 ? (
            <>
              <PortfolioBleedLine />

              <div className="w-full min-w-0 px-5 md:px-8">
                <div className="portfolio-line-nodes portfolio-line-nodes-bottom overflow-visible portfolio-border-x bg-white">
                  <div className="p-8 md:p-10 lg:p-12">
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                      UX Coaching – Frequently Asked Questions
                    </h2>
                    <Accordion type="single" collapsible className="mt-8 w-full">
                      {faqs.map((faq, index) => (
                        <AccordionItem
                          key={index}
                          value={`item-${index}`}
                          className="border-dashed border-slate-200"
                        >
                          <AccordionTrigger className="py-6 text-left text-lg font-medium text-slate-900 transition-colors hover:text-slate-600 hover:no-underline md:text-xl">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="pb-6 text-base text-slate-500">
                            <div className="prose prose-slate max-w-none prose-p:text-slate-500">
                              <ReactMarkdown>{faq.answer}</ReactMarkdown>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </div>
              </div>

              <PortfolioBleedLine />
            </>
          ) : (
            <PortfolioBleedLine />
          )}
        </div>
      </section>
    </main>
  )
}
