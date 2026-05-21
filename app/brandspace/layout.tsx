import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "BrandSpace | Project Detail",
  description: "Portfolio project detail for BrandSpace",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
