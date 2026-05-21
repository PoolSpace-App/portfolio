"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import LightPillar from "@/components/LightPillar/LightPillar"

const VIDEO_SOURCES = [
  "/video/video.mp4",
  "/video/hero.mp4",
  "/video/background.mp4",
]

interface HeroVideoBackgroundProps {
  src?: string
  className?: string
}

export default function HeroVideoBackground({
  src,
  className = "",
}: HeroVideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const sources = src ? [src, ...VIDEO_SOURCES.filter((s) => s !== src)] : VIDEO_SOURCES
  const [sourceIndex, setSourceIndex] = useState(0)
  const [useFallback, setUseFallback] = useState(false)
  const [isReady, setIsReady] = useState(false)

  const currentSrc = sources[sourceIndex]

  const tryNextSource = useCallback(() => {
    setIsReady(false)
    if (sourceIndex < sources.length - 1) {
      setSourceIndex((i) => i + 1)
    } else {
      setUseFallback(true)
    }
  }, [sourceIndex, sources.length])

  useEffect(() => {
    if (useFallback) return
    const video = videoRef.current
    if (!video) return

    video.load()
    video.play().catch(() => {})
  }, [currentSrc, useFallback])

  if (useFallback) {
    return (
      <div className={`absolute inset-0 min-h-full w-full ${className}`}>
        <LightPillar
          intensity={0.7}
          rotationSpeed={0.2}
          pillarWidth={4.0}
          pillarHeight={0.3}
          topColor="#5227FF"
          bottomColor="#FF9FFC"
        />
      </div>
    )
  }

  return (
    <div className={`absolute inset-0 min-h-full w-full overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        key={currentSrc}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden
        onLoadedData={() => setIsReady(true)}
        onCanPlay={() => setIsReady(true)}
        onError={tryNextSource}
        className={`absolute inset-0 h-full w-full min-h-full object-cover transition-opacity duration-700 ${
          isReady ? "opacity-100" : "opacity-0"
        }`}
      >
        <source src={currentSrc} type="video/mp4" />
      </video>
      <div
        className="pointer-events-none absolute inset-0 bg-[#050510]/15"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#050510]/35 via-transparent to-[#050510]/55"
        aria-hidden
      />
    </div>
  )
}
