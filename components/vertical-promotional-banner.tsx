"use client"

import Link from "next/link"

interface VerticalPromotionalBannerProps {
  position: "left" | "right"
  site: {
    id: number
    name: string
    logo: string
    welcomeOffer: string
    link: string
    backgroundImage: string
  }
}

export function VerticalPromotionalBanner({ position, site }: VerticalPromotionalBannerProps) {
  return (
    <Link href={site.link} target="_blank" rel="noopener noreferrer" className="block">
      <div className="relative overflow-hidden shadow-2xl hover:shadow-glow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer h-[700px] w-full rounded-2xl border-2 border-gray-200">
        {/* Background Image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${site.backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>

        {/* Content Container */}
        <div className="relative z-10 h-full flex flex-col">
          {/* 1. SPECIAL OFFER Tab */}
          <div
            className="flex-shrink-0 h-[28px] flex items-center justify-center relative mx-auto mt-0 bg-gradient-to-r from-danger-500 to-danger-600 text-white font-bold text-xs tracking-widest shadow-lg"
            style={{
              borderRadius: "0 0 12px 12px",
              width: "85%",
            }}
          >
            SPECIAL OFFER
          </div>

          {/* Центральна частина з лого, бонусом і кнопкою */}
          <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
            {/* 2. LOGO Section */}
            <div className="flex-shrink-0 mb-6">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20">
                <img src={site.logo || "/placeholder.svg"} alt={site.name} className="h-16 w-auto object-contain" />
              </div>
            </div>

            {/* 3. BONUS Text */}
            <div className="flex-shrink-0 mb-8">
              <div className="text-white text-2xl font-black leading-tight drop-shadow-lg">{site.welcomeOffer}</div>
            </div>

            {/* 4. BUTTON */}
            <div className="flex-shrink-0">
              <button className="btn-success px-8 py-3 text-base font-bold whitespace-nowrap">CLAIM BONUS</button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
