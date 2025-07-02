"use client"

import { useState, useEffect } from "react"
import { useRouter, useParams } from "next/navigation"
import Navbar from "@/components/navbar"
import Logo from "@/components/logo"
import Image from "next/image"
import { ArrowLeft, ChevronLeft, ChevronRight, X } from "lucide-react"
import { projectsArray } from "@/lib/projects"
import type { Project } from "@/lib/projects"

interface ProjectPageProps {
  params: {
    projectName: string
  }
}

// Helper function to get project by name slug
const getProjectBySlug = (slug: string) => {
  const normalizedSlug = slug.toLowerCase();
  return projectsArray.find(project => 
    project.name.toLowerCase().replace(/\s+/g, "-") === normalizedSlug
  ) || projectsArray[0]; // Fallback to first project if not found
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const router = useRouter()
  const { projectName } = useParams() || { projectName: "" }
  
  // Find the project based on projectName slug
  const [currentProject, setCurrentProject] = useState(() => {
    const slug = typeof projectName === 'string' 
      ? projectName 
      : Array.isArray(projectName) 
        ? projectName[0]
        : "";
    return getProjectBySlug(slug);
  })

  // Carousel state
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  
  // Update current project when projectName changes
  useEffect(() => {
    if (projectName) {
      const slug = typeof projectName === 'string' 
        ? projectName 
        : Array.isArray(projectName) 
          ? projectName[0]
          : "";
      setCurrentProject(getProjectBySlug(slug));
    }
  }, [projectName])
  
  const [project, setProject] = useState({
    id: 1, // Will be updated by effect
    name: "",
    description: "A comprehensive design project showcasing UX/UI skills and product thinking.",
    imageUrl: "/placeholder.svg?height=800&width=1200",
    details:
      "This project involved extensive user research, wireframing, prototyping, and visual design. The goal was to create an intuitive and engaging user experience that meets both user needs and business objectives.",
    role: "Lead Designer",
    duration: "3 months",
    year: "2023",
    processDetails: [] as string[],
    images: {
      main: "/placeholder.svg?height=800&width=400&text=App+Screenshot+1",
      secondary: [
        "/placeholder.svg?height=400&width=400&text=App+Screenshot+2",
        "/placeholder.svg?height=400&width=400&text=App+Screenshot+3",
        "/placeholder.svg?height=800&width=400&text=App+Screenshot+4",
        "/placeholder.svg?height=400&width=400&text=App+Screenshot+5",
        "/placeholder.svg?height=400&width=400&text=App+Screenshot+6",
      ],
    },
    fallback: "/placeholder.svg?height=800&width=1200",
  })

  // Get all project images for carousel
  const getAllProjectImages = () => {
    const images = [
      { src: project.imageUrl, alt: `${project.name} hero image` },
      { src: project.images.main, alt: `${project.name} main view` },
      ...project.images.secondary.map((src, index) => ({
        src,
        alt: `${project.name} view ${index + 1}`
      }))
    ];
    return images;
  };

  // Carousel functions
  const openCarousel = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeCarousel = () => {
    setSelectedImageIndex(null);
  };

  const goToPrevious = () => {
    if (selectedImageIndex !== null) {
      const allImages = getAllProjectImages();
      setSelectedImageIndex(selectedImageIndex === 0 ? allImages.length - 1 : selectedImageIndex - 1);
    }
  };

  const goToNext = () => {
    if (selectedImageIndex !== null) {
      const allImages = getAllProjectImages();
      setSelectedImageIndex(selectedImageIndex === allImages.length - 1 ? 0 : selectedImageIndex + 1);
    }
  };

  const goToSlide = (index: number) => {
    setSelectedImageIndex(index);
  };

  // Total number of projects
  const totalProjects = projectsArray.length

  // Find current project index in the array
  const currentIndex = projectsArray.findIndex(p => p.id === currentProject.id);
  
  // Calculate next and previous project indices
  const nextIndex = (currentIndex + 1) % totalProjects;
  const prevIndex = (currentIndex - 1 + totalProjects) % totalProjects;
  
  // Get next and previous projects
  const nextProject = projectsArray[nextIndex];
  const prevProject = projectsArray[prevIndex];

  const [adjacentProjects, setAdjacentProjects] = useState({
    prev: { id: prevProject?.id || 1, name: prevProject?.name || "" },
    next: { id: nextProject?.id || 2, name: nextProject?.name || "" },
  })

  // Navigate to next or previous project
  const navigateToProject = (name: string) => {
    const slug = name.toLowerCase().replace(/\s+/g, "-")
    router.push(`/${slug}`)
  }

  // Fetch project data based on current project
  useEffect(() => {
    // Get the selected project
    const selectedProject = currentProject;

    if (selectedProject) {
      // Create folder-friendly project name
      const projectFolder = selectedProject.name.toLowerCase().replace(/\s+/g, "-");
      
      // Update the project images with project-specific images if available
      const projectSpecificImages = {
        main: `/projects/${projectFolder}/main.jpg`,
        secondary: [
          `/projects/${projectFolder}/feature1.jpg`,
          `/projects/${projectFolder}/feature2.jpg`,
          `/projects/${projectFolder}/feature3.jpg`,
          `/projects/${projectFolder}/feature4.jpg`,
          `/projects/${projectFolder}/feature5.jpg`,
        ],
      }

      setProject((prev) => ({
        ...prev,
        id: selectedProject.id,
        name: selectedProject.name,
        description: selectedProject.description,
        category: selectedProject.category,
        imageUrl: `/projects/${projectFolder}/hero.jpg`,
        images: projectSpecificImages,
        // Add dynamic project details
        details: selectedProject.details || prev.details,
        role: selectedProject.role || prev.role,
        duration: selectedProject.duration || prev.duration,
        year: selectedProject.year || prev.year,
        processDetails: selectedProject.processDetails || [
          "The design process began with extensive user research to understand the target audience's needs and pain points. This informed the creation of user personas and journey maps, which guided the wireframing and prototyping phases.",
          "Multiple iterations of the design were tested with users to refine the experience. The final design was implemented in collaboration with the development team, ensuring that the vision was executed accurately."
        ],
        // Save a placeholder fallback based on the project name
        fallback: `/placeholder.svg?height=800&width=1200&text=${selectedProject.name.replace(/\s+/g, "+")}`,
      }))
    }

    // Get names of previous and next projects for navigation
    setAdjacentProjects({
      prev: { id: prevProject?.id || 1, name: prevProject?.name || "" },
      next: { id: nextProject?.id || 2, name: nextProject?.name || "" },
    })

    // Scroll to top when component mounts
    window.scrollTo(0, 0)
  }, [currentProject, prevProject, nextProject]) // Re-run when currentProject changes

  // Log image paths for debugging
  useEffect(() => {
    console.log("Current project images:", {
      hero: project.imageUrl,
      main: project.images.main,
      secondary: project.images.secondary
    });
  }, [project]);

  const allImages = getAllProjectImages();
  const currentImage = selectedImageIndex !== null ? allImages[selectedImageIndex] : null;

  return (
    <main className="min-h-screen bg-white text-black">
      {/* White header variant */}
      <header className="container mx-auto px-4 py-8 flex justify-between items-center bg-white text-blue-950 border-b border-gray-200">
        <Navbar variant="white" />
      </header>
      <div className="container mx-auto px-4 py-8">
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
          <div className="mb-12 overflow-hidden group cursor-pointer rounded-6xl" onClick={() => openCarousel(0)}>
            <div className="relative h-[445px] md:h-auto md:pt-[75%] rounded-6xl overflow-hidden w-full h-full">
              <Image
                src={project.imageUrl || "/placeholder.svg"}
                alt={project.name}
                width={1600}
                height={1200}
                className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 rounded-6xl"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = project.fallback || `/placeholder.svg?height=800&width=1200&text=${project.name.replace(/\s+/g, "+")}`;
                }}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <div className="text-sm text-blue-950 mb-1">ROLE</div>
              <p className="text-blue-950">{project.role}</p>
            </div>
            <div>
              <div className="text-sm text-blue-950 mb-1">DURATION</div>
              <p className="text-blue-950">{project.duration}</p>
            </div>
            <div>
              <div className="text-sm text-blue-950 mb-1">YEAR</div>
              <p className="text-blue-950">{project.year}</p>
            </div>
          </div>
          <div className="space-y-6 text-lg text-blue-950">
            <p>{project.details}</p>
            {project.processDetails && project.processDetails.map((detail, index) => (
              <p key={index}>{detail}</p>
            ))}
          </div>
          {/* Project Images - Conditional layout based on category */}
          {currentProject.category === "Desktop Applications" ? (
            /* Desktop Applications: Main image matches hero size, secondary images keep 1:2 ratio */
            <div className="mt-16 space-y-8">
              {/* Main image - same size as hero image */}
              <div className="w-full overflow-hidden rounded-6xl border border-slate-200 cursor-pointer group" onClick={() => openCarousel(1)}>
                <div className="relative h-[445px] md:h-auto md:pt-[75%] rounded-6xl overflow-hidden w-full">
                  <Image
                    src={project.images.main || "/placeholder.svg"}
                    alt={`${project.name} main view`}
                    width={1600}
                    height={1200}
                    className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-6xl"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `/placeholder.svg?height=1200&width=1600&text=${project.name.replace(/\s+/g, "+")}+Main`;
                    }}
                  />
                </div>
              </div>

              {/* Secondary images - all full width with height 2x width */}
              {project.images.secondary.map((imageSrc, index) => (
                <div key={index} className="w-full overflow-hidden rounded-6xl border border-slate-200 cursor-pointer group" onClick={() => openCarousel(index + 2)}>
                  <div className="relative w-full pt-[200%] rounded-6xl overflow-hidden">
                    <Image
                      src={imageSrc || "/placeholder.svg"}
                      alt={`${project.name} view ${index + 1}`}
                      width={800}
                      height={1600}
                      className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-6xl"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `/placeholder.svg?height=1600&width=800&text=${project.name.replace(/\s+/g, "+")}+View+${index + 1}`;
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Mobile Applications & Branding: Existing grid layout */
            <>
              {/* Project Images Grid - Updated asymmetrical layout without containers */}
              <div className="mt-16 grid grid-cols-12 gap-4">
                {/* Top row */}
                <div className="col-span-12 md:col-span-8 overflow-hidden rounded-6xl border border-slate-200 cursor-pointer group" onClick={() => openCarousel(1)}>
                  <div className="relative h-[445px] md:h-auto md:pt-[64%] rounded-6xl overflow-hidden w-full">
                    <Image
                      src={project.images.main || "/placeholder.svg"}
                      alt={`${project.name} main view`}
                      width={800}
                      height={500}
                      className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-6xl"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `/placeholder.svg?height=500&width=800&text=${project.name.replace(/\s+/g, "+")}+Main`;
                      }}
                    />
                  </div>
                </div>
                <div className="col-span-12 md:col-span-4 overflow-hidden rounded-6xl border border-slate-200 cursor-pointer group" onClick={() => openCarousel(2)}>
                  <div className="relative h-[445px] md:h-auto md:pt-[130%] rounded-6xl overflow-hidden w-full">
                    <Image
                      src={project.images.secondary[0] || "/placeholder.svg"}
                      alt={`${project.name} detail view`}
                      width={400}
                      height={500}
                      className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-6xl"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `/placeholder.svg?height=500&width=400&text=${project.name.replace(/\s+/g, "+")}+Feature`;
                      }}
                    />
                  </div>
                </div>

                {/* Bottom row */}
                <div className="col-span-12 md:col-span-4 overflow-hidden rounded-6xl border border-slate-200 cursor-pointer group" onClick={() => openCarousel(3)}>
                  <div className="relative h-[445px] md:h-auto md:pt-[138%] rounded-6xl overflow-hidden w-full">
                    <Image
                      src={project.images.secondary[1] || "/placeholder.svg"}
                      alt={`${project.name} detail view`}
                      width={400}
                      height={500}
                      className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-6xl"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `/placeholder.svg?height=500&width=400&text=${project.name.replace(/\s+/g, "+")}+Search`;
                      }}
                    />
                  </div>
                </div>
                <div className="col-span-12 md:col-span-8 overflow-hidden rounded-6xl border border-slate-200 cursor-pointer group" onClick={() => openCarousel(4)}>
                  <div className="relative h-[445px] md:h-auto md:pt-[68%] rounded-6xl overflow-hidden w-full">
                    <Image
                      src={project.images.secondary[2] || "/placeholder.svg"}
                      alt={`${project.name} overview`}
                      width={800}
                      height={300}
                      className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-6xl"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `/placeholder.svg?height=300&width=800&text=${project.name.replace(/\s+/g, "+")}+Settings`;
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Additional Project Images - Second asymmetrical grid */}
              <div className="mt-8 grid grid-cols-12 gap-4">
                {/* Additional images */}
                <div className="col-span-12 md:col-span-6 overflow-hidden rounded-6xl border border-slate-200 cursor-pointer group" onClick={() => openCarousel(5)}>
                  <div className="relative h-[445px] md:h-auto md:pt-[66.7%] rounded-6xl overflow-hidden w-full">
                    <Image
                      src={project.images.secondary[3] || "/placeholder.svg"}
                      alt={`${project.name} additional view`}
                      width={600}
                      height={400}
                      className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-6xl"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `/placeholder.svg?height=400&width=600&text=${project.name.replace(/\s+/g, "+")}+Profile`;
                      }}
                    />
                  </div>
                </div>
                <div className="col-span-12 md:col-span-6 overflow-hidden rounded-6xl border border-slate-200 cursor-pointer group" onClick={() => openCarousel(6)}>
                  <div className="relative h-[445px] md:h-auto md:pt-[66.7%] rounded-6xl overflow-hidden w-full">
                    <Image
                      src={project.images.secondary[4] || "/placeholder.svg"}
                      alt={`${project.name} additional view`}
                      width={600}
                      height={400}
                      className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-6xl"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `/placeholder.svg?height=400&width=600&text=${project.name.replace(/\s+/g, "+")}+Overview`;
                      }}
                    />
                  </div>
                </div>
              </div>
            </>
          )}
          {/* Project showcase section - simplified without like button */}
          <div className="mt-24 py-16 bg-white text-black text-center">
            <div className="text-3xl font-bold mb-2">{project.name}</div>
            <p className="text-md max-w-2xl mx-auto">{project.description}</p>
          </div>
          {/* Project Navigation */}
          <div className="mt-16 flex justify-between items-center py-6 border-t border-b border-gray-200 bg-white text-black">
            <button
              onClick={() => navigateToProject(adjacentProjects.prev.name)}
              className="flex items-center space-x-2 group hover:text-gray-600 transition-colors"
            >
              <ChevronLeft className="h-5 w-5 transform group-hover:-translate-x-1 transition-transform" />
              <div className="text-left">
                <div className="text-sm text-gray-500">Previous</div>
                <div className="font-medium hover-glitch">{adjacentProjects.prev.name}</div>
              </div>
            </button>

            <div className="hidden md:flex space-x-2">
              {projectsArray.map((p, i) => {
                const projectSlug = p.name.toLowerCase().replace(/\s+/g, "-")
                return (
                  <button
                    key={i}
                    onClick={() => navigateToProject(p.name)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      p.id === currentProject.id ? "bg-black scale-125" : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to ${p.name}`}
                  />
                )
              })}
            </div>

            <button
              onClick={() => navigateToProject(adjacentProjects.next.name)}
              className="flex items-center space-x-2 group hover:text-gray-600 transition-colors"
            >
              <div className="text-right">
                <div className="text-sm text-gray-500">Next</div>
                <div className="font-medium hover-glitch">{adjacentProjects.next.name}</div>
              </div>
              <ChevronRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Fullscreen Carousel Modal */}
      {selectedImageIndex !== null && currentImage && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          {/* Close button */}
          <button
            onClick={closeCarousel}
            className="absolute top-6 right-6 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-colors z-20"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Fullscreen image container */}
          <div className="relative w-full h-full">
            {/* Main image - fullscreen */}
            <div className="relative w-full h-full">
              <Image
                src={currentImage.src}
                alt={currentImage.alt}
                fill
                className="object-cover"
                priority
              />
              
              {/* Gradient overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-10">
                <h2 className="text-2xl md:text-3xl font-medium mb-2 text-white">
                  {project.name}
                </h2>
                <p className="text-lg text-gray-200">
                  {currentImage.alt}
                </p>
              </div>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-all duration-300 group z-20"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-all duration-300 group z-20"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>

            {/* Carousel indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
              {allImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === selectedImageIndex 
                      ? "bg-white scale-125" 
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>

            {/* Counter */}
            <div className="absolute bottom-8 right-8 text-white/70 z-20">
              {selectedImageIndex + 1} / {allImages.length}
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
