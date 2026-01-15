"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const values = [
  {
    id: "empathize",
    title: "Empathize",
    description: "I strive to understand and accept people for who they are. Walking in the shoes of users empowers me to deliver solutions that make a real difference.",
    image: "/placeholder.jpg"
  },
  {
    id: "challenge",
    title: "Challenge",
    description: "I don't just accept the status quo. I ask 'why' and challenge assumptions to find better, more innovative ways to solve problems.",
    image: "/placeholder.jpg"
  },
  {
    id: "inspire",
    title: "Inspire",
    description: "I aim to create designs that not only function well but also inspire those who use them and those I work with.",
    image: "/placeholder.jpg"
  },
  {
    id: "improve",
    title: "Improve",
    description: "Design is an iterative process. I'm constantly looking for ways to refine and enhance my work and myself.",
    image: "/placeholder.jpg"
  },
  {
    id: "team-up",
    title: "Team up",
    description: "The best results come from collaboration. I value working closely with diverse teams to bring the best ideas to life.",
    image: "/placeholder.jpg"
  },
  {
    id: "over-deliver",
    title: "Over-deliver",
    description: "I aim to exceed expectations in every project, going the extra mile to ensure quality and impact.",
    image: "/placeholder.jpg"
  },
  {
    id: "enjoy",
    title: "Enjoy",
    description: "Passion drives great design. I believe in finding joy in the creative process and the solutions we build.",
    image: "/placeholder.jpg"
  }
]

export default function MyValues() {
  const [activeTab, setActiveTab] = useState(values[0].id)

  const activeValue = values.find((v) => v.id === activeTab) || values[0]

  return (
    <section className="py-24 bg-[#050510] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mb-16">
          <h2 className="text-4xl md:text-6xl font-light mb-6">The values we live by</h2>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
            These seven values are the cornerstones of my design philosophy and ideology. They define the way I perceive the world and every single process I encounter.
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap gap-x-8 gap-y-4 mb-12 border-b border-white/10 pb-4">
          {values.map((value) => (
            <button
              key={value.id}
              onClick={() => setActiveTab(value.id)}
              className={`text-lg md:text-xl font-medium transition-all relative pb-4 ${
                activeTab === value.id ? "text-purple-400" : "text-gray-500 hover:text-gray-300"
              }`}
            >
              {value.title}
              {activeTab === value.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-400"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="relative h-[500px] md:h-[600px] rounded-[40px] overflow-hidden bg-gradient-to-br from-purple-900/20 to-black border border-white/5">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col md:flex-row items-center"
            >
              {/* Text Side */}
              <div className="flex-1 p-8 md:p-16 z-10 flex flex-col justify-center">
                <div className="bg-white/5 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/10 max-w-xl">
                  <h3 className="text-3xl md:text-5xl font-medium mb-6 text-white">{activeValue.title}</h3>
                  <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                    {activeValue.description}
                  </p>
                </div>
              </div>

              {/* Decorative Side / Image */}
              <div className="flex-1 relative w-full h-full opacity-50 md:opacity-100 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-l from-purple-500/20 to-transparent z-10" />
                
                {/* Abstract 3D-like shape decoration */}
                <div className="relative w-64 h-64 md:w-96 md:h-96">
                  <motion.div 
                    animate={{ 
                      rotate: 360,
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ 
                      duration: 20, 
                      repeat: Infinity, 
                      ease: "linear" 
                    }}
                    className="absolute inset-0 bg-gradient-to-tr from-purple-500 via-fuchsia-500 to-blue-500 rounded-full blur-[60px] opacity-30"
                  />
                  <motion.div 
                    animate={{ 
                      rotate: -360,
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ 
                      duration: 25, 
                      repeat: Infinity, 
                      ease: "linear" 
                    }}
                    className="absolute inset-0 bg-gradient-to-bl from-blue-500 via-indigo-500 to-purple-500 rounded-full blur-[80px] opacity-20"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full relative">
                      <Image
                        src={activeValue.image}
                        alt={activeValue.title}
                        fill
                        className="object-contain p-8 md:p-16 transform hover:scale-110 transition-transform duration-700 mix-blend-screen opacity-80"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Floating particles */}
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -20, 0],
                      x: [0, 10, 0],
                      opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                      duration: 3 + i,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute w-2 h-2 bg-white rounded-full blur-[2px]"
                    style={{
                      top: `${20 + i * 15}%`,
                      left: `${30 + i * 10}%`,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
