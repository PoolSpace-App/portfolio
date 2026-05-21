"use client"

import type { ReactNode } from "react"
import { LandingNavProvider } from "@/components/landing-nav-provider"

export function Providers({ children }: { children: ReactNode }) {
  return <LandingNavProvider>{children}</LandingNavProvider>
}
