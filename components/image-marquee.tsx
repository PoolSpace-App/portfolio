"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const images = [
  "/marquee/01.jpg",
  "/marquee/02.jpg",
  "/marquee/03.jpg",
  "/marquee/04.jpg",
  "/marquee/05.jpg",
  "/marquee/06.jpg",
  "/marquee/07.jpg",
  "/marquee/08.jpg",
  "/marquee/09.jpg",
  "/marquee/10.jpg",
  "/marquee/11.jpg",
  "/marquee/12.jpg",
  "/marquee/13.jpg",
  "/marquee/14.jpg",
  "/marquee/15.jpg",
  "/marquee/16.jpg",
  "/marquee/17.jpg",
]

export default function ImageMarquee() {
  // Duplicate the images array to create a seamless loop
  const duplicatedImages = [...images, ...images]

  return (
    <div className="w-full overflow-hidden bg-slate-50 py-20">
      <div className="flex w-max">
        <motion.div
          className="flex gap-12 px-12"
          animate={{
            x: ["0%", "-5%"],
          }}
          transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatedImages.map((src, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] w-[min(420px,80vw)] shrink-0 overflow-hidden rounded-[48px] border border-black/5 md:w-[480px]"
            >
              <Image
                src={src}
                alt={`Portfolio image ${index + 1}`}
                fill
                sizes="(max-width: 768px) 80vw, 480px"
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
