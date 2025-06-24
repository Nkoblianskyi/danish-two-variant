"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Star, Award, Shield, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { BettingSite } from "../types"
import Link from "next/link"

interface SiteCardProps {
  site: BettingSite
  rank: number
}

export function BettingSiteCard({ site, rank }: SiteCardProps) {
  const [isTermsExpanded, setIsTermsExpanded] = useState(false)
  const [showReadMore, setShowReadMore] = useState(false)
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
    const limit = isMobile ? 215 : 350
    const shouldShow = site.terms.length > limit
    setShowReadMore(shouldShow)
  }, [site.terms, isMobile])

  const formatVotes = (votes: number) => {
    return votes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }

  const handleTermsClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsTermsExpanded(!isTermsExpanded)
  }

  const getRankBadgeClass = (rank: number) => {
    switch (rank) {
      case 1:
        return "rank-1"
      case 2:
        return "rank-2"
      case 3:
        return "rank-3"
      default:
        return "rank-default"
    }
  }

  const getSpecialBadge = (rank: number) => {
    switch (rank) {
      case 1:
        return { icon: Award, text: "BEDSTE VALG", color: "text-accent-gold-600" }
      case 2:
        return { icon: TrendingUp, text: "POPULÆR", color: "text-brand-600" }
      case 3:
        return { icon: Shield, text: "ANBEFALET", color: "text-success-600" }
      default:
        return null
    }
  }

  const specialBadge = getSpecialBadge(rank)

  return (
    <div className="block animate-fade-in">
      {/* Desktop Layout */}
      <div className="hidden lg:block modern-card mb-4 hover:shadow-glow-lg transition-all duration-300 group">
        <Link href={site.link} target="_blank" rel="noopener noreferrer" className="block">
          {/* Main Content */}
          <div className="flex items-center py-8 px-8 relative">
            {/* Rank Badge */}
            <div className={`absolute top-4 left-4 rank-badge ${getRankBadgeClass(rank)}`}>#{rank}</div>

            {/* Special Badge */}
            {specialBadge && (
              <div className="absolute top-4 right-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full border border-gray-200 shadow-sm">
                <specialBadge.icon className={`w-4 h-4 ${specialBadge.color}`} />
                <span className={`text-xs font-bold ${specialBadge.color}`}>{specialBadge.text}</span>
              </div>
            )}

            {/* LOGO SECTION - 30% */}
            <div className="flex-[0_0_30%] pr-8 flex justify-center items-center">
              <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-6 w-full max-w-[220px] shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:border-brand-300">
                <img src={site.logo || "/placeholder.svg"} alt={site.name} className="w-full h-16 object-contain" />
              </div>
            </div>

            {/* BONUS SECTION - 35% */}
            <div className="flex-[0_0_35%] px-6 text-center">
              <div className="text-gray-900 text-xl font-bold mb-3">{site.bonus}</div>
              <div className="text-gradient text-lg font-semibold mb-2">{site.welcomeOffer}</div>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                <Shield className="w-4 h-4 text-success-500" />
                <span>Licenseret & Sikker</span>
              </div>
            </div>

            {/* RATING SECTION - 20% */}
            <div className="flex-[0_0_20%] px-6 text-center">
              <div className="text-gray-900 text-5xl font-bold mb-3">{site.rating.toFixed(1)}</div>
              <div className="flex justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 rating-star ${i < Math.floor(site.rating) ? "filled" : "empty"}`}
                    fill="currentColor"
                  />
                ))}
              </div>
              <div className="text-gray-500 text-sm">({formatVotes(site.votes)} anmeldelser)</div>
            </div>

            {/* BUTTON SECTION - 15% */}
            <div className="flex-[0_0_15%] pl-6">
              <Button className="btn-success w-full py-4 px-8 text-base font-bold">FÅ BONUS</Button>
            </div>
          </div>
        </Link>

        {/* Terms section */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 border-t border-gray-200 text-gray-600 py-3 px-8">
          <div className="text-center">
            <div className="text-sm font-medium flex items-center justify-center gap-2">
              <Shield className="w-4 h-4 text-success-500" />
              18+ | Spil ansvarligt og sikkert | spillemyndigheden.dk
            </div>
          </div>
        </div>
      </div>

      {/* Tablet Layout */}
      <div className="hidden md:block lg:hidden modern-card mb-4 hover:shadow-glow transition-all duration-300 group">
        <Link href={site.link} target="_blank" rel="noopener noreferrer" className="block">
          <div className="py-6 px-6 relative">
            {/* Rank Badge */}
            <div className={`absolute top-4 left-4 rank-badge ${getRankBadgeClass(rank)}`}>#{rank}</div>

            {/* Special Badge */}
            {specialBadge && (
              <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full border border-gray-200 shadow-sm">
                <specialBadge.icon className={`w-3 h-3 ${specialBadge.color}`} />
                <span className={`text-xs font-bold ${specialBadge.color}`}>{specialBadge.text}</span>
              </div>
            )}

            <div className="grid grid-cols-12 gap-4 items-center mt-10">
              {/* Logo */}
              <div className="col-span-3 flex justify-center">
                <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-4 w-full shadow-md group-hover:shadow-lg transition-all duration-300">
                  <img src={site.logo || "/placeholder.svg"} alt={site.name} className="w-full h-12 object-contain" />
                </div>
              </div>

              {/* Bonus */}
              <div className="col-span-4 text-center">
                <div className="text-gray-900 text-lg font-bold mb-2">{site.bonus}</div>
                <div className="text-gradient text-base font-semibold">{site.welcomeOffer}</div>
              </div>

              {/* Rating */}
              <div className="col-span-3 text-center">
                <div className="text-gray-900 text-3xl font-bold mb-2">{site.rating.toFixed(1)}</div>
                <div className="flex justify-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 rating-star ${i < Math.floor(site.rating) ? "filled" : "empty"}`}
                      fill="currentColor"
                    />
                  ))}
                </div>
                <div className="text-gray-500 text-xs">({formatVotes(site.votes)})</div>
              </div>

              {/* Button */}
              <div className="col-span-2">
                <Button className="btn-success w-full py-3 px-4 text-sm font-bold">FÅ BONUS</Button>
              </div>
            </div>
          </div>
        </Link>

        {/* Terms */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 border-t border-gray-200 text-gray-600 py-3 px-6">
          <div className="text-center">
            <div className="text-sm font-medium flex items-center justify-center gap-2">
              <Shield className="w-4 h-4 text-success-500" />
              18+ | Spil ansvarligt
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden modern-card mb-4 hover:shadow-glow transition-all duration-300 group">
        <Link href={site.link} target="_blank" rel="noopener noreferrer" className="block">
          <div className="p-5 relative">
            {/* Rank Badge */}
            <div className={`absolute top-3 right-3 rank-badge ${getRankBadgeClass(rank)} text-xs px-2 py-1`}>
              #{rank}
            </div>

            {/* Special Badge */}
            {specialBadge && (
              <div className="absolute top-3 left-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full border border-gray-200 shadow-sm">
                <specialBadge.icon className={`w-3 h-3 ${specialBadge.color}`} />
                <span className={`text-xs font-bold ${specialBadge.color}`}>{specialBadge.text}</span>
              </div>
            )}

            <div className="flex gap-4 mt-8">
              {/* Left Side - Logo and Rating */}
              <div className="flex-1">
                {/* Logo */}
                <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-4 mb-4 shadow-md group-hover:shadow-lg transition-all duration-300">
                  <img src={site.logo || "/placeholder.svg"} alt={site.name} className="w-full h-12 object-contain" />
                </div>

                {/* Rating and Stars */}
                <div className="text-center">
                  <div className="text-gray-900 text-3xl font-bold mb-2">{site.rating.toFixed(1)}</div>
                  <div className="flex justify-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 rating-star ${i < Math.floor(site.rating) ? "filled" : "empty"}`}
                        fill="currentColor"
                      />
                    ))}
                  </div>
                  <div className="text-gray-500 text-xs">({formatVotes(site.votes)})</div>
                </div>
              </div>

              {/* Right Side - Bonus and Button */}
              <div className="flex-1 flex flex-col justify-center">
                {/* Bonus */}
                <div className="text-center mb-4">
                  <div className="text-gray-900 text-lg font-bold mb-2">{site.bonus}</div>
                  <div className="text-gradient text-base font-semibold">{site.welcomeOffer}</div>
                </div>

                {/* Button */}
                <Button className="btn-success w-full py-3 px-4 font-bold">FÅ BONUS</Button>
              </div>
            </div>
          </div>
        </Link>

        {/* Terms */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 border-t border-gray-200 text-gray-600 py-3 px-5">
          <div className="text-center">
            <div className="text-xs font-medium flex items-center justify-center gap-2">
              <Shield className="w-3 h-3 text-success-500" />
              18+ | Spil ansvarligt
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
