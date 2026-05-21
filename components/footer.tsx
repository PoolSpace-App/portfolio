"use client"

import { useState } from "react"
import GridLinesBackground from "@/components/grid-lines-background"
import Logo from "./logo"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [hoveredWord, setHoveredWord] = useState<number | null>(null)

  const largeText = "Get in touch Let's work"
  const words = largeText.split(" ")

  return (
    <footer className="relative overflow-hidden bg-[#050510] px-4 pb-20 pt-32 text-white md:px-8">
      <GridLinesBackground variant="dark" fade="top" />
      <div className="relative z-10 container mx-auto max-w-6xl">
        <div className="mb-12 flex justify-center">
          <div className="scale-150 transform">
            <Logo variant="light" />
          </div>
        </div>

        <div className="mb-4 text-center text-4xl font-light md:text-5xl">
          Turning ideas into products people love.
        </div>

        <p className="mx-auto mb-20 max-w-3xl text-center text-gray-400">
          Transforming ideas into thoughtful, scalable digital products designed for real people and real
          impact.
        </p>

        <div className="mb-20 grid grid-cols-1 justify-center gap-12 text-center md:grid-cols-2">
          <div>
            <div className="mb-6 text-lg">Contact</div>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="mailto:nqovun@gmail.com" className="transition-colors hover:text-white hover-glitch">
                  nqovun@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+27723003008" className="transition-colors hover:text-white hover-glitch">
                  +27 72 300 3008
                </a>
              </li>
              <li>Johannesburg, South Africa</li>
            </ul>
          </div>

          <div>
            <div className="mb-6 text-lg">How I Help Teams</div>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Turning ideas into production-ready products</li>
              <li>Simplifying complex workflows</li>
              <li>Designing scalable user experiences</li>
              <li>Bridging design and engineering</li>
              <li>Accelerating product teams with AI workflows</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between border-t border-gray-800 pt-8 md:flex-row">
          <div className="mb-4 flex space-x-8 md:mb-0">
            <a
              href="https://dribbble.com/mrnqoe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-400 transition-colors hover:text-white hover-glitch"
            >
              Dribbble
            </a>
            <a
              href="https://www.linkedin.com/in/mrq/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-400 transition-colors hover:text-white hover-glitch"
            >
              LinkedIn
            </a>
            <a href="/contact" className="text-xs text-gray-400 transition-colors hover:text-white hover-glitch">
              Let&apos;s Chat
            </a>
          </div>
          <div className="text-xs text-gray-500">
            © {currentYear} Made in Johannesburg, South Africa with love.
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-32 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap">
          <div className="inline-flex">
            {[...Array(4)].map((_, copyIndex) => (
              <div key={copyIndex} className="flex">
                {words.map((word, wordIndex) => (
                  <span
                    key={`${copyIndex}-${wordIndex}`}
                    className={`mx-4 cursor-default text-7xl font-bold text-white opacity-10 transition-all duration-300 hover:opacity-30 md:text-9xl ${
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
