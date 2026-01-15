import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cardspace | Project Detail",
  description: "Portfolio project detail for Cardspace",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
