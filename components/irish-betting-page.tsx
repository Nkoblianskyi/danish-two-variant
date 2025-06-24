"use client"

import { useState } from "react"
import { CookieConsentBanner } from "./cookie-consent-banner"
import { InformationalContent } from "./informational-content"
import { AdvertiserDisclosurePopup } from "./advertiser-disclosure-popup"
import { TermsConditionsPopup } from "./terms-conditions-popup"
import { EditorChoiceModal } from "./editor-choice-modal"
import { OurChoiceSection } from "./our-choice-section"
import { bettingSites } from "../data/mock-data"
import { MainHeroSection } from "./main-hero-section"
import { PageLayoutWrapper } from "./page-layout-wrapper"
import { BettingSitesList } from "./betting-sites-list"

export default function IrishBettingPage() {
  const [isAdvertiserModalOpen, setIsAdvertiserModalOpen] = useState(false)
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false)

  return (
    <>
      <PageLayoutWrapper>
        <MainHeroSection
          onAdvertiserModalOpen={() => setIsAdvertiserModalOpen(true)}
          onTermsModalOpen={() => setIsTermsModalOpen(true)}
        />

        {/* Sites List */}
        <BettingSitesList />

        <InformationalContent />

        {/* Our Choice Section with first site */}
        <OurChoiceSection site={bettingSites[0]} />
      </PageLayoutWrapper>

      {/* Editor's Choice Modal */}
      <EditorChoiceModal bettingSites={bettingSites} />

      <CookieConsentBanner />
      <AdvertiserDisclosurePopup isOpen={isAdvertiserModalOpen} onClose={() => setIsAdvertiserModalOpen(false)} />
      <TermsConditionsPopup isOpen={isTermsModalOpen} onClose={() => setIsTermsModalOpen(false)} />
    </>
  )
}
