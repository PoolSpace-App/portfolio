import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Myperks | Project Detail",
  description: "Portfolio project detail for Myperks",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
