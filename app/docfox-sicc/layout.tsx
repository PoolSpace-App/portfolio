import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Docfox SICC | Project Detail",
  description: "Portfolio project detail for Docfox SICC",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
