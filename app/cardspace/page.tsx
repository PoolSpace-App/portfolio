"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "@/components/icons"
import ProjectCarousel from "@/components/project-carousel"
import ProjectNavigation from "@/components/project-navigation"
import PageGridShell from "@/components/page-grid-shell"
import { PortfolioDashedDivider } from "@/components/portfolio-bleed-line"
import Image from "next/image"

const screens = Array.from({ length: 40 }, (_, index) => {
  const number = String(index + 1).padStart(2, "0")
  const extension = index < 12 ? "png" : "jpg"
  return `/projects/cardspace/screens/screen-${number}.${extension}`
})

const detailStills = Array.from(
  { length: 9 },
  (_, index) => `/projects/cardspace/stills/detail-${String(index + 1).padStart(2, "0")}.png`,
)

const motionClips = [
  { src: "/projects/cardspace/videos/motion-shopper.mp4", poster: "/projects/cardspace/videos/motion-shopper.jpg", alt: "CardSpace shopper illustration" },
  { src: "/projects/cardspace/videos/motion-group.mp4", poster: "/projects/cardspace/videos/motion-group.jpg", alt: "CardSpace group illustration" },
  { src: "/projects/cardspace/videos/motion-portrait.mp4", poster: "/projects/cardspace/videos/motion-portrait.jpg", alt: "CardSpace portrait illustration" },
  { src: "/projects/cardspace/videos/motion-clothes.mp4", poster: "/projects/cardspace/videos/motion-clothes.jpg", alt: "Folded clothes illustration from the CardSpace gift card screens" },
  { src: "/projects/cardspace/videos/motion-pay.mp4", poster: "/projects/cardspace/videos/motion-pay.jpg", alt: "CardSpace payment illustration" },
  { src: "/projects/cardspace/videos/motion-record.mp4", poster: "/projects/cardspace/videos/motion-record.jpg", alt: "Illustration of recording a personalised video in CardSpace" },
]

const appRecordings = Array.from({ length: 9 }, (_, index) => {
  const number = String(index + 1).padStart(2, "0")
  return {
    src: `/projects/cardspace/videos/demo-${number}.mp4`,
    poster: `/projects/cardspace/videos/demo-${number}.jpg`,
    alt: `CardSpace app recording ${index + 1}`,
  }
})

const phases = [
  {
    label: "Phase 1 - Discover.",
    title: "Research & Analysis",
    methods:
      "Design Thinking Workshops / Surveys / User Interviews / Stakeholder Interviews / Competitor Analysis / UX Audits / Heuristic Evaluation / Diary Studies / Usage Data Analysis / Usability Testing / Unmoderated Testing",
  },
  {
    label: "Phase 2 - Define.",
    title: "Synthesis & Strategy",
    methods:
      "Information Architecture / Affinity Mapping / Empathy Maps / Personas / Journey Mapping / User Stories / Scenarios / Service Blueprints / Success Metrics / Card Sorting",
  },
  {
    label: "Phase 3 - Explore.",
    title: "Ideate & Develop Concept",
    methods: "Wireframing / Moodboards & Styletiles / Design Direction / Prototyping / UX Copywriting",
  },
  {
    label: "Phase 4 - Create.",
    title: "Design & Experience",
    methods:
      "Design Systems / UI Kits and Styleguides / Interaction Design / Prototyping / Content Creation / Developer Specifications / Quality Assurance and Testing",
  },
]

const expectations = [
  {
    label: "Easy Card Scanning:",
    text: "Sarah expects the app to quickly scan her physical loyalty cards and add them to her account with minimal effort.",
  },
  {
    label: "Organized Card Storage:",
    text: "She wants to be able to categorize or organize her loyalty cards by type or store for easy access.",
  },
  {
    label: "Quick Checkout Scanning:",
    text: "The app should allow her to quickly display and scan loyalty cards at checkout, without delays or issues.",
  },
  {
    label: "Tracking Rewards and Offers:",
    text: "Sarah expects the app to notify her about available rewards, points balances, and special offers from her favorite brands.",
  },
  {
    label: "Secure Data Storage:",
    text: "Given her concern for privacy, she expects her loyalty card information and personal data to be stored securely.",
  },
  {
    label: "Offline Access:",
    text: "She wants the app to be reliable even without an internet connection, so she can always access her cards on the go.",
  },
]

function SectionLabel({ children }: { children: string }) {
  return <div className="text-sm text-slate-900 mb-1 font-bold">{children}</div>
}

function CaseFigure({ src, alt, width, height }: { src: string; alt: string; width: number; height: number }) {
  return (
    <figure className="overflow-hidden rounded-6xl border border-slate-200 bg-slate-50">
      <Image src={src} alt={alt} width={width} height={height} className="h-auto w-full" sizes="(max-width: 768px) 100vw, 960px" />
    </figure>
  )
}

export default function CardspacePage() {
  const router = useRouter()

  const project = {
    id: 1,
    name: "CardSpace",
    description: "It's time to replace your physical wallet with a digital one.",
    imageUrl: "/projects/cardspace/hero.png",
    category: "Mobile Applications" as const,
    role: "UX/UI Research, Prototyping, Interaction, UI Design, User Testing.",
    tools: "Figma, Protopie, Midjourney, Photoshop, Rotato, Luma AI, Jitter",
    images: {
      main: "/projects/cardspace/mockup-gift-card.png",
      secondary: [
        "/projects/cardspace/mockup-search.png",
        "/projects/cardspace/screens/screen-01.png",
        "/projects/cardspace/screens/screen-13.jpg",
        "/projects/cardspace/screens/screen-20.jpg",
        "/projects/cardspace/screens/screen-30.jpg",
      ],
    },
    fallback: "/placeholder.svg?height=1200&width=1600&text=CardSpace",
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <PageGridShell>
      <div className="container mx-auto px-4 pt-32 pb-8">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center mb-8 hover:opacity-70 transition-opacity text-slate-900 hover-glitch"
        >
          <ArrowLeft className="mr-2 h-4 w-4 text-slate-900" />
          Back
        </button>

        <div className="w-full mx-auto">
          <div className="text-3xl md:text-4xl font-medium mb-4 text-slate-900">{project.name}</div>
          <p className="text-xl text-slate-900 mb-4">{project.description}</p>
          <p className="text-lg text-slate-900 mb-8">
            We believe loyalty should be easy which is why we combined it. Who needs a physical wallet when you can have all your cards in a single App? Try CardSpace, your all in one mobile wallet today!
          </p>

          <ProjectCarousel project={project} />

          <div className="mt-16 mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <SectionLabel>ROLE</SectionLabel>
              <p className="text-slate-900">{project.role}</p>
            </div>
            <div>
              <SectionLabel>TOOLS</SectionLabel>
              <p className="text-slate-900">{project.tools}</p>
            </div>
          </div>

          <div className="space-y-6 text-lg text-slate-900 mb-16">
            <div>
              <SectionLabel>MEET CARDSPACE</SectionLabel>
              <p className="text-xl">Meet CardSpace.</p>
              <p className="mt-2 text-xl">Your all-in-one loyalty app.</p>
              <p className="mt-4">We believe loyalty should be fun which is why we combined it.</p>
            </div>
          </div>

          <div className="mb-16 overflow-hidden rounded-6xl border border-slate-200 bg-slate-950">
            <video
              autoPlay
              muted
              loop
              playsInline
              controls
              poster="/projects/cardspace/videos/hero.jpg"
              className="h-auto w-full"
            >
              <source src="/projects/cardspace/videos/hero.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="space-y-10 text-lg text-slate-900 mb-16">
            <div>
              <SectionLabel>ABOUT CARDSPACE</SectionLabel>
              <p>
                CardSpace offers a feature that enables users to add their loyalty rewards cards to their applications and manually scan them while checking out. In essence, CardSpace is a centralized rewards program that consolidates all of a user&apos;s rewards programs into a single location.
              </p>
            </div>
            <div>
              <SectionLabel>PROBLEM</SectionLabel>
              <div className="space-y-4">
                <p>Managing physical cards is inconvenient—wallets become cluttered, cards get lost, and users often forget to bring them when they need them the most.</p>
                <p>This leads to missed rewards, lost discounts, and a frustrating experience for customers who want to enjoy the benefits of loyalty programs without the hassle of carrying multiple cards.</p>
              </div>
            </div>
            <div>
              <SectionLabel>SOLUTION</SectionLabel>
              <p>CardSpace solves this problem by providing a digital wallet where users can store all their loyalty cards in one app.</p>
              <ul className="mt-4 list-disc space-y-3 pl-5">
                <li>The app allows users to scan their physical cards into their mobile devices, eliminating the need to carry them around.</li>
                <li>With easy access and the ability to scan cards directly at the counter, users can effortlessly manage their rewards, points, and offers anytime, anywhere.</li>
              </ul>
            </div>
          </div>

          <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
            {phases.map((phase) => (
              <div key={phase.label}>
                <SectionLabel>{phase.label}</SectionLabel>
                <p className="text-xl text-slate-900">{phase.title}</p>
                <p className="mt-3 text-lg text-slate-900">{phase.methods}</p>
              </div>
            ))}
          </div>

          <div className="space-y-10 text-lg text-slate-900 mb-16">
            <div className="space-y-6">
              <div>
                <SectionLabel>DISCOVERY</SectionLabel>
                <p>
                  During the Discovery stage, I perform comprehensive evaluation and in-depth research about your project. Various research techniques are utilized to achieve deep understanding of your intended audience, market trends, and competition. This approach enables me to gather data that influences my design decisions, ensuring the solutions are informed and align with the needs of your users.
                </p>
              </div>
              <CaseFigure src="/projects/cardspace/timeline.png" alt="Step-by-step journey of the CardSpace project" width={1440} height={1080} />
            </div>

            <div>
              <SectionLabel>DEFINE</SectionLabel>
              <p>
                In the Define phase, I leverage the insights gained from the Discovery phase to outline a strategic design course. Fundamental understanding, user operations, and interaction touchpoints of issues are identified to provide a holistic approach for the project. Collaborative idea generation sessions help us in shaping distinctive design ideas that cater to the specific requirements of final users. This stage acts as the foundation for subsequent design revisions, guaranteeing influential user-centric solutions that are in line with your business objectives.
              </p>
            </div>
          </div>

          <div className="mb-16 grid grid-cols-1 items-start gap-8 md:grid-cols-2">
            <CaseFigure src="/projects/cardspace/persona.png" alt="Portrait of Sarah Doody, the CardSpace persona" width={1649} height={2176} />
            <div className="space-y-6 text-lg text-slate-900">
              <div>
                <SectionLabel>PERSONA</SectionLabel>
                <p className="text-xl">Sarah Doody</p>
                <p className="mt-3">30 years</p>
                <p>Occupation: Marketing Manager</p>
                <p>Location: Johannesburg</p>
                <p className="mt-3">Lifestyle:</p>
                <p>Busy professional, eco-conscious, loves to shop at local businesses and big retailers.</p>
              </div>
              <p>
                As a <strong>busy marketing manager</strong> who loves shopping at a variety of stores, Sarah finds it difficult to manage the many loyalty cards she accumulates. She often forgets to bring her physical cards, leading her to miss out on rewards and discounts. With her eco-conscious mindset, she also dislikes carrying around multiple plastic cards. Sarah wants an easy way to keep all her loyalty cards in one place, so she never has to miss out on benefits again, no matter where she shops.
              </p>
              <div>
                <SectionLabel>MOTIVATION</SectionLabel>
                <p>
                  Sarah’s primary motivation for using CardSpace is <strong>convenience</strong>. She’s tired of carrying multiple loyalty cards and often forgets them when she needs them most. She also wants to reduce her plastic usage, aligning with her environmentally friendly values. CardSpace offers a <strong>digital solution</strong> that keeps all her loyalty cards in one app, so she can access them quickly and easily, without the hassle.
                </p>
              </div>
              <div>
                <SectionLabel>EXPECTATIONS</SectionLabel>
                <ul className="list-disc space-y-3 pl-5">
                  {expectations.map((item) => (
                    <li key={item.label}>
                      <strong>{item.label}</strong> {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-8 text-lg text-slate-900 mb-16">
            <div>
              <SectionLabel>EXPLORE</SectionLabel>
              <p>
                In the Explore phase, I embark on a creative journey to generate and develop design ideas. Through collaborative brainstorming, sketching, and prototyping, I bring concepts to life and refine them with valuable user feedback. This phase encourages experimentation and innovation, allowing me to create unique, effective solutions that push boundaries. By embracing this iterative process, I ensure that the final design deliverables are not only user-centered but also showcase forward-thinking, cutting-edge solutions.
              </p>
            </div>
            <CaseFigure src="/projects/cardspace/typography.png" alt="CardSpace typography, Century Gothic Regular and Bold" width={1440} height={1080} />
            <CaseFigure src="/projects/cardspace/palette.png" alt="CardSpace colour palette" width={1440} height={655} />
          </div>

          <div className="space-y-8 text-lg text-slate-900 mb-16">
            <SectionLabel>UI KIT</SectionLabel>
            <CaseFigure src="/projects/cardspace/ui-kit.png" alt="CardSpace UI kit" width={1440} height={1519} />
          </div>

          <div className="space-y-8 text-lg text-slate-900 mb-16">
            <div>
              <SectionLabel>CREATE</SectionLabel>
              <p>
                In the Create phase, I focus on translating design ideas into developer-ready designs. With a meticulous approach, I ensure that my designs not only deliver exceptional user experiences but are also practical and feasible for implementation. By collaborating closely with the development team, I provide design assets, style guides, and documentation that facilitate a smooth handoff and seamless integration of the designs into the development process. My goal is to create designs that not only look visually stunning but are also practical and ready for implementation, ensuring a seamless transition from design to development.
              </p>
            </div>
            <div className="space-y-3">
              <p>Slow down, speedy shopper! It&apos;s time to shop with ease.</p>
              <p>Access all your loyalty rewards in one app and make shopping a breeze. 🌬️🛒</p>
              <p>Save time, save money, save yourself from loyalty card chaos! 🕒💸😅</p>
              <p>No more fumbling through your wallet for the right card. 🚀🤑</p>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <CaseFigure src="/projects/cardspace/stills/gift-cards.png" alt="Buy gift cards from your favourite brands" width={436} height={484} />
              <CaseFigure src="/projects/cardspace/stills/personalised-video.png" alt="Add a personalised video for only R99.00" width={213} height={232} />
              <CaseFigure src="/projects/cardspace/stills/birthday.png" alt="Happy Birthday video still from CardSpace" width={281} height={227} />
              <CaseFigure src="/projects/cardspace/stills/empty-transactions.png" alt="No transactions available yet" width={277} height={229} />
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {motionClips.map((clip) => (
                <div key={clip.src} className="overflow-hidden rounded-6xl border border-slate-200 bg-slate-50">
                  <video controls playsInline preload="metadata" poster={clip.poster} className="h-auto w-full" aria-label={clip.alt}>
                    <source src={clip.src} type="video/mp4" />
                  </video>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <SectionLabel>SCREENS</SectionLabel>
            <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
              <CaseFigure src="/projects/cardspace/device-welcome.png" alt="CardSpace welcome screen on a phone" width={1563} height={3034} />
              {screens.map((src, index) => (
                <CaseFigure
                  key={src}
                  src={src}
                  alt={`CardSpace app screen ${index + 1}`}
                  width={387}
                  height={720}
                />
              ))}
              {detailStills.map((src, index) => (
                <CaseFigure
                  key={src}
                  src={src}
                  alt={`CardSpace interface detail ${index + 1}`}
                  width={320}
                  height={470}
                />
              ))}
            </div>
          </div>

          <div className="mb-24">
            <SectionLabel>APP RECORDINGS</SectionLabel>
            <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3">
              {appRecordings.map((clip) => (
                <div key={clip.src} className="overflow-hidden rounded-6xl border border-slate-200 bg-slate-50">
                  <video controls playsInline preload="metadata" poster={clip.poster} className="h-auto w-full" aria-label={clip.alt}>
                    <source src={clip.src} type="video/mp4" />
                  </video>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mt-24 py-16 bg-white text-black text-center">
            <PortfolioDashedDivider className="absolute inset-x-0 top-0" />
            <div className="text-3xl font-bold mb-2">{project.name}</div>
            <p className="text-md max-w-2xl mx-auto">{project.description}</p>
          </div>

          <ProjectNavigation currentProjectId={project.id} />
        </div>
      </div>
    </PageGridShell>
  )
}
