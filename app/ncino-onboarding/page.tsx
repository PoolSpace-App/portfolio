"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { 
  ArrowLeft, 
  ArrowRight,
  ArrowDown,
  Profile, 
  Clock, 
  CheckCircle2, 
  Target, 
  Lightbulb, 
  Search, 
  Key,
  PencilRuler, 
  TestTube2, 
  Rocket,
  ShieldCheck,
  Zap,
  Layout,
  ExternalLink,
  X,
  ChevronLeft,
  ChevronRight
} from "@/components/icons"
import Image from "next/image"
import { motion } from "framer-motion"
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend
} from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import ProjectCarousel from "@/components/project-carousel"
import ProjectNavigation from "@/components/project-navigation"
import PageGridShell from "@/components/page-grid-shell"
import { TabsComponent } from "@/components/ui/tabs-component"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { Separator } from "@/components/ui/separator"
import { AnimatedTooltip } from "@/components/ui/animated-tooltip"

export default function NcinoOnboardingPage() {
  const router = useRouter()
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

  const project = {
    "id": 101,
    "name": "nCino Smart Onboarding & Monitoring",
    "tagline": "Financial institutions face major challenges when onboarding commercial customers, driven by strict KYC and KYB regulations, heavy documentation requirements, and the need to assess creditworthiness—while still meeting rising customer expectations. SmartOnboard streamlines this process by bringing all required checks and case management into a single platform, reducing manual work, supporting regulatory compliance, and delivering a smoother customer experience.",
    "description": "Redefining the digital onboarding journey for commercial banking, focusing on speed, compliance, and user empowerment.",
    "imageUrl": "/projects/ncino/onboarding-2.png",
    "category": "Desktop Applications" as const,
    "type": "permanent",
    "details": "Redesigned the onboarding flow, reducing dropout rates by 25%. Implemented a new design system that unified the brand across all digital touchpoints.",
    "role": "Senior Product Designer",
    "duration": "2.5 years",
    "year": "2023-2026",
    "software": {
      "research": [
        { id: 1, name: "Lucid", designation: "Diagramming", image: "/projects/ncino/lucid.png" },
        { id: 2, name: "Confluence", designation: "Documentation", image: "/projects/ncino/confluence.png" }
      ],
      "ideation": [
        { id: 3, name: "Figjam", designation: "Whiteboarding", image: "/projects/ncino/figma.png" },
        { id: 1, name: "Lucid", designation: "Diagramming", image: "/projects/ncino/lucid.png" }
      ],
      "design": [
        { id: 4, name: "Figma", designation: "UI Design", image: "/projects/ncino/figma.png" },
        { id: 5, name: "Figma Make", designation: "AI Design", image: "/projects/ncino/figma.png" }
      ],
      "testing": [
        { id: 6, name: "Dovetail", designation: "User Research", image: "/projects/ncino/dovetail.png" }
      ]
    },
    "team": [
      { id: 1, name: "Cody Poole", designation: "Principal Product Manager", image: "/projects/ncino/cody.png" },
      { id: 2, name: "Neal Chauhan", designation: "Principal Product Manager", image: "/projects/ncino/neal.png" },
      { id: 3, name: "Zach Hooker", designation: "Senior Software Engineer", image: "/projects/ncino/zach.png" },
      { id: 4, name: "Ben Peck", designation: "Director - Product Design & Global Strategy", image: "/projects/ncino/ben.png" },
      { id: 5, name: "Jack Brandling", designation: "Senior Product Manager", image: "/projects/ncino/jack.png" },
      { id: 6, name: "Avery Cocozziello", designation: "Senior Product Manager", image: "/projects/ncino/avery.png" },
      { id: 7, name: "Henry Wallace", designation: "Staff Software Engineer", image: "/projects/ncino/henry.png" },
      { id: 8, name: "Anna Gervasi", designation: "Principal Product Configuration Architect", image: "/projects/ncino/anna.png" },
      { id: 9, name: "George Preece", designation: "Principal Software Engineer", image: "/projects/ncino/george.png" },
      { id: 10, name: "George Wiafe", designation: "Senior Product Engineer", image: "/projects/ncino/georgew.png" },
      { id: 11, name: "Nazia Siddique", designation: "Senior Product Engineer", image: "/projects/ncino/nazia.png" },
      { id: 12, name: "Nishanthini Rejendran", designation: "Senior QA Engineer", image: "/projects/ncino/nishi.png" },
      { id: 13, name: "Aishwarya Badri", designation: "Senior Software Engineer", image: "/projects/ncino/aish.png" },
      ],
      "images": {
        "main": "/projects/ncino/onboarding-main.png",
        "secondary": [
            "/projects/ncino/onboarding-2.png",
            "/projects/ncino/onboarding-3.png",
            "/projects/ncino/onboarding-4.png"
        ]
    },
    "fallback": "/placeholder.svg?height=1200&width=1600&text=nCino+Smart+Onboarding+&+Monitoring"
  }

  const allImages = [
    { src: project.images.main, alt: `${project.name} main view` },
    ...project.images.secondary.map((src, index) => ({
      src,
      alt: `${project.name} detail view ${index + 1}`
    }))
  ]

  const currentImage = selectedImageIndex !== null ? allImages[selectedImageIndex] : null

  const openCarousel = (index: number) => setSelectedImageIndex(index)
  const closeCarousel = () => setSelectedImageIndex(null)
  
  const goToPrevious = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex === 0 ? allImages.length - 1 : selectedImageIndex - 1)
    }
  }

  const goToNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex === allImages.length - 1 ? 0 : selectedImageIndex + 1)
    }
  }

  const goToSlide = (index: number) => setSelectedImageIndex(index)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <PageGridShell>
      <div className="container mx-auto px-4 pt-32 pb-8">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => router.back()}
          className="inline-flex items-center mb-12 hover:opacity-70 transition-opacity text-blue-950 font-medium group"
        >
          <ArrowLeft className="mr-2 h-5 w-5 text-blue-950 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </motion.button>

        <div className="w-full mx-auto">
          {/* Hero Section */}
          <motion.div {...fadeIn} className="mb-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
              <div className="max-w-full">
                <Badge variant="outline" className="mb-4 border-blue-900 text-blue-900 px-3 py-1 rounded-full uppercase tracking-widest text-[10px] font-bold">
                  Case Study
                </Badge>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 text-blue-950 tracking-tight">
                  {project.name}
                </h1>
                <p className="text-2xl text-gray-700 font-light leading-relaxed">
                  {project.tagline}
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 py-8 border-y border-gray-100">
              <div className="space-y-1">
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                  <Profile className="h-3 w-3" /> My Role
                </div>
                <div className="text-blue-950 font-medium">{project.role}</div>
              </div>
              <div className="space-y-1">
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                  <Clock className="h-3 w-3" /> Duration
                </div>
                <div className="text-blue-950 font-medium">{project.duration}</div>
              </div>
              <div className="space-y-1">
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                  <Target className="h-3 w-3" /> Category
                </div>
                <div className="text-blue-950 font-medium">{project.category}</div>
              </div>
              <div className="space-y-1">
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                  <Rocket className="h-3 w-3" /> Year
                </div>
                <div className="text-blue-950 font-medium">{project.year}</div>
              </div>
              <div className="space-y-1">
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                  <Profile className="h-3 w-3" /> Team
                </div>
                <div className="flex flex-row items-center justify-start w-full">
                  <AnimatedTooltip items={project.team} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* How it works Diagram */}
          <div className="mt-24 mb-20 flex flex-col items-center">
            <div className="text-center mb-16">
              <h3 className="text-blue-600 font-bold text-xl mb-3 uppercase tracking-widest">How it works</h3>
              <h2 className="text-5xl md:text-6xl font-bold text-blue-950 tracking-tight">SmartOnboard</h2>
            </div>

            <div className="w-full max-w-5xl flex flex-col items-center">
              {/* Top Step */}
              <div className="inline-flex items-center justify-center rounded-full bg-[#111827] px-6 py-2.5 text-sm font-medium text-white shadow-xl transition-transform duration-300 hover:scale-105">
                Select company
              </div>

              {/* Vertical Connector */}
              <div className="h-12 w-px bg-blue-200 relative">
                <ArrowDown className="absolute -bottom-2 -left-[24px] h-12 w-12 text-blue-950" />
              </div>

              {/* Middle Row with 3 Columns */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full relative">
                {/* Column 1 */}
                <div className="flex flex-col items-center">
                  <div className="relative inline-flex items-center justify-center rounded-full bg-[#111827] px-6 py-2.5 text-sm font-medium text-white shadow-xl">
                    Run Business Checks
                    <div className="absolute top-1/2 -right-4 -translate-y-1/2 text-blue-200 hidden md:block">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="h-12 w-px bg-blue-200 relative">
                    <ArrowDown className="absolute -bottom-2 -left-[24px] h-12 w-12 text-blue-950" />
                  </div>
                  <div className="bg-white p-8 rounded-[40px] w-full flex flex-col gap-6 text-center min-h-[300px] justify-center text-blue-950 border border-blue-950 backdrop-blur-sm shadow-inner">
                    <p className="font-bold text-lg">KYB check</p>
                    <p className="font-bold text-lg">AML & Compliance</p>
                    <p className="font-bold text-lg">Commercial Credit Checks</p>
                  </div>
                </div>

                {/* Column 2 */}
                <div className="flex flex-col items-center">
                  <div className="relative inline-flex items-center justify-center rounded-full bg-[#111827] px-6 py-2.5 text-sm font-medium text-white shadow-xl">
                    Run People Checks
                    <div className="absolute top-1/2 -right-4 -translate-y-1/2 text-blue-200 hidden md:block">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="h-12 w-px bg-blue-200 relative">
                    <ArrowDown className="absolute -bottom-2 -left-[24px] h-12 w-12 text-blue-950" />
                  </div>
                  <div className="bg-white p-8 rounded-[40px] w-full flex flex-col gap-6 text-center min-h-[300px] justify-center text-blue-950 border border-blue-950 backdrop-blur-sm shadow-inner">
                    <p className="font-bold text-lg">eKYC Check</p>
                    <p className="font-bold text-lg">PEPs, Sanctions and Adverse Media</p>
                    <p className="font-bold text-lg">Email Validation</p>
                  </div>
                  <div className="h-12 w-px bg-blue-200 relative">
                    <ArrowDown className="absolute -bottom-2 -left-[24px] h-12 w-12 text-blue-950" />
                  </div>
                </div>

                {/* Column 3 */}
                <div className="flex flex-col items-center">
                  <div className="inline-flex items-center justify-center rounded-full bg-[#111827] px-6 py-2.5 text-sm font-medium text-white shadow-xl">
                    Run IDV Document Checks
                  </div>
                  <div className="h-12 w-px bg-blue-200 relative">
                    <ArrowDown className="absolute -bottom-2 -left-[24px] h-12 w-12 text-blue-950" />
                  </div>
                  <div className="bg-white p-8 rounded-[40px] w-full flex flex-col gap-6 text-center min-h-[300px] justify-center text-blue-950 border border-blue-950 backdrop-blur-sm shadow-inner">
                    <p className="font-bold text-lg">Document verification</p>
                    <p className="font-bold text-lg">Facial comparision</p>
                  </div>
                </div>
              </div>

              {/* Final Step */}
              <div className="btn-primary mt-2 transition-transform duration-300 hover:scale-[1.02]">
                Provide onboarding decision
              </div>
            </div>
          </div>


          {/* Key Features & Services */}
          <div className="mt-16 border-t border-blue-100 pt-16">
            <h2 className="text-3xl font-bold text-blue-950 mb-8 flex items-center gap-3">
              <Separator className="w-8 h-1 bg-blue-600 rounded-full" />
              Key Features & Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Know Your Business (KYB)",
                  description: "Verify the legitimacy and integrity of business entities to ensure compliance with regulatory standards."
                },
                {
                  title: "Electronic Know Your Customer (eKYC)",
                  description: "Efficiently verify customer identities through digital processes, enhancing security and user experience."
                },
                {
                  title: "PEPs, Sanctions & Adverse Media Checks",
                  description: "Conduct rigorous checks against Politically Exposed Persons (PEPs), sanctions lists, and adverse media to significantly reduce risk and ensure compliance."
                },
                {
                  title: "Email Validation",
                  description: "Confirm the authenticity of customer email addresses to prevent fraud and improve communication."
                },
                {
                  title: "Identity Verification (ID&V)",
                  description: "Authenticate customer identities using advanced verification techniques to ensure legitimacy."
                },
                {
                  title: "Case Management",
                  description: "Efficiently handle all onboarding cases in one platform, ensuring streamlined workflows and swift resolution of compliance tasks."
                }
              ].map((feature, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-xl font-bold text-blue-600">{feature.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>


          

          {/* Business Impact Section */}
          <div className="mt-16 border-t border-blue-100 pt-16">
            <h2 className="text-3xl font-bold text-blue-950 mb-12 flex items-center gap-3">
              <Separator className="w-8 h-1 bg-blue-600 rounded-full" />
              Market Context & Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
              <div className="space-y-12">
                <div className="group">
                  <div className="text-4xl font-bold text-blue-600 mb-2 transition-transform group-hover:translate-x-1">$15.9M</div>
                  <p className="text-lg text-gray-700 leading-snug">in average annual spending on the onboarding process per bank</p>
                </div>
                <div className="group">
                  <div className="text-4xl font-bold text-blue-600 mb-2 transition-transform group-hover:translate-x-1">$14,700</div>
                  <p className="text-lg text-gray-700 leading-snug">average cost per client onboarded.</p>
                </div>
                <div className="group">
                  <div className="text-4xl font-bold text-blue-600 mb-2 transition-transform group-hover:translate-x-1">67%</div>
                  <p className="text-lg text-gray-700 leading-snug">of respondents state that it costs more to onboard a customer than a year ago.</p>
                </div>
              </div>
              <div className="space-y-12">
                <div className="group">
                  <div className="text-4xl font-bold text-blue-600 mb-2 transition-transform group-hover:translate-x-1">+77 relationships</div>
                  <p className="text-lg text-gray-700 leading-snug">a year for a bank onboarding 1,000 customers annually</p>
                </div>
                <div className="group">
                  <div className="text-4xl font-bold text-blue-600 mb-2 transition-transform group-hover:translate-x-1">$300,000</div>
                  <p className="text-lg text-gray-700 leading-snug">daily revenue earned from a day reduction in the onboarding process for a bank earning $100M in new sales annually</p>
                </div>
                <div className="group">
                  <div className="text-4xl font-bold text-blue-600 mb-2 transition-transform group-hover:translate-x-1">85%</div>
                  <p className="text-lg text-gray-700 leading-snug">of respondents state that a positive onboarding experience leads to higher lifetime revenue for a customer.</p>
                </div>
              </div>
            </div>
          </div>


          {/* Data Insights Section */}
          <div className="mt-16 border-t border-blue-100 pt-16">
            <h2 className="text-3xl font-bold text-blue-950 mb-8 flex items-center gap-3">
              <Separator className="w-8 h-1 bg-blue-600 rounded-full" />
              Deep Dive: Survey & Cost Analysis
            </h2>
            
            <TabsComponent
              defaultValue="survey"
              items={[
                {
                  value: "survey",
                  label: "Survey",
                  content: (
                    <div className="bg-slate-50/50 rounded-[40px] p-8 md:p-12 border border-slate-100">
                      <div className="text-center mb-12">
                        <h3 className="text-2xl font-bold text-blue-950 mb-4">Respondents - Worldwide Survey</h3>
                        <p className="text-gray-600 max-w-3xl mx-auto">Understanding the current and future state of onboarding across regions, asset segments, and stakeholders.</p>
                      </div>
                      
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Regional Breakdown */}
                        <div className="space-y-6">
                          <h4 className="text-lg font-bold text-blue-900 text-center">Regional Breakdown</h4>
                          <div className="h-[300px] w-full blur-md">
                            <ChartContainer config={{
                              emea: { label: "EMEA", color: "#0c3b6e" },
                              na: { label: "North America", color: "#1a6cb3" },
                              apac: { label: "APAC", color: "#4fa8e0" },
                            }}>
                              <PieChart>
                                <Pie
                                  data={[
                                    { name: "EMEA", value: 45, fill: "#0c3b6e" },
                                    { name: "North America", value: 35, fill: "#1a6cb3" },
                                    { name: "APAC", value: 20, fill: "#4fa8e0" },
                                  ]}
                                  cx="50%"
                                  cy="50%"
                                  innerRadius={60}
                                  outerRadius={80}
                                  paddingAngle={5}
                                  dataKey="value"
                                >
                                  <Cell key="cell-0" fill="#0c3b6e" />
                                  <Cell key="cell-1" fill="#1a6cb3" />
                                  <Cell key="cell-2" fill="#4fa8e0" />
                                </Pie>
                                <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                                <Legend />
                              </PieChart>
                            </ChartContainer>
                          </div>
                        </div>

                        {/* Bank Size */}
                        <div className="space-y-6">
                          <h4 className="text-lg font-bold text-blue-900 text-center">Bank Size (Assets)</h4>
                          <div className="h-[300px] w-full blur-md">
                            <ChartContainer config={{
                              percentage: { label: "Percentage", color: "#1a6cb3" },
                            }}>
                              <BarChart data={[
                                { name: "US$500B+", value: 19 },
                                { name: "US$100-499B", value: 31 },
                                { name: "US$50-99B", value: 13 },
                                { name: "US$20-49B", value: 19 },
                                { name: "US$10-19B", value: 18 },
                              ]} layout="vertical" margin={{ left: 10, right: 20 }}>
                                <XAxis type="number" hide />
                                <YAxis dataKey="name" type="category" width={100} tick={{ fontSize: 10 }} />
                                <ChartTooltip content={<ChartTooltipContent />} />
                                <Bar dataKey="value" fill="#1a6cb3" radius={[0, 4, 4, 0]} />
                              </BarChart>
                            </ChartContainer>
                          </div>
                        </div>

                        {/* Role/Responsibility */}
                        <div className="space-y-6">
                          <h4 className="text-lg font-bold text-blue-900 text-center">Role/Responsibility</h4>
                          <div className="h-[300px] w-full blur-md">
                            <ChartContainer config={{
                              percentage: { label: "Percentage", color: "#4fa8e0" },
                            }}>
                              <BarChart data={[
                                { name: "Compliance", value: 25 },
                                { name: "Digital leads", value: 25 },
                                { name: "Operations leads", value: 25 },
                                { name: "Relationship managers", value: 24 },
                              ]} layout="vertical" margin={{ left: 10, right: 20 }}>
                                <XAxis type="number" hide />
                                <YAxis dataKey="name" type="category" width={120} tick={{ fontSize: 10 }} />
                                <ChartTooltip content={<ChartTooltipContent />} />
                                <Bar dataKey="value" fill="#4fa8e0" radius={[0, 4, 4, 0]} />
                              </BarChart>
                            </ChartContainer>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                },
                {
                  value: "costs",
                  label: "Onboarding Costs",
                  content: (
                    <div className="bg-slate-50/50 rounded-[40px] p-8 md:p-12 border border-slate-100">
                      <div className="text-center mb-12">
                        <h3 className="text-2xl font-bold text-blue-950 mb-4">Onboarding Costs & Resource Intensity</h3>
                        <p className="text-gray-600">The high price of manual processes and regulatory complexity.</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Spending Chart */}
                        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                          <h4 className="text-xs font-bold text-blue-900 mb-6 text-center uppercase tracking-wider h-8 flex items-center justify-center">Avg. Annual Spending ($M)</h4>
                          <div className="h-[250px] blur-md">
                            <ChartContainer config={{ val: { label: "Spending ($M)", color: "#0c3b6e" } }}>
                              <BarChart data={[
                                { name: "Global", val: 15.9 },
                                { name: "NA", val: 19.1 },
                                { name: "EMEA", val: 14.9 },
                                { name: "APAC", val: 12.2 },
                                { name: "$50bn+", val: 19.0 },
                                { name: "$10-50bn", val: 9.3 },
                              ]}>
                                <XAxis dataKey="name" tick={{ fontSize: 9 }} />
                                <ChartTooltip content={<ChartTooltipContent />} />
                                <Bar dataKey="val" fill="#0c3b6e" radius={[4, 4, 0, 0]} />
                              </BarChart>
                            </ChartContainer>
                          </div>
                        </div>

                        {/* Cost per client Chart */}
                        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                          <h4 className="text-xs font-bold text-blue-900 mb-6 text-center uppercase tracking-wider h-8 flex items-center justify-center">Avg. Cost Per Client ($K)</h4>
                          <div className="h-[250px] blur-md">
                            <ChartContainer config={{ val: { label: "Cost ($K)", color: "#1a6cb3" } }}>
                              <BarChart data={[
                                { name: "Global", val: 14.7 },
                                { name: "NA", val: 14.5 },
                                { name: "EMEA", val: 14.5 },
                                { name: "APAC", val: 15.5 },
                                { name: "$50bn+", val: 13.3 },
                                { name: "$10-50bn", val: 16.8 },
                              ]}>
                                <XAxis dataKey="name" tick={{ fontSize: 9 }} />
                                <ChartTooltip content={<ChartTooltipContent />} />
                                <Bar dataKey="val" fill="#1a6cb3" radius={[4, 4, 0, 0]} />
                              </BarChart>
                            </ChartContainer>
                          </div>
                        </div>

                        {/* Manual Days Chart */}
                        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                          <h4 className="text-xs font-bold text-blue-900 mb-6 text-center uppercase tracking-wider h-8 flex items-center justify-center">Avg. Manual Days Spent</h4>
                          <div className="h-[250px] blur-md">
                            <ChartContainer config={{ val: { label: "Manual Days", color: "#4fa8e0" } }}>
                              <BarChart data={[
                                { name: "Global", val: 29656 },
                                { name: "NA", val: 37031 },
                                { name: "EMEA", val: 26902 },
                                { name: "APAC", val: 22667 },
                                { name: "$50bn+", val: 39142 },
                                { name: "$10-50bn", val: 15073 },
                              ]}>
                                <XAxis dataKey="name" tick={{ fontSize: 9 }} />
                                <ChartTooltip content={<ChartTooltipContent />} />
                                <Bar dataKey="val" fill="#4fa8e0" radius={[4, 4, 0, 0]} />
                              </BarChart>
                            </ChartContainer>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                }
              ]}
            />
          </div>


          {/* Key Takeaways & Recommendations Section */}
          <div className="my-16 border-t border-blue-100 pt-16">
            <h2 className="text-3xl font-bold text-blue-950 mb-12 flex items-center gap-3">
              <Separator className="w-8 h-1 bg-blue-600 rounded-full" />
              Key Takeaways & Strategic Recommendations
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Key Takeaways */}
              <div className="bg-slate-50/50 rounded-[40px] p-8 md:p-12 border border-slate-100">
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-white p-3 rounded-2xl shadow-sm">
                    <Key className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-950">Key Takeaways</h3>
                </div>
                
                <div className="space-y-8">
                  <div className="group">
                    <h4 className="font-bold text-blue-900 mb-2 group-hover:text-blue-600 transition-colors">Manual vs. Automated Processing</h4>
                    <p className="text-gray-700 leading-relaxed">
                      The industry exhibits a stark dichotomy: while some stages are highly automated, early-stage activities like prospecting and acquisition remain heavily manual and resource-intensive, creating significant bottlenecks.
                    </p>
                  </div>
                  <div className="group">
                    <h4 className="font-bold text-blue-900 mb-2 group-hover:text-blue-600 transition-colors">The 49-Day Benchmark</h4>
                    <p className="text-gray-700 leading-relaxed">
                      With a global average onboarding time of 49 days, there is massive room for optimization. Markets vary wildly, highlighting the potential for standardized digital workflows to bring all regions up to speed.
                    </p>
                  </div>
                  <div className="group">
                    <h4 className="font-bold text-blue-900 mb-2 group-hover:text-blue-600 transition-colors">Spending Volatility</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Onboarding costs are increasingly unpredictable. Lower total spending is often a false economy, frequently offset by disproportionately high costs per individual client due to inefficient manual overrides and legacy friction.
                    </p>
                  </div>
                </div>
              </div>

              {/* Strategic Recommendations */}
              <div className="bg-blue-950 rounded-[40px] p-8 md:p-12 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-800/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
                
                <div className="flex items-center gap-4 mb-8 relative z-10">
                  <div className="bg-blue-900/50 p-3 rounded-2xl border border-blue-800">
                    <Lightbulb className="h-6 w-6 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold">Strategic Recommendations</h3>
                </div>
                
                <div className="space-y-10 relative z-10">
                  <div className="bg-blue-900/30 p-6 rounded-3xl border border-blue-800/50 hover:bg-blue-900/40 transition-colors">
                    <h4 className="font-bold text-blue-300 mb-3 flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-400" /> Standardize Variability
                    </h4>
                    <p className="text-blue-100/80 leading-relaxed">
                      Identify and automate the specific high-manual-effort stages that consume the majority of your onboarding timeline. Focus on building robust SLAs for steps that are historically the most frustrating for clients.
                    </p>
                  </div>
                  <div className="bg-blue-900/30 p-6 rounded-3xl border border-blue-800/50 hover:bg-blue-900/40 transition-colors">
                    <h4 className="font-bold text-blue-300 mb-3 flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-400" /> Bridge the Performance Gap
                    </h4>
                    <p className="text-blue-100/80 leading-relaxed">
                      Leverage regional best practices in document handling and acquisition. Prospecting remains the single largest opportunity for automation—standardizing this stage can drastically reduce both time and cost-per-client.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Image */}
           <motion.div {...fadeIn} className="mb-24">
             <div className="mb-12 overflow-hidden group cursor-pointer rounded-6xl" onClick={() => openCarousel(0)}>
               <div className="relative md:h-auto md:pt-[75%] rounded-6xl overflow-hidden w-full h-[445px]">
                 <Image
                   src={project.images.main}
                   alt={project.name}
                   width={1600}
                   height={1200}
                   className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 rounded-6xl"
                 />
               </div>
             </div>
          </motion.div>

          {/* Project Overview Section */}
          <section className="my-32 ">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
              <div className="lg:col-span-5">
                <h2 className="text-3xl font-bold text-blue-950 mb-6 flex items-center gap-3">
                  <Separator className="w-8 h-1 bg-blue-600 rounded-full" />
                  What is Onboarding?
                </h2>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Onboarding is the critical first step in the customer lifecycle—the process of acquiring and subscribing new users while ensuring they have fast, simple access to an organization&apos;s full suite of products and services.
                  </p>
                  <p>
                    <strong>Onboarding is not a one-size-fits-all process.</strong> It varies significantly depending on the client, from single retail customers to complex multinational corporations. To be classified as truly digital, the journey must be completed entirely online, without requiring branch appointments or manual contract signatures.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-7 space-y-12">
                <div className="bg-slate-50 rounded-3xl p-8 md:p-12 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl -mr-20 -mt-20 group-hover:bg-blue-200/50 transition-colors duration-700"></div>
                  <h3 className="text-xl font-bold text-blue-950 mb-6 relative z-10">The Problem</h3>
                  <div className="space-y-4 relative z-10">
                    <div className="flex gap-4">
                      <div className="bg-white p-3 rounded-2xl shadow-sm h-fit">
                        <Zap className="h-5 w-5 text-amber-500" />
                      </div>
                      <p className="text-gray-600">Current onboarding is tied to rigid features within the nCino BOS, lacking the flexibility for modern integrations.</p>
                    </div>
                    <div className="flex gap-4">
                      <div className="bg-white p-3 rounded-2xl shadow-sm h-fit">
                        <Layout className="h-5 w-5 text-blue-500" />
                      </div>
                      <p className="text-gray-600">Built on legacy technology, the existing managed package approach stifles rapid change and continuous improvement.</p>
                    </div>
                    <div className="flex gap-4">
                      <div className="bg-white p-3 rounded-2xl shadow-sm h-fit">
                        <Search className="h-5 w-5 text-purple-500" />
                      </div>
                      <p className="text-gray-600">Limited search capabilities and inflexible data handling create friction for both bank staff and end customers.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-3xl p-8 md:p-12 relative overflow-hidden group">
                  <h3 className="text-xl font-bold text-blue-950 mb-6 relative z-10">Why are we doing this?</h3>
                  <ul className="space-y-3 relative z-10 text-gray-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                      <span><strong>Strategic Solution:</strong> Creating a long-term, scalable capability that forms part of our core messaging.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                      <span><strong>OOTB Expectations:</strong> Large enterprise clients (like Barclays) now expect a seamless, out-of-the-box experience.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                      <span><strong>Reduced Customization:</strong> Minimizing the need for custom PSO projects by providing a robust, standard platform.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* User & Business Benefits Section */}
          <section className="mb-32">
            <h2 className="text-3xl font-bold text-blue-950 mb-12 flex items-center gap-3">
              <Separator className="w-8 h-1 bg-blue-600 rounded-full" />
              User & Business Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="bg-slate-50 rounded-[32px] p-8 md:p-12 border border-slate-100 group hover:bg-white hover:shadow-xl transition-all duration-500">
                <h3 className="text-2xl font-bold text-blue-950 mb-8 flex items-center gap-3">
                  <Clock className="h-6 w-6 text-blue-600" />
                  Short Term
                </h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                    <span>Colleague experience UI with workflow framework</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                    <span>Meaningful solution ready for adoption by fall</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                    <span>Stop Barclays churn</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                    <span>Flexible solution to support global use cases</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                    <span>Agnostic solution to data sources that come into it</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                    <span>Validation of solution with customers and geographies</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-950 rounded-[32px] p-8 md:p-12 text-white group hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <Target className="h-6 w-6 text-blue-400" />
                  Long Term
                </h3>
                <ul className="space-y-4 text-blue-100/80">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                    <span>Quickly respond to regulatory change</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                    <span>Drive cross sales</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                    <span>FIs can downscale but stay in control</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                    <span>nCino leading player in onboarding solution market</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                    <span>Sell onboarding as its own solution with its own revenue stream</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* User Personas & Ecosystem */}
          <section className="mb-32">
            <h2 className="text-3xl font-bold text-blue-950 mb-12 flex items-center gap-3">
              <Separator className="w-8 h-1 bg-blue-600 rounded-full" />
              Who are we building for?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Customer Persona */}
              <div className="bg-white border border-slate-100 rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col">
                <div className="bg-blue-50 p-6 flex items-center gap-3">
                  <h3 className="font-bold text-blue-950 text-xl">Customer</h3>
                </div>
                <div className="p-8 space-y-8 flex-grow">
                  <div>
                    <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Goals</h4>
                    <ul className="space-y-3 text-sm text-gray-600">
                      <li className="flex items-start gap-2">• Secure a product in a timely manner</li>
                      <li className="flex items-start gap-2">• Visibility of what they need to do and when</li>
                      <li className="flex items-start gap-2">• An end-to-end digital onboarding journey</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">nCino Interaction</h4>
                    <p className="text-sm font-medium text-blue-900 bg-blue-50/50 p-3 rounded-xl inline-block w-full">Customer Portal</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Painpoints</h4>
                    <ul className="space-y-3 text-sm text-gray-600">
                      <li className="flex items-start gap-2">• Slow onboarding time</li>
                      <li className="flex items-start gap-2">• Lack of transparency and personalisation</li>
                      <li className="flex items-start gap-2">• Physical signing of documents & branch visits</li>
                    </ul>
                  </div>
                  <div className="pt-4 border-t border-slate-50">
                    <h4 className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-4">Needs</h4>
                    <p className="text-sm text-blue-900 leading-relaxed">Seamless experience in uploading documents and information input via mobile.</p>
                  </div>
                </div>
              </div>

              {/* RM Persona */}
              <div className="bg-white border border-slate-100 rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col">
                <div className="bg-amber-50 p-6 flex items-center gap-3">
                  <h3 className="font-bold text-blue-950 text-xl">Relationship Manager</h3>
                </div>
                <div className="p-8 space-y-8 flex-grow">
                  <div>
                    <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Goals</h4>
                    <ul className="space-y-3 text-sm text-gray-600">
                      <li className="flex items-start gap-2">• Visibility of end-to-end experience</li>
                      <li className="flex items-start gap-2">• Easy case management and handover</li>
                      <li className="flex items-start gap-2">• Communicate all requirements upfront</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">nCino Interaction</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Risk Assessment", "Doc Man", "Smart Checklist", "Onboarding 360"].map((tech) => (
                        <span key={tech} className="text-[10px] font-medium text-amber-900 bg-amber-50 p-2 rounded-lg">{tech}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Painpoints</h4>
                    <ul className="space-y-3 text-sm text-gray-600">
                      <li className="flex items-start gap-2">• Slow onboarding time</li>
                      <li className="flex items-start gap-2">• Manual creation of connections</li>
                      <li className="flex items-start gap-2">• Inefficient handover between teams</li>
                    </ul>
                  </div>
                  <div className="pt-4 border-t border-slate-50">
                    <h4 className="text-[10px] font-bold text-amber-600 uppercase tracking-widest mb-4">Needs</h4>
                    <p className="text-sm text-amber-900 leading-relaxed">Faster onboarding time, less data input, and meeting monthly quotas.</p>
                  </div>
                </div>
              </div>

              {/* KYC Persona */}
              <div className="bg-white border border-slate-100 rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col">
                <div className="bg-emerald-50 p-6 flex items-center gap-3">
                  <h3 className="font-bold text-blue-950 text-xl">KYC Analyst</h3>
                </div>
                <div className="p-8 space-y-8 flex-grow">
                  <div>
                    <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Goals</h4>
                    <ul className="space-y-3 text-sm text-gray-600">
                      <li className="flex items-start gap-2">• Efficient case management and accurately conduct assessments from a single platform</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">nCino Interaction</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Doc Man", "Smart Checklist", "Integrations", "Due Diligence"].map((tech) => (
                        <span key={tech} className="text-[10px] font-medium text-emerald-900 bg-emerald-50 p-2 rounded-lg">{tech}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Painpoints</h4>
                    <ul className="space-y-3 text-sm text-gray-600">
                      <li className="flex items-start gap-2">• Manual onboarding process</li>
                      <li className="flex items-start gap-2">• Inefficient handover process</li>
                      <li className="flex items-start gap-2">• Processing eligibility of documents</li>
                    </ul>
                  </div>
                  <div className="pt-4 border-t border-slate-50">
                    <h4 className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-4">Needs</h4>
                    <p className="text-sm text-emerald-900 leading-relaxed">Faster onboarding time with less back and forth in validating data from the RM.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>


          {/* The Process Section */}
          <section className="mb-32">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-4xl font-bold text-blue-950 mb-4">Design Methodology</h2>
              <p className="text-lg text-gray-600">A rigorous approach to solving complex problems, moving from deep research to polished delivery.</p>
            </div>
            
            <TabsComponent
              defaultValue="research"
              items={[
                {
                  value: "research",
                  label: "Research",
                  icon: <Search className="h-4 w-4" />,
                  content: (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-slate-50/50 rounded-[40px] p-8 md:p-16 border border-slate-100">
                      <div className="relative aspect-video rounded-4xl overflow-hidden border border-slate-200 bg-white">
                        <Image src="/projects/ncino/ideation-1.png" alt="Research phase" fill className="object-cover blur-2xl" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="inline-flex items-center rounded-full border border-white bg-white/80 px-6 py-2.5 text-sm font-medium text-blue-950 backdrop-blur shadow-xl">User Flow Analysis</div>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-blue-950 mb-4">Understanding the User Journey</h3>
                        <p className="text-gray-600 text-lg mb-6">We conducted 15+ in-depth interviews with corporate treasurers and bank relationship managers to map out the current pain points.</p>
                        <ul className="space-y-4 mb-8">
                          {["Journey mapping current friction points", "Competitive benchmarking with bank managers", "Technical feasibility audit with engineering", "Data requirement consolidation"].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-gray-700">
                              <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0" /> {item}
                            </li>
                          ))}
                        </ul>
                        <div className="pt-6 border-t border-slate-200/60">
                          <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2 mb-2">
                            <Layout className="h-3 w-3" /> SOFTWARE USED
                          </div>
                          <div className="flex flex-row items-center justify-start w-full">
                            <AnimatedTooltip items={project.software.research} />
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                },
                {
                  value: "ideation",
                  label: "Ideation",
                  icon: <Lightbulb className="h-4 w-4" />,
                  content: (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-slate-50/50 rounded-[40px] p-8 md:p-16 border border-slate-100">
                      <div className="order-2 md:order-1">
                        <h3 className="text-2xl font-bold text-blue-950 mb-4">Wireframing & Solutioning</h3>
                        <p className="text-gray-600 text-lg mb-6">Moving from abstract problems to concrete solutions through rapid sketching and low-fidelity prototypes.</p>
                        <ul className="space-y-4 mb-8">
                          {["Whiteboarding collaborative sessions", "Information architecture restructuring", "Task flow optimization", "Rapid prototyping for key features"].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-gray-700">
                              <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0" /> {item}
                            </li>
                          ))}
                        </ul>
                        <div className="pt-6 border-t border-slate-200/60">
                          <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2 mb-2">
                            <Layout className="h-3 w-3" /> SOFTWARE USED
                          </div>
                          <div className="flex flex-row items-center justify-start w-full">
                            <AnimatedTooltip items={project.software.ideation} />
                          </div>
                        </div>
                      </div>
                      <div className="relative aspect-video rounded-4xl overflow-hidden border border-slate-200 bg-white order-1 md:order-2">
                        <Image src="/projects/ncino/ideation.png" alt="Ideation phase" fill className="object-cover blur-2xl" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="inline-flex items-center rounded-full border border-white bg-white/80 px-6 py-2.5 text-sm font-medium text-blue-950 backdrop-blur shadow-xl">Rapid Prototyping</div>
                        </div>
                      </div>
                    </div>
                  )
                },
                {
                  value: "design",
                  label: "Design",
                  icon: <PencilRuler className="h-4 w-4" />,
                  content: (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-slate-50/50 rounded-[40px] p-8 md:p-16 border border-slate-100">
                       <div className="relative aspect-video rounded-4xl overflow-hidden border border-slate-200 bg-white">
                        <Image src="/projects/ncino/design.png" alt="Design phase" fill className="object-cover blur-2xl" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="inline-flex items-center rounded-full border border-white bg-white/80 px-6 py-2.5 text-sm font-medium text-blue-950 backdrop-blur shadow-xl">High Fidelity UI</div>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-blue-950 mb-4">Crafting the Interface</h3>
                        <p className="text-gray-600 text-lg mb-6">Applying the new design system to high-fidelity screens, focusing on pixel-perfection and accessibility.</p>
                        <ul className="space-y-4 mb-8">
                          {["Systematic component library build", "Responsive layout design (Web & Mobile)", "Interactive micro-interactions", "Developer handoff documentation"].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-gray-700">
                              <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0" /> {item}
                            </li>
                          ))}
                        </ul>
                        <div className="pt-6 border-t border-slate-200/60">
                          <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2 mb-2">
                            <Layout className="h-3 w-3" /> SOFTWARE USED
                          </div>
                          <div className="flex flex-row items-center justify-start w-full">
                            <AnimatedTooltip items={project.software.design} />
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                },
                {
                  value: "testing",
                  label: "Testing",
                  icon: <TestTube2 className="h-4 w-4" />,
                  content: (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-slate-50/50 rounded-[40px] p-8 md:p-16 border border-slate-100">
                      <div className="order-2 md:order-1">
                        <h3 className="text-2xl font-bold text-blue-950 mb-4">Validation & Iteration</h3>
                        <p className="text-gray-600 text-lg mb-6">Ensuring the design works in the real world through usability testing and feedback loops.</p>
                        <ul className="space-y-4 mb-8">
                          {["Remote usability testing sessions", "Accessibility (WCAG 2.1) audit", "Performance and load time testing", "Stakeholder feedback interviews"].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-gray-700">
                              <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0" /> {item}
                            </li>
                          ))}
                        </ul>
                        <div className="pt-6 border-t border-slate-200/60">
                          <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2 mb-2">
                            <Layout className="h-3 w-3" /> SOFTWARE USED
                          </div>
                          <div className="flex flex-row items-center justify-start w-full">
                            <AnimatedTooltip items={project.software.testing} />
                          </div>
                        </div>
                      </div>
                      <div className="relative aspect-video rounded-4xl overflow-hidden border border-slate-200 bg-white order-1 md:order-2">
                        <Image src="/projects/ncino/testing.png" alt="Testing phase" fill className="object-cover blur-2xl" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="inline-flex items-center rounded-full border border-white bg-white/80 px-6 py-2.5 text-sm font-medium text-blue-950 backdrop-blur shadow-xl">User Testing</div>
                        </div>
                      </div>
                    </div>
                  )
                }
              ]}
            />
          </section>

          {/* Final Deliverables Section */}
          <section className="mb-32">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
              <h2 className="text-3xl font-bold text-blue-950 flex items-center gap-3">
                <Separator className="w-8 h-1 bg-blue-600 rounded-full" />
                Final Deliverables
              </h2>
              <a 
                href="https://house-plaque-75814816.figma.site/" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group"
              >
                View Figma Prototype
                <ExternalLink className="h-4 w-4 transition-transform group-hover:scale-110" />
              </a>
            </div>

            <div className="mt-16 grid grid-cols-12 gap-4">
              <div className="col-span-12 md:col-span-8 overflow-hidden rounded-6xl border border-slate-200 cursor-pointer group" onClick={() => openCarousel(0)}>
                <div className="relative h-[445px] md:h-auto md:pt-[64%] rounded-6xl overflow-hidden w-full">
                  <Image
                    src={project.images.main || "/placeholder.svg"}
                    alt={`${project.name} main view`}
                    width={800}
                    height={500}
                    className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-6xl"
                  />
                </div>
              </div>
              <div className="col-span-12 md:col-span-4 overflow-hidden rounded-6xl border border-slate-200 cursor-pointer group" onClick={() => openCarousel(1)}>
                <div className="relative h-[445px] md:h-auto md:pt-[130%] rounded-6xl overflow-hidden w-full">
                  <Image
                    src={project.images.secondary[0] || "/placeholder.svg"}
                    alt={`${project.name} detail view`}
                    width={400}
                    height={500}
                    className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-6xl"
                  />
                </div>
              </div>

              <div className="col-span-12 md:col-span-4 overflow-hidden rounded-6xl border border-slate-200 cursor-pointer group" onClick={() => openCarousel(2)}>
                <div className="relative h-[445px] md:h-auto md:pt-[138%] rounded-6xl overflow-hidden w-full">
                  <Image
                    src={project.images.secondary[1] || "/placeholder.svg"}
                    alt={`${project.name} detail view`}
                    width={400}
                    height={500}
                    className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-6xl"
                  />
                </div>
              </div>
              <div className="col-span-12 md:col-span-8 overflow-hidden rounded-6xl border border-slate-200 cursor-pointer group" onClick={() => openCarousel(3)}>
                <div className="relative h-[445px] md:h-auto md:pt-[68%] rounded-6xl overflow-hidden w-full">
                  <Image
                    src={project.images.secondary[2] || "/placeholder.svg"}
                    alt={`${project.name} overview`}
                    width={800}
                    height={300}
                    className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-6xl"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Final Impact Section */}
          <section className="mb-24 py-24 bg-slate-50 rounded-[64px] text-center border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-10 h-20 w-px bg-gradient-to-b from-transparent to-blue-200"></div>
            <div className="max-w-3xl mx-auto px-4 relative z-10">
              <h2 className="text-4xl font-bold text-blue-950 mb-8">The Result & Impact</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div>
                  <div className="text-5xl font-bold text-blue-600 mb-2">79%</div>
                  <p className="text-gray-600 font-medium">Reduction in dropout rates</p>
                </div>
                <div>
                  <div className="text-5xl font-bold text-blue-600 mb-2">49 → few days</div>
                  <p className="text-gray-600 font-medium">Avg. days to onboard</p>
                </div>
                <div>
                  <div className="text-5xl font-bold text-blue-600 mb-2">85%</div>
                  <p className="text-gray-600 font-medium">Positive user sentiment</p>
                </div>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed mb-12 font-light">
                "Wow, this experience is so clean & Intuitive. One of banking clients even requested an additional hour to deep dive into the future mockups beacuse we are solving some of their biggest pain points. Great work!!"
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="relative h-12 w-12 rounded-full overflow-hidden bg-slate-200">
                  <Image
                    src="/projects/ncino/cody.png"
                    alt="Cody Poole"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-left">
                  <div className="font-bold text-blue-950">Cody Poole</div>
                  <div className="text-sm text-gray-500">Principal Product Manager</div>
                </div>
              </div>
          </div>
          </section>

          <ProjectNavigation currentProjectId={project.id} />
        </div>
      </div>

      {/* Image Gallery Modal */}
      {selectedImageIndex !== null && currentImage && (
        <div className="fixed inset-0 bg-black z-[200] flex items-center justify-center">
          <button
            onClick={closeCarousel}
            className="absolute top-6 right-6 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-colors z-[210]"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <div className="relative w-full h-full flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image src={currentImage.src} alt={currentImage.alt} fill className="object-contain" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-10">
                <h2 className="text-2xl md:text-3xl font-medium mb-2 text-white">{project.name}</h2>
                <p className="text-lg text-gray-200">{currentImage.alt}</p>
              </div>
            </div>

            <button
              onClick={goToPrevious}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-all duration-300 group z-[210]"
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-all duration-300 group z-[210]"
            >
              <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-[210]">
              {allImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === selectedImageIndex ? "bg-white scale-125" : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            <div className="absolute bottom-8 right-8 text-white/70 z-[210]">
              {selectedImageIndex + 1} / {allImages.length}
            </div>
          </div>
        </div>
      )}
    </PageGridShell>
  )
}
