"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

export default function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const pathname = usePathname()
  const logoSrc = variant === "dark" ? "/logo_dark.png" : "/logo_light.png"

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <Link href="/" onClick={handleClick} className="text-2xl font-bold hover-glitch">
      <div className="w-10 h-10 relative">
        <Image
          src={logoSrc}
          alt="Logo"
          width={40}
          height={40}
          className="object-contain"
        />
      </div>
    </Link>
  )
}
