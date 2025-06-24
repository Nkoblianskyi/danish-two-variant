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
        return { icon: Award, text: "BEDSTE VALG", color: "text-gold-700" }
      case 2:
        return { icon: TrendingUp, text: "POPULÆR", color: "text-brand-700" }
      case 3:
        return { icon: Shield, text: "ANBEFALET", color: "text-success-700" }
      default:
        return null
    }
  }

  const specialBadge = getSpecialBadge(rank)

  return (
    <div className="block animate-fade-in">
      {/* Desktop Layout */}
      <div className="hidden lg:block sports-card mb-4 hover:shadow-2xl transition-all duration-300 group">
        <Link href={site.link} target="_blank" rel="noopener noreferrer" className="block">
          {/* Main Content */}
          <div className="flex items-center py-4 px-6 relative">
            {/* Rank Badge */}
            <div className={`absolute top-4 left-4 rank-badge ${getRankBadgeClass(rank)}`}>#{rank}</div>

            {/* LOGO SECTION - 30% */}
            <div className="flex-[0_0_30%] pr-8 flex flex-col justify-center items-center">
              {/* Special Badge */}
              {specialBadge && (
                <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-lg border-2 border-neutral-300 shadow-lg mb-4">
                  <specialBadge.icon className={`w-4 h-4 ${specialBadge.color}`} />
                  <span className={`text-xs font-bold ${specialBadge.color}`}>{specialBadge.text}</span>
                </div>
              )}

              <div className="relative">
                {/* Logo Container */}
                <div className="rounded-lg p-4 w-full max-w-[220px] group-hover:shadow-xl transition-all duration-300 shadow-none">
                  <img src={site.logo || "/placeholder.svg"} alt={site.name} className="w-full h-20 object-contain" />
                </div>
              </div>
            </div>

            {/* BONUS SECTION - 35% */}
            <div className="flex-[0_0_35%] px-6 text-center">
              <div className="text-xs font-medium text-neutral-500 mb-2 uppercase tracking-wide">BONUS TILBUD</div>
              <div className="text-neutral-900 text-3xl font-bold mb-2">{site.bonus}</div>
              <div className="text-brand-700 text-2xl font-semibold mb-1">{site.welcomeOffer}</div>
            </div>

            {/* RATING SECTION - 20% */}
            <div className="flex-[0_0_20%] px-6 text-center">
              <div className="text-neutral-900 text-4xl font-bold mb-2">{site.rating.toFixed(1)}</div>
              <div className="flex justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 rating-star ${i < Math.floor(site.rating) ? "filled" : "empty"}`}
                    fill="currentColor"
                  />
                ))}
              </div>
              <div className="text-neutral-500 text-sm">({formatVotes(site.votes)} anmeldelser)</div>
            </div>

            {/* BUTTON SECTION - 15% */}
            <div className="flex-[0_0_15%] pl-6">
              <Button className="btn-success w-full py-3 px-6 text-base font-bold">FÅ BONUS</Button>
            </div>
          </div>
        </Link>

        {/* Terms section */}
      </div>

      {/* Tablet Layout */}
      <div className="hidden md:block lg:hidden sports-card mb-4 hover:shadow-xl transition-all duration-300 group">
        <Link href={site.link} target="_blank" rel="noopener noreferrer" className="block">
          <div className="py-6 px-6 relative">
            {/* Rank Badge */}
            <div className={`absolute top-4 left-4 rank-badge ${getRankBadgeClass(rank)}`}>#{rank}</div>

            <div className="grid grid-cols-12 gap-4 items-center mt-10">
              {/* Logo */}
              <div className="col-span-3 flex flex-col justify-center items-center">
                {/* Special Badge */}
                {specialBadge && (
                  <div className="flex items-center gap-1 bg-white px-2 py-1 rounded-lg border-2 border-neutral-300 shadow-lg mb-3">
                    <specialBadge.icon className={`w-3 h-3 ${specialBadge.color}`} />
                    <span className={`text-xs font-bold ${specialBadge.color}`}>{specialBadge.text}</span>
                  </div>
                )}

                <div className="relative">
                  {/* Logo Container */}
                  <div className="bg-white border-2 border-neutral-300 rounded-lg p-4 w-full shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <img src={site.logo || "/placeholder.svg"} alt={site.name} className="w-full h-12 object-contain" />
                  </div>
                </div>
              </div>

              {/* Bonus */}
              <div className="col-span-4 text-center">
                <div className="text-xs font-medium text-neutral-500 mb-1 uppercase tracking-wide">BONUS</div>
                <div className="text-neutral-900 text-lg font-bold mb-2">{site.bonus}</div>
                <div className="text-brand-700 text-base font-semibold">{site.welcomeOffer}</div>
              </div>

              {/* Rating */}
              <div className="col-span-3 text-center">
                <div className="text-neutral-900 text-3xl font-bold mb-2">{site.rating.toFixed(1)}</div>
                <div className="flex justify-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 rating-star ${i < Math.floor(site.rating) ? "filled" : "empty"}`}
                      fill="currentColor"
                    />
                  ))}
                </div>
                <div className="text-neutral-500 text-xs">({formatVotes(site.votes)})</div>
              </div>

              {/* Button */}
              <div className="col-span-2">
                <Button className="btn-success w-full py-3 px-4 text-sm font-bold">FÅ BONUS</Button>
              </div>
            </div>
          </div>
        </Link>

        {/* Terms */}
        <div className="bg-neutral-100 border-t-2 border-neutral-300 text-neutral-600 py-3 px-6">
          <div className="text-center">
            <div className="text-sm font-medium flex items-center justify-center gap-2">
              <Shield className="w-4 h-4 text-success-600" />
              18+ | Spil ansvarligt
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden sports-card mb-4 hover:shadow-xl transition-all duration-300 group">
        <Link href={site.link} target="_blank" rel="noopener noreferrer" className="block">
          <div className="p-5 relative">
            {/* Rank Badge */}
            <div className={`absolute top-3 right-3 rank-badge ${getRankBadgeClass(rank)} text-xs px-2 py-1`}>
              #{rank}
            </div>

            <div className="flex gap-4 mt-8">
              {/* Left Side - Logo and Rating */}
              <div className="flex-1">
                {/* Special Badge */}
                {specialBadge && (
                  <div className="flex items-center justify-center gap-1 bg-white px-2 py-1 rounded-lg border-2 border-neutral-300 shadow-lg mb-2">
                    <span className={`text-xs font-bold ${specialBadge.color}`}>{specialBadge.text}</span>
                  </div>
                )}

                {/* Logo */}
                <div className="relative mb-4">
                  {/* Danish Flag */}


                  {/* Logo Container */}
                  <div className="bg-transparent  rounded-lg p-4 group-hover:shadow-xl transition-all duration-300 mt-2">
                    <img src={site.logo || "/placeholder.svg"} width={200 } height={200} alt={site.name} className="w-full h-20 object-contain" />
                  </div>
                </div>

                {/* Rating and Stars */}
                <div className="text-center">
                  <div className="text-neutral-900 text-3xl font-bold mb-2">{site.rating.toFixed(1)}</div>
                  <div className="flex justify-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 rating-star ${i < Math.floor(site.rating) ? "filled" : "empty"}`}
                        fill="currentColor"
                      />
                    ))}
                  </div>
                  <div className="text-neutral-500 text-xs">({formatVotes(site.votes)})</div>
                </div>
              </div>

              {/* Right Side - Bonus and Button */}
              <div className="flex-1 flex flex-col justify-center">
                {/* Bonus */}
                <div className="text-center mb-4">
                  <div className="text-xs font-medium text-neutral-500 mb-1 uppercase tracking-wide">BONUS</div>
                  <div className="text-neutral-900 text-xl font-bold mb-2">{site.bonus}</div>
                  <div className="text-brand-700 text-2xl font-bold">{site.welcomeOffer}</div>
                </div>

                {/* Button */}
                <Button className="btn-success w-full py-3 px-4 font-bold">FÅ BONUS</Button>
              </div>
            </div>
          </div>
        </Link>

        {/* Terms */}
        <div className="bg-neutral-100 border-t-2 border-neutral-300 text-neutral-600 py-3 px-5">
          <div className="text-center">
            <div className="text-xs font-medium flex items-center justify-center gap-2">
              <Shield className="w-3 h-3 text-success-600" />
              18+ | Spil ansvarligt
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
