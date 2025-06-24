"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface TermsModalProps {
  isOpen: boolean
  onClose: () => void
}

export function TermsConditionsPopup({ isOpen, onClose }: TermsModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col border-2 border-gray-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-brand-600 to-brand-700 text-white p-4 sm:p-6 flex-shrink-0 rounded-t-xl">
          <div className="flex justify-between items-center">
            <h2 className="text-xl sm:text-2xl font-bold">VILKÅR & BETINGELSER</h2>
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
              <h3 className="text-base sm:text-lg font-bold mb-3 text-gray-900">GENERELLE VILKÅR</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Ved at bruge Betting Bedste Danske Sider accepterer du at overholde og være bundet af følgende vilkår og
                betingelser. Disse vilkår gælder for alle brugere af vores hjemmeside og tjenester.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 text-gray-900">ALDERSBEGRÆNSNINGER</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Du skal være mindst 18 år gammel for at bruge denne hjemmeside. Vi tager aldersverifikation seriøst og
                fremmer ansvarlige spilvaner. Hvis du er under 18, skal du forlade denne hjemmeside med det samme.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 text-gray-900">ANSVARLIGT SPIL</h3>
              <p className="text-sm sm:text-base text-gray-700 mb-3 leading-relaxed">
                Vi er forpligtet til at fremme ansvarligt spil. Husk venligst:
              </p>
              <ul className="text-sm sm:text-base text-gray-700 list-disc list-inside space-y-2">
                <li>Spil kun med penge, du har råd til at tabe</li>
                <li>Sæt tids- og forbrugsgrænser, før du starter</li>
                <li>Jag aldrig dine tab</li>
                <li>Tag regelmæssige pauser fra spil</li>
                <li>Søg hjælp, hvis spil bliver et problem</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 text-gray-900">INFORMATIONSNØJAGTIGHED</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Selvom vi stræber efter at give nøjagtige og opdaterede oplysninger om betting sider, bonusser og
                kampagner, kan vi ikke garantere nøjagtigheden af alt indhold. Vilkår og betingelser kan ændre sig uden
                varsel.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 text-gray-900">HJÆLP & STØTTE</h3>
              <p className="text-sm sm:text-base text-gray-700 mb-3 leading-relaxed">
                Hvis du har brug for hjælp med spilafhængighed, kontakt venligst:
              </p>
              <ul className="text-sm sm:text-base text-gray-700 list-disc list-inside space-y-2">
                <li>
                  <strong>Spillemyndigheden:</strong> spillemyndigheden.dk
                </li>
                <li>
                  <strong>Ludomani:</strong> ludomani.dk
                </li>
                <li>
                  <strong>Spillerådgivningen:</strong> spilleraadgivningen.dk
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-red-50 border-t border-red-200 p-3 sm:p-4 flex-shrink-0 rounded-b-xl">
          <p className="text-red-600 font-semibold text-center text-sm">
            18+ | Vilkår og betingelser gælder | Spil ansvarligt
          </p>
        </div>
      </div>
    </div>
  )
}
