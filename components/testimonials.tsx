"use client"

import Image from "next/image"
import { testimonials as defaultTestimonials, type Testimonial } from "@/lib/testimonials"

interface TestimonialsProps {
  data?: Testimonial[]
}

export default function Testimonials({ data }: TestimonialsProps) {
  const displayTestimonials = data || defaultTestimonials

  return (
    <div className="divide-y divide-dashed divide-slate-200">
      {displayTestimonials.map((testimonial) => (
        <div key={testimonial.id} className="p-8 md:p-10 lg:p-12">
          <div className="mb-8 flex items-center gap-4">
            <div className="relative size-16 shrink-0 overflow-hidden border border-dashed border-slate-200 bg-slate-50">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                fill
                className="object-cover grayscale"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=e2e8f0&color=0f172a`
                }}
              />
            </div>
            <div>
              <h4
                data-home-animate="scroll"
                className="text-lg font-semibold tracking-tight text-slate-900 md:text-xl"
              >
                {testimonial.name}
              </h4>
              <p data-home-animate="scroll" className="text-sm font-medium text-slate-500">
                {testimonial.role} — {testimonial.company}
              </p>
            </div>
          </div>
          <blockquote
            data-home-animate="scroll"
            className="max-w-5xl text-2xl font-normal leading-tight tracking-tight text-slate-800 md:text-4xl"
          >
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>
        </div>
      ))}
    </div>
  )
}
