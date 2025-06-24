"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AdvertiserDisclosureModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AdvertiserDisclosurePopup({ isOpen, onClose }: AdvertiserDisclosureModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col border-2 border-gray-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-brand-600 to-brand-700 text-white p-4 sm:p-6 flex-shrink-0 rounded-t-xl">
          <div className="flex justify-between items-center">
            <h2 className="text-xl sm:text-2xl font-bold">ANNONCØR OPLYSNING</h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-white hover:bg-white/20 border border-white/30 rounded-full w-8 h-8 p-0"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Content - Scrollable */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-white">
          <div className="space-y-6">
            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 text-gray-900">HVORDAN VI TJENER PENGE</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Betting Bedste Danske Sider er en uafhængig sammenligningshjemmeside, der hjælper brugere med at finde
                de bedste betting sider i Danmark. Vi kan modtage kompensation, når du klikker på links til betting
                sider, der er vist på vores hjemmeside.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 text-gray-900">VORES FORPLIGTELSE OVER FOR DIG</h3>
              <p className="text-sm sm:text-base text-gray-700 mb-3 leading-relaxed">
                Denne kompensation påvirker ikke vores rangeringer, anmeldelser eller anbefalinger. Vores redaktionelle
                team opretholder fuldstændig uafhængighed i evalueringen af betting sider baseret på faktorer som:
              </p>
              <ul className="text-sm sm:text-base text-gray-700 list-disc list-inside space-y-2">
                <li>Licens og regulering</li>
                <li>Sikkerhed og sikkerhedsforanstaltninger</li>
                <li>Betting odds og markeder</li>
                <li>Velkomstbonusser og kampagner</li>
                <li>Kundeservice kvalitet</li>
                <li>Betalingsmetoder og udbetalingshastigheder</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 text-gray-900">GENNEMSIGTIGHED</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Vi tror på fuldstændig gennemsigtighed med vores brugere. Alle betting sider, der er vist på vores
                platform, er tydeligt markeret, og vi anbefaler kun operatører, der er licenseret og reguleret i Danmark
                eller andre velrenommerede jurisdiktioner.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-red-50 border-t border-red-200 p-3 sm:p-4 flex-shrink-0 rounded-b-xl">
          <p className="text-red-600 font-semibold text-center text-sm">
            18+ | Kun danske spillere | Spil kan være vanedannende — Spil sikkert.
          </p>
        </div>
      </div>
    </div>
  )
}
