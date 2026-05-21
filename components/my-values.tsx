"use client"

import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { cn } from "@/lib/utils"
import GridLinesBackground from "@/components/grid-lines-background"
import { textRevealFrom, textRevealTo } from "@/lib/text-reveal"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const values = [
  {
    id: "transparency",
    title: "Transparency",
    description:
      "I believe in openness by default. Clear intentions, honest feedback, and visibility into decisions build trust and help teams move faster.",
  },
  {
    id: "collaboration",
    title: "Collaboration",
    description:
      "Great products aren't built alone. I work closely with founders, engineers, and product partners — sharing ownership and solving problems together.",
  },
  {
    id: "experimentation",
    title: "Experimentation",
    description:
      "If something isn't working, we change it. I value testing ideas early, learning quickly, and iterating based on real feedback rather than assumptions.",
  },
  {
    id: "communication",
    title: "Communication",
    description:
      "I prioritise clear, direct communication. I ask questions early, raise concerns quickly, and ask for help when I'm stuck — because progress matters more than pride.",
  },
  {
    id: "humility",
    title: "Humility",
    description:
      "No egos. I care more about the outcome than being right, and I'm always open to learning from others, regardless of role or title.",
  },
  {
    id: "over-deliver",
    title: "Over-deliver",
    description:
      "I aim to exceed expectations in every project, going the extra mile to ensure quality and impact.",
  },
  {
    id: "trust-autonomy",
    title: "Trust & autonomy",
    description:
      "I thrive in remote environments built on trust. I take ownership of my work, manage my time responsibly, and deliver without needing constant oversight.",
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
        "value-bento-card flex h-full flex-col rounded-[40px] bg-neutral-100 p-6 md:p-8",
        className
      )}
    >
      <h3 className="mb-3 text-lg font-semibold tracking-tight text-blue-950 md:text-xl">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-slate-600 md:text-base">{description}</p>
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
    <section ref={sectionRef} className="relative overflow-hidden bg-[#ffffff] py-16 text-blue-950">
      <GridLinesBackground fade="top" />
      <div className="relative z-10 container mx-auto px-4 pt-10">
        <div className="mb-12 max-w-2xl">
          <h2
            data-values-animate="scroll"
            className="text-3xl font-semibold leading-tight tracking-tight text-blue-950 md:text-4xl lg:text-5xl"
          >
            The values I work by
          </h2>
          <p
            data-values-animate="scroll"
            className="mt-6 text-base leading-relaxed text-slate-600 lg:text-lg"
          >
            These values shape how I collaborate, make decisions, and build products — especially
            in remote, fast-moving teams.
          </p>
        </div>

        <div className="mb-24">
          <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {values.slice(0, 2).map((value) => (
              <ValueBentoCard
                key={value.id}
                title={value.title}
                description={value.description}
              />
            ))}
          </div>

          <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            {values.slice(2, 5).map((value) => (
              <ValueBentoCard
                key={value.id}
                title={value.title}
                description={value.description}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {values.slice(5).map((value) => (
              <ValueBentoCard
                key={value.id}
                title={value.title}
                description={value.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
