import Link from "next/link"
import Image from "next/image"
import { Shield, Award, Zap, Star, Crown } from "lucide-react"

export function MainSiteHeader() {
  return (
    <header className="modern-header sticky top-0 z-40 shadow-lg">
      {/* Mobile Header */}
      <div className="md:hidden">
        <div className="h-12 flex items-center justify-between px-4 relative">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative">
              <div className="w-8 h-8 bg-gradient-to-br from-accent-gold-400 to-accent-gold-600 rounded-lg flex items-center justify-center shadow-gold">
                <Image src="/logo.png" alt="Logo" width={20} height={20} className="w-5 h-5" />
              </div>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-br from-danger-400 to-danger-600 rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-sm font-bold text-white">
                <span className="text-accent-gold-300">BETTING</span>
                <span className="text-white"> BEDSTE</span>
              </h1>
              <p className="text-xs text-brand-200 font-medium">DANSKE SIDER</p>
            </div>
          </Link>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 bg-white/10 backdrop-blur-sm px-2 py-1 rounded-lg">
              <Shield className="w-3 h-3 text-accent-gold-300" />
              <span className="text-xs font-bold text-white">SIKKER</span>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop/Tablet Header */}
      <div className="hidden md:block">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo and Brand */}
            <Link href="/" className="flex items-center gap-4 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-gold-400 to-accent-gold-600 rounded-xl flex items-center justify-center shadow-gold group-hover:shadow-gold-lg transition-all duration-300">
                  <Image src="/logo.png" alt="Logo" width={24} height={24} className="w-6 h-6" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-danger-400 to-danger-600 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-xl lg:text-2xl font-bold text-white group-hover:text-accent-gold-200 transition-colors duration-300">
                  <span className="text-accent-gold-300">BETTING</span>
                  <span className="text-white"> BEDSTE</span>
                  <span className="text-brand-200"> DANSKE</span>
                  <span className="text-white"> SIDER</span>
                </h1>
                <p className="text-xs text-brand-200 font-medium flex items-center gap-2">
                  <Star className="w-3 h-3 text-accent-gold-400" />
                  EKSPERT ANALYSE 2025
                  <Crown className="w-3 h-3 text-accent-gold-400" />
                </p>
              </div>
            </Link>

            {/* Trust Indicators */}
            <div className="hidden lg:flex items-center gap-3">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/20">
                <Shield className="w-4 h-4 text-success-400" />
                <div className="text-left">
                  <div className="text-xs font-bold text-white">LICENSERET</div>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/20">
                <Award className="w-4 h-4 text-accent-gold-400" />
                <div className="text-left">
                  <div className="text-xs font-bold text-white">VERIFICERET</div>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-gradient-to-r from-accent-gold-500 to-accent-gold-600 px-3 py-2 rounded-lg shadow-gold">
                <Zap className="w-4 h-4 text-white" />
                <div className="text-left">
                  <div className="text-xs font-bold text-white">LIVE</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
