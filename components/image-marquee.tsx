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
              className="relative w-[1100px] md:w-[1100px] aspect-[4/3] rounded-[72px] overflow-hidden border border-gray-200/10 group"
            >
              <Image
                src={src}
                alt={`Portfolio image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
