"use client"

import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import ProfileCard from "@/components/ProfileCard"
import { textRevealFrom, textRevealTo } from "@/lib/text-reveal"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function InfoAboutLayout({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const loadTexts = gsap.utils.toArray<HTMLElement>(
        "[data-about-animate='load']",
        containerRef.current
      )

      if (loadTexts.length > 0) {
        gsap.fromTo(loadTexts, textRevealFrom, {
          ...textRevealTo,
          stagger: 0.12,
          delay: 0.1,
        })
      }
    },
    { scope: containerRef }
  )

  return (
    <div ref={containerRef} className="container mx-auto px-4 pt-32 pb-16">
      <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="text-white">{children}</div>
        <div
          data-about-animate="load"
          className="hero-profile-card-container lg:sticky lg:top-32 lg:ml-auto lg:self-start"
        >
          <ProfileCard
            className="hero-profile-card h-full w-full"
            avatarUrl="/cover-image.png"
            iconUrl="/profile-card/iconpattern.png"
            grainUrl="/profile-card/grain.webp"
            name="Nqobile Vundla"
            title="Product Designer & Builder"
            showUserInfo={false}
            behindGlowColor="rgba(113, 196, 255, 0.5)"
            behindGlowSize="45%"
          />
        </div>
      </div>
    </div>
  )
}
