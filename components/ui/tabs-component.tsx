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
            "bg-slate-50 p-1 rounded-2xl md:rounded-full h-auto border border-gray-100 flex-nowrap inline-flex min-w-max md:min-w-0",
            tabsListClassName
          )}
        >
          {items.map((item) => (
            <TabsTrigger
              key={item.value}
              value={item.value}
              className={cn(
                "px-4 md:px-8 py-2 md:py-3 rounded-xl md:rounded-full data-[state=active]:bg-blue-600 data-[state=active]:shadow-md data-[state=active]:text-white font-bold transition-all gap-2 whitespace-nowrap text-sm md:text-base",
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
