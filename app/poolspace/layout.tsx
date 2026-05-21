import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "PoolSpace | Project Detail",
  description: "Portfolio project detail for PoolSpace",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
