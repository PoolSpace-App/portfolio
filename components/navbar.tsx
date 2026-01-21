"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import { Menu, X } from "lucide-react"
import Logo from "./logo"

export default function Navbar({ variant = "default" }: { variant?: "default" | "white" }) {
  const pathname = usePathname()
  const isWhiteVariant = variant === "white"
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [width, setWidth] = useState(0)
  
  // Determine if we're on mobile
  const isMobile = width < 768;
  
  // Handle component mounting
  useEffect(() => {
    setMounted(true)
    setWidth(window.innerWidth)
    
    const handleResize = () => {
      setWidth(window.innerWidth)
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])
  
  // Close menu when clicking outside
  useEffect(() => {
    if (!isMenuOpen) return;
    
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest('[data-menu="true"]') && !target.closest('[data-menu-button="true"]')) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isMenuOpen])

  // Lock scroll when menu is open
  useEffect(() => {
    if (isMenuOpen && isMobile) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen, isMobile])
  
  const navItems = [
    { name: "PORTFOLIO", path: "/" },
    { name: "blogs", path: "/blog" },
    { name: "COACHING", path: "/Coaching" },
    { name: "MORE ABOUT ME", path: "/info" },
  ]
  
  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsMenuOpen(!isMenuOpen)
  }

  // Don't render anything until we've measured the viewport
  if (!mounted) return null;
  
  // Mobile sidebar menu
  if (isMobile) {
    return (
      <>
        <div className="w-full flex justify-between items-center h-[40px]">
          {/* Logo on the left */}
          <div className="w-10 h-10 flex items-center">
            <Logo variant={isWhiteVariant ? "dark" : "light"} />
          </div>
          
          {/* Menu button on the right */}
          <button 
            onClick={toggleMenu} 
            data-menu-button="true"
            className="relative z-[5002]"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className={`w-6 h-6 ${isWhiteVariant ? 'text-black' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isWhiteVariant ? 'text-black' : 'text-white'}`} />
            )}
          </button>
        </div>
        
        {/* Mobile Menu Portal */}
        {isMobile && mounted && createPortal(
          <>
            {/* Overlay */}
            {isMenuOpen && (
              <div 
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100000]"
                onClick={() => setIsMenuOpen(false)}
              />
            )}
            
            {/* Sidebar */}
            <div 
              data-menu="true"
              className={`fixed top-0 left-0 bottom-0 w-64 bg-white text-black p-8 z-[100001] transform transition-transform duration-300 ease-in-out shadow-2xl overflow-y-auto ${
                isMenuOpen ? 'translate-x-0' : '-translate-x-full'
              }`}
            >
              <div className="mb-12 w-10 h-10">
                <Logo variant="dark" />
              </div>
              <nav className="flex flex-col space-y-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    className={`group text-lg relative pb-1 hover-glitch ${
                      pathname === item.path
                        ? "after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-black"
                        : "hover:opacity-70 transition-opacity"
                    } text-black`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </>,
          document.body
        )}
      </>
    );
  }
  
  // Desktop navbar
  return (
    <div className="w-full flex justify-between items-center h-[40px]">
      {/* Logo on the left */}
      <div className="w-10 h-10 flex items-center">
        <Logo variant={isWhiteVariant ? "dark" : "light"} />
      </div>
      
      {/* Navigation links on the right */}
      <nav className="flex space-x-8 text-xs">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.path}
            className={`group relative pb-1 hover-glitch ${
              pathname === item.path
                ? `after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-${isWhiteVariant ? 'black' : 'white'}`
                : "hover:opacity-70 transition-opacity"
            } ${isWhiteVariant ? 'text-black' : 'text-white'}`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
