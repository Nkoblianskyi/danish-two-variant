"use client"

import { useState } from "react"
import { CookieConsentBanner } from "./cookie-consent-banner"
import { AdvertiserDisclosurePopup } from "./advertiser-disclosure-popup"
import { TermsConditionsPopup } from "./terms-conditions-popup"
import { MainHeroSection } from "./main-hero-section"
import { BettingSitesList } from "./betting-sites-list"
import { RatingCriteriaSection } from "./rating-criteria-section"
import { TopSitesModal } from "./top-sites-modal"
import { bettingSites } from "../data/mock-data"

export default function BettingPage() {
  const [isAdvertiserModalOpen, setIsAdvertiserModalOpen] = useState(false)
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false)

  return (
    <>
      <div className="w-full overflow-x-hidden">
        <div className="container mx-auto px-4 max-w-[1220px] relative">
          <div className="w-full min-w-0">
            <MainHeroSection
              onAdvertiserModalOpen={() => setIsAdvertiserModalOpen(true)}
              onTermsModalOpen={() => setIsTermsModalOpen(true)}
            />

            {/* Sites List */}
            <BettingSitesList />

            {/* Rating Criteria Section */}
            <RatingCriteriaSection />
          </div>
        </div>
      </div>

      <CookieConsentBanner />
      <AdvertiserDisclosurePopup isOpen={isAdvertiserModalOpen} onClose={() => setIsAdvertiserModalOpen(false)} />
      <TermsConditionsPopup isOpen={isTermsModalOpen} onClose={() => setIsTermsModalOpen(false)} />
    </>
  )
}
