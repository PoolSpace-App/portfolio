"use client"

import Navbar from "./navbar"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-[10000] w-full border-b border-slate-200/90 bg-white/95 backdrop-blur-lg supports-[backdrop-filter]:bg-white/90">
      <div className="container mx-auto px-4 py-4 md:py-5">
        <Navbar />
      </div>
    </header>
  )
}
