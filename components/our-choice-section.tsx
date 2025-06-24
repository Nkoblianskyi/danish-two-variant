"use client"

import { Star, Award, Crown, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { BettingSite } from "../types"

interface OurChoiceSectionProps {
  site: BettingSite
}

export function OurChoiceSection({ site }: OurChoiceSectionProps) {
  return (
    <div className="mt-12 mb-8 max-w-[1580px] mx-auto">
      {/* Section Header */}
      <div className="text-center mb-6">
        <div className="inline-block relative mb-4">
          <div className="bg-gradient-to-r from-accent-gold-400 via-accent-gold-500 to-accent-gold-400 text-black font-bold py-2 px-6 rounded-xl shadow-gold-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-gradient-x"></div>
            <div className="relative z-10 flex items-center justify-center gap-2">
              <Crown className="w-4 h-4 text-black" />
              <span className="text-sm font-black tracking-wide">VORES VALG</span>
              <Award className="w-4 h-4 text-black" />
            </div>
          </div>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Redaktørens Anbefaling</h2>
        <p className="text-gray-600">Den bedste betting side i Danmark lige nu</p>
      </div>

      {/* Featured Site Card */}
      <div className="modern-card border-4 border-accent-gold-400 shadow-gold-lg max-w-4xl mx-auto">
        <div className="relative overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent-gold-50 via-white to-accent-gold-50"></div>

          {/* Content */}
          <div className="relative z-10 p-6 md:p-8">
            {/* Mobile Layout */}
            <div className="md:hidden">
              <div className="text-center mb-6">
                {/* Logo */}
                <div className="bg-white border-2 border-accent-gold-300 rounded-xl p-4 shadow-lg inline-block mb-4">
                  <img src={site.logo || "/placeholder.svg"} alt={site.name} className="h-12 w-auto object-contain" />
                </div>

                {/* Rating */}
                <div className="mb-4">
                  <div className="text-4xl font-bold text-gray-900 mb-2">{site.rating.toFixed(1)}</div>
                  <div className="flex justify-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 rating-star filled" fill="currentColor" />
                    ))}
                  </div>
                  <div className="text-sm text-gray-600">({site.votes.toLocaleString()} anmeldelser)</div>
                </div>

                {/* Bonus */}
                <div className="mb-6">
                  <div className="text-xl font-bold text-gray-900 mb-2">{site.bonus}</div>
                  <div className="text-lg font-semibold text-gradient mb-3">{site.welcomeOffer}</div>
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent-gold-100 to-accent-gold-200 px-3 py-1 rounded-full border border-accent-gold-300">
                    <Award className="w-3 h-3 text-accent-gold-600" />
                    <span className="text-xs font-bold text-accent-gold-800">BEDSTE TILBUD</span>
                  </div>
                </div>

                {/* Button */}
                <Link href={site.link} target="_blank" rel="noopener noreferrer">
                  <Button className="btn-gold w-full py-3 px-6 text-base font-bold flex items-center justify-center gap-2">
                    <Zap className="w-5 h-5" />
                    FÅ BONUS NU
                  </Button>
                </Link>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:block">
              <div className="grid grid-cols-12 gap-6 items-center">
                {/* Logo */}
                <div className="col-span-3">
                  <div className="bg-white border-2 border-accent-gold-300 rounded-xl p-6 shadow-lg">
                    <img src={site.logo || "/placeholder.svg"} alt={site.name} className="w-full h-16 object-contain" />
                  </div>
                </div>

                {/* Bonus */}
                <div className="col-span-4 text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-2">{site.bonus}</div>
                  <div className="text-xl font-semibold text-gradient mb-3">{site.welcomeOffer}</div>
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent-gold-100 to-accent-gold-200 px-3 py-1 rounded-full border border-accent-gold-300">
                    <Award className="w-3 h-3 text-accent-gold-600" />
                    <span className="text-xs font-bold text-accent-gold-800">BEDSTE TILBUD</span>
                  </div>
                </div>

                {/* Rating */}
                <div className="col-span-3 text-center">
                  <div className="text-5xl font-bold text-gray-900 mb-3">{site.rating.toFixed(1)}</div>
                  <div className="flex justify-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 rating-star filled" fill="currentColor" />
                    ))}
                  </div>
                  <div className="text-sm text-gray-600">({site.votes.toLocaleString()} anmeldelser)</div>
                </div>

                {/* Button */}
                <div className="col-span-2">
                  <Link href={site.link} target="_blank" rel="noopener noreferrer">
                    <Button className="btn-gold w-full py-4 px-6 text-base font-bold flex items-center justify-center gap-2">
                      <Zap className="w-5 h-5" />
                      FÅ BONUS
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Terms */}
            <div className="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-4">
              <p className="text-xs text-gray-600 leading-relaxed">{site.terms}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
