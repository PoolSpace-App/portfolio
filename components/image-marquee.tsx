"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const images = [
  "https://picsum.photos/id/1/800/600",
  "https://picsum.photos/id/2/800/600",
  "https://picsum.photos/id/3/800/600",
  "https://picsum.photos/id/4/800/600",
  "https://picsum.photos/id/5/800/600",
  "https://picsum.photos/id/6/800/600",
  "https://picsum.photos/id/7/800/600",
  "https://picsum.photos/id/8/800/600",
  "https://picsum.photos/id/9/800/600",
  "https://picsum.photos/id/10/800/600",
]

export default function ImageMarquee() {
  // Duplicate the images array to create a seamless loop
  const duplicatedImages = [...images, ...images]

  return (
    <div className="w-full overflow-hidden bg-[#ffffff] py-20">
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
              className="relative w-[1100px] md:w-[1100px] aspect-[4/3] rounded-[72px] overflow-hidden border border-white/5 group"
            >
              <Image
                src={src}
                alt={`Portfolio image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                unoptimized // Using external placeholder images
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
