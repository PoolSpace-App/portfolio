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
        <h1 className="text-4xl md:text-5xl font-medium mb-4 text-blue-950">Blog</h1>
          <p className="text-xl text-blue-950 mb-16 max-w-2xl">
            My thoughts on design, technology, and the creative process. Sharing insights from my journey as a Product Designer.
          </p>
        {/* Canvas Reveal Effect Demo */}
        <CanvasRevealEffectDemo />
      </div>
    </div>
  )
}
