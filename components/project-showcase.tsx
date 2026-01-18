import Image from "next/image"
import Link from "next/link"

interface ProjectShowcaseProps {
  id: number
  name: string
  tagline: string
  description: string
  imageUrl: string
  slug: string
  reverse?: boolean
}

export default function ProjectShowcase({
  id,
  name,
  tagline,
  description,
  imageUrl,
  slug,
  reverse = false,
}: ProjectShowcaseProps) {
  return (
    <div
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } gap-8 md:gap-16 items-center mb-24 md:mb-36`}
    >
      {/* Image section */}
      <div className="w-full md:w-1/2 aspect-[4/3] relative rounded-2xl overflow-hidden">
        <Image src={imageUrl} alt={name} fill className="object-cover" />
      </div>

      {/* Content section */}
      <div className="w-full md:w-1/2">
        <div className="text-3xl md:text-4xl font-light mb-6">{tagline}</div>
        <p className="text-lg text-gray-300 mb-8">{description}</p>
        <Link
          href={`/${slug}`}
          className="inline-flex items-center text-white border-b border-white pb-1 hover:pl-2 transition-all duration-300"
        >
          View Project <span className="ml-2 group-hover:ml-3 transition-all duration-300">→</span>
        </Link>
      </div>
    </div>
  )
}
