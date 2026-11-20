import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Notify.Gov | Project Detail",
  description:
    "Citizens had to prove who they were before they could use government services online. That had to be secure without shutting out people with low digital confidence.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
