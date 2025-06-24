"use client"

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
  const [favoriteToday, setFavoriteToday] = useState<BettingSite | null>(null)
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

    // Вибираємо рандомний сайт з топ-5
    const randomIndex = Math.floor(Math.random() * Math.min(5, bettingSites.length))
    setFavoriteToday(bettingSites[randomIndex])

    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 8000)

    return () => clearTimeout(timer)
  }, [isMobile, bettingSites])

  if (!isOpen || !favoriteToday) return null

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4">
      {/* Close button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(false)}
        className="absolute top-4 right-4 text-white hover:bg-white/10 z-10 w-10 h-10 p-0 bg-black/50 border border-gold-500"
      >
        <X className="w-5 h-5" />
      </Button>

      <div className="w-full max-w-md">
        {/* Title */}
        <div className="text-center mb-6">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">DAGENS FAVORIT</h2>
          <p className="text-gray-300 text-sm font-medium">Vores ekspert anbefaling i dag</p>
        </div>

        {/* Single Card */}
        <div className="sports-card border-2 border-gold-500 shadow-2xl overflow-hidden">
          {/* Logo section */}
          <div className="bg-white h-20 flex items-center justify-center p-4 border-b-2 border-gray-200">
            <img
              src={favoriteToday.logo || "/placeholder.svg"}
              alt={favoriteToday.name}
              className="h-16 w-auto object-contain"
            />
          </div>

          {/* Content */}
          <div className="bg-white text-black p-6 text-center">
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold-500 text-gold-500" />
              ))}
            </div>

            {/* Offer */}
            <div className="mb-6">
              <div className="text-2xl font-bold mb-2 text-black">{favoriteToday.bonus}</div>
              <div className="text-xl font-semibold text-brand-700">{favoriteToday.welcomeOffer}</div>
            </div>

            {/* Button */}
            <div className="mb-4">
              <Link href={favoriteToday.link || "#"} target="_blank" rel="noopener noreferrer">
                <Button className="btn-success py-3 px-8 text-lg font-bold w-full">FÅ BONUS NU</Button>
              </Link>
            </div>

            {/* Terms */}
            <div className="text-xs text-gray-700 leading-tight bg-gray-50 border border-gray-200 p-3 rounded">
              {favoriteToday.terms}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center py-4">
          <div className="bg-white/95 backdrop-blur-sm border-2 border-gold-500 p-3 max-w-sm mx-auto rounded">
            <p className="text-black text-sm font-medium">18+ | Sikker Spil | Vilkår gælder</p>
          </div>
        </div>
      </div>
    </div>
  )
}
