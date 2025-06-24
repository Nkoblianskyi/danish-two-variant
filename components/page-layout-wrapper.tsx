"use client"

import type React from "react"

interface PageLayoutWrapperProps {
  children: React.ReactNode
}

export function PageLayoutWrapper({ children }: PageLayoutWrapperProps) {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="container mx-auto px-1 max-w-[1580px] relative">
        {/* Simple centered layout without sidebars */}
        <div className="w-full min-w-0">{children}</div>
      </div>
    </div>
  )
}
