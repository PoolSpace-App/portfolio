"use client"

import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { cn } from "@/lib/utils"
import { textRevealFrom, textRevealTo } from "@/lib/text-reveal"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const values = [
  {
    id: "transparency",
    title: "Transparency",
    description:
      "I believe clear communication, honest feedback, and transparency create stronger products, better collaboration, and faster-moving teams.",
    className: "md:col-span-3",
  },
  {
    id: "collaboration",
    title: "Collaboration",
    description:
      "Great products come from strong partnerships — working closely with founders, project managers, engineers, and product teams to solve problems together and move ideas forward.",
    className: "md:col-span-3",
  },
  {
    id: "experimentation",
    title: "Experimentation",
    description:
      "I believe in testing ideas early, learning quickly, and improving continuously through real feedback instead of assumptions.",
    className: "md:col-span-2",
  },
  {
    id: "communication",
    title: "Communication",
    description:
      "I value direct communication, asking questions early, raising concerns quickly, and seeking help when needed — because progress matters more than ego.",
    className: "md:col-span-2",
  },
  {
    id: "humility",
    title: "Humility",
    description:
      "I care more about building the right outcome than being right, and I'm always open to learning from others — regardless of role or title.",
    className: "md:col-span-2",
  },
  {
    id: "over-deliver",
    title: "Over-deliver",
    description:
      "I aim to deliver thoughtful, high-quality work in every project — always pushing further to create meaningful impact.",
    className: "md:col-span-3",
  },
  {
    id: "trust-autonomy",
    title: "Trust & autonomy",
    description:
      "I thrive in trust-based remote environments — taking ownership, managing my time responsibly, and delivering consistently without needing constant oversight.",
    className: "md:col-span-3",
  },
]

function ValueBentoCard({
  title,
  description,
  className,
}: {
  title: string
  description: string
  className?: string
}) {
  return (
    <div
      className={cn(
        "cursor-target value-bento-card group relative flex h-full flex-col overflow-visible bg-white p-8 md:p-10",
        className
      )}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 z-40 border border-dashed border-transparent transition-[border-color] group-hover:border-slate-900"
      />
      <h3 className="mb-3 text-lg font-semibold tracking-tight text-slate-900 md:text-xl">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-slate-500 md:text-base">{description}</p>
    </div>
  )
}

export default function MyValues() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const scrollTexts = gsap.utils.toArray<HTMLElement>(
        "[data-values-animate='scroll']",
        sectionRef.current
      )

      scrollTexts.forEach((el) => {
        gsap.fromTo(el, textRevealFrom, {
          ...textRevealTo,
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        })
      })

      const cards = gsap.utils.toArray<HTMLElement>(".value-bento-card", sectionRef.current)
      if (cards.length > 0) {
        gsap.fromTo(cards, textRevealFrom, {
          ...textRevealTo,
          stagger: 0.08,
          scrollTrigger: {
            trigger: cards[0],
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        })
      }
    },
    { scope: sectionRef }
  )

  return (
    <section ref={sectionRef} className="bg-white text-slate-900">
      <div className="p-8 md:p-10 lg:p-12">
        <h2
          data-values-animate="scroll"
          className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl"
        >
          The values I work by
        </h2>
        <p
          data-values-animate="scroll"
          className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-500 md:text-base"
        >
          These values shape how I collaborate, make decisions, and build products — especially in
          remote, fast-moving teams.
        </p>
      </div>

      <div className="portfolio-dashed-divider-bleed" aria-hidden />

      <div className="grid grid-cols-1 divide-y divide-dashed divide-slate-200 overflow-visible md:grid-cols-6 md:divide-x md:divide-y">
        {values.map((value) => (
          <ValueBentoCard
            key={value.id}
            title={value.title}
            description={value.description}
            className={value.className}
          />
        ))}
      </div>
    </section>
  )
}
