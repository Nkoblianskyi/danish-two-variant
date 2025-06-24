"use client"

import { Calendar } from "lucide-react"
import { useState, useEffect } from "react"

interface HeroSectionProps {
  onAdvertiserModalOpen: () => void
  onTermsModalOpen: () => void
}

export function MainHeroSection({ onAdvertiserModalOpen, onTermsModalOpen }: HeroSectionProps) {
  const getCurrentMonthYear = () => {
    const now = new Date()
    const monthNames = [
      "Januar",
      "Februar",
      "Marts",
      "April",
      "Maj",
      "Juni",
      "Juli",
      "August",
      "September",
      "Oktober",
      "November",
      "December",
    ]
    const currentMonth = monthNames[now.getMonth()]
    const currentYear = now.getFullYear()
    return `${currentMonth} ${currentYear}`
  }

  const [currentDate, setCurrentDate] = useState(getCurrentMonthYear())

  useEffect(() => {
    const updateDate = () => {
      setCurrentDate(getCurrentMonthYear())
    }

    // Update immediately
    updateDate()

    // Set interval to update monthly (check daily for month change)
    const interval = setInterval(updateDate, 24 * 60 * 60 * 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* Desktop Hero - Fixed 300px height */}
      <div className="hidden lg:block relative overflow-hidden mb-6">
        <div className="sports-card border-2 border-brand-300">
          <div className="relative px-6 py-4 bg-white min-h-[280px] flex flex-col justify-between">
            <div className="relative z-10 text-center">
              {/* Trust Indicators */}

              {/* Main Heading */}
              <div className="mb-3">
                <h1 className="text-2xl lg:text-3xl font-bold text-brand-800 mb-2 leading-tight">
                  Bedste Danske Betting Sider
                </h1>

                <h2 className="text-base font-semibold mb-2 text-neutral-600">
                  Ekspert Anmeldelser & Analyse for {currentDate}
                </h2>

                <div className="w-16 h-1 bg-success-500 mx-auto mb-2 rounded-full"></div>

                <p className="text-sm text-neutral-700 max-w-2xl mx-auto leading-relaxed">
                  Uafhængige anmeldelser af Danmarks bedste betting platforme med verificerede bonusser
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 max-w-lg mx-auto mb-2">
                <div className="text-center">
                  <div className="text-lg font-bold text-brand-700 mb-1">50+</div>
                  <div className="text-xs text-neutral-600 font-medium">Anmeldte Sider</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-brand-700 mb-1">100K+</div>
                  <div className="text-xs text-neutral-600 font-medium">Månedlige Brugere</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-brand-700 mb-1">24/7</div>
                  <div className="text-xs text-neutral-600 font-medium">Live Opdateringer</div>
                </div>
              </div>
            </div>

            {/* Bottom Disclaimer */}
            <div className="text-xs text-neutral-600 space-y-2">
              <div className="flex items-center justify-center gap-2 bg-neutral-100 px-3 py-1 rounded-lg border border-neutral-200">
                <Calendar className="w-3 h-3 text-brand-600" />
                <span className="font-medium">Kun nye kunder | 18+ | Vilkår & betingelser gælder</span>
              </div>
              <div className="flex justify-center gap-4 text-xs">
                <button
                  onClick={onAdvertiserModalOpen}
                  className="text-neutral-700 hover:text-brand-600 transition-colors underline font-medium"
                >
                  Annoncør Oplysning
                </button>
                <button
                  onClick={onTermsModalOpen}
                  className="text-neutral-700 hover:text-brand-600 transition-colors underline font-medium"
                >
                  Vilkår & Betingelser
                </button>
                <span className="text-red-600 font-semibold">Spil Ansvarligt</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tablet Hero - Fixed 250px height */}
      <div className="hidden md:block lg:hidden mb-4">
        <div className="sports-card border-2 border-brand-300">
          <div className="px-4 py-4 text-center bg-white h-[250px] flex flex-col justify-between">
            {/* Trust Indicators */}

            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-brand-800 mb-2">Bedste Danske Betting Sider</h1>
              <h2 className="text-sm md:text-base font-semibold mb-2 text-neutral-600">
                Ekspert Anmeldelser for {currentDate}
              </h2>

              <div className="w-12 h-1 bg-success-500 mx-auto mb-2 rounded-full"></div>

              <p className="text-xs text-neutral-700 mb-3 leading-relaxed">
                Uafhængig analyse af Danmarks bedste betting platforme
              </p>
            </div>

            <div className="text-xs text-neutral-600 space-y-2">
              <div className="flex items-center justify-center gap-2 bg-neutral-100 px-3 py-1 rounded-lg border border-neutral-200">
                <Calendar className="w-3 h-3 text-brand-600" />
                <span className="font-medium">18+ | Vilkår gælder</span>
              </div>
              <div className="flex justify-center gap-3 text-xs">
                <button onClick={onAdvertiserModalOpen} className="text-neutral-700 underline font-medium">
                  Oplysning
                </button>
                <button onClick={onTermsModalOpen} className="text-neutral-700 underline font-medium">
                  Vilkår
                </button>
                <span className="text-red-600 font-semibold">Spil Ansvarligt</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Hero - Fixed 140px height */}
      <div className="md:hidden mb-4">
        <div className="sports-card border-2 border-brand-300">
          <div className="px-2 py-2 text-center bg-white h-[140px] flex flex-col justify-between">
            <div>
              <h1 className="text-lg font-bold text-brand-800 mb-1">Bedste Danske Betting Sider</h1>
              <h2 className="text-xs font-semibold mb-1 text-neutral-600">Ekspert Anmeldelser 2025</h2>

              <div className="w-8 h-0.5 bg-success-500 mx-auto mb-1 rounded-full"></div>

              <p className="text-xs text-neutral-700 mb-1 leading-tight">
                Uafhængig analyse af Danmarks bedste platforme
              </p>
            </div>

            <div className="text-xs text-neutral-600">
              <div className="flex items-center justify-center gap-1 bg-neutral-100 px-2 py-0.5 rounded-lg border border-neutral-200 mb-1">
                <Calendar className="w-2 h-2 text-brand-600" />
                <span className="font-medium text-xs">18+ | Vilkår gælder</span>
              </div>
              <div className="flex justify-center gap-2 text-xs">
                <button onClick={onAdvertiserModalOpen} className="text-neutral-700 underline">
                  Oplysning
                </button>
                <button onClick={onTermsModalOpen} className="text-neutral-700 underline">
                  Vilkår
                </button>
                <span className="text-red-600 font-semibold">Spil Ansvarligt</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
