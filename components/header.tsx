"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Navbar from "./navbar"
import { useLandingNav } from "@/components/landing-nav-provider"

export default function Header() {
  const pathname = usePathname()
  const landingNav = useLandingNav()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (pathname === "/" && landingNav.showProjectNav) {
    return null
  }

  return (
    <header className={`fixed top-0 left-0 z-[10000] w-full transition-all duration-500 border-b overflow-visible ${
      isScrolled 
        ? "bg-black/40 backdrop-blur-xl border-white/10" 
        : "bg-white border-transparent"
    }`}>
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Navbar variant={isScrolled ? "default" : "white"} />
      </div>
    </header>
  )
}
