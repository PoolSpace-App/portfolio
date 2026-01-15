import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Teamfinder | Project Detail",
  description: "Portfolio project detail for Teamfinder",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
