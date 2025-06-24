"use client"

import { Calendar, TrendingUp, Shield, Award } from "lucide-react"

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

  return (
    <>
      {/* Desktop Hero - Fixed 300px height */}
      <div className="hidden lg:block relative overflow-hidden mb-6">
        <div className="modern-card max-w-[1580px] mx-auto border-2 border-brand-200 shadow-glow">
          <div className="relative px-6 py-4 bg-gradient-to-br from-white via-brand-50/30 to-brand-100/50 min-h-[280px] flex flex-col justify-between">
            <div className="relative z-10 text-center">
              {/* Trust Indicators */}
              <div className="flex justify-center gap-3 mb-3">
                <div className="flex items-center gap-1 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-full border border-success-200 shadow-sm">
                  <Shield className="w-3 h-3 text-success-600" />
                  <span className="text-xs font-semibold text-success-700">LICENSERET</span>
                </div>
                <div className="flex items-center gap-1 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-full border border-brand-200 shadow-sm">
                  <Award className="w-3 h-3 text-brand-600" />
                  <span className="text-xs font-semibold text-brand-700">VERIFICERET</span>
                </div>
                <div className="flex items-center gap-1 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-full border border-accent-gold-200 shadow-sm">
                  <TrendingUp className="w-3 h-3 text-accent-gold-600" />
                  <span className="text-xs font-semibold text-accent-gold-700">OPDATERET</span>
                </div>
              </div>

              {/* Main Heading */}
              <div className="mb-3">
                <h1 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-brand-600 to-brand-800 bg-clip-text text-transparent mb-2 leading-tight">
                  Bedste Danske Betting Sider
                </h1>

                <h2 className="text-base font-semibold mb-2 text-gray-600">
                  Ekspert Anmeldelser & Analyse for {getCurrentMonthYear()}
                </h2>

                <div className="w-16 h-1 bg-gradient-to-r from-brand-500 to-accent-gold-500 mx-auto mb-2 rounded-full"></div>

                <p className="text-sm text-gray-700 max-w-2xl mx-auto leading-relaxed">
                  Uafhængige anmeldelser af Danmarks bedste betting platforme med verificerede bonusser
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 max-w-lg mx-auto mb-2">
                <div className="text-center">
                  <div className="text-lg font-bold text-gradient mb-1">50+</div>
                  <div className="text-xs text-gray-600 font-medium">Anmeldte Sider</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-gradient mb-1">100K+</div>
                  <div className="text-xs text-gray-600 font-medium">Månedlige Brugere</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-gradient mb-1">24/7</div>
                  <div className="text-xs text-gray-600 font-medium">Live Opdateringer</div>
                </div>
              </div>
            </div>

            {/* Bottom Disclaimer */}
            <div className="text-xs text-gray-600 space-y-2">
              <div className="flex items-center justify-center gap-2 bg-white/60 backdrop-blur-sm px-3 py-1 rounded-full border border-gray-200">
                <Calendar className="w-3 h-3 text-brand-600" />
                <span className="font-medium">Kun nye kunder | 18+ | Vilkår & betingelser gælder</span>
              </div>
              <div className="flex justify-center gap-4 text-xs">
                <button
                  onClick={onAdvertiserModalOpen}
                  className="text-gray-700 hover:text-brand-600 transition-colors underline font-medium"
                >
                  Annoncør Oplysning
                </button>
                <button
                  onClick={onTermsModalOpen}
                  className="text-gray-700 hover:text-brand-600 transition-colors underline font-medium"
                >
                  Vilkår & Betingelser
                </button>
                <span className="text-danger-600 font-semibold">Spil Ansvarligt</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tablet Hero - Fixed 250px height */}
      <div className="hidden md:block lg:hidden mb-4">
        <div className="modern-card max-w-[1580px] mx-auto border-2 border-brand-200">
          <div className="px-4 py-4 text-center bg-gradient-to-br from-white via-brand-50/30 to-brand-100/50 h-[250px] flex flex-col justify-between">
            {/* Trust Indicators */}
            <div className="flex justify-center gap-2 mb-2">
              <div className="flex items-center gap-1 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-full border border-success-200 shadow-sm">
                <Shield className="w-3 h-3 text-success-600" />
                <span className="text-xs font-semibold text-success-700">SIKKER</span>
              </div>
              <div className="flex items-center gap-1 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-full border border-brand-200 shadow-sm">
                <Award className="w-3 h-3 text-brand-600" />
                <span className="text-xs font-semibold text-brand-700">VERIFICERET</span>
              </div>
            </div>

            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gradient mb-2">Bedste Danske Betting Sider</h1>
              <h2 className="text-sm md:text-base font-semibold mb-2 text-gray-600">
                Ekspert Anmeldelser for {getCurrentMonthYear()}
              </h2>

              <div className="w-12 h-1 bg-gradient-to-r from-brand-500 to-accent-gold-500 mx-auto mb-2 rounded-full"></div>

              <p className="text-xs text-gray-700 mb-3 leading-relaxed">
                Uafhængig analyse af Danmarks bedste betting platforme
              </p>
            </div>

            <div className="text-xs text-gray-600 space-y-2">
              <div className="flex items-center justify-center gap-2 bg-white/60 backdrop-blur-sm px-3 py-1 rounded-full border border-gray-200">
                <Calendar className="w-3 h-3 text-brand-600" />
                <span className="font-medium">18+ | Vilkår gælder</span>
              </div>
              <div className="flex justify-center gap-3 text-xs">
                <button onClick={onAdvertiserModalOpen} className="text-gray-700 underline font-medium">
                  Oplysning
                </button>
                <button onClick={onTermsModalOpen} className="text-gray-700 underline font-medium">
                  Vilkår
                </button>
                <span className="text-danger-600 font-semibold">Spil Ansvarligt</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Hero - Fixed 140px height */}
      <div className="md:hidden mb-4">
        <div className="modern-card max-w-[1580px] mx-auto border-2 border-brand-200">
          <div className="px-2 py-2 text-center bg-gradient-to-br from-white via-brand-50/30 to-brand-100/50 h-[140px] flex flex-col justify-between">
            {/* Trust Indicators */}
            

            <div>
              <h1 className="text-lg font-bold text-gradient mb-1">Bedste Danske Betting Sider</h1>
              <h2 className="text-xs font-semibold mb-1 text-gray-600">Ekspert Anmeldelser 2025</h2>

              <div className="w-8 h-0.5 bg-gradient-to-r from-brand-500 to-accent-gold-500 mx-auto mb-1 rounded-full"></div>

              <p className="text-xs text-gray-700 mb-1 leading-tight">Uafhængig analyse af Danmarks bedste platforme</p>
            </div>

            <div className="text-xs text-gray-600">
              <div className="flex items-center justify-center gap-1 bg-white/60 backdrop-blur-sm px-2 py-0.5 rounded-full border border-gray-200 mb-1">
                <Calendar className="w-2 h-2 text-brand-600" />
                <span className="font-medium text-xs">18+ | Vilkår gælder</span>
              </div>
              <div className="flex justify-center gap-2 text-xs">
                <button onClick={onAdvertiserModalOpen} className="text-gray-700 underline">
                  Oplysning
                </button>
                <button onClick={onTermsModalOpen} className="text-gray-700 underline">
                  Vilkår
                </button>
                <span className="text-danger-600 font-semibold">Spil Ansvarligt</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
