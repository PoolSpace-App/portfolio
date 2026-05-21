"use client"

import * as React from "react"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { UnderlineTabs } from "@/components/ui/underline-tabs"
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
  tabsClassName?: string
  layoutId?: string
}

export function TabsComponent({
  items,
  defaultValue,
  className,
  tabsClassName,
  layoutId,
}: TabsComponentProps) {
  const [activeTab, setActiveTab] = React.useState(defaultValue)

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className={cn("w-full", className)}>
      <UnderlineTabs
        items={items.map((item) => ({
          value: item.value,
          label: (
            <>
              {item.icon}
              {item.label}
            </>
          ),
        }))}
        value={activeTab}
        onValueChange={setActiveTab}
        layoutId={layoutId}
        size="sm"
        className={cn("mb-12", tabsClassName)}
      />
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
