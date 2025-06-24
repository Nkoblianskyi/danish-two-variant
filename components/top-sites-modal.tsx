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

export function TopSitesModal({ bettingSites = [], casinoSites = [] }: Top3ModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [favoriteToday, setFavoriteToday] = useState<BettingSite | null>(null)

  useEffect(() => {
    // Безпечна перевірка масиву
    const safeBettingSites = Array.isArray(bettingSites) ? bettingSites : []

    if (safeBettingSites.length === 0) {
      return
    }

    try {
      const availableSites = safeBettingSites.slice(0, Math.min(5, safeBettingSites.length))
      if (availableSites.length > 0) {
        const randomIndex = Math.floor(Math.random() * availableSites.length)
        const selectedSite = availableSites[randomIndex]

        if (selectedSite && selectedSite.id) {
          setFavoriteToday(selectedSite)

          const timer = setTimeout(() => {
            setIsOpen(true)
          }, 8000)

          return () => clearTimeout(timer)
        }
      }
    } catch (error) {
      console.error("Error selecting favorite site:", error)
    }
  }, [bettingSites])

  // Не показуємо модалку якщо немає даних або вибраного сайту
  if (!isOpen || !favoriteToday) {
    return null
  }

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

      <div className="w-full max-w-md mx-auto px-4 rounded-xl">
        {/* Title */}
        <div className="text-center mb-6">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">DAGENS FAVORIT</h2>
          <p className="text-gray-300 text-sm font-medium">Vores ekspert anbefaling i dag</p>
        </div>

        {/* Single Card */}
        <div className="sports-card border-2 border-gold-500 shadow-2xl overflow-hidden rounded-xl">
          {/* Logo section */}
          <div className="bg-white h-20 sm:h-24 flex items-center justify-center p-4 sm:p-6 border-b-2 border-gray-200">
            <img
              src={favoriteToday.logo || "/placeholder.svg"}
              alt={favoriteToday.name || "Betting Site"}
              className="h-16 sm:h-20 w-auto object-contain"
            />
          </div>

          {/* Content */}
          <div className="bg-white text-black p-4 sm:p-6 text-center">
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-3 sm:mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-gold-500 text-gold-500" />
              ))}
            </div>

            {/* Offer */}
            <div className="mb-4 sm:mb-6">
              <div className="text-lg sm:text-2xl font-bold mb-2 text-black">
                {favoriteToday.bonus || "Bonus tilbud"}
              </div>
              <div className="text-base sm:text-xl font-semibold text-brand-700">
                {favoriteToday.welcomeOffer || "Velkommen bonus"}
              </div>
            </div>

            {/* Button */}
            <div className="mb-3 sm:mb-4">
              <Link href={favoriteToday.link || "#"} target="_blank" rel="noopener noreferrer">
                <Button className="btn-success py-2 sm:py-3 px-6 sm:px-8 text-base sm:text-lg font-bold w-full">
                  FÅ BONUS NU
                </Button>
              </Link>
            </div>

            {/* Disclaimer */}
            <div className="border-t border-gray-200 pt-3 mt-4">
              <p className="text-xs text-gray-600">
                18+ | Sikker spil |{" "}
                <a
                  href="https://spillemyndigheden.dk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-600 hover:text-brand-700 underline"
                >
                  spillemyndigheden.dk
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center py-4"></div>
      </div>
    </div>
  )
}
