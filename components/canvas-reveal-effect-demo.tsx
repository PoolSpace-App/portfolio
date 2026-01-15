"use client";
import React from "react";
import Image from "next/image";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export default function CanvasRevealEffectDemo() {
  return (
    <>
    {/* First row of cards */}
      <div className="py-4 flex flex-col lg:flex-row items-stretch justify-center bg-white dark:bg-black w-full gap-4 mx-auto px-0 lg:px-4">
        <div className="w-full lg:w-80 flex-shrink-0">
          <ThreeDCard title="Tshepo Selepe" year="2025" description="Tsepo was the first person I coached. Helped him get a job new job and move to a new City in less than 4 months." imageSrc="/coaching/tshepo.png">
            <CanvasRevealEffect
              animationSpeed={5.1}
              containerClassName="bg-emerald-900"
            />
          </ThreeDCard>
        </div>
        <div className="w-full lg:w-80 flex-shrink-0">
          <ThreeDCard title="Coming Soon" year="2025" description="Coming Soon" imageSrc="/coaching/tshepo.png">
            <CanvasRevealEffect
              animationSpeed={5.1}
              containerClassName="bg-black"
              colors={[
                [236, 72, 153],
                [232, 121, 249],
              ]}
              dotSize={2}
            />
          </ThreeDCard>
        </div>
        <div className="w-full lg:w-80 flex-shrink-0">
          <ThreeDCard title="Coming Soon" year="2025" description="Coming Soon" imageSrc="/coaching/placeholder.png">
            <CanvasRevealEffect
              animationSpeed={5.1}
              containerClassName="bg-sky-600"
              colors={[[125, 211, 252]]}
            />
          </ThreeDCard>
        </div>
      </div>
      
      {/* Second row of cards */}
      <div className="pb-8 flex flex-col lg:flex-row items-stretch justify-center bg-white dark:bg-black w-full gap-4 mx-auto px-0 lg:px-4">
        <div className="w-full lg:w-80 flex-shrink-0">
          <ThreeDCard title="Coming Soon" year="2025" description="Coming Soon" imageSrc="/coaching/placeholder.png">
            <CanvasRevealEffect
              animationSpeed={5.1}
              containerClassName="bg-purple-800"
              colors={[
                [168, 85, 247],
                [147, 51, 234],
              ]}
              dotSize={3}
            />
          </ThreeDCard>
        </div>
        <div className="w-full lg:w-80 flex-shrink-0">
          <ThreeDCard title="Coming Soon" year="2025" description="Coming Soon" imageSrc="/coaching/placeholder.png">
            <CanvasRevealEffect
              animationSpeed={5.1}
              containerClassName="bg-orange-600"
              colors={[
                [251, 146, 60],
                [249, 115, 22],
              ]}
              dotSize={2}
            />
          </ThreeDCard>
        </div>
        <div className="w-full lg:w-80 flex-shrink-0">
          <ThreeDCard title="Coming Soon" year="2025" description="Coming Soon" imageSrc="/coaching/placeholder.png">
            <CanvasRevealEffect
              animationSpeed={5.1}
              containerClassName="bg-red-700"
              colors={[
                [239, 68, 68],
                [220, 38, 38],
              ]}
              dotSize={2}
            />
          </ThreeDCard>
        </div>
      </div>
    </>
  );
}

const ThreeDCard = ({
  title,
  year,
  description,
  imageSrc,
  children,
}: {
  title: string;
  year: string;
  description: string;
  imageSrc: string;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  
  return (
    <CardContainer containerClassName="!py-0 !w-full !flex !items-center !justify-center">
      <CardBody className="!h-auto !w-full">
        <CardItem
          translateZ={10}
          className="!w-full"
        >
          <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="border border-black/[0.2] group/canvas-card flex items-center justify-center text-center dark:border-white/[0.2] w-full relative h-[30rem] overflow-hidden"
          >
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black z-30" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black z-30" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black z-30" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black z-30" />

            {/* Background Image */}
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover absolute inset-0 group-hover/canvas-card:opacity-30 transition duration-200"
            />
            
            {/* Dark overlay for better text readability - only on hover */}
            <div className="absolute inset-0 bg-black/0 group-hover/canvas-card:bg-black/60 transition duration-200 z-10" />

            <AnimatePresence>
              {hovered && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="h-full w-full absolute inset-0 z-20"
                >
                  {children}
                </motion.div>
              )}
            </AnimatePresence>

            <div className="relative z-30 px-4 flex flex-col items-center justify-center h-full">
              <div className="opacity-0 group-hover/canvas-card:opacity-100 relative z-10 transition duration-200 text-center">
                <CardItem
                  translateZ={30}
                  as="h2"
                  className="text-xl text-white font-bold mb-2 text-center w-full"
                >
                  {title}
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="p"
                  className="text-white/80 text-sm font-medium mb-2 text-center w-full"
                >
                  {year}
                </CardItem>
                <CardItem
                  translateZ={15}
                  as="p"
                  className="text-white/70 text-xs leading-relaxed text-center w-full"
                >
                  {description}
                </CardItem>
              </div>
            </div>
          </div>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};



export const Icon = ({ className, ...rest }: any) => {
  return (
    <Image
      src="/coaching/stroke-line.png"
      alt="Stroke line decoration"
      width={24}
      height={24}
      className={className}
      {...rest}
    />
  );
}; 