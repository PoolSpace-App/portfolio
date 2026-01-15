import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Notify.Gov | Project Detail",
  description: "Portfolio project detail for Notify.Gov",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
