"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import { Dribbble, LinkedIn, Mail, Menu, X } from "@/components/icons"
import Logo from "./logo"

export default function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [width, setWidth] = useState(0)

  const isMobile = width < 768

  useEffect(() => {
    setMounted(true)
    setWidth(window.innerWidth)

    const handleResize = () => {
      setWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!isMenuOpen) return

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false)
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [isMenuOpen])

  useEffect(() => {
    if (!isMenuOpen) return

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest('[data-menu="true"]') && !target.closest('[data-menu-button="true"]')) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [isMenuOpen])

  useEffect(() => {
    if (isMenuOpen && isMobile) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen, isMobile])

  const navItems = [
    { name: "Portfolio", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: "Coaching", path: "/Coaching" },
    { name: "Books", path: "/books" },
    { name: "About", path: "/info" },
  ]

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/mrq/",
      label: "LinkedIn",
      icon: LinkedIn,
      external: true,
    },
    {
      href: "https://dribbble.com/mrnqoe",
      label: "Dribbble",
      icon: Dribbble,
      external: true,
    },
    {
      href: "mailto:nqovun@gmail.com",
      label: "Email",
      icon: Mail,
      external: false,
    },
  ] as const

  const socialLinkClass =
    "group relative inline-flex items-center gap-2 pb-1 text-blue-950 transition-colors duration-300 hover:text-blue-600"

  const socialLinkUnderlineClass =
    "absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-blue-600 transition-transform duration-300 ease-out group-hover:scale-x-100"

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsMenuOpen(!isMenuOpen)
  }

  const copyEmail = (e: React.MouseEvent) => {
    e.preventDefault()
    navigator.clipboard.writeText("nqovun@gmail.com").then(() => {
      const toast = document.createElement("div")
      toast.className =
        "fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-full shadow-lg z-50 text-sm"
      toast.innerText = "Email copied to clipboard!"
      document.body.appendChild(toast)

      setTimeout(() => {
        toast.classList.add("opacity-0", "transition-opacity", "duration-300")
        setTimeout(() => {
          document.body.removeChild(toast)
        }, 300)
      }, 3000)
    })
  }

  const showMobileLayout = mounted && isMobile

  if (showMobileLayout) {
    return (
      <>
        <div className="flex h-12 w-full items-center justify-between">
          <div className="flex h-12 w-12 items-center">
            <Logo variant="dark" />
          </div>

          <button
            onClick={toggleMenu}
            data-menu-button="true"
            className="relative z-[5002]"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6 text-blue-950" /> : <Menu className="h-6 w-6 text-blue-950" />}
          </button>
        </div>

        {createPortal(
          <>
            {isMenuOpen && (
              <div
                className="fixed inset-0 z-[100000] bg-black/40 backdrop-blur-sm"
                onClick={() => setIsMenuOpen(false)}
              />
            )}

            <div
              data-menu="true"
              className={`fixed left-0 top-0 z-[100001] flex h-full w-[90%] transform flex-col bg-white p-8 shadow-2xl transition-transform duration-300 ease-in-out ${
                isMenuOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <div className="mb-8 flex items-center justify-end">
                <button
                  type="button"
                  onClick={() => setIsMenuOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full text-blue-950 transition-colors hover:bg-slate-100"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <nav className="flex flex-1 flex-col space-y-6">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    className={`text-lg font-medium ${
                      pathname === item.path ? "text-blue-600" : "text-slate-600 hover:text-blue-600"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-3">
                <button onClick={copyEmail} className="btn-secondary w-full">
                  Let&apos;s chat
                </button>
                <Link href="/#projects" className="btn-primary w-full" onClick={() => setIsMenuOpen(false)}>
                  View work
                </Link>
              </div>
              <div className="mt-10 pt-6">
                <div className="mb-4 flex justify-center">
                  <Logo variant="dark" />
                </div>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium">
                  {socialLinks.map(({ href, label, icon: Icon, external }) => (
                    <a
                      key={label}
                      href={href}
                      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className={socialLinkClass}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Icon className="h-4 w-4" />
                      {label}
                      <span aria-hidden className={socialLinkUnderlineClass} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </>,
          document.body
        )}
      </>
    )
  }

  return (
    <div className="grid h-12 w-full grid-cols-[1fr_auto_1fr] items-center">
      <div className="flex h-12 w-12 items-center">
        <Logo variant="dark" />
      </div>

      <nav className="hidden items-center gap-8 md:flex">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.path}
            className={`text-sm font-medium transition-colors ${
              pathname === item.path ? "text-blue-600" : "text-slate-600 hover:text-blue-600"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="flex items-center justify-end gap-3">
        <button
          onClick={copyEmail}
          className="hidden text-sm font-medium text-slate-600 transition-colors hover:text-blue-600 sm:inline-flex"
        >
          Let&apos;s chat
        </button>
        <Link href="/#projects" className="btn-primary">
          View work
        </Link>
      </div>
    </div>
  )
}
