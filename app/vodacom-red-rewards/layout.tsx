import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Vodacom Red Rewards | Project Detail",
  description: "Portfolio project detail for Vodacom Red Rewards",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
