"use client"

import Link from "next/link"
import { useState } from "react"
import Image from "next/image"
import Logo from "./logo"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [hoveredWord, setHoveredWord] = useState<number | null>(null)

  // Split the text into individual words for hover effect
  const largeText = "Get in touch Let's work"
  const words = largeText.split(" ")

  return (
    <footer className="bg-[#050510] text-white py-20 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Logo */}
        <div className="flex justify-center mb-12">
          <div className="transform scale-150">
            <Logo variant="light" />
          </div>
        </div>

        {/* Main heading */}
        <div className="text-4xl md:text-5xl font-light text-center mb-4">Are you ready to embark on this adventure?</div>

        {/* Tagline */}
        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-20">
          Great products start by bridging the gap between ideas and user experience. I'm passionate about transforming
          concepts into intuitive user experiences.
        </p>

        {/* Two columns section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 text-center justify-center">
          {/* Contact column */}
          <div>
            <div className="text-lg mb-6">Contact</div>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a href="mailto:nqovun@gmail.com" className="hover:text-white transition-colors hover-glitch">
                  nqovun@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+27723003008" className="hover:text-white transition-colors hover-glitch">
                  +27 72 300 3008
                </a>
              </li>
              <li>Johannesburg, South Africa</li>
            </ul>
          </div>

          {/* Services column */}
          <div>
            <div className="text-lg mb-6">Services</div>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <Link href="/services/product-design" className="hover:text-white transition-colors hover-glitch">
                  Product Design
                </Link>
              </li>
              <li>
                <Link href="/services/ux-design" className="hover:text-white transition-colors hover-glitch">
                  UX Design
                </Link>
              </li>
              <li>
                <Link href="/services/ui-design" className="hover:text-white transition-colors hover-glitch">
                  UI Design
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social links and copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-8">
          <div className="flex space-x-8 mb-4 md:mb-0">
            <a
              href="https://dribbble.com/mrnqoe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 text-xs hover:text-white transition-colors hover-glitch"
            >
              Dribbble
            </a>
            <a
              href="https://www.linkedin.com/in/mrq/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 text-xs hover:text-white transition-colors hover-glitch"
            >
              LinkedIn
            </a>
            <a href="/contact" className="text-gray-400 text-xs hover:text-white transition-colors hover-glitch">
              Let's Chat
            </a>
          </div>
          <div className="text-gray-500 text-xs">© {currentYear} Made in Johannesburg, South Africa with Cursor.</div>
        </div>
      </div>

      {/* Large text at bottom with animation and hover effect */}
      <div className="mt-32 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap">
          <div className="inline-flex">
            {[...Array(4)].map((_, copyIndex) => (
              <div key={copyIndex} className="flex">
                {words.map((word, wordIndex) => (
                  <span
                    key={`${copyIndex}-${wordIndex}`}
                    className={`text-7xl md:text-9xl font-bold text-white opacity-10 mx-4 transition-all duration-300 hover:opacity-30 cursor-default ${
                      hoveredWord === wordIndex ? "glitch-text" : ""
                    }`}
                    onMouseEnter={() => setHoveredWord(wordIndex)}
                    onMouseLeave={() => setHoveredWord(null)}
                    data-text={word}
                  >
                    {word}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
