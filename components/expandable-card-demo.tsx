"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";

// Types for better code understanding
type CoachingProfile = {
  description: string;
  title: string;
  src: string;
  ctaText: string;
  ctaLink: string;
  modalCtaText: string;
  modalCtaLink: string;
  content: () => React.JSX.Element;
};

export default function CoachingProfileCards() {
  const [selectedProfile, setSelectedProfile] = useState<CoachingProfile | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const componentId = useId();

  // Handle keyboard events and body scroll management
  useEffect(() => {
    function handleEscapeKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSelectedProfile(null);
      }
    }

    // Prevent body scroll when modal is open
    if (selectedProfile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", handleEscapeKey);
    return () => window.removeEventListener("keydown", handleEscapeKey);
  }, [selectedProfile]);

  // Close modal when clicking outside
  useOutsideClick(modalRef, () => setSelectedProfile(null));

  const closeModal = () => setSelectedProfile(null);
  const openProfileModal = (profile: CoachingProfile) => setSelectedProfile(profile);

  return (
    <>
      {/* ===== MOBILE & DESKTOP SHARED: Modal System ===== */}
      
      {/* Background overlay when modal is open */}
      <AnimatePresence>
        {selectedProfile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10 backdrop-blur-lg"
          />
        )}
      </AnimatePresence>
      
      {/* Expanded profile modal */}
      <AnimatePresence>
        {selectedProfile ? (
          <div className="fixed inset-0 grid place-items-center z-[1000]">
            
            {/* ===== MOBILE ONLY: Close Button ===== */}
            <motion.button
              key={`close-button-${selectedProfile.title}-${componentId}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-8 right-4 lg:hidden items-center justify-center bg-gray-050 text-blue-950 rounded-full h-8 w-8"
              onClick={closeModal}
            >
              <CloseIcon />
            </motion.button>
            
            {/* ===== MOBILE & DESKTOP SHARED: Modal Content ===== */}
            <motion.div
              layoutId={`profile-card-${selectedProfile.title}-${componentId}`}
              ref={modalRef}
              className="w-full max-w-6xl h-full md:h-fit md:max-h-[90%] flex flex-col lg:grid lg:grid-cols-2 bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              {/* Profile image - responsive sizing */}
              <motion.div layoutId={`profile-image-${selectedProfile.title}-${componentId}`}>
                <img
                  width={40}
                  height={40}
                  src={selectedProfile.src}
                  alt={selectedProfile.title}
                  className="w-full h-full lg:h-full rounded-[40px] lg:rounded-none lg:rounded-l-3xl object-cover object-top"
                />
              </motion.div>

              {/* Desktop & Mobile Modal Profile details */}
              <div className="flex flex-col md:mt-12 md:px-8">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start p-4">
                  <div className="lg:flex-1">
                    <motion.h3
                      layoutId={`profile-title-${selectedProfile.title}-${componentId}`}
                      className="font-bold text-2xl text-blue-950 dark:text-blue-950"
                    >
                      {selectedProfile.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`profile-description-${selectedProfile.description}-${componentId}`}
                      className="text-blue-950 dark:text-blue-950 mb-4 lg:mb-0"
                    >
                      {selectedProfile.description}
                    </motion.p>
                  </div>

                  {/* Call to action button */}       
                  <motion.a
                    layoutId={`profile-cta-${selectedProfile.title}-${componentId}`}
                    href={selectedProfile.modalCtaLink}
                    target="_blank"
                    className="px-8 py-2 text-sm rounded-full font-bold bg-blue-500 text-white self-start lg:self-auto lg:ml-4"
                  >
                    {selectedProfile.modalCtaText}
                  </motion.a>
                </div>
                
                {/* Profile story content */}
                <div className="pt-4 relative px-4 flex-1">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-blue-950 text-xs md:text-sm lg:text-base h-40 md:h-fit lg:h-full pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-blue-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {selectedProfile.content()}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
 
      {/* ===== MOBILE & DESKTOP: Profile Cards Grid ===== */}
      <ul className="mx-auto w-full gap-4 lg:grid lg:grid-cols-3">
        {coachingProfiles.map((profile, index) => (
          <ProfileCard
            key={`profile-${profile.title}-${componentId}`}
            profile={profile}
            componentId={componentId}
            onCardClick={openProfileModal}
          />
        ))}
      </ul>
    </>
  );
}

// ===== MOBILE & DESKTOP: Individual Profile Card Component =====
function ProfileCard({ 
  profile, 
  componentId, 
  onCardClick 
}: { 
  profile: CoachingProfile; 
  componentId: string; 
  onCardClick: (profile: CoachingProfile) => void; 
}) {
  return (
    <motion.div
      layoutId={`profile-card-${profile.title}-${componentId}`}
      onClick={() => onCardClick(profile)}
      className="p-4 flex flex-col m-4 border-[1px] border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-[40px] cursor-pointer"
    >
      {/* Profile image */}
      <motion.div layoutId={`profile-image-${profile.title}-${componentId}`} className="mb-4">
        <img
          width={400}
          height={100}
          src={profile.src}
          alt={profile.title}
          className="w-full rounded-[32px] object-cover object-top"
        />
      </motion.div>
      
      {/* Name and role */}
      <div className="mb-4 text-center">
        <motion.h3
          layoutId={`profile-title-${profile.title}-${componentId}`}
          className="font-medium text-lg text-blue-950 dark:text-blue-200"
        >
          {profile.title}
        </motion.h3>
        <motion.p
          layoutId={`profile-description-${profile.description}-${componentId}`}
          className="text-neutral-600 dark:text-neutral-400"
        >
          {profile.description}
        </motion.p>
      </div>
      
      {/* Call to action button */}
      <motion.button
        layoutId={`profile-cta-${profile.title}-${componentId}`}
        className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-blue-500 hover:text-white text-black self-center"
      >
        {profile.ctaText}
      </motion.button>
    </motion.div>
  );
}

// ===== SHARED: Close Icon Component =====
export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-8 w-8 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

// ===== DATA: Coaching Profiles =====
const coachingProfiles: CoachingProfile[] = [
  {
    description: "UX Designer",
    title: "Tshepo Selepe",
    src: "/coaching/tshepo.png",
    ctaText: "View Profile",
    ctaLink: "#",
    modalCtaText: "View LinkedIn Profile",
    modalCtaLink: "https://linkedin.com/in/tshepo-selepe",
    content: () => {
      return (
        <p>
          Tshepo is a talented UX designer who joined our 2-month intensive coaching program with a passion for creating user-centered digital experiences. During the program, he developed strong skills in user research, wireframing, and prototyping while working on real-world projects. <br /> <br /> 
          His journey included mastering design thinking methodologies, AI-assisted design workflows, and advanced prototyping techniques in Figma. Tshepo successfully completed a comprehensive e-commerce redesign project that demonstrated her growth in UX strategy and visual design principles.
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
    modalCtaText: "View LinkedIn Profile",
    modalCtaLink: "https://linkedin.com/in/alex-chen",
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
    modalCtaText: "View LinkedIn Profile",
    modalCtaLink: "https://linkedin.com/in/sarah-johnson",
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
    modalCtaText: "View LinkedIn Profile",
    modalCtaLink: "https://linkedin.com/in/marcus-rodriguez",
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
    modalCtaText: "View LinkedIn Profile",
    modalCtaLink: "https://linkedin.com/in/emily-zhang",
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