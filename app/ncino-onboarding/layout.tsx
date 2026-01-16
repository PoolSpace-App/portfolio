import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "nCino Onboarding | Project Detail",
  description: "Portfolio project detail for nCino Onboarding",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
