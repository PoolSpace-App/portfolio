"use client"

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react"

type LandingNavContextValue = {
  showProjectNav: boolean
  setShowProjectNav: (show: boolean) => void
}

const LandingNavContext = createContext<LandingNavContextValue | null>(null)

export function LandingNavProvider({ children }: { children: ReactNode }) {
  const [showProjectNav, setShowProjectNavState] = useState(false)

  const setShowProjectNav = useCallback((show: boolean) => {
    setShowProjectNavState(show)
  }, [])

  const value = useMemo(
    () => ({ showProjectNav, setShowProjectNav }),
    [showProjectNav, setShowProjectNav],
  )

  return (
    <LandingNavContext.Provider value={value}>{children}</LandingNavContext.Provider>
  )
}

export function useLandingNav() {
  return useContext(LandingNavContext)
}
