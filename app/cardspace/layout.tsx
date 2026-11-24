import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "CardSpace | Project Detail",
  description: "It's time to replace your physical wallet with a digital one.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
