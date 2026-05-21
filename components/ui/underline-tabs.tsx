"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "@/components/icons"
import { cn } from "@/lib/utils"

export interface UnderlineTabItem {
  value: string
  label: React.ReactNode
}

interface UnderlineTabsProps {
  items: UnderlineTabItem[]
  value: string
  onValueChange: (value: string) => void
  className?: string
  layoutId?: string
  size?: "default" | "sm"
}

export function UnderlineTabs({
  items,
  value,
  onValueChange,
  className,
  layoutId,
  size = "default",
}: UnderlineTabsProps) {
  const generatedLayoutId = React.useId().replace(/:/g, "")
  const activeLayoutId = layoutId ?? generatedLayoutId
  const scrollRef = React.useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = React.useState(false)
  const [canScrollRight, setCanScrollRight] = React.useState(false)

  const updateScrollState = React.useCallback(() => {
    const el = scrollRef.current
    if (!el) return

    const { scrollLeft, scrollWidth, clientWidth } = el
    setCanScrollLeft(scrollLeft > 4)
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 4)
  }, [])

  React.useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    updateScrollState()

    el.addEventListener("scroll", updateScrollState, { passive: true })
    window.addEventListener("resize", updateScrollState)

    const observer = new ResizeObserver(updateScrollState)
    observer.observe(el)

    return () => {
      el.removeEventListener("scroll", updateScrollState)
      window.removeEventListener("resize", updateScrollState)
      observer.disconnect()
    }
  }, [items, updateScrollState])

  React.useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    const activeTab = container.querySelector<HTMLElement>(`[data-tab-value="${CSS.escape(value)}"]`)
    if (!activeTab) return

    const tabLeft = activeTab.offsetLeft
    const tabWidth = activeTab.offsetWidth
    const tabRight = tabLeft + tabWidth
    const { scrollLeft, clientWidth } = container
    const maxScroll = container.scrollWidth - clientWidth

    if (tabLeft >= scrollLeft && tabRight <= scrollLeft + clientWidth) {
      return
    }

    const targetLeft = tabLeft - (clientWidth - tabWidth) / 2

    container.scrollTo({
      left: Math.max(0, Math.min(targetLeft, maxScroll)),
      behavior: "smooth",
    })
  }, [value])

  const scrollTabs = (direction: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: direction === "left" ? -180 : 180,
      behavior: "smooth",
    })
  }

  return (
    <div className={cn("relative", className)}>
      {canScrollLeft && (
        <button
          type="button"
          aria-label="Scroll tabs left"
          onClick={() => scrollTabs("left")}
          className="absolute left-1 top-[calc(50%-0.5rem)] z-20 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white/95 shadow-sm transition-colors hover:bg-white md:hidden"
        >
          <ChevronLeft className="h-4 w-4 text-blue-950" />
        </button>
      )}

      {canScrollRight && (
        <button
          type="button"
          aria-label="Scroll tabs right"
          onClick={() => scrollTabs("right")}
          className="absolute right-1 top-[calc(50%-0.5rem)] z-20 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white/95 shadow-sm transition-colors hover:bg-white md:hidden"
        >
          <ChevronRight className="h-4 w-4 text-blue-950" />
        </button>
      )}

      <div
        ref={scrollRef}
        className={cn(
          "flex gap-x-6 gap-y-4 pb-4",
          "flex-nowrap overflow-x-auto scroll-smooth scrollbar-hide",
          "md:flex-wrap md:gap-x-8 md:overflow-x-visible",
          canScrollLeft && "pl-7 md:pl-0",
          canScrollRight && "pr-7 md:pr-0"
        )}
      >
        {items.map((item) => {
          const isActive = value === item.value

          return (
            <button
              key={item.value}
              type="button"
              data-tab-value={item.value}
              onClick={() => onValueChange(item.value)}
              className={cn(
                "relative inline-flex shrink-0 items-center gap-2 whitespace-nowrap font-medium transition-all pb-4",
                size === "default" ? "text-lg md:text-xl" : "text-sm md:text-base",
                isActive ? "text-blue-400" : "text-blue-950 hover:text-blue-400"
              )}
            >
              {item.label}
              {isActive && (
                <motion.div
                  layoutId={activeLayoutId}
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
