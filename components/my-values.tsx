"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import LightPillar from "@/components/LightPillar/LightPillar"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const values = [
  {
    id: "transparency",
    title: "Transparency",
    description: "I believe in openness by default. Clear intentions, honest feedback, and visibility into decisions build trust and help teams move faster.",
    image: "/placeholder.jpg"
  },
  {
    id: "collaboration",
    title: "Collaboration",
    description: "Great products aren’t built alone. I work closely with founders, engineers, and product partners — sharing ownership and solving problems together.",
    image: "/placeholder.jpg"
  },
  {
    id: "experimentation",
    title: "Experimentation",
    description: "If something isn’t working, we change it. I value testing ideas early, learning quickly, and iterating based on real feedback rather than assumptions.",
    image: "/placeholder.jpg"
  },
  {
    id: "communication",
    title: "Communication",
    description: "I prioritise clear, direct communication. I ask questions early, raise concerns quickly, and ask for help when I’m stuck — because progress matters more than pride.",
    image: "/placeholder.jpg"
  },
  {
    id: "humility",
    title: "Humility",
    description: "No egos. I care more about the outcome than being right, and I’m always open to learning from others, regardless of role or title.",
    image: "/placeholder.jpg"
  },
  {
    id: "over-deliver",
    title: "Over-deliver",
    description: "I aim to exceed expectations in every project, going the extra mile to ensure quality and impact.",
    image: "/placeholder.jpg"
  },
  {
    id: "trust-autonomy",
    title: "Trust & autonomy",
    description: "I thrive in remote environments built on trust. I take ownership of my work, manage my time responsibly, and deliver without needing constant oversight.",
    image: "/placeholder.jpg"
  }
]

export default function MyValues() {
  const [activeTab, setActiveTab] = useState(values[0].id)
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const tabsRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const activeValue = values.find((v) => v.id === activeTab) || values[0]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 1.8,
            ease: "expo.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        )
      }

      // Tabs animation
      if (tabsRef.current) {
        const tabs = tabsRef.current.querySelectorAll("button")
        gsap.fromTo(
          tabs,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 1.5,
            ease: "expo.out",
            scrollTrigger: {
              trigger: tabsRef.current,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        )
      }

      // Content area animation
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, scale: 0.98, y: 30 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 2,
            ease: "expo.out",
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-16 bg-[#ffffff] text-blue-950">
      <div className="container mx-auto px-4">
        <div ref={headerRef} className="max-w-4xl mb-12">
          <h2 className="text-4xl md:text-6xl font-medium mb-2">The values I work by</h2>
          <p className="text-blue-950/50 text-lg md:text-xl leading-relaxed">
          These values shape how I collaborate, make decisions, and build products — especially in remote, fast-moving teams.
          </p>
        </div>

        {/* Tabs Navigation */}
        <div ref={tabsRef} className="flex flex-wrap gap-x-8 gap-y-4 mb-12 pb-4">
          {values.map((value) => (
            <button
              key={value.id}
              onClick={() => setActiveTab(value.id)}
              className={`text-lg md:text-xl font-medium transition-all relative pb-4 ${
                activeTab === value.id ? "text-blue-400" : "text-blue-950 hover:text-blue-400"
              }`}
            >
              {value.title}
              {activeTab === value.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div ref={contentRef} className="relative h-[500px] md:h-[600px] rounded-[64px] overflow-hidden bg-[#050510] mb-24">
          <div className="absolute inset-0 z-0">
            <LightPillar 
              intensity={0.6}
              rotationSpeed={0.15}
              pillarWidth={3.5}
              pillarHeight={0.4}
              topColor="#5227FF"
              bottomColor="#FF9FFC"
            />
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 z-10"
            >
              {/* Left Column: Content */}
              <div className="p-8 md:p-16 flex flex-col justify-center">
                <div className="bg-white/5 backdrop-blur-xl p-10 md:p-14 rounded-[48px] border border-white/10 shadow-2xl">
                  <h3 className="text-4xl md:text-4xl font-medium mb-4 text-white">{activeValue.title}</h3>
                  <p className="text-gray-200 font-lighttext-lg md:text-lg leading-relaxed">
                    {activeValue.description}
                  </p>
                </div>
              </div>

              {/* Right Column: Empty for now */}
              <div className="hidden md:block w-full h-full" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
