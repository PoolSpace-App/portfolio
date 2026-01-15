import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Lexmasft Coal App | Project Detail",
  description: "Portfolio project detail for Lexmasft Coal App",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
