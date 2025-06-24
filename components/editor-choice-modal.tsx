"use client"

import { useState, useEffect } from "react"
import { X, Star, Shield, Crown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { BettingSite } from "../types"

interface EditorChoiceModalProps {
  bettingSites: BettingSite[]
}

export function EditorChoiceModal({ bettingSites }: EditorChoiceModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  if (!isOpen) return null

  const top3Sites = bettingSites.slice(0, 3)

  return (
    <div className="fixed inset-0 bg-black/85 backdrop-blur-xl z-50 flex items-center justify-center p-2">
      {/* Close button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(false)}
        className="absolute top-2 right-2 text-white hover:bg-white/20 z-10 w-8 h-8 p-0 bg-black/50 border border-brand-400 rounded-full backdrop-blur-sm"
      >
        <X className="w-4 h-4" />
      </Button>

      {/* Mobile Layout */}
      <div className="md:hidden w-full max-w-sm">
        {/* Header */}
        <div className="text-center mb-3">
          <div className="bg-gradient-to-r from-brand-600 to-brand-700 text-white font-bold py-2 px-4 rounded-lg shadow-xl border border-brand-500">
            <div className="flex items-center justify-center gap-2">
              <Crown className="w-4 h-4 text-accent-gold-300" />
              <span className="text-sm font-bold">TOP 3</span>
            </div>
          </div>
        </div>

        {/* Cards - Vertical Stack */}
        <div className="space-y-3 mb-4">
          {top3Sites.map((site: BettingSite, index: number) => {
            const rank = index + 1

            return (
              <div
                key={site?.id || index}
                className={`bg-white rounded-lg overflow-hidden shadow-xl ${
                  rank === 1
                    ? "border-2 border-accent-gold-400"
                    : rank === 2
                      ? "border-2 border-brand-400"
                      : "border-2 border-success-400"
                }`}
              >
                {/* Header */}
                <div
                  className={`${
                    rank === 1
                      ? "bg-gradient-to-r from-accent-gold-500 to-accent-gold-600"
                      : rank === 2
                        ? "bg-gradient-to-r from-brand-500 to-brand-600"
                        : "bg-gradient-to-r from-success-500 to-success-600"
                  } h-8 flex items-center justify-between px-3`}
                >
                  <div className="px-2 py-0.5 rounded-full text-xs font-bold bg-white text-gray-800">#{rank}</div>
                  {rank === 1 && (
                    <div className="bg-white text-accent-gold-700 px-2 py-0.5 rounded-full text-xs font-bold flex items-center gap-1">
                      <Crown className="w-2 h-2" />
                      BEDST
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-3 flex items-center gap-3">
                  {/* Logo */}
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-2 flex-shrink-0">
                    <img
                      src={site?.logo || "/placeholder.svg"}
                      alt={site?.name || "Site"}
                      className="h-8 w-16 object-contain"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-bold text-gray-800 mb-1">{site?.bonus}</div>
                    <div
                      className={`text-xs font-semibold mb-2 ${
                        rank === 1 ? "text-accent-gold-600" : rank === 2 ? "text-brand-600" : "text-success-600"
                      }`}
                    >
                      {site?.welcomeOffer}
                    </div>

                    {/* Stars */}
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            rank === 1
                              ? "text-accent-gold-400 fill-accent-gold-400"
                              : rank === 2
                                ? "text-brand-400 fill-brand-400"
                                : "text-success-400 fill-success-400"
                          }`}
                        />
                      ))}
                      <span className="text-xs font-bold text-gray-800 ml-1">{site?.rating.toFixed(1)}</span>
                    </div>

                    {/* Button */}
                    <Link href={site?.link || "#"} target="_blank" rel="noopener noreferrer">
                      <Button
                        className={`w-full ${
                          rank === 1
                            ? "bg-gradient-to-r from-accent-gold-500 to-accent-gold-600"
                            : rank === 2
                              ? "bg-gradient-to-r from-brand-500 to-brand-600"
                              : "bg-gradient-to-r from-success-500 to-success-600"
                        } text-white py-1.5 px-3 text-xs font-bold rounded-lg`}
                        onClick={() => setIsOpen(false)}
                      >
                        FÅ BONUS
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Footer */}
        <div className="text-center">
          <div className="bg-white/95 backdrop-blur-sm border border-brand-300 rounded-lg p-2 shadow-lg">
            <p className="text-gray-800 text-xs font-semibold flex items-center justify-center gap-1">
              <Shield className="w-3 h-3 text-success-600" />
              18+ | Sikker Spil
            </p>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block w-full max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8 px-2">
          <div className="inline-block relative mb-4">
            <div className="bg-gradient-to-r from-brand-600 via-brand-700 to-brand-600 text-white font-bold py-3 px-8 rounded-lg shadow-xl relative overflow-hidden border border-brand-500">
              <div className="relative z-10 flex items-center justify-center gap-2">
                <Crown className="w-5 h-5 text-accent-gold-300" />
                <span className="text-base font-bold tracking-wide">REDAKTØRENS TOP 3</span>
              </div>
            </div>
          </div>
          <p className="text-gray-300 text-sm">Ekspert anmeldelser og verificerede bonusser</p>
        </div>

        {/* Cards Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 px-2">
          {top3Sites.map((site: BettingSite, index: number) => {
            const rank = index + 1

            return (
              <div
                key={site?.id || index}
                className={`bg-white rounded-xl overflow-hidden transition-all duration-500 hover:scale-105 flex flex-col shadow-2xl ${
                  rank === 1
                    ? "border-2 border-accent-gold-400 shadow-gold sm:order-2 lg:order-1"
                    : rank === 2
                      ? "border-2 border-brand-400 shadow-glow sm:order-1 lg:order-2"
                      : "border-2 border-success-400 shadow-success sm:order-3"
                } h-[420px]`}
              >
                {/* Header */}
                <div
                  className={`${
                    rank === 1
                      ? "bg-gradient-to-r from-accent-gold-500 to-accent-gold-600"
                      : rank === 2
                        ? "bg-gradient-to-r from-brand-500 to-brand-600"
                        : "bg-gradient-to-r from-success-500 to-success-600"
                  } h-12 flex items-center justify-between px-4 border-b ${
                    rank === 1 ? "border-accent-gold-300" : rank === 2 ? "border-brand-300" : "border-success-300"
                  } flex-shrink-0`}
                >
                  <div
                    className={`px-2 py-1 rounded-full text-sm font-bold ${
                      rank === 1
                        ? "bg-white text-accent-gold-700 shadow-md"
                        : rank === 2
                          ? "bg-white text-brand-700 shadow-md"
                          : "bg-white text-success-700 shadow-md"
                    }`}
                  >
                    #{rank}
                  </div>

                  {rank === 1 && (
                    <div className="bg-white text-accent-gold-700 px-2 py-1 rounded-full text-xs font-bold shadow-md flex items-center gap-1">
                      <Crown className="w-3 h-3" />
                      BEDST
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col text-center p-4 bg-gradient-to-b from-white to-gray-50">
                  {/* Logo Section */}
                  <div className="mb-4">
                    <div className="bg-white border-2 border-gray-200 rounded-xl p-3 shadow-lg inline-block">
                      <img
                        src={site?.logo || "/placeholder.svg"}
                        alt={site?.name || "Site"}
                        className="h-12 w-24 object-contain"
                      />
                    </div>
                  </div>

                  {/* Bonus Amount */}
                  <div className="flex-1 flex flex-col justify-center mb-4">
                    <div className="text-2xl font-black mb-2 text-gray-800 tracking-wider">{site?.bonus}</div>
                    <div
                      className={`text-lg font-bold mb-3 ${
                        rank === 1 ? "text-accent-gold-600" : rank === 2 ? "text-brand-600" : "text-success-600"
                      }`}
                    >
                      {site?.welcomeOffer}
                    </div>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex items-center justify-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          rank === 1
                            ? "text-accent-gold-400 fill-accent-gold-400"
                            : rank === 2
                              ? "text-brand-400 fill-brand-400"
                              : "text-success-400 fill-success-400"
                        }`}
                      />
                    ))}
                    <span className="text-gray-800 font-bold text-sm ml-2">{site?.rating.toFixed(1)}/10</span>
                  </div>

                  {/* CTA Button */}
                  <div className="mb-4">
                    <Link href={site?.link || "#"} target="_blank" rel="noopener noreferrer">
                      <Button
                        className={`w-full ${
                          rank === 1
                            ? "bg-gradient-to-r from-accent-gold-500 to-accent-gold-600"
                            : rank === 2
                              ? "bg-gradient-to-r from-brand-500 to-brand-600"
                              : "bg-gradient-to-r from-success-500 to-success-600"
                        } text-white py-3 px-6 text-sm font-bold rounded-lg hover:shadow-xl transition-all duration-300`}
                        onClick={() => setIsOpen(false)}
                      >
                        FÅ BONUS NU
                      </Button>
                    </Link>
                  </div>

                  {/* Terms */}
                  <div className="text-xs text-gray-500 leading-tight bg-gray-50 border border-gray-200 p-2 rounded-lg min-h-[50px]">
                    {site?.terms.slice(0, 100)}...
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Footer */}
        <div className="text-center px-2">
          <div className="bg-white/95 backdrop-blur-sm border border-brand-300 rounded-lg p-3 max-w-md mx-auto shadow-lg">
            <p className="text-gray-800 text-sm font-semibold flex items-center justify-center gap-2">
              <Shield className="w-4 h-4 text-success-600" />
              18+ | Sikker Spil | Licenseret
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
