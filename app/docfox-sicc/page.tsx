"use client"

import { useEffect, Fragment, useState } from "react"
import { useRouter } from "next/navigation"
import { 
  ArrowLeft, 
  Users, 
  Clock, 
  Target, 
  Rocket, 
  CheckCircle2, 
  Circle, 
  XCircle, 
  Lightbulb, 
  ArrowRight, 
  ArrowDown, 
  Database, 
  Server, 
  Layout, 
  Webhook, 
  Code2,
  Presentation,
  AlertTriangle,
  GitBranch,
  MessageSquare,
  UserPlus,
  ArrowUpRight,
  Info,
  HelpCircle,
  AlertCircle,
  ChevronRight,
  FormInput,
  Network,
  Share2,
  FileSearch,
  ExternalLink,
  X,
  ChevronLeft
} from "@/components/icons"
import { motion } from "framer-motion"
import Image from "next/image"
import ProjectCarousel from "@/components/project-carousel"
import ProjectNavigation from "@/components/project-navigation"
import { AnimatedTooltip } from "@/components/ui/animated-tooltip"
import { Separator } from "@/components/ui/separator"
import PageGridShell from "@/components/page-grid-shell"

export default function DocfoxSiccPage() {
  const router = useRouter()

  const project = {
    "id": 102,
    "name": "SICC (Search and Import Client from Core)",
    "tagline": "Streamlining client onboarding for financial institutions.",
    "description": "DocFox helps a bank open a new business bank account. This process involves the applicant for an account, or a banker on their behalf, submitting required information and documentation. However, if a bank has an existing client on their core that was not created while using DocFox (e.g. at a time before the bank used DocFox), DocFox would have no data on such a client. Therefore, if the client applies for a new account, they would be required to upload all their information from scratch, resulting in a poor client experience.",
    "imageUrl": "/placeholder.jpg",
    "category": "Desktop Applications" as const,
    "type": "permanent",
    "details": "SICC (Search and Import Client from Core) is a tool that allows financial institutions to search and import clients from their core banking system.",
    "role": "Senior Product Designer",
    "duration": "6 months",
    "year": "2023-2024",
    "team": [
        { id: 1, name: "Dean Benjamin", designation: "Product Manager", image: "/projects/docfox/dean.png" },
        { id: 2, name: "Greg Meyer", designation: "Product Manager", image: "/projects/docfox/greg.png" },
        { id: 3, name: "Lunga Sizani", designation: "Senior Software Engineer", image: "/projects/docfox/lunga.png" },
        { id: 4, name: "Lindokuhle Maselela", designation: "Senior Software Engineer", image: "/projects/docfox/lindo.png" },
        { id: 5, name: "Johan Meiring", designation: "Principal Software Engineer", image: "/projects/docfox/johan.png" },
        { id: 6, name: "Randolph Aguanpmwa", designation: "Software Engineer", image: "/projects/docfox/randy.png" },
        { id: 7, name: "Jacqui Lesar", designation: " Senior Product Manager", image: "/projects/docfox/jacqui.png" },
    ],
    "fallback": "/placeholder.svg?height=1200&width=1600&text=Docfox+SICC",
    "images": {
        "main": "/projects/docfox/final-1.png",
        "secondary": [
            "/projects/docfox/final-2.png",
            "/projects/docfox/final-3.png",
            "/projects/docfox/final-4.png",
            "/projects/docfox/final-5.png"
        ]
    }
}

  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

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

  return (
    <PageGridShell>
      <div className="container mx-auto px-4 pt-32 pb-8">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center mb-8 hover:opacity-70 transition-opacity text-blue-950 hover-glitch"
        >
          <ArrowLeft className="mr-2 h-4 w-4 text-blue-950" />
          Back
        </button>

        <div className="w-full mx-auto">
          <div className="text-3xl md:text-4xl font-medium mb-4 text-blue-950">{project.name}</div>
          <p className="text-xl text-blue-950 mb-8">{project.description}</p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 py-8 border-y border-gray-100 my-12">
            <div className="space-y-1">
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                <Users className="h-3 w-3" /> My Role
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
                <Users className="h-3 w-3" /> Team
              </div>
              <div className="flex flex-row items-center justify-start w-full">
                <AnimatedTooltip items={project.team} />
              </div>
            </div>
          </div>

          <div className="mb-24">
            <h2 className="text-2xl font-bold mb-8 text-blue-950">Product Demo</h2>
            <div className="aspect-video w-full overflow-hidden rounded-[48px] bg-gray-100 border border-gray-200">
              <video 
                autoPlay
                muted
                loop
                playsInline
                controls 
                className="w-full h-full object-cover"
                poster="/projects/docfox/sicc-demo.jpg"
              >
                <source src="/projects/docfox/sicc-demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Background & Problem */}
          <div className="mt-16 border-t border-gray-100 pt-16">
            <h2 className="text-3xl font-bold text-blue-950 mb-8 flex items-center gap-3">
              <Separator className="w-8 h-1 bg-blue-600 rounded-full" />
              Background & Problem
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                DocFox helps a bank open a new business bank account. This process involves the applicant for an account, or a banker on their behalf, submitting required information and documentation.
              </p>
              <p>
                However, if a bank has an existing client on their core that was not created while using DocFox (e.g. at a time before the bank used DocFox), DocFox would have no data on such a client. Therefore, if the client applies for a new account, they would be required to upload all their information from scratch, resulting in a poor client experience.
              </p>
            </div>
          </div>

          {/* Solution */}
          <div className="mt-16 border-t border-gray-100 pt-16">
            <h2 className="text-3xl font-bold text-blue-950 mb-8 flex items-center gap-3">
              <Separator className="w-8 h-1 bg-blue-600 rounded-full" />
              The Solution
            </h2>
            <div className="bg-blue-50/50 p-8 rounded-[32px] border border-blue-100 shadow-sm">
              <div className="flex gap-4">
                <div className="mt-1 bg-blue-600 p-2 rounded-xl h-fit shrink-0">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Before the Banker creates a new application in DocFox or invites the client to create their own, the banker is first able to search for the client in the core without leaving DocFox.
                  </p>
                  <p>
                    The banker can then create the client&apos;s application in DocFox by importing their information from the core. The benefit of this is that when an existing client wants to open a new account, DocFox ensures that the client doesn&apos;t have to re-enter the information the bank has on file; any data entry required from the client would just be for the new account they wish to open.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Scope & Requirements */}
          <div className="mt-16 border-t border-gray-100 pt-16 pb-24">
            <h2 className="text-3xl font-bold text-blue-950 mb-12 flex items-center gap-3">
              <Separator className="w-8 h-1 bg-blue-600 rounded-full" />
              Product Scope
            </h2>
            
            <div className="grid grid-cols-1 gap-12">
              {/* Must Haves */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-emerald-600">
                  <CheckCircle2 className="h-6 w-6" />
                  <h3 className="text-xl font-bold uppercase tracking-wider">Must Haves</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Search for clients in the core without leaving DocFox",
                    "View list of signers and owners linked to a business record",
                    "View businesses linked to an individual as signer or owner",
                    "See sufficient info to decide if a record should be imported",
                    "Select and import a client's core record into DocFox",
                    "View imported profile info, related parties, and accounts",
                    "Skip manual document collection for existing core records",
                    "View imported application data seamlessly in DocFox forms"
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 p-4 bg-emerald-50/30 rounded-2xl border border-emerald-100/50 text-gray-700">
                      <div className="h-2 w-2 rounded-full bg-emerald-500 mt-2 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Should Haves */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-blue-600">
                  <Circle className="h-6 w-6" />
                  <h3 className="text-xl font-bold uppercase tracking-wider">Should Haves</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Search for multiple clients simultaneously",
                    "Import multiple clients in a single action",
                    "Indicator if a core client already exists in DocFox",
                    "Detail the exact nature of relationships (e.g. Owner vs Signer)"
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 p-4 bg-blue-50/30 rounded-2xl border border-blue-100/50 text-gray-700">
                      <div className="h-2 w-2 rounded-full bg-blue-500 mt-2 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Won't Haves */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-amber-600">
                  <XCircle className="h-6 w-6" />
                  <h3 className="text-xl font-bold uppercase tracking-wider">Won&apos;t Haves (Future Release)</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Automatic core search in related party builder",
                    "Custom bank-defined form updates for existing data",
                    "Real-time interjection during manual SFO invites",
                    "Automated merging of duplicate core/DocFox records",
                    "Uniform search fields across all banking cores",
                    "Identical data display across different core providers"
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 p-4 bg-amber-50/30 rounded-2xl border border-amber-100/50 text-gray-700">
                      <div className="h-2 w-2 rounded-full bg-amber-500 mt-2 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>


          {/* System Architecture */}
          <div className="mt-16 border-t border-gray-100 pt-16">
            <h2 className="text-3xl font-bold text-blue-950 mb-12 flex items-center gap-3">
              <Separator className="w-8 h-1 bg-blue-600 rounded-full" />
              How it Works
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Diagram Column */}
              <div className="lg:col-span-7 space-y-12">
                {/* Step 1: Search */}
                <div className="relative p-6 bg-white rounded-3xl border border-gray-100 shadow-sm">
                  <div className="absolute -top-3 left-6 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Flow 01: Search
                  </div>
                  <div className="flex items-center justify-between gap-4 mt-4">
                    <div className="flex flex-col items-center gap-2 w-32">
                      <div className="p-4 bg-blue-50 rounded-2xl text-blue-600 border border-blue-100">
                        <Layout className="h-6 w-6" />
                      </div>
                      <span className="text-[10px] font-bold text-gray-400 uppercase text-center">DocFox UI</span>
                    </div>
                    <div className="flex-1 flex flex-col items-center gap-1">
                      <div className="w-full h-px bg-gray-200 relative">
                        <ArrowRight className="absolute -right-2 -top-2 h-4 w-4 text-gray-300" />
                      </div>
                      <span className="text-[9px] text-gray-400 font-medium">POST /search</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 w-32">
                      <div className="p-4 bg-amber-50 rounded-2xl text-amber-600 border border-amber-100">
                        <Server className="h-6 w-6" />
                      </div>
                      <span className="text-[10px] font-bold text-gray-400 uppercase text-center">Open Banking API</span>
                    </div>
                    <div className="flex-1 flex flex-col items-center gap-1">
                      <div className="w-full h-px bg-gray-200 relative">
                        <ArrowRight className="absolute -right-2 -top-2 h-4 w-4 text-gray-300" />
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-2 w-32">
                      <div className="p-4 bg-emerald-50 rounded-2xl text-emerald-600 border border-emerald-100">
                        <Database className="h-6 w-6" />
                      </div>
                      <span className="text-[10px] font-bold text-gray-400 uppercase text-center">Banking Core</span>
                    </div>
                  </div>
                </div>

                {/* Step 2: Webhook & Retrieval */}
                <div className="relative p-6 bg-white rounded-3xl border border-gray-100 shadow-sm">
                  <div className="absolute -top-3 left-6 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Flow 02: Results
                  </div>
                  <div className="flex flex-col gap-8 mt-4">
                    <div className="flex items-center justify-between gap-4">
                      <div className="w-32 flex flex-col items-center gap-2">
                         <div className="p-4 bg-blue-50 rounded-2xl text-blue-600 border border-blue-100">
                          <Webhook className="h-6 w-6" />
                        </div>
                        <span className="text-[10px] font-bold text-gray-400 uppercase text-center">Webhook Listener</span>
                      </div>
                      <div className="flex-1 flex flex-col items-center gap-1">
                        <div className="w-full h-px bg-gray-200 relative">
                          <div className="absolute -left-2 -top-2 h-4 w-4 text-gray-300 transform rotate-180">
                            <ArrowRight className="h-4 w-4" />
                          </div>
                        </div>
                        <span className="text-[9px] text-gray-400 font-medium">Results Ready Notification</span>
                      </div>
                      <div className="w-32 flex flex-col items-center gap-2">
                        <div className="p-4 bg-amber-50 rounded-2xl text-amber-600 border border-amber-100">
                          <Server className="h-6 w-6" />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <div className="w-32 flex flex-col items-center gap-2">
                        <div className="p-4 bg-blue-50 rounded-2xl text-blue-600 border border-blue-100">
                          <Layout className="h-6 w-6" />
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col items-center gap-1">
                        <div className="w-full h-px bg-gray-200 relative">
                          <ArrowRight className="absolute -right-2 -top-2 h-4 w-4 text-gray-300" />
                        </div>
                        <span className="text-[9px] text-gray-400 font-medium">GET /search_results</span>
                      </div>
                      <div className="w-32 flex flex-col items-center gap-2">
                        <div className="p-4 bg-amber-50 rounded-2xl text-amber-600 border border-amber-100">
                          <Server className="h-6 w-6" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 3: Import */}
                <div className="relative p-6 bg-white rounded-3xl border border-gray-100 shadow-sm">
                  <div className="absolute -top-3 left-6 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Flow 03: Import
                  </div>
                  <div className="flex items-center justify-between gap-4 mt-4">
                    <div className="flex flex-col items-center gap-2 w-32">
                      <div className="p-4 bg-blue-50 rounded-2xl text-blue-600 border border-blue-100">
                        <Layout className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-center gap-1">
                      <div className="w-full h-px bg-gray-200 relative">
                        <ArrowRight className="absolute -right-2 -top-2 h-4 w-4 text-gray-300" />
                      </div>
                      <span className="text-[9px] text-gray-400 font-medium">POST /import</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 w-32">
                      <div className="p-4 bg-amber-50 rounded-2xl text-amber-600 border border-amber-100">
                        <Server className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-center gap-1">
                      <div className="w-full h-px bg-gray-200 relative">
                        <ArrowRight className="absolute -right-2 -top-2 h-4 w-4 text-gray-300" />
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-2 w-32">
                      <div className="p-4 bg-emerald-50 rounded-2xl text-emerald-600 border border-emerald-100">
                        <Database className="h-6 w-6" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Details Column */}
              <div className="lg:col-span-5 space-y-8">
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-blue-950 uppercase tracking-widest flex items-center gap-2">
                    <Code2 className="h-4 w-4 text-blue-600" /> API Endpoints
                  </h3>
                  <div className="grid grid-cols-1 gap-2 font-mono text-xs">
                    <div className="p-3 bg-gray-50 rounded-xl border border-gray-100 flex justify-between">
                      <span className="text-blue-600 font-bold">POST</span>
                      <span className="text-gray-600">/search</span>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-xl border border-gray-100 flex justify-between">
                      <span className="text-emerald-600 font-bold">GET</span>
                      <span className="text-gray-600">/search_results?id=1234</span>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-xl border border-gray-100 flex justify-between">
                      <span className="text-blue-600 font-bold">POST</span>
                      <span className="text-gray-600">/import?customer_id=5678</span>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-xl border border-gray-100 flex justify-between">
                      <span className="text-emerald-600 font-bold">GET</span>
                      <span className="text-gray-600">/import?import_id=39402</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-blue-950 uppercase tracking-widest flex items-center gap-2">
                    <Webhook className="h-4 w-4 text-blue-600" /> Webhook Events
                  </h3>
                  <div className="grid grid-cols-1 gap-2 font-mono text-xs">
                    <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                      <span className="text-amber-600 font-bold mr-2">POST</span>
                      <span className="text-gray-600">/search_status</span>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                      <span className="text-amber-600 font-bold mr-2">POST</span>
                      <span className="text-gray-600">/import_status</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-blue-50/50 rounded-3xl border border-blue-100">
                  <h3 className="text-sm font-bold text-blue-950 uppercase tracking-widest mb-4">Process Logic</h3>
                  <ol className="space-y-3 text-sm text-gray-600">
                    <li className="flex gap-3">
                      <span className="font-bold text-blue-600">01.</span>
                      DocFox calls PortX with structured search query.
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-blue-600">02.</span>
                      Unique query ID generated and search starts against core.
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-blue-600">03.</span>
                      Webhook notifies DocFox when results are ready.
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-blue-600">04.</span>
                      DocFox retrieves results marked with Customer IDs.
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-blue-600">05.</span>
                      Customer details retrieved and imported synchronously.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          {/* Workshops Section */}
          <div className="mt-16 border-t border-gray-100 pt-16">
            <h2 className="text-3xl font-bold text-blue-950 mb-8 flex items-center gap-3">
              <Separator className="w-8 h-1 bg-blue-600 rounded-full" />
              Workshops
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed mb-12">
              <p>
                Cyber security teams are so overwhelmed and reactive that they cannot apply their expertise in a scalable and measurable way. Product and services vendors try to solve this problem by adding more alerts and more point-in-time assessments, none of which materially improves an organization&apos;s defenses.
              </p>
              <p>
                Bionic addresses this disparity not by adding more tools and detections, but by making defenders the best they can be through collaborative automation. Our assistive technology gives defenders &quot;superpowers&quot; by providing actionable insights, tailored recommendations, and coaching on a sustained basis.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="relative aspect-[4/3] rounded-[32px] overflow-hidden bg-gray-100 border border-gray-200 group"
                >
                  <Image
                    src={`/projects/docfox/workshop-${i}.jpg`}
                    alt={`Workshop photo ${i}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* User Flows Section */}
          <div className="mt-16 border-t border-gray-100 pt-16">
            <h2 className="text-3xl font-bold text-blue-950 mb-12 flex items-center gap-3">
              <Separator className="w-8 h-1 bg-blue-600 rounded-full" />
              High Level User Flows
            </h2>

            <div className="space-y-24">
              {/* Status Quo Flow */}
              <div className="space-y-8">
                <h3 className="text-2xl font-medium text-blue-950 flex items-center gap-2">
                  Status Quo: <span className="text-gray-400 font-normal">what happens today?</span>
                </h3>
                
                <div className="relative p-12 bg-gray-50/50 rounded-[48px] border border-gray-100 overflow-hidden">
                  {/* Dot Grid Background */}
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                  
                  <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
                    {[
                      { text: "Banker is notified that an existing client wishes to take out a new product.", icon: <Webhook className="h-5 w-5" /> },
                      { text: "Banker reviews client's existing accounts and behaviour.", icon: <Users className="h-5 w-5" /> },
                      { text: "Banker Invites client to onboard (SFO) through DocFox.", icon: <UserPlus className="h-5 w-5" /> },
                      { text: "Person receives SFO invite and enters info of the person/business that is already the bank's client.", icon: <MessageSquare className="h-5 w-5" />, highlight: true }
                    ].map((step, i) => (
                      <Fragment key={i}>
                        <div className="relative group">
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            className={`w-48 h-48 rounded-full flex items-center justify-center p-6 text-center text-xs font-medium leading-tight shadow-lg transition-colors ${step.highlight ? 'bg-purple-700 text-white' : 'bg-purple-600 text-white'}`}
                          >
                            {step.text}
                          </motion.div>
                          {step.highlight && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="absolute -top-24 -right-12 w-48"
                            >
                              <div className="relative bg-orange-600 text-white p-4 rounded-2xl text-[10px] font-bold leading-normal shadow-xl">
                                <AlertTriangle className="h-4 w-4 mb-1" />
                                This is shit as the client is submitting info the bank already has
                                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-orange-600" />
                              </div>
                            </motion.div>
                          )}
                        </div>
                        {i < 3 && (
                          <ArrowRight className="h-6 w-6 text-gray-300 hidden md:block" />
                        )}
                        {i < 3 && (
                          <ArrowDown className="h-6 w-6 text-gray-300 md:hidden" />
                        )}
                      </Fragment>
                    ))}
                  </div>
                </div>
              </div>

              {/* Improved Flow (Stifel) */}
              <div className="space-y-8 pb-12">
                <h3 className="text-2xl font-medium text-blue-950">
                  Target Flow: <span className="text-gray-400 font-normal">Simplified Experience</span>
                </h3>

                <div className="relative p-12 bg-gray-50/50 rounded-[48px] border border-gray-100 overflow-hidden">
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                  
                  <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    {/* Step 1 & 2 */}
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="w-48 h-48 rounded-full bg-purple-600 text-white flex items-center justify-center p-6 text-center text-xs font-medium leading-tight shadow-lg"
                      >
                        Client wishes to take out a new &quot;product&quot;
                      </motion.div>
                      <ArrowRight className="h-6 w-6 text-gray-300 hidden md:block" />
                      <ArrowDown className="h-6 w-6 text-gray-300 md:hidden" />
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="w-48 h-48 rounded-full bg-purple-600 text-white flex items-center justify-center p-6 text-center text-xs font-medium leading-tight shadow-lg"
                      >
                        Client speaks to their day to day contact
                      </motion.div>
                    </div>

                    {/* Branching Logic */}
                    <div className="flex flex-col md:flex-row items-center gap-8">
                      <div className="hidden md:flex flex-col items-center justify-center h-48 relative">
                        <div className="h-32 w-px bg-gray-200" />
                        <div className="absolute top-0 right-0 w-8 h-px bg-gray-200" />
                        <div className="absolute bottom-0 right-0 w-8 h-px bg-gray-200" />
                        <ArrowRight className="absolute top-0 -right-2 -translate-y-1/2 h-4 w-4 text-gray-300" />
                        <ArrowRight className="absolute bottom-0 -right-2 translate-y-1/2 h-4 w-4 text-gray-300" />
                        <GitBranch className="absolute left-[-12px] h-6 w-6 text-gray-300" />
                      </div>

                      <div className="flex flex-col gap-12">
                        <div className="relative">
                          <span className="absolute -top-6 left-0 text-[10px] font-bold text-gray-400 uppercase tracking-widest hidden md:block">
                            New/change of function
                          </span>
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="w-56 h-48 rounded-[32px] bg-purple-600 text-white flex items-center justify-center p-8 text-center text-xs font-medium leading-tight shadow-lg"
                          >
                            Banker sends client the addendum for the new function as well as a Schedule D form - both sent via DocuSign
                          </motion.div>
                        </div>
                        <div className="relative">
                          <span className="absolute -top-6 left-0 text-[10px] font-bold text-gray-400 uppercase tracking-widest hidden md:block">
                            New account
                          </span>
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="w-56 h-48 rounded-[32px] bg-purple-600 text-white flex items-center justify-center p-8 text-center text-xs font-medium leading-tight shadow-lg"
                          >
                            Banker sends client &quot;New Account - Business Form&quot;
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ideal User Journey Section */}
          <div className="mt-16 border-t border-gray-100 pt-16">
            <h2 className="text-3xl font-bold text-blue-950 mb-12 flex items-center gap-3">
              <Separator className="w-8 h-1 bg-blue-600 rounded-full" />
              The Ideal User Journey
            </h2>

            <div className="bg-blue-50/30 p-8 rounded-[40px] border border-blue-100 mb-12">
              <div className="flex items-start gap-4">
                <Info className="h-6 w-6 text-blue-600 shrink-0 mt-1" />
                <div>
                  <h3 className="text-sm font-bold text-blue-950 uppercase tracking-widest mb-3">Context</h3>
                  <ul className="space-y-2 text-gray-600 text-lg">
                    <li>• This describes an existing client at the bank</li>
                    <li>• The existing client does not exist in DocFox, but is in the core</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-auto max-h-[850px] pb-24 -mx-4 px-4 scrollbar-hide border border-gray-100 rounded-[48px] bg-white shadow-sm cursor-grab active:cursor-grabbing">
                <div className="min-w-[3200px] min-h-[900px] relative flex items-center">
                  {/* Connecting Line */}
                  <div className="absolute top-[50%] left-0 w-full h-px bg-gray-200 -translate-y-1/2" />
                  
                  <div className="flex items-center gap-12 relative z-10 px-20">
                    {[
                      { 
                        title: "Existing client wishes to take out a new offering from the bank",
                        stickies: []
                      },
                      { 
                        title: "Client gets in contact with their person at the bank",
                        stickies: []
                      },
                      { 
                        title: "Client and banker consult on the client's needs and confirms which offering is needed",
                        stickies: [
                          { type: 'green', position: 'top', text: "During this consultation, banker is going to need to see what the client currently has with the bank, how they've been using those products and which new offering is best for the client. Currently: this is done by the banker logging into the core or another interface (Meridian Link etc). Do we want this to be done in DocFox?" }
                        ]
                      },
                      { 
                        title: "In DocFox: Banker enters info about the business/person",
                        stickies: [
                          { type: 'orange', position: 'bottom', text: "Would the banker know if the client exists in DocFox or not? How could they find out? Search bar? Invite through SFO?" }
                        ]
                      },
                      { 
                        title: "DocFox calls the core (ESB) to check if there is a record that matches what the user entered",
                        stickies: []
                      },
                      { 
                        title: "Core returns with a Yes/No as well as the info about those records",
                        stickies: []
                      },
                      { 
                        title: "Banker sees the matched records and can select the correct one",
                        stickies: [
                          { type: 'orange', position: 'bottom', text: "How much information about the records from the core do we show here?" }
                        ]
                      },
                      { 
                        title: "DocFox pulls relevant info from core and creates an application in DocFox",
                        stickies: [
                          { type: 'green', position: 'top', text: "Each AI would configure which of the following info they want in DocFox: Business Information (for Profile in DocFox), Existing products, add-ons & signers, Ownership structure, Documents (would we need the actual documents? maybe just request docs older than X? Or, if we show the banker Middesk - might not need to get the biz docs)" },
                          { type: 'orange', position: 'bottom', text: "Seems that banks use this opportunity to get the client to do some account maintenance as well as take out new products. What info needs to be pulled? Profile? Products? Related Parties? Documents? (The actual docs or just the knowledge that they have been collected and when?)" }
                        ]
                      }
                    ].map((step, i) => (
                      <div key={i} className="flex items-center gap-12">
                        <div className="relative">
                          {/* Stickies */}
                          {step.stickies.map((sticky, si) => (
                            <div 
                              key={si}
                              className={`absolute ${sticky.position === 'top' ? '-top-64' : 'top-32'} left-1/2 -translate-x-1/2 w-64 p-4 rounded-2xl text-[11px] leading-relaxed shadow-sm border ${
                                sticky.type === 'green' 
                                  ? 'bg-emerald-50 text-emerald-800 border-emerald-100' 
                                  : 'bg-orange-50 text-orange-800 border-orange-100'
                              }`}
                            >
                              <div className="flex gap-2 mb-2">
                                {sticky.type === 'green' ? <HelpCircle className="h-3 w-3 shrink-0" /> : <AlertCircle className="h-3 w-3 shrink-0" />}
                                <span className="font-bold uppercase tracking-wider">{sticky.type === 'green' ? 'Consideration' : 'Risk / Issue'}</span>
                              </div>
                              {sticky.text}
                            </div>
                          ))}
                          
                          {/* Node */}
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="w-40 h-40 rounded-full bg-purple-600 text-white flex items-center justify-center p-6 text-center text-[11px] font-medium leading-tight shadow-xl border-4 border-white"
                          >
                            {step.title}
                          </motion.div>
                        </div>
                        <ChevronRight className="h-8 w-8 text-gray-200 shrink-0" />
                      </div>
                    ))}

                    {/* Branching Node */}
                    <div className="relative flex flex-col gap-24">
                      {/* Branch 1 */}
                      <div className="relative">
                        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-64 p-4 rounded-2xl bg-emerald-50 text-emerald-800 border border-emerald-100 text-[11px] leading-relaxed shadow-sm">
                          <div className="flex gap-2 mb-2">
                            <HelpCircle className="h-3 w-3 shrink-0" />
                            <span className="font-bold uppercase tracking-wider">Consideration</span>
                          </div>
                          The intention behind the banker sending the invite to the client is for the client to be able to: 1. Confirm info, 2. Select product, 3. Give permissions.
                        </div>
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="w-40 h-40 rounded-full bg-purple-700 text-white flex items-center justify-center p-6 text-center text-[11px] font-medium leading-tight shadow-xl border-4 border-white"
                        >
                          Banker sends an invitation to the client to self-select a new account + do maintenance
                        </motion.div>
                      </div>
                      {/* Branch 2 */}
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-40 h-40 rounded-full bg-purple-700 text-white flex items-center justify-center p-6 text-center text-[11px] font-medium leading-tight shadow-xl border-4 border-white"
                      >
                        Banker pre-selects a new account and/or edits an existing account
                      </motion.div>
                    </div>

                    <ChevronRight className="h-8 w-8 text-gray-200 shrink-0" />

                    {[
                      { 
                        title: "Client does 'all the things'",
                        stickies: [
                          { type: 'green', position: 'top', text: "The client would need to: View/edit business profile, owners, accounts, signers, upload docs, accept T&Cs." },
                          { type: 'orange', position: 'bottom', text: "Banker would send an invitation to the client to agree to T&Cs, upload required docs, confirm/edit ownership and signers for accounts" }
                        ]
                      },
                      { 
                        title: "Banker is notified that the client has done all the things (gets an email?)",
                        stickies: []
                      },
                      { 
                        title: "Banker approves application and changes are propagated to the core",
                        stickies: [
                          { type: 'orange', position: 'bottom', text: "If the client says that an old signer is no longer there... we would want to reflect these changes in the core. What about destructive changes?" }
                        ]
                      }
                    ].map((step, i) => (
                      <div key={i} className="flex items-center gap-12">
                        <div className="relative">
                          {step.stickies.map((sticky, si) => (
                            <div 
                              key={si}
                              className={`absolute ${sticky.position === 'top' ? '-top-56' : 'top-32'} left-1/2 -translate-x-1/2 w-64 p-4 rounded-2xl text-[11px] leading-relaxed shadow-sm border ${
                                sticky.type === 'green' 
                                  ? 'bg-emerald-50 text-emerald-800 border-emerald-100' 
                                  : 'bg-orange-50 text-orange-800 border-orange-100'
                              }`}
                            >
                              <div className="flex gap-2 mb-2">
                                {sticky.type === 'green' ? <HelpCircle className="h-3 w-3 shrink-0" /> : <AlertCircle className="h-3 w-3 shrink-0" />}
                                <span className="font-bold uppercase tracking-wider">{sticky.type === 'green' ? 'Consideration' : 'Risk / Issue'}</span>
                              </div>
                              {sticky.text}
                            </div>
                          ))}
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="w-40 h-40 rounded-full bg-purple-600 text-white flex items-center justify-center p-6 text-center text-[11px] font-medium leading-tight shadow-xl border-4 border-white"
                          >
                            {step.title}
                          </motion.div>
                        </div>
                        {i < 2 && <ChevronRight className="h-8 w-8 text-gray-200 shrink-0" />}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Questions Panel */}
              <div className="mt-12 bg-[#111827] text-white p-10 rounded-[48px] shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -mr-32 -mt-32 transition-colors group-hover:bg-blue-600/20" />
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                    <HelpCircle className="h-6 w-6 text-blue-400" />
                    Key Questions to Answer
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-4">
                      <div className="h-1 w-12 bg-blue-500 rounded-full" />
                      <p className="text-gray-300 leading-relaxed">How much info about a client&apos;s existing products and activity do we need to pull into DocFox?</p>
                    </div>
                    <div className="space-y-4">
                      <div className="h-1 w-12 bg-purple-500 rounded-full" />
                      <p className="text-gray-300 leading-relaxed">Do we want to allow DocFox to be used as an account management tool? ie: should we allow viewing existing signers/owners/products?</p>
                    </div>
                    <div className="space-y-4">
                      <div className="h-1 w-12 bg-emerald-500 rounded-full" />
                      <p className="text-gray-300 leading-relaxed">How will we handle syncing when a client is in both systems? We&apos;ll need to sync from core before inviting.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Integration Point: SFO Invite */}
          <div className="mt-16 border-t border-gray-100 pt-16">
            <h2 className="text-3xl font-bold text-blue-950 mb-12 flex items-center gap-3">
              <Separator className="w-8 h-1 bg-blue-600 rounded-full" />
              Where in DocFox do we check the core?
            </h2>

            <div className="bg-purple-100/50 py-4 px-12 rounded-full w-fit mx-auto mb-16 border border-purple-200 shadow-sm">
              <span className="text-xl font-bold text-purple-950 tracking-wide uppercase">SFO Invite</span>
            </div>

            <div className="relative p-12 bg-gray-50/50 rounded-[64px] border border-gray-100 overflow-hidden mb-24">
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
              
              <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                {/* UI Mockup Column */}
                <div className="lg:col-span-4">
                  <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 space-y-6">
                    <div className="flex justify-between items-center border-b pb-4">
                      <h3 className="font-bold text-gray-800">Invite Customer</h3>
                      <XCircle className="h-4 w-4 text-gray-300" />
                    </div>
                    <p className="text-[10px] text-gray-400">Enter your customer&apos;s details to send them a link to begin onboarding</p>
                    
                    <div className="space-y-4">
                      <div className="space-y-1">
                        <label className="text-[9px] font-bold text-gray-400 uppercase">What type of application is this?</label>
                        <div className="h-8 bg-gray-50 border rounded flex items-center px-3 text-[10px] text-gray-500">Let them choose</div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="text-[9px] font-bold text-gray-400 uppercase">First Names</label>
                          <div className="h-8 border rounded" />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[9px] font-bold text-gray-400 uppercase">Last Names</label>
                          <div className="h-8 border rounded" />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <label className="text-[9px] font-bold text-gray-400 uppercase">Email</label>
                        <div className="h-8 border rounded" />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[9px] font-bold text-gray-400 uppercase">Mobile Number</label>
                        <div className="h-8 border rounded" />
                      </div>
                    </div>

                    <div className="pt-4 border-t space-y-3">
                      <h4 className="text-[9px] font-bold text-gray-400 uppercase">Customise Email Body Copy</h4>
                      <div className="h-24 bg-gray-50 border rounded p-3 text-[10px] text-gray-400">
                        Hi [First Name],
                        <br /><br />
                        Bobs Burgers are the best burgers 🍔🍔🍔
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stickies and Hierarchy Column */}
                <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-8">
                    <div className="p-6 bg-orange-50 rounded-3xl border border-orange-100 text-[11px] leading-relaxed shadow-sm">
                      <div className="flex gap-2 mb-2">
                        <AlertCircle className="h-3 w-3 text-orange-600 shrink-0" />
                        <span className="font-bold uppercase text-orange-800 tracking-wider">Problem & Solution</span>
                      </div>
                      <p className="font-bold text-orange-900 mb-2">How to identify ties to a business in the core?</p>
                      We allow the officer to enter information about the entity that the invitee will be onboarding; ie: the officer can say that the person is onboarding a business and the officer might even know the business&apos; name and/or TIN. 
                    </div>
                    
                    <div className="p-6 bg-orange-50 rounded-3xl border border-orange-100 text-[11px] leading-relaxed shadow-sm">
                      <div className="flex gap-2 mb-2">
                        <AlertCircle className="h-3 w-3 text-orange-600 shrink-0" />
                        <span className="font-bold uppercase text-orange-800 tracking-wider">Identifier Issue</span>
                      </div>
                      <p className="font-bold text-orange-900 mb-2">No semi-unique identifier besides name.</p>
                      Solution: We add in a numeric identifier here (SSN/TIN) to avoid getting too many results.
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center p-8 bg-white/50 rounded-3xl border border-dashed border-gray-200">
                    <div className="text-center space-y-8">
                      <div className="w-24 h-12 bg-orange-100 rounded-xl border border-orange-200 flex items-center justify-center font-bold text-orange-800 shadow-sm">TIN</div>
                      <div className="relative">
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-px h-8 bg-gray-200" />
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gray-200" />
                        <div className="flex justify-between w-48">
                          <div className="relative pt-8">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-8 bg-gray-200" />
                            <div className="w-20 h-10 bg-orange-100 rounded-xl border border-orange-200 flex items-center justify-center text-xs font-bold text-orange-800 shadow-sm">EIN</div>
                          </div>
                          <div className="relative pt-8">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-8 bg-gray-200" />
                            <div className="w-20 h-10 bg-orange-100 rounded-xl border border-orange-200 flex items-center justify-center text-xs font-bold text-orange-800 shadow-sm">SSN</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lower Flowchart */}
              <div className="mt-24 pt-24 border-t border-gray-100 overflow-x-auto scrollbar-hide">
                <div className="min-w-[1200px] flex flex-col items-start px-4">
                  <div className="flex items-center gap-8 relative h-64">
                    {/* Main Flow */}
                    {[
                      { text: "Banker enters TIN of the person/company being invited" },
                      { text: "DocFox calls ESB to check if client exists" },
                      { text: "Client(s) exist?", isDecision: true },
                      { text: "DocFox displays a list of existing client records" },
                      { text: "Banker chooses the client they want" },
                      { text: "Application in DocFox is automatically created with info from core" },
                      { text: "Banker redirected to application to add new product / send invite" }
                    ].map((step, i) => (
                      <Fragment key={i}>
                        <div className="relative flex flex-col items-center">
                          {/* Top Stickies */}
                          {i === 1 && (
                            <div className="absolute -top-32 left-[120%] w-40 p-3 bg-orange-50 border border-orange-100 rounded-2xl text-[9px] shadow-sm z-20">
                              <div className="font-bold text-orange-800 mb-1">MODUS</div>
                              Is this call sync? How long will it take?
                            </div>
                          )}
                          {i === 3 && (
                            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-48 p-3 bg-orange-50 border border-orange-100 rounded-2xl text-[9px] shadow-sm z-20">
                              <div className="font-bold text-orange-800 mb-1">DATA</div>
                              What info do we get back from the core? Eg: Person/Business&apos; name, Products
                            </div>
                          )}

                          <motion.div
                            whileHover={{ y: -5 }}
                            className={`w-32 h-32 flex items-center justify-center p-4 text-center text-[9px] font-medium leading-tight shadow-sm border ${
                              step.isDecision 
                                ? 'rotate-45 bg-gray-50 border-gray-200 rounded-xl' 
                                : 'bg-white border-gray-100 rounded-3xl'
                            }`}
                          >
                            <div className={step.isDecision ? '-rotate-45' : ''}>
                              {step.text}
                            </div>
                            
                            {/* Decision Path: No */}
                            {step.isDecision && (
                              <div className="absolute top-[100%] left-1/2 -translate-x-1/2 pt-12 flex flex-col items-center">
                                <div className="h-12 w-px bg-gray-200" />
                                <ArrowDown className="h-3 w-3 text-gray-300 -mt-1" />
                                <span className="absolute top-4 left-2 text-[8px] font-bold text-gray-400">No</span>
                                <div className="w-32 h-32 flex items-center justify-center p-4 bg-white border border-gray-100 rounded-3xl shadow-sm -rotate-45">
                                  <div className="rotate-45">DocFox allows banker to proceed with invite</div>
                                </div>
                              </div>
                            )}
                            {step.isDecision && (
                              <span className="absolute top-1/2 -right-4 -translate-y-1/2 text-[8px] font-bold text-gray-400 -rotate-45">Yes</span>
                            )}
                          </motion.div>
                        </div>
                        {i < 6 && <ArrowRight className="h-4 w-4 text-gray-200" />}
                      </Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sequence Diagram Section */}
          <div className="mt-16 border-t border-gray-100 pt-16">
            <h2 className="text-3xl font-bold text-blue-950 mb-12 flex items-center gap-3">
              <Separator className="w-8 h-1 bg-blue-600 rounded-full" />
              Technical Sequence
            </h2>

            <div className="relative p-12 bg-gray-50/50 rounded-[64px] border border-gray-100 overflow-x-auto scrollbar-hide">
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
              
              <div className="min-w-[1000px] relative pt-20 pb-12">
                {/* Actor Headers */}
                <div className="flex justify-between px-20 mb-12">
                  <div className="w-48 h-16 bg-purple-600 rounded-3xl flex items-center justify-center text-white font-bold shadow-lg">DocFox</div>
                  <div className="w-48 h-16 bg-purple-600 rounded-3xl flex items-center justify-center text-white font-bold shadow-lg">ESB</div>
                  <div className="w-48 h-16 bg-purple-600 rounded-3xl flex items-center justify-center text-white font-bold shadow-lg">Core</div>
                </div>

                {/* Lifelines */}
                <div className="absolute top-36 bottom-0 left-[calc(25%+40px)] w-px border-l-2 border-dashed border-gray-200" />
                <div className="absolute top-36 bottom-0 left-[50%] w-px border-l-2 border-dashed border-gray-200" />
                <div className="absolute top-36 bottom-0 right-[calc(25%-40px)] w-px border-l-2 border-dashed border-gray-200" />

                {/* Steps and Messages */}
                <div className="space-y-32 relative">
                  {/* Step 1 */}
                  <div className="flex items-start gap-8">
                    <div className="relative group">
                      <div className="w-32 h-24 bg-white border border-gray-200 rounded-xl p-4 shadow-sm flex flex-col items-center justify-center text-center gap-1 z-10 relative">
                        <span className="text-xs font-bold text-blue-950">1</span>
                        <p className="text-[9px] text-gray-600">Banker invites, creates or searches for a client</p>
                      </div>
                      <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-24 p-2 bg-amber-100 border border-amber-200 rounded-lg text-[8px] text-amber-900 leading-tight shadow-sm opacity-0 group-hover:opacity-100 transition-opacity z-20">
                        What sort of latency do we expect? Sync vs Async?
                      </div>
                    </div>
                    <div className="flex-1 pt-12 relative">
                      <div className="absolute top-12 left-0 right-[50%] h-px bg-gray-300">
                        <ArrowRight className="absolute -right-2 -top-2 h-4 w-4 text-gray-400" />
                        <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-gray-500 whitespace-nowrap italic">Which clients exist?(client_identifier)</span>
                      </div>
                      <div className="absolute -top-12 left-[25%] -translate-x-1/2 w-32 p-2 bg-amber-50 border border-amber-100 rounded-lg text-[8px] text-amber-800 leading-tight shadow-sm">
                        Which identifier is supported by most cores? TIN?
                      </div>
                      <div className="absolute top-12 left-[50%] right-0 h-px bg-gray-300">
                        <ArrowRight className="absolute -right-2 -top-2 h-4 w-4 text-gray-400" />
                        <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-gray-500 whitespace-nowrap italic">Which clients exist?(client_identifier)</span>
                      </div>
                    </div>
                  </div>

                  {/* Step 2 (Return) */}
                  <div className="flex items-start gap-8">
                    <div className="w-32 h-24 bg-white border border-gray-200 rounded-xl p-4 shadow-sm flex flex-col items-center justify-center text-center gap-1">
                      <span className="text-xs font-bold text-blue-950">2</span>
                      <p className="text-[9px] text-gray-600">Banker identifies their client from list</p>
                    </div>
                    <div className="flex-1 pt-12 relative">
                      <div className="absolute top-0 right-0 left-[50%] h-px bg-gray-300">
                        <div className="absolute -left-2 -top-2 h-4 w-4 text-gray-400 rotate-180">
                          <ArrowRight className="h-4 w-4" />
                        </div>
                        <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-gray-500 whitespace-nowrap italic">List of matching clients</span>
                      </div>
                      <div className="absolute -top-12 right-[25%] translate-x-1/2 w-32 p-2 bg-amber-50 border border-amber-100 rounded-lg text-[8px] text-amber-800 leading-tight shadow-sm">
                        What is the bare minimum info we assume we&apos;ll get back?
                      </div>
                      <div className="absolute top-0 right-[50%] left-0 h-px bg-gray-300">
                        <div className="absolute -left-2 -top-2 h-4 w-4 text-gray-400 rotate-180">
                          <ArrowRight className="h-4 w-4" />
                        </div>
                        <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-gray-500 whitespace-nowrap italic">List of matching clients</span>
                      </div>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex items-start gap-8">
                    <div className="w-32 h-24 bg-white border border-gray-200 rounded-xl p-4 shadow-sm flex flex-col items-center justify-center text-center gap-1">
                      <span className="text-xs font-bold text-blue-950">3</span>
                      <p className="text-[9px] text-gray-600">Banker elects to have KycApplication created</p>
                    </div>
                    <div className="flex-1 pt-12 relative">
                      <div className="absolute top-12 left-0 right-[50%] h-px bg-gray-300">
                        <ArrowRight className="absolute -right-2 -top-2 h-4 w-4 text-gray-400" />
                        <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-gray-500 whitespace-nowrap italic">Create KycApplication</span>
                      </div>
                      <div className="absolute top-12 left-[50%] right-0 h-px bg-gray-300">
                        <ArrowRight className="absolute -right-2 -top-2 h-4 w-4 text-gray-400" />
                        <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-gray-500 whitespace-nowrap italic">Get all required information</span>
                      </div>
                    </div>
                  </div>

                  {/* Step 4 (Final Return) */}
                  <div className="flex items-start gap-8">
                    <div className="w-32 h-24 bg-white border border-gray-200 rounded-xl p-4 shadow-sm flex flex-col items-center justify-center text-center gap-1">
                      <span className="text-xs font-bold text-blue-950">4</span>
                      <p className="text-[9px] text-gray-600">Banker views KycApplication on DocFox</p>
                    </div>
                    <div className="flex-1 pt-12 relative">
                      <div className="absolute top-0 right-0 left-[50%] h-px bg-gray-300">
                        <div className="absolute -left-2 -top-2 h-4 w-4 text-gray-400 rotate-180">
                          <ArrowRight className="h-4 w-4" />
                        </div>
                        <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-gray-500 whitespace-nowrap italic">Required info for identifier</span>
                      </div>
                      <div className="absolute top-12 right-[50%] left-0 h-px bg-gray-300">
                        <div className="absolute -left-2 -top-2 h-4 w-4 text-gray-400 rotate-180">
                          <ArrowRight className="h-4 w-4" />
                        </div>
                        <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-gray-500 whitespace-nowrap italic">App created with Core data</span>
                      </div>
                      <div className="absolute top-24 left-[25%] -translate-x-1/2 w-64 space-y-2">
                        <div className="p-2 bg-amber-50 border border-amber-100 rounded-lg text-[8px] text-amber-800 leading-tight shadow-sm font-bold">
                          Option 1: ESB maps data and creates KycApplication via our APIs
                        </div>
                        <div className="p-2 bg-amber-50 border border-amber-100 rounded-lg text-[8px] text-amber-800 leading-tight shadow-sm font-bold">
                          Option 2: ESB sends Core info to DocFox who does the mapping
                        </div>
                        <div className="p-2 bg-amber-100 border border-amber-200 rounded-lg text-[8px] text-amber-900 leading-tight shadow-sm text-center italic">
                          What are the pros and cons of each option?
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Timelines Section */}
          <div className="mt-16 border-t border-gray-100 pt-16">
            <h2 className="text-3xl font-bold text-blue-950 mb-12 flex items-center gap-3">
              <Separator className="w-8 h-1 bg-blue-600 rounded-full" />
              SICC Timelines
            </h2>

            <div className="relative py-32 overflow-x-auto scrollbar-hide">
              <div className="min-w-[1200px] px-12">
                {/* Timeline Bar */}
                <div className="relative h-12 flex items-center mb-12">
                  <div className="absolute inset-0 bg-emerald-700 rounded-full" />
                  <div className="absolute inset-y-0 left-0 w-1/4 bg-emerald-500 rounded-l-full" />
                  <div className="absolute inset-y-0 left-1/4 w-1/4 bg-emerald-900" />
                  <div className="absolute inset-y-0 left-2/4 w-1/4 bg-emerald-600" />
                  <div className="absolute inset-y-0 left-3/4 w-1/4 bg-emerald-800 rounded-r-full" />
                  
                  {/* Arrow Head */}
                  <div className="absolute -right-4 inset-y-0 flex items-center">
                    <div className="w-0 h-0 border-t-[24px] border-t-transparent border-l-[32px] border-l-emerald-800 border-b-[24px] border-b-transparent" />
                  </div>
                  
                  {/* Quarters Markers */}
                  <div className="relative w-full flex justify-around text-white font-bold text-xl z-10">
                    <span>Q1</span>
                    <span>Q2</span>
                    <span>Q3</span>
                    <span>Q4</span>
                  </div>

                  {/* Connecting Arrows/Dots from image */}
                  <div className="absolute -top-4 left-[0%] w-px h-8 bg-black z-20">
                    <div className="absolute -top-1 -left-1 w-2 h-2 rounded-full bg-black" />
                  </div>
                  <div className="absolute -bottom-4 left-[25%] w-px h-8 bg-black z-20">
                    <div className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full bg-black" />
                  </div>
                  <div className="absolute -top-4 left-[50%] w-px h-8 bg-black z-20">
                    <div className="absolute -top-1 -left-1 w-2 h-2 rounded-full bg-black" />
                  </div>
                  <div className="absolute -bottom-4 left-[75%] w-px h-8 bg-black z-20">
                    <div className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full bg-black" />
                  </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-4 gap-12">
                  {/* Q1 Content */}
                  <div className="relative">
                    <div className="absolute -top-56 left-0 space-y-4">
                      <div className="flex gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-black mt-2 shrink-0" />
                        <p className="text-sm text-gray-700 leading-snug">
                          Bankers can search for clients in the core <span className="font-bold">without leaving DocFox.</span>
                        </p>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-black mt-2 shrink-0" />
                        <p className="text-sm text-gray-700 leading-snug">
                          Bankers can import clients from the core into DocFox <span className="font-bold">removing the need for a client to provide the same information again</span> when opening new accounts.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Q2 Content */}
                  <div className="relative">
                    <div className="absolute top-12 left-0">
                      <div className="flex gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-black mt-2 shrink-0" />
                        <p className="text-sm text-gray-700 leading-snug">
                          <span className="font-bold">Automatic detection and importing</span> of existing clients from the core into DocFox when a business&apos; owners and signers are being entered by the client, <span className="font-bold">preventing the client from having to provide the same information again.</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Q3 Content */}
                  <div className="relative">
                    <div className="absolute -top-48 left-0">
                      <div className="flex gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-black mt-2 shrink-0" />
                        <p className="text-sm text-gray-700 leading-snug">
                          Bankers are told which client documents and forms need to be completed when importing existing clients into DocFox, <span className="font-bold">minimising the number of times a banker needs to request information from the client.</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Q4 Content */}
                  <div className="relative">
                    <div className="absolute top-12 left-0">
                      <div className="flex gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-black mt-2 shrink-0" />
                        <p className="text-sm text-gray-700 leading-snug">
                          Searching for existing clients in the core is much quicker which offers a <span className="font-bold">greatly improved banker and client experience.</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Wireframes Section */}
          <div className="mt-16 border-t border-gray-100 pt-16">
            <h2 className="text-3xl font-bold text-blue-950 mb-12 flex items-center gap-3">
              <Separator className="w-8 h-1 bg-blue-600 rounded-full" />
              Wireframe Revisions
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Revision 1: Initial Concept", image: "/projects/docfox/wireframe-1.png", description: "First exploration of the search and import flow, focusing on core connectivity." },
                { title: "Revision 2: Refined UX", image: "/projects/docfox/wireframe-2.png", description: "Improved data mapping and validation steps based on initial stakeholder feedback." },
                { title: "Revision 3: Final Wireframe", image: "/projects/docfox/wireframe-3.png", description: "Polished low-fidelity designs with complete edge-case handling and technical constraints." }
              ].map((rev, i) => (
                <div key={i} className="space-y-4">
                  <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden bg-gray-50 border border-gray-100 group cursor-pointer">
                    <Image
                      src={rev.image}
                      alt={rev.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                    <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-blue-900 border border-white/50">
                      REVISION {i + 1}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-blue-950 mb-1">{rev.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{rev.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Final Deliverables Section */}
          <section className="mb-32 mt-16 border-t border-gray-100 pt-16">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
              <h2 className="text-3xl font-bold text-blue-950 flex items-center gap-3">
                <Separator className="w-8 h-1 bg-blue-600 rounded-full" />
                Final Deliverables
              </h2>
              <a 
                href="https://www.figma.com/proto/0WrJvjN9AusaIli8KKLIfH/SICC?page-id=3121%3A85192&node-id=3139-103218&p=f&viewport=164%2C1691%2C0.03&t=sC8xFpHvYTti56cG-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=3139%3A103218&show-proto-sidebar=1" 
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
                    src={project.images.main || "/projects/docfox/final-1.png"}
                    alt={`${project.name} main view`}
                    fill
                    className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-6xl"
                  />
                </div>
              </div>
              <div className="col-span-12 md:col-span-4 overflow-hidden rounded-6xl border border-slate-200 cursor-pointer group" onClick={() => openCarousel(1)}>
                <div className="relative h-[445px] md:h-auto md:pt-[130%] rounded-6xl overflow-hidden w-full">
                  <Image
                    src={project.images.secondary[0] || "/projects/docfox/final-2.png"}
                    alt={`${project.name} detail view`}
                    fill
                    className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-6xl"
                  />
                </div>
              </div>

              <div className="col-span-12 md:col-span-4 overflow-hidden rounded-6xl border border-slate-200 cursor-pointer group" onClick={() => openCarousel(2)}>
                <div className="relative h-[445px] md:h-auto md:pt-[138%] rounded-6xl overflow-hidden w-full">
                  <Image
                    src={project.images.secondary[1] || "/projects/docfox/final-3.png"}
                    alt={`${project.name} detail view`}
                    fill
                    className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-6xl"
                  />
                </div>
              </div>
              <div className="col-span-12 md:col-span-8 overflow-hidden rounded-6xl border border-slate-200 cursor-pointer group" onClick={() => openCarousel(3)}>
                <div className="relative h-[445px] md:h-auto md:pt-[68%] rounded-6xl overflow-hidden w-full">
                  <Image
                    src={project.images.secondary[2] || "/projects/docfox/final-4.png"}
                    alt={`${project.name} overview`}
                    fill
                    className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-6xl"
                  />
                </div>
              </div>

              <div className="col-span-12 overflow-hidden rounded-6xl border border-slate-200 cursor-pointer group" onClick={() => openCarousel(4)}>
                <div className="relative h-[445px] md:h-auto md:pt-[56.25%] rounded-6xl overflow-hidden w-full">
                  <Image
                    src={project.images.secondary[3] || "/projects/docfox/final-5.png"}
                    alt={`${project.name} full view`}
                    fill
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
                  <div className="text-5xl font-bold text-blue-600 mb-2">56%</div>
                  <p className="text-gray-600 font-medium">Reduction in duplicate client data</p>
                </div>
                <div>
                  <div className="text-5xl font-bold text-blue-600 mb-2">12%</div>
                  <p className="text-gray-600 font-medium">Increase in client satisfaction</p>
                </div>
                <div>
                  <div className="text-5xl font-bold text-blue-600 mb-2">68%</div>
                  <p className="text-gray-600 font-medium">Positive user sentiment (system was too slow and clunky)</p>
                </div>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed mb-12 font-light">
                &quot;The design implementation was excellent. The challenge was ensuring that the system was fast and responsive, and that the user experience was smooth and intuitive.&quot;
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="relative h-12 w-12 rounded-full overflow-hidden bg-slate-200">
                  <Image
                    src="/projects/docfox/jacqui.png"
                    alt="Jacqui Lesar"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-left">
                  <div className="font-bold text-blue-950">Jacqui Lesar</div>
                  <div className="text-sm text-gray-500">Senior Product Manager</div>
                </div>
              </div>
          </div>
          </section>

          <div className="mt-24 py-16 bg-white text-black text-center border-t border-gray-100">
            <div className="text-3xl font-bold mb-2">{project.name}</div>
            <p className="text-md max-w-2xl mx-auto">{project.description}</p>
          </div>

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
