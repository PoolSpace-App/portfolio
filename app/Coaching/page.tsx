"use client"

import CoachingProfileCards from "@/components/expandable-card-demo"
import Testimonials from "@/components/testimonials"
import { coachingTestimonials } from "@/lib/testimonials"
import { useState, useEffect } from "react"
import ReactMarkdown from "react-markdown"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import type { FAQ } from "@/lib/notion"

export default function CoachingPage() {
  const [faqs, setFaqs] = useState<FAQ[]>([])

  useEffect(() => {
    fetch('/api/faqs')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setFaqs(data)
        }
      })
      .catch(err => console.error("Error fetching FAQs:", err))
  }, [])

  return (
    <div className="min-h-screen bg-white relative text-blue-950">
      {/* Main content */}
      <div className="container mx-auto pt-32 pb-32">
        <div className="px-4">
          <h1 className="text-4xl md:text-7xl font-medium mb-4 text-blue-950">Coaching</h1>
          <p className="text-xl text-blue-950 mb-16">
          I mentor junior UX designers with an annual goal of coaching 6+ designers a year. <br />
          <br />
          My approach involves a structured 2-month program where designers work through comprehensive case studies, covering ideation, research methodologies, AI integration, and Cursor workflows with direct mentorship throughout.
          </p>
        </div>
        {/* Coaching profile cards with expandable details */}
        <CoachingProfileCards />
      </div>

      {/* Testimonials section */}
      <div className="w-full bg-white text-blue-950 py-24 mt-24">
        <div className="container mx-auto px-4 mb-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-medium text-blue-950">Testimonials from students who have completed the coaching program</h2>
          </div>
        </div>
        <Testimonials data={coachingTestimonials} />
      </div>

      {/* FAQ section */}
      {faqs.length > 0 && (
        <div className="container mx-auto px-4 pb-32">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-medium mb-12 text-blue-950">UX Coaching – Frequently Asked Questions (FAQs)</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-gray-200">
                  <AccordionTrigger className="text-xl md:text-2xl font-medium text-left py-6 text-blue-950 hover:text-blue-800 transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-lg text-blue-950/70 pb-6">
                    <div className="prose prose-blue-950 max-w-none">
                      <ReactMarkdown>{faq.answer}</ReactMarkdown>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      )}
    </div>
  )
}
