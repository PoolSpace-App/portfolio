"use client"

import CoachingProfileCards from "@/components/expandable-card-demo"

export default function CoachingPage() {
  return (
    <div className="min-h-screen bg-white relative">
      {/* Main content */}
      <div className="container mx-auto pt-32 pb-32">
        <div className="px-4">
          <h1 className="text-4xl md:text-7xl font-medium mb-4 text-blue-950">Coaching</h1>
          <p className="text-xl text-blue-950 mb-16">
          I mentor junior UX designers with an annual goal of coaching 6+ designers a year. <br />
          <br />
          My approach involves a structured 2-month program where designers work through comprehensive case studies, covering ideation, research methodologies, AI integration, and Cursor workflows with direct mentorship throughout.
          </p>
        </div>
        {/* Coaching profile cards with expandable details */}
        <CoachingProfileCards />
      </div>
    </div>
  )
}
