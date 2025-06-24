"use client"

import { BettingSiteCard } from "./betting-site-card"
import { bettingSites } from "../data/mock-data"
import type { BettingSite } from "../types"

export function BettingSitesList() {
  const safeBettingSites = Array.isArray(bettingSites) ? bettingSites : []

  return (
    <div className="space-y-1 w-full">
      {safeBettingSites.map((site: BettingSite, index: number) => (
        <div key={site.id} className="w-full">
          <BettingSiteCard site={site} rank={index + 1} />
        </div>
      ))}
    </div>
  )
}
