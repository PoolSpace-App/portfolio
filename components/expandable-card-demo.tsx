"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";

// Types for better code understanding
type CoachingProfile = {
  id: string;
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

  useOutsideClick(modalRef, () => {
    if (selectedProfile) setSelectedProfile(null)
  })

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
              key={`close-button-${selectedProfile.id}-${componentId}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="absolute right-4 top-8 flex h-8 w-8 items-center justify-center border border-dashed border-slate-200 bg-white text-slate-900 lg:hidden"
              onClick={closeModal}
            >
              <CloseIcon />
            </motion.button>
            
            {/* ===== MOBILE & DESKTOP SHARED: Modal Content ===== */}
            <motion.div
              layoutId={`profile-card-${selectedProfile.id}-${componentId}`}
              ref={modalRef}
              className="flex h-full w-full max-w-6xl flex-col overflow-hidden border border-dashed border-slate-200 bg-white md:h-fit md:max-h-[90%] lg:grid lg:grid-cols-2"
            >
              {/* Profile image - responsive sizing */}
              <motion.div layoutId={`profile-image-${selectedProfile.id}-${componentId}`}>
                <img
                  width={40}
                  height={40}
                  src={selectedProfile.src}
                  alt={selectedProfile.title}
                  className="h-full w-full object-cover object-top grayscale"
                />
              </motion.div>

              {/* Desktop & Mobile Modal Profile details */}
              <div className="flex flex-col md:mt-12 md:px-8">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start p-4">
                  <div className="lg:flex-1">
                    <motion.h3
                      layoutId={`profile-title-${selectedProfile.id}-${componentId}`}
                      className="text-2xl font-semibold tracking-tight text-slate-900"
                    >
                      {selectedProfile.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`profile-description-${selectedProfile.id}-${componentId}`}
                      className="mb-4 text-slate-500 lg:mb-0"
                    >
                      {selectedProfile.description}
                    </motion.p>
                  </div>

                  {/* Call to action button */}       
                  <motion.a
                    layoutId={`profile-cta-${selectedProfile.id}-${componentId}`}
                    href={selectedProfile.modalCtaLink}
                    target="_blank"
                    className="self-start border border-dashed border-slate-900 bg-slate-900 px-6 py-2 text-sm font-medium text-white lg:ml-4 lg:self-auto"
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
                    className="flex h-40 flex-col items-start gap-4 overflow-auto pb-10 text-xs text-slate-500 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] md:h-fit md:text-sm lg:h-full lg:text-base"
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
      <div className="grid grid-cols-1 divide-y divide-dashed divide-slate-200 overflow-visible md:grid-cols-3 md:divide-x md:divide-y">
        {coachingProfiles.map((profile) => (
          <ProfileCard
            key={`profile-${profile.id}-${componentId}`}
            profile={profile}
            componentId={componentId}
            onCardClick={openProfileModal}
          />
        ))}
      </div>
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
      layoutId={`profile-card-${profile.id}-${componentId}`}
      onClick={() => onCardClick(profile)}
      className="cursor-target group relative flex h-full cursor-pointer flex-col overflow-visible bg-white"
    >
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 z-40 border border-dashed border-transparent transition-[border-color] group-hover:border-slate-900"
        />
        <motion.div layoutId={`profile-image-${profile.id}-${componentId}`}>
          <img
            width={400}
            height={100}
            src={profile.src}
            alt={profile.title}
            className="aspect-[4/5] w-full object-cover object-top grayscale transition-all duration-500 group-hover:grayscale-0"
          />
        </motion.div>

        <div className="flex flex-1 flex-col p-6 text-center">
          <motion.h3
            layoutId={`profile-title-${profile.id}-${componentId}`}
            className="text-lg font-semibold tracking-tight text-slate-900"
          >
            {profile.title}
          </motion.h3>
          <motion.p
            layoutId={`profile-description-${profile.id}-${componentId}`}
            className="mt-1 text-sm text-slate-500"
          >
            {profile.description}
          </motion.p>

          <motion.button
            type="button"
            layoutId={`profile-cta-${profile.id}-${componentId}`}
            onClick={(event) => {
              event.stopPropagation()
              onCardClick(profile)
            }}
            className="mt-6 self-center border border-dashed border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-900 transition-colors group-hover:border-slate-900"
          >
            {profile.ctaText}
          </motion.button>
        </div>
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
    id: "tshepo-selepe",
    description: "UX/UI Designer",
    title: "Tshepo Selepe",
    src: "/coaching/tshepo.png",
    ctaText: "View Profile",
    ctaLink: "#",
    modalCtaText: "View LinkedIn Profile",
    modalCtaLink: "https://www.linkedin.com/in/tshepo-selepe-922b8a23a/",
    content: () => {
      return (
        <p>
          Tshepo is a talented UX designer who joined our 2-month intensive coaching program with a passion for creating user-centered digital experiences. During the program, he developed strong skills in user research, wireframing, prototyping and building real-world projects using AI. <br /> <br /> 
          His journey included mastering design thinking methodologies, AI-assisted design workflows, and advanced prototyping techniques in Figma & Cursor. Tshepo successfully completed his project and 2 months later, he landed a new job as a UX designer and relocated to CapeTown.
        </p>
      );
    },
  },
  {
    id: "coming-soon-product",
    description: "Product Designer",
    title: "Coming Soon",
    src: "/coaching/placeholder.png",
    ctaText: "View",
    ctaLink: "#",
    modalCtaText: "View LinkedIn Profile",
    modalCtaLink: "https://linkedin.com",
    content: () => {
      return (
        <p>
          Coming Soon
        </p>
      );
    },
  },
  {
    id: "coming-soon-uiux",
    description: "UI/UX Designer",
    title: "Coming Soon",
    src: "/coaching/placeholder.png",
    ctaText: "View",
    ctaLink: "#",
    modalCtaText: "View LinkedIn Profile",
    modalCtaLink: "https://linkedin.com",
    content: () => {
      return (
        <p>
          Coming Soon
        </p>
      );
    },
  },
  {
    id: "coming-soon-digital",
    description: "Digital Designer",
    title: "Coming Soon",
    src: "/coaching/placeholder.png",
    ctaText: "View",
    ctaLink: "#",
    modalCtaText: "View LinkedIn Profile",
    modalCtaLink: "https://linkedin.com",
    content: () => {
      return (
        <p>
          Coming Soon
        </p>
      );
    },
  },
  {
    id: "coming-soon-experience",
    description: "Experience Designer",
    title: "Coming Soon",
    src: "/coaching/placeholder.png",
    ctaText: "View",
    ctaLink: "#",
    modalCtaText: "View LinkedIn Profile",
    modalCtaLink: "https://linkedin.com",
    content: () => {
      return (
        <p>
          Coming Soon
        </p>
      );
    },
  },
]; 