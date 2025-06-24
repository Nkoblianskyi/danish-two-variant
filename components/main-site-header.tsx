import Link from "next/link"
import Image from "next/image"
import { Shield, Award, Zap } from "lucide-react"

export function MainSiteHeader() {
  return (
    <header className="sports-header sticky top-0 z-40 shadow-xl">
      {/* Mobile Header */}
      <div className="md:hidden">
        <div className="h-12 flex items-center justify-between px-4 relative">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative">
              <div className="w-8 h-8 bg-gold-500 rounded-lg flex items-center justify-center shadow-lg border-2 border-gold-600">
                <Image src="/logo.png" alt="Logo" width={20} height={20} className="w-5 h-5" />
              </div>
            </div>
            <div>
              <h1 className="text-sm font-bold text-white">
                <span className="text-gold-300">BETTING</span>
                <span className="text-white"> BEDSTE</span>
              </h1>
              <p className="text-xs text-brand-200 font-medium">DANSKE SIDER</p>
            </div>
          </Link>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 bg-success-600 px-2 py-1 rounded-lg border border-success-700">
              <Shield className="w-3 h-3 text-white" />
              <span className="text-xs font-bold text-white">SIKKER</span>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop/Tablet Header */}
      <div className="hidden md:block">
        <div className="container mx-auto px-4 py-3 max-w-[1220px]">
          <div className="flex items-center justify-between">
            {/* Logo and Brand */}
            <Link href="/" className="flex items-center gap-4 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center shadow-lg border-2 border-gold-600 group-hover:bg-gold-600 transition-all duration-300">
                  <Image src="/logo.png" alt="Logo" width={24} height={24} className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h1 className="text-xl lg:text-2xl font-bold text-white group-hover:text-gold-200 transition-colors duration-300">
                  <span className="text-gold-300">BETTING</span>
                  <span className="text-white"> BEDSTE</span>
                  <span className="text-brand-200"> DANSKE</span>
                  <span className="text-white"> SIDER</span>
                </h1>
                <p className="text-xs text-brand-200 font-medium">EKSPERT ANALYSE 2025</p>
              </div>
            </Link>

            {/* Trust Indicators */}
            <div className="hidden lg:flex items-center gap-3">
              <div className="flex items-center gap-2 bg-success-600 px-3 py-2 rounded-lg border border-success-700">
                <Shield className="w-4 h-4 text-white" />
                <div className="text-left">
                  <div className="text-xs font-bold text-white">LICENSERET</div>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-brand-600 px-3 py-2 rounded-lg border border-brand-700">
                <Award className="w-4 h-4 text-white" />
                <div className="text-left">
                  <div className="text-xs font-bold text-white">VERIFICERET</div>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
