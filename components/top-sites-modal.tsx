"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { X, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { BettingSite } from "../types"

interface Top3ModalProps {
  bettingSites: BettingSite[]
  casinoSites: BettingSite[]
}

export function TopSitesModal({ bettingSites, casinoSites }: Top3ModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedTerms, setExpandedTerms] = useState<{ [key: number]: boolean }>({})
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    // Не показувати модалку на мобільних
    if (isMobile) return

    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 8000)

    return () => clearTimeout(timer)
  }, [isMobile])

  if (!isOpen) return null

  // Змінюємо порядок: центр (1-й), ліва (2-й), права (3-й)
  const top3Sites = bettingSites.slice(0, 3)
  const reorderedSites = [
    top3Sites[1], // 2-й сайт (BetVictor) - ліва позиція
    top3Sites[0], // 1-й сайт (Novibet) - центральна позиція
    top3Sites[2], // 3-й сайт (Midnite) - права позиція
  ]

  const toggleTerms = (siteId: number, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setExpandedTerms((prev) => ({
      ...prev,
      [siteId]: !prev[siteId],
    }))
  }

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-1 sm:p-4">
      {/* Close button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(false)}
        className="absolute top-1 right-1 sm:top-4 sm:right-4 text-tech-white hover:bg-tech-white/10 z-10 w-6 h-6 sm:w-10 sm:h-10 p-0 bg-tech-black/50 border border-tech-gold"
      >
        <X className="w-3 h-3 sm:w-5 sm:h-5" />
      </Button>

      <div className="w-full max-w-6xl h-full max-h-screen overflow-hidden flex flex-col">
        {/* Title */}
        <div className="text-center mb-2 sm:mb-6 px-1 flex-shrink-0">
          <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold text-tech-white mb-1 tech-heading">
            TOP IRISH BETTING SITES
          </h2>
          <p className="text-tech-gray-300 text-xs font-medium tech-subheading">Expert reviewed</p>
        </div>

        {/* Cards Layout */}
        <div className="flex-1 flex items-center justify-center gap-1 sm:gap-4 w-full px-1 overflow-hidden">
          {reorderedSites.map((site: BettingSite, index: number) => {
            const isCenter = index === 1
            const rank = isCenter ? 1 : index === 0 ? 2 : 3

            return (
              <div
                key={site?.id || index}
                className={`overflow-hidden transition-all duration-300 hover:scale-105 flex flex-col ${
                  isCenter
                    ? "w-[120px] sm:w-[320px] h-[280px] sm:h-[400px] border-2 border-tech-gold shadow-tech-glow"
                    : "w-[100px] sm:w-[280px] h-[260px] sm:h-[380px] border-2 border-tech-white shadow-tech-strong"
                } bg-tech-white rounded-lg`}
              >
                {/* Logo section */}
                <div className="bg-tech-gray-50 h-8 sm:h-20 flex items-center justify-center p-1 sm:p-4 border-b-2 border-tech-gray-200 flex-shrink-0">
                  <img
                    src={site?.logo || "/placeholder.svg"}
                    alt={site?.name || "Site"}
                    className="h-6 sm:h-16 w-auto object-contain"
                  />
                </div>

                {/* Content */}
                <div className="bg-tech-white text-tech-black flex-1 flex flex-col p-1 sm:p-4 text-center min-h-0">
                  {/* Stars */}
                  <div className="flex justify-center gap-0.5 mb-1 sm:mb-3 flex-shrink-0">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-2 h-2 sm:w-4 sm:h-4 fill-tech-gold text-tech-gold" />
                    ))}
                  </div>

                  {/* Offer */}
                  <div className="flex-1 flex flex-col justify-center mb-1 sm:mb-4 min-h-0">
                    <div className="text-xs sm:text-xl font-bold mb-1 text-tech-black tech-heading">{site?.bonus}</div>
                    <div className="text-xs sm:text-lg font-semibold text-tech-red tech-heading">
                      {site?.welcomeOffer}
                    </div>
                  </div>

                  {/* Button */}
                  <div className="mb-1 sm:mb-3 flex-shrink-0">
                    <Link href={site?.link || "#"} target="_blank" rel="noopener noreferrer">
                      <Button className="tech-button py-1 sm:py-2.5 px-1 sm:px-4 text-xs font-bold w-full tech-subheading">
                        CLAIM
                      </Button>
                    </Link>
                  </div>

                  {/* Terms - Hidden on mobile */}
                  <div className="hidden sm:block text-xs text-tech-gray-700 leading-tight bg-tech-gray-50 border border-tech-gray-200 p-2 min-h-[70px] tech-body">
                    {site?.terms}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Footer */}
        <div className="text-center py-1 sm:py-6 px-1 flex-shrink-0">
          <div className="bg-tech-white/95 backdrop-blur-sm border-2 border-tech-gold p-1 sm:p-3 max-w-xs sm:max-w-xl mx-auto">
            <p className="text-tech-black text-xs font-medium tech-subheading">18+ | Sikker Spil</p>
          </div>
        </div>
      </div>
    </div>
  )
}
