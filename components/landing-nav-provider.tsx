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

const defaultValue: LandingNavContextValue = {
  showProjectNav: false,
  setShowProjectNav: () => {},
}

const LandingNavContext = createContext<LandingNavContextValue>(defaultValue)

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
