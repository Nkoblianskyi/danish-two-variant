"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Cookie, X } from "lucide-react"
import Link from "next/link"

export function CookieConsentBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent")
    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined")
    setIsVisible(false)
  }

  const handleClose = () => {
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 shadow-2xl animate-slide-up">
      <div className="bg-white border-t-4 border-green-600 shadow-xl">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
            {/* Close button - mobile */}
            <button
              onClick={handleClose}
              className="lg:hidden absolute top-2 right-2 p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-4 h-4 text-gray-600" />
            </button>

            {/* Icon and Content */}
            <div className="flex items-start gap-3 flex-1">
              <div className="flex-shrink-0 mt-1">
                <Cookie className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-1">Vi bruger cookies</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Vi bruger cookies for at forbedre din oplevelse på vores side og for at vise dig relevant reklame. Ved
                  at fortsætte med at browse accepterer du vores brug af cookies.{" "}
                  <Link href="/privacy-policy" className="text-green-600 hover:text-green-700 underline font-medium">
                    Læs mere i vores Privatlivspolitik
                  </Link>
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto lg:flex-shrink-0">
              <Button
                onClick={handleDecline}
                variant="outline"
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 font-semibold px-6 py-2 transition-all duration-200"
              >
                Afvis
              </Button>
              <Button
                onClick={handleAccept}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
              >
                Accepter Cookies
              </Button>
            </div>

            {/* Close button - desktop */}
            <button
              onClick={handleClose}
              className="hidden lg:block p-2 hover:bg-gray-100 rounded-full transition-colors flex-shrink-0"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
