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
    <div ref={containerRef} className="grid items-start gap-0 lg:grid-cols-2">
      <div className="p-8 text-sm leading-relaxed text-slate-500 md:p-10 md:text-base lg:p-12 lg:portfolio-border-r">
        {children}
      </div>
      <div
        data-about-animate="load"
        className="hero-profile-card-container about-profile-card-frame p-8 md:p-10 lg:sticky lg:top-32 lg:self-start lg:p-12"
      >
        <div className="about-profile-card-guides" aria-hidden>
          <span className="about-profile-card-outline" />
        </div>
        <ProfileCard
          className="hero-profile-card about-profile-card h-full w-full"
          avatarUrl="/cover-image.png"
          iconUrl="/profile-card/iconpattern.png"
          grainUrl="/profile-card/grain.webp"
          innerGradient="linear-gradient(145deg,#64748b8c 0%,#94a3b844 100%)"
          name="Nqobile Vundla"
          title="Product Designer & Builder"
          showUserInfo={false}
          behindGlowColor="rgba(148, 163, 184, 0.45)"
          behindGlowSize="45%"
        />
      </div>
    </div>
  )
}
