"use client"

import dynamic from "next/dynamic"

const TargetCursor = dynamic(() => import("@/components/TargetCursor"), {
  ssr: false,
})

export default function TargetCursorRoot() {
  return <TargetCursor spinDuration={2} hideDefaultCursor parallaxOn />
}
