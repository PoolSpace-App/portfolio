"use client"

import Navbar from "@/components/navbar"
import CanvasRevealEffectDemo from "@/components/canvas-reveal-effect-demo"

export default function CoachingPage() {
  return (
    <div className="min-h-screen bg-white relative">
      {/* White header variant */}
      <header className="container mx-auto px-4 py-8 flex justify-between items-center bg-white text-blue-950 border-b border-gray-200">
        <Navbar variant="white" />
      </header>

      {/* Main content */}
      <div className="container mx-auto px-4 py-4">
        <div className="text-3xl my-4 font-light text-center text-black">People I've Coached</div>
        {/* Canvas Reveal Effect Demo */}
        <CanvasRevealEffectDemo />
      </div>
    </div>
  )
}
