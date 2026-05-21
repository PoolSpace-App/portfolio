import { ArrowLeft } from "@/components/icons"
import PageGridShell from "@/components/page-grid-shell"

export default function BlogPostLoading() {
  return (
    <PageGridShell>
      <div className="container mx-auto px-4 pt-32 pb-32">
        <div className="inline-flex items-center mb-8 h-6 w-20 bg-gray-100 animate-pulse rounded" />
        
        <div className="mb-12">
          <div className="flex items-center space-x-4 mb-6">
            <div className="h-8 w-24 bg-blue-50 animate-pulse rounded-full" />
            <div className="h-4 w-20 bg-gray-100 animate-pulse rounded" />
            <div className="h-4 w-32 bg-gray-100 animate-pulse rounded" />
          </div>
          
          <div className="h-16 w-3/4 bg-gray-200 animate-pulse rounded-lg mb-6" />
          <div className="h-24 w-full bg-gray-100 animate-pulse rounded-lg mb-8" />
          
          <div className="h-4 w-32 bg-gray-50 animate-pulse rounded mb-8" />
          
          <div className="flex gap-2 mb-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-6 w-16 bg-gray-50 animate-pulse rounded-full" />
            ))}
          </div>
        </div>
        
        <div className="relative overflow-hidden rounded-4xl aspect-[16/9] bg-gray-100 mb-12 animate-pulse" />
        
        <div className="space-y-4">
          <div className="h-4 w-full bg-gray-100 animate-pulse rounded" />
          <div className="h-4 w-full bg-gray-100 animate-pulse rounded" />
          <div className="h-4 w-3/4 bg-gray-100 animate-pulse rounded" />
        </div>
      </div>
    </PageGridShell>
  )
}
