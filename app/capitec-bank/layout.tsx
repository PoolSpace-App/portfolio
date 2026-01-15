import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Capitec Bank | Project Detail",
  description: "Portfolio project detail for Capitec Bank",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
