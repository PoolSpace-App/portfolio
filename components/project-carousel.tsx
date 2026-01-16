"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

interface ProjectCarouselProps {
  project: {
    name: string
    category: string
    imageUrl: string
    images: {
      main: string
      secondary: string[]
    }
    fallback?: string
  }
}

export default function ProjectCarousel({ project }: ProjectCarouselProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

  // Get all project images for carousel
  const allImages = [
    { src: project.imageUrl, alt: `${project.name} hero image` },
    { src: project.images.main, alt: `${project.name} main view` },
    ...project.images.secondary.map((src, index) => ({
      src,
      alt: `${project.name} view ${index + 1}`
    }))
  ];

  const currentImage = selectedImageIndex !== null ? allImages[selectedImageIndex] : null;

  const openCarousel = (index: number) => setSelectedImageIndex(index);
  const closeCarousel = () => setSelectedImageIndex(null);
  
  const goToPrevious = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex === 0 ? allImages.length - 1 : selectedImageIndex - 1);
    }
  };

  const goToNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex === allImages.length - 1 ? 0 : selectedImageIndex + 1);
    }
  };

  const goToSlide = (index: number) => setSelectedImageIndex(index);

  return (
    <>
      <div className="mb-12 overflow-hidden group cursor-pointer rounded-6xl" onClick={() => openCarousel(0)}>
        <div className={`relative h-[445px] md:h-auto ${project.category === "Branding" ? "md:pt-[56.25%]" : "md:pt-[75%]"} rounded-6xl overflow-hidden w-full h-full`}>
          <Image
            src={project.imageUrl || "/placeholder.svg"}
            alt={project.name}
            width={1600}
            height={project.category === "Branding" ? 900 : 1200}
            className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 rounded-6xl"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              const height = project.category === "Branding" ? 900 : 1200;
              target.src = project.fallback || `/placeholder.svg?height=${height}&width=1600&text=${project.name.replace(/\s+/g, "+")}`;
            }}
          />
        </div>
      </div>

      {project.category === "Desktop Applications" ? null : project.category === "Branding" ? (
        <div className="mt-16 space-y-8">
          <div className="w-full overflow-hidden rounded-6xl border border-slate-200 cursor-pointer group" onClick={() => openCarousel(1)}>
            <div className="relative h-[445px] md:h-auto md:pt-[56.25%] rounded-6xl overflow-hidden w-full">
              <Image
                src={project.images.main || "/placeholder.svg"}
                alt={`${project.name} main view`}
                width={1600}
                height={900}
                className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-6xl"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `/placeholder.svg?height=900&width=1600&text=${project.name.replace(/\s+/g, "+")}+Main`;
                }}
              />
            </div>
          </div>

          {project.images.secondary.map((imageSrc, index) => (
            <div key={index} className="w-full overflow-hidden rounded-6xl border border-slate-200 cursor-pointer group" onClick={() => openCarousel(index + 2)}>
              <div className="relative w-full pt-[56.25%] rounded-6xl overflow-hidden">
                <Image
                  src={imageSrc || "/placeholder.svg"}
                  alt={`${project.name} view ${index + 1}`}
                  width={1600}
                  height={900}
                  className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-6xl"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `/placeholder.svg?height=900&width=1600&text=${project.name.replace(/\s+/g, "+")}+View+${index + 1}`;
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className="mt-16 grid grid-cols-12 gap-4">
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

          <div className="mt-8 grid grid-cols-12 gap-4">
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

      {selectedImageIndex !== null && currentImage && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          <button
            onClick={closeCarousel}
            className="absolute top-6 right-6 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-colors z-20"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <div className="relative w-full h-full">
            <div className="relative w-full h-full">
              <Image src={currentImage.src} alt={currentImage.alt} fill className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-10">
                <h2 className="text-2xl md:text-3xl font-medium mb-2 text-white">{project.name}</h2>
                <p className="text-lg text-gray-200">{currentImage.alt}</p>
              </div>
            </div>

            <button
              onClick={goToPrevious}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-all duration-300 group z-20"
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-all duration-300 group z-20"
            >
              <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
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

            <div className="absolute bottom-8 right-8 text-white/70 z-20">
              {selectedImageIndex + 1} / {allImages.length}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
