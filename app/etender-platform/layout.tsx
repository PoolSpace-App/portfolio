import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Etender Platform | Project Detail",
  description: "Portfolio project detail for Etender Platform",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
