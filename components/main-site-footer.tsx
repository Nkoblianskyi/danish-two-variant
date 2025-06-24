import Link from "next/link"
import Image from "next/image"

export function MainSiteFooter() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-16 border-t border-gray-700">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-accent-gold-400 to-accent-gold-600 rounded-lg flex items-center justify-center">
                <Image src="/logo.png" alt="Logo" width={24} height={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">BETTING BEDSTE DANSKE SIDER</h3>
                <p className="text-xs text-gray-400">Danmarks førende betting analyse</p>
              </div>
            </Link>
            <p className="text-sm text-gray-300 leading-relaxed">
              Uafhængige anmeldelser og ekspert analyse af Danmarks bedste betting platforme.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold mb-4 text-gray-200">HURTIGE LINKS</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  Om os
                </Link>
              </li>
              <li>
                <Link href="/responsible-gaming" className="text-gray-300 hover:text-white transition-colors">
                  Ansvarligt spil
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">
                  Privatlivspolitik
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-gray-300 hover:text-white transition-colors">
                  Cookie politik
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
            <p className="text-sm text-gray-400">© 2025 BettingBedsteDanskeSider.dk | Alle rettigheder forbeholdes</p>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>Udviklet i Danmark</span>
              <div className="flex gap-1">
                <div className="w-4 h-3 bg-red-500"></div>
                <div className="w-4 h-3 bg-white"></div>
              </div>
            </div>
          </div>

          {/* Responsible Gaming Logos Row */}
          <div className="border-t border-gray-700 pt-6 mb-4">
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
              <Link href="https://spillemyndigheden.dk/" className="block">
                <img
                  src="/spillemyn.svg"
                  alt="Spillemyndigheden"
                  className="h-8 md:h-10 object-contain hover:opacity-80 transition-opacity bg-white rounded-md p-1"
                />
              </Link>
              <Link href="https://stopspillet.dk/" className="block">
                <img
                  src="/stopsillet.svg"
                  alt="StopSpillet"
                  className="h-8 md:h-10 object-contain hover:opacity-80 transition-opacity"
                />
              </Link>
              <Link href="https://www.rofus.nu/" className="block">
                <img
                  src="/rofus.png"
                  alt="ROFUS"
                  className="h-6 md:h-8 object-contain hover:opacity-80 transition-opacity"
                />
              </Link>
              <Link href="https://www.begambleaware.org/" className="block">
                <img
                  src="/gamble.webp"
                  alt="GambleAware"
                  className="h-8 md:h-10 object-contain hover:opacity-80 transition-opacity"
                />
              </Link>
              <Link href="https://www.gamcare.org.uk/" className="block">
                <img
                  src="/gamecare.svg"
                  alt="GamCare"
                  className="h-8 md:h-10 object-contain hover:opacity-80 transition-opacity bg-white rounded-md p-1"
                />
              </Link>
            </div>
          </div>

          <div className="text-center">
            <div className="rounded-lg p-4 bg-transparent">
              <p className="text-red-300 font-bold text-sm mb-1 flex items-center justify-center gap-2">
                18+ | Spil kan være vanedannende — Spil sikkert
              </p>
              <p className="text-red-200 text-xs">
                Hvis du har et spilproblem, søg hjælp.{" "}
                <Link href="/responsible-gaming" className="underline hover:text-white">
                  Få støtte
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
