import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "nCino Smart Onboarding & Monitoring | Project Detail",
  description: "Portfolio project detail for nCino Smart Onboarding & Monitoring",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
