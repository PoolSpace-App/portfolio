"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { 
  ArrowLeft, 
  Users, 
  Clock, 
  CheckCircle2, 
  Target, 
  Lightbulb, 
  Search, 
  PencilRuler, 
  TestTube2, 
  Rocket,
  ShieldCheck,
  Zap,
  Layout,
  FileText
} from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import ProjectCarousel from "@/components/project-carousel"
import ProjectNavigation from "@/components/project-navigation"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { Separator } from "@/components/ui/separator"

export default function NcinoOnboardingPage() {
  const router = useRouter()

  const project = {
    "id": 101,
    "name": "nCino Onboarding",
    "tagline": "Modernizing digital banking experiences for millions of users.",
    "description": "Redefining the digital onboarding journey for commercial banking, focusing on speed, compliance, and user empowerment.",
    "imageUrl": "/placeholder.jpg",
    "category": "Desktop Applications" as const,
    "type": "permanent",
    "details": "Redesigned the onboarding flow, reducing dropout rates by 25%. Implemented a new design system that unified the brand across all digital touchpoints.",
    "role": "Senior Product Designer",
    "duration": "2 years",
    "year": "2021-2023",
    "processDetails": [
        "Conducted extensive user research across multiple regions to identify pain points in international transfers.",
        "Collaborated with engineering teams to build a scalable component library using React and Tailwind.",
        "Presented design strategies to stakeholders, ensuring alignment with business goals and user needs."
    ],
    "images": {
        "main": "/placeholder.jpg",
        "secondary": [
            "/placeholder.jpg",
            "/placeholder.jpg",
            "/placeholder.jpg",
            "/placeholder.jpg",
            "/placeholder.jpg"
        ]
    },
    "fallback": "/placeholder.svg?height=1200&width=1600&text=nCino+Onboarding"
}

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
    <main className="min-h-screen bg-white text-black font-sans">
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
              <div className="max-w-3xl">
                <Badge variant="outline" className="mb-4 border-blue-900 text-blue-900 px-3 py-1 rounded-full uppercase tracking-widest text-[10px] font-bold">
                  Case Study
                </Badge>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 text-blue-950 tracking-tight">
                  {project.name}
                </h1>
                <p className="text-2xl text-blue-900/80 font-light leading-relaxed">
                  {project.tagline}
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 border-y border-gray-100">
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
            </div>
          </motion.div>

          {/* Featured Image */}
          <motion.div {...fadeIn} className="mb-24">
          <ProjectCarousel project={project} />
          </motion.div>

          {/* Project Overview Section */}
          <section className="mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
              <div className="lg:col-span-5">
                <h2 className="text-3xl font-bold text-blue-950 mb-6 flex items-center gap-3">
                  <Separator className="w-8 h-1 bg-blue-600 rounded-full" />
                  Project Overview
                </h2>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    The nCino Onboarding project was a strategic initiative aimed at revolutionizing the way commercial clients interact with digital banking. The goal was to replace a fragmented, manual process with a seamless, end-to-end digital experience.
                  </p>
                  <p>
                    As the Lead UX Designer, I was tasked with bridging the gap between complex regulatory requirements and a frictionless user interface, ensuring that the final product was not only compliant but also a delight to use.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-7 bg-slate-50 rounded-3xl p-8 md:p-12 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl -mr-20 -mt-20 group-hover:bg-blue-200/50 transition-colors duration-700"></div>
                <h3 className="text-xl font-bold text-blue-950 mb-6 relative z-10">The Core Problem</h3>
                <div className="space-y-6 relative z-10">
                  <div className="flex gap-4">
                    <div className="bg-white p-3 rounded-2xl shadow-sm h-fit">
                      <Zap className="h-6 w-6 text-amber-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-950 mb-1 text-lg">High Dropout Rates</h4>
                      <p className="text-gray-600">Complex forms and redundant data entry led to a 45% abandonment rate during the document upload stage.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-white p-3 rounded-2xl shadow-sm h-fit">
                      <ShieldCheck className="h-6 w-6 text-emerald-500" />
                    </div>
            <div>
                      <h4 className="font-bold text-blue-950 mb-1 text-lg">Compliance Friction</h4>
                      <p className="text-gray-600">The onboarding journey was heavily gatekept by manual KYC (Know Your Customer) checks that lacked transparency.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Challenges & Objectives */}
          <section className="mb-32 bg-blue-950 rounded-[48px] p-12 md:p-24 text-white overflow-hidden relative">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
              <div>
                <Badge className="bg-blue-800 hover:bg-blue-700 text-white mb-6 border-none">Challenges</Badge>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" className="border-blue-900/50">
                    <AccordionTrigger className="text-xl font-bold hover:no-underline text-blue-100">Legacy System Integration</AccordionTrigger>
                    <AccordionContent className="text-blue-200/80 text-lg leading-relaxed pt-2">
                      Designing a modern UI that had to communicate with legacy APIs required careful state management and informative loading experiences to maintain user trust.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="border-blue-900/50">
                    <AccordionTrigger className="text-xl font-bold hover:no-underline text-blue-100">Multi-Regional Compliance</AccordionTrigger>
                    <AccordionContent className="text-blue-200/80 text-lg leading-relaxed pt-2">
                      The onboarding flow needed to adapt dynamically to different regional regulations without breaking the unified design system.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="border-blue-900/50">
                    <AccordionTrigger className="text-xl font-bold hover:no-underline text-blue-100">Data Density vs. Clarity</AccordionTrigger>
                    <AccordionContent className="text-blue-200/80 text-lg leading-relaxed pt-2">
                      Presenting complex financial data sets and legal disclosures in a way that remains readable and manageable on mobile and desktop views.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
            </div>
            <div>
                <Badge className="bg-blue-800 hover:bg-blue-700 text-white mb-6 border-none">Objectives</Badge>
                <div className="space-y-6">
                  <div className="bg-blue-900/40 border border-blue-800/50 p-6 rounded-3xl backdrop-blur-sm group hover:bg-blue-900/60 transition-colors">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]">1</div>
                      <h4 className="text-xl font-bold">Streamline Completion</h4>
                    </div>
                    <p className="text-blue-200/70">Reduce the average time to complete the onboarding from 12 days to under 48 hours.</p>
                  </div>
                  <div className="bg-blue-900/40 border border-blue-800/50 p-6 rounded-3xl backdrop-blur-sm group hover:bg-blue-900/60 transition-colors">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]">2</div>
                      <h4 className="text-xl font-bold">Unify Identity</h4>
                    </div>
                    <p className="text-blue-200/70">Implement a scalable design system that works across web, mobile, and third-party integrations.</p>
                  </div>
                  <div className="bg-blue-900/40 border border-blue-800/50 p-6 rounded-3xl backdrop-blur-sm group hover:bg-blue-900/60 transition-colors">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]">3</div>
                      <h4 className="text-xl font-bold">Boost Conversion</h4>
                    </div>
                    <p className="text-blue-200/70">Improve the document validation pass rate by 30% through intuitive UX guidance and real-time feedback.</p>
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
            
            <Tabs defaultValue="research" className="w-full">
              <div className="flex justify-center mb-12">
                <TabsList className="bg-slate-50 p-1 rounded-2xl h-auto border border-gray-100 overflow-x-auto max-w-full">
                  <TabsTrigger value="research" className="px-8 py-3 rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-blue-600 font-bold transition-all gap-2">
                    <Search className="h-4 w-4" /> Research
                  </TabsTrigger>
                  <TabsTrigger value="ideation" className="px-8 py-3 rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-blue-600 font-bold transition-all gap-2">
                    <Lightbulb className="h-4 w-4" /> Ideation
                  </TabsTrigger>
                  <TabsTrigger value="design" className="px-8 py-3 rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-blue-600 font-bold transition-all gap-2">
                    <PencilRuler className="h-4 w-4" /> Design
                  </TabsTrigger>
                  <TabsTrigger value="testing" className="px-8 py-3 rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-blue-600 font-bold transition-all gap-2">
                    <TestTube2 className="h-4 w-4" /> Testing
                  </TabsTrigger>
                </TabsList>
          </div>

              <TabsContent value="research" className="focus-visible:outline-none">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-slate-50/50 rounded-[40px] p-8 md:p-16 border border-slate-100">
                  <div className="relative aspect-video rounded-3xl overflow-hidden border border-slate-200 bg-white">
                    <Image src="/placeholder.jpg" alt="Research phase" fill className="object-cover opacity-50" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/80 backdrop-blur px-6 py-4 rounded-2xl shadow-xl font-bold text-blue-900 border border-white">User Flow Analysis</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-950 mb-4">Understanding the User Journey</h3>
                    <p className="text-gray-600 text-lg mb-6">We conducted 15+ in-depth interviews with corporate treasurers and bank relationship managers to map out the current pain points.</p>
                    <ul className="space-y-4">
                      {["Journey mapping current friction points", "Competitive benchmarking with fintech leaders", "Technical feasibility audit with engineering", "Data requirement consolidation"].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-700">
                          <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabsContent>
              {/* Other Tabs content would follow similar pattern */}
              <TabsContent value="ideation" className="focus-visible:outline-none">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-slate-50/50 rounded-[40px] p-8 md:p-16 border border-slate-100">
                  <div className="order-2 md:order-1">
                    <h3 className="text-2xl font-bold text-blue-950 mb-4">Wireframing & Solutioning</h3>
                    <p className="text-gray-600 text-lg mb-6">Moving from abstract problems to concrete solutions through rapid sketching and low-fidelity prototypes.</p>
                    <ul className="space-y-4">
                      {["Whiteboarding collaborative sessions", "Information architecture restructuring", "Task flow optimization", "Rapid prototyping for key features"].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-700">
                          <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative aspect-video rounded-3xl overflow-hidden border border-slate-200 bg-white order-1 md:order-2">
                    <Image src="/placeholder.jpg" alt="Ideation phase" fill className="object-cover opacity-50" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/80 backdrop-blur px-6 py-4 rounded-2xl shadow-xl font-bold text-blue-900 border border-white">Rapid Prototyping</div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="design" className="focus-visible:outline-none">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-slate-50/50 rounded-[40px] p-8 md:p-16 border border-slate-100">
                   <div className="relative aspect-video rounded-3xl overflow-hidden border border-slate-200 bg-white">
                    <Image src="/placeholder.jpg" alt="Design phase" fill className="object-cover opacity-50" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/80 backdrop-blur px-6 py-4 rounded-2xl shadow-xl font-bold text-blue-900 border border-white">High Fidelity UI</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-950 mb-4">Crafting the Interface</h3>
                    <p className="text-gray-600 text-lg mb-6">Applying the new design system to high-fidelity screens, focusing on pixel-perfection and accessibility.</p>
                    <ul className="space-y-4">
                      {["Systematic component library build", "Responsive layout design (Web & Mobile)", "Interactive micro-interactions", "Developer handoff documentation"].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-700">
                          <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="testing" className="focus-visible:outline-none">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-slate-50/50 rounded-[40px] p-8 md:p-16 border border-slate-100">
                  <div className="order-2 md:order-1">
                    <h3 className="text-2xl font-bold text-blue-950 mb-4">Validation & Iteration</h3>
                    <p className="text-gray-600 text-lg mb-6">Ensuring the design works in the real world through usability testing and feedback loops.</p>
                    <ul className="space-y-4">
                      {["Remote usability testing sessions", "Accessibility (WCAG 2.1) audit", "Performance and load time testing", "Stakeholder feedback integration"].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-700">
                          <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative aspect-video rounded-3xl overflow-hidden border border-slate-200 bg-white order-1 md:order-2">
                    <Image src="/placeholder.jpg" alt="Testing phase" fill className="object-cover opacity-50" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/80 backdrop-blur px-6 py-4 rounded-2xl shadow-xl font-bold text-blue-900 border border-white">User Testing</div>
                    </div>
                  </div>
          </div>
              </TabsContent>
            </Tabs>
          </section>

          {/* Deliverables Section */}
          <section className="mb-32">
            <h2 className="text-3xl font-bold text-blue-950 mb-12 flex items-center gap-3">
              <Separator className="w-8 h-1 bg-blue-600 rounded-full" />
              Final Deliverables
            </h2>
            <BentoGrid className="md:grid-cols-3">
              <BentoGridItem 
                title="Interactive Prototype" 
                description="A high-fidelity Figma prototype covering 50+ unique user states and edge cases." 
                icon={<Layout className="h-5 w-5 text-blue-600" />}
                className="md:col-span-2"
                header={<div className="h-40 bg-slate-100 rounded-lg mb-4 flex items-center justify-center"><Image src="/placeholder.jpg" alt="Prototype" fill className="object-cover opacity-20" /></div>}
              />
              <BentoGridItem 
                title="Design System" 
                description="A scalable Tailwind-based component library for rapid development." 
                icon={<Zap className="h-5 w-5 text-blue-600" />}
                header={<div className="h-40 bg-slate-100 rounded-lg mb-4 flex items-center justify-center"><Image src="/placeholder.jpg" alt="Design System" fill className="object-cover opacity-20" /></div>}
              />
              <BentoGridItem 
                title="UX Documentation" 
                description="Comprehensive documentation of research findings, personas, and user flows." 
                icon={<FileText className="h-5 w-5 text-blue-600" />}
                header={<div className="h-40 bg-slate-100 rounded-lg mb-4 flex items-center justify-center"><Image src="/placeholder.jpg" alt="Documentation" fill className="object-cover opacity-20" /></div>}
              />
              <BentoGridItem 
                title="Developer Handoff" 
                description="Detailed specs, asset exports, and interaction guidelines for the engineering team." 
                icon={<CheckCircle2 className="h-5 w-5 text-blue-600" />}
                className="md:col-span-2"
                header={<div className="h-40 bg-slate-100 rounded-lg mb-4 flex items-center justify-center"><Image src="/placeholder.jpg" alt="Handoff" fill className="object-cover opacity-20" /></div>}
              />
            </BentoGrid>
          </section>

          {/* Final Impact Section */}
          <section className="mb-24 py-24 bg-slate-50 rounded-[64px] text-center border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-10 h-20 w-px bg-gradient-to-b from-transparent to-blue-200"></div>
            <div className="max-w-3xl mx-auto px-4 relative z-10">
              <h2 className="text-4xl font-bold text-blue-950 mb-8">The Result & Impact</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div>
                  <div className="text-5xl font-bold text-blue-600 mb-2">25%</div>
                  <p className="text-gray-600 font-medium">Reduction in dropout rates</p>
                </div>
                <div>
                  <div className="text-5xl font-bold text-blue-600 mb-2">12 → 2</div>
                  <p className="text-gray-600 font-medium">Avg. days to onboard</p>
                </div>
                <div>
                  <div className="text-5xl font-bold text-blue-600 mb-2">85%</div>
                  <p className="text-gray-600 font-medium">Positive user sentiment</p>
                </div>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed mb-12 font-light">
                "The new nCino Onboarding experience has fundamentally changed how we acquire and serve our commercial clients. It's not just a UI update; it's a competitive advantage."
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="h-12 w-12 rounded-full bg-slate-200"></div>
                <div className="text-left">
                  <div className="font-bold text-blue-950">Jane Doe</div>
                  <div className="text-sm text-gray-500">Director of Digital Strategy</div>
                </div>
              </div>
          </div>
          </section>

          <ProjectNavigation currentProjectId={project.id} />
        </div>
      </div>
    </main>
  )
}
