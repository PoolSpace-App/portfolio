"use client"

import React from "react"
import Image from "next/image"
import { testimonials as defaultTestimonials, type Testimonial } from "@/lib/testimonials"

interface TestimonialsProps {
  data?: Testimonial[];
}

export default function Testimonials({ data }: TestimonialsProps) {
  const displayTestimonials = data || defaultTestimonials;

  return (
    <div className="container mx-auto px-4 pb-24">
      <div className="max-w-7xl mx-auto flex flex-col gap-24">
        {displayTestimonials && displayTestimonials.map((testimonial) => (
          <div key={testimonial.id} className="pt-12 border-t border-gray-200">
            <div className="flex items-center gap-4 mb-12">
              <div className="relative w-16 h-16 overflow-hidden rounded-full border border-gray-100">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=random`;
                  }}
                />
              </div>
              <div>
                <h4 className="text-2xl font-bold tracking-tight">{testimonial.name}</h4>
                <p className="text-gray-500 text-sm font-medium">
                  {testimonial.role} - {testimonial.company}
                </p>
              </div>
            </div>
            <blockquote className="text-4xl md:text-6xl font-normal leading-tight tracking-tight max-w-5xl">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
          </div>
        ))}
      </div>
    </div>
  )
}
