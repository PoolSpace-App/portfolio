"use client"

import { useState, useEffect } from "react"
import Navbar from "./navbar"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 z-[100] w-full transition-all duration-500 border-b ${
      isScrolled 
        ? "bg-white/40 backdrop-blur-xl border-white/10" 
        : "bg-white border-transparent"
    }`}>
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Navbar variant="white" />
      </div>
    </header>
  )
}
