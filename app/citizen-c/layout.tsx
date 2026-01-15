import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Citizen C | Project Detail",
  description: "Portfolio project detail for Citizen C",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
