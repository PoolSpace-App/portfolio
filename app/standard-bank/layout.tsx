import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Standard Bank | Project Detail",
  description: "Portfolio project detail for Standard Bank",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
