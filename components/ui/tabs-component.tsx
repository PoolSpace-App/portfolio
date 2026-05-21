"use client"

import * as React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

interface TabItem {
  value: string
  label: string
  content: React.ReactNode
  icon?: React.ReactNode
}

interface TabsComponentProps {
  items: TabItem[]
  defaultValue: string
  className?: string
  tabsListClassName?: string
  triggerClassName?: string
}

export function TabsComponent({
  items,
  defaultValue,
  className,
  tabsListClassName,
  triggerClassName,
}: TabsComponentProps) {
  return (
    <Tabs defaultValue={defaultValue} className={cn("w-full", className)}>
      <div className="flex md:justify-center mb-12 overflow-x-auto scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
        <TabsList
          className={cn(
            "inline-flex h-auto min-w-max flex-nowrap rounded-full bg-black/5 p-1 md:min-w-0",
            tabsListClassName
          )}
        >
          {items.map((item) => (
            <TabsTrigger
              key={item.value}
              value={item.value}
              className={cn(
                "inline-flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium text-slate-600 shadow-none transition-all duration-200 hover:text-blue-600 data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-none md:px-6",
                triggerClassName
              )}
            >
              {item.icon}
              {item.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>
      {items.map((item) => (
        <TabsContent
          key={item.value}
          value={item.value}
          className="focus-visible:outline-none"
        >
          {item.content}
        </TabsContent>
      ))}
    </Tabs>
  )
}
