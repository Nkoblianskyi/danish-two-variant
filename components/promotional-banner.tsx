"use client"

import Link from "next/link"
import type { HorizontalBanner as HorizontalBannerType } from "../types"
import Image from "next/image"
import { Zap, Star } from "lucide-react"

interface PromotionalBannerProps {
  banner: HorizontalBannerType
}

export function PromotionalBanner({ banner }: PromotionalBannerProps) {
  return (
    <div className="mb-6 max-w-[1580px] mx-auto">
      <Link
        href={banner.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block hover:scale-[1.01] transition-all duration-300"
      >
        <div className="relative overflow-hidden modern-card border-2 border-brand-300 h-20 sm:h-24 md:h-28 lg:h-32 rounded-2xl">
          {/* Background Image */}
          <Image
            src={banner.backgroundImage || "/placeholder.svg"}
            alt="Banner Background"
            fill
            className="object-cover"
            style={{ objectPosition: "center" }}
          />

          {/* Modern overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>

          {/* Special Offer Flag */}
          <div className="absolute top-0 left-0 bg-gradient-to-r from-danger-500 to-danger-600 text-white px-6 py-3 text-sm font-bold z-10 shadow-lg rounded-br-2xl flex items-center gap-2">
            <Star className="w-4 h-4" />
            SPECIAL OFFER
          </div>

          {/* Corner accents */}
          <div className="absolute top-0 right-0 w-6 h-6 bg-gradient-to-br from-accent-gold-400 to-accent-gold-600 rounded-bl-2xl"></div>
          <div className="absolute bottom-0 left-6 w-6 h-6 bg-gradient-to-tr from-accent-gold-400 to-accent-gold-600 rounded-tr-2xl"></div>
          <div className="absolute bottom-0 right-0 w-6 h-6 bg-gradient-to-tl from-danger-500 to-danger-600 rounded-tl-2xl"></div>

          {/* Main Content */}
          <div className="relative z-10 h-full flex items-center justify-between px-4 sm:px-6 md:px-8">
            {/* Left: Logo */}
            <div className="flex items-center justify-center flex-shrink-0">
              <div className="bg-white/95 backdrop-blur-sm border-2 border-white/30 p-4 shadow-xl relative rounded-xl">
                <img
                  src={banner.logo || "/placeholder.svg"}
                  alt={banner.name}
                  className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto object-contain"
                />
                <div className="absolute -top-1 -left-1 w-3 h-3 bg-gradient-to-br from-accent-gold-400 to-accent-gold-600 rounded-full"></div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-gradient-to-tl from-danger-500 to-danger-600 rounded-full"></div>
              </div>
            </div>

            {/* Center: Bonus Text */}
            <div className="flex-1 text-center px-4">
              <div className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold drop-shadow-lg">
                {banner.welcomeOffer}
              </div>
              <div className="w-16 h-1 bg-gradient-to-r from-accent-gold-400 to-accent-gold-600 mx-auto mt-2 rounded-full"></div>
            </div>

            {/* Right: Button */}
            <div className="flex items-center flex-shrink-0">
              <button className="btn-success px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-3 lg:px-10 lg:py-4 text-sm sm:text-base md:text-lg font-bold whitespace-nowrap flex items-center gap-2">
                <Zap className="w-4 h-4" />
                CLAIM NOW
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
