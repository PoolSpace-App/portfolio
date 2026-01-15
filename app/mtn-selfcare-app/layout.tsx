import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mtn Selfcare App | Project Detail",
  description: "Portfolio project detail for Mtn Selfcare App",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
