"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";

export default function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row ">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "UX Designer",
    title: "Tshepo Mokoka",
    src: "/coaching/tshepo.png",
    ctaText: "View",
    ctaLink: "#",
    content: () => {
      return (
        <p>
          Tshepo is a talented UX designer who joined our 2-month intensive coaching program with a passion for creating user-centered digital experiences. During the program, she developed strong skills in user research, wireframing, and prototyping while working on real-world projects. <br /> <br /> 
          Her journey included mastering design thinking methodologies, AI-assisted design workflows, and advanced prototyping techniques in Figma. Tshepo successfully completed a comprehensive e-commerce redesign project that demonstrated her growth in UX strategy and visual design principles.
        </p>
      );
    },
  },
  {
    description: "Product Designer",
    title: "Alex Chen",
    src: "/coaching/placeholder.png",
    ctaText: "View",
    ctaLink: "#",
    content: () => {
      return (
        <p>
          Alex joined our coaching program as a junior product designer looking to advance their skills in user experience design. Through our structured mentorship approach, they developed expertise in user journey mapping, interaction design, and design system creation. <br /> <br /> 
          During the 2-month program, Alex worked on a mobile banking app redesign, learning to integrate user research insights with business requirements. They mastered advanced prototyping techniques and gained valuable experience in presenting design decisions to stakeholders.
        </p>
      );
    },
  },
  {
    description: "UI/UX Designer",
    title: "Sarah Johnson",
    src: "/coaching/placeholder.png",
    ctaText: "View",
    ctaLink: "#",
    content: () => {
      return (
        <p>
          Sarah came to our coaching program with a background in graphic design, eager to transition into UX design. Through our comprehensive curriculum, she learned user research methodologies, information architecture, and usability testing principles. <br /> <br /> 
          Her capstone project involved redesigning a healthcare platform, where she demonstrated her ability to conduct user interviews, create personas, and design accessible interfaces. Sarah successfully completed the program and secured a UX designer position at a healthcare startup.
        </p>
      );
    },
  },
  {
    description: "Digital Designer",
    title: "Marcus Rodriguez",
    src: "/coaching/placeholder.png",
    ctaText: "View",
    ctaLink: "#",
    content: () => {
      return (
        <p>
          Marcus participated in our coaching program to enhance his digital design skills and learn modern UX practices. Throughout the 2-month intensive program, he focused on developing skills in user-centered design, rapid prototyping, and design thinking workshops. <br /> <br /> 
          His project involved creating a fitness tracking app from concept to high-fidelity prototype. Marcus learned to integrate AI tools into his design workflow and developed strong presentation skills for communicating design rationale to cross-functional teams.
        </p>
      );
    },
  },
  {
    description: "Experience Designer",
    title: "Emily Zhang",
    src: "/coaching/placeholder.png",
    ctaText: "View",
    ctaLink: "#",
    content: () => {
      return (
        <p>
          Emily joined our coaching program with experience in visual design but wanted to expand into user experience design. Through personalized mentorship and hands-on projects, she developed skills in service design, customer journey mapping, and design research. <br /> <br /> 
          Her final project focused on reimagining the onboarding experience for a fintech application. Emily learned to balance user needs with business objectives while creating seamless digital experiences that drive engagement and conversion.
        </p>
      );
    },
  },
]; 