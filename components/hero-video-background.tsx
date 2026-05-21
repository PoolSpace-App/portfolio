"use client"

import { useEffect, useRef } from "react"

interface HeroVideoBackgroundProps {
  src?: string
  className?: string
}

export default function HeroVideoBackground({
  src = "/video/hero.mp4",
  className = "",
}: HeroVideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.play().catch(() => {
      // Autoplay may be blocked until user interaction
    })
  }, [src])

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={src} type="video/mp4" />
        <source src={src.replace(/\.mp4$/i, ".webm")} type="video/webm" />
      </video>
      <div
        className="absolute inset-0 bg-[#050510]/30"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#050510]/50 via-[#050510]/20 to-[#050510]/80"
        aria-hidden
      />
    </div>
  )
}
