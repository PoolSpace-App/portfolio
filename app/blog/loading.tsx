import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import PageGridShell from "@/components/page-grid-shell"

export default function BlogLoading() {
  return (
    <PageGridShell>
      <div className="container mx-auto px-4 pt-32 pb-32">
        <div className="h-12 w-48 bg-gray-200 animate-pulse rounded-lg mb-4" />
        <div className="h-6 w-96 bg-gray-100 animate-pulse rounded-lg mb-16" />
        
        <BentoGrid className="w-full mb-16">
          {[1, 2, 3, 4, 5].map((i) => (
            <div 
              key={i} 
              className={`h-96 rounded-[40px] bg-gray-50 animate-pulse border border-gray-100 ${
                i === 1 || i === 5 ? "md:col-span-4" : "md:col-span-2"
              }`}
            />
          ))}
        </BentoGrid>
      </div>
    </PageGridShell>
  )
}
