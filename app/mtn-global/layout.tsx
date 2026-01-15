import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mtn Global | Project Detail",
  description: "Portfolio project detail for Mtn Global",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
