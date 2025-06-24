import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { MainSiteFooter } from "../components/main-site-footer"
import { MainSiteHeader } from "../components/main-site-header"

export const metadata: Metadata = {
  title: "Bedste Danske Betting Sider - Top Danske Betting Sider 2025",
  description:
    "Opdag Danmarks bedste betting sider med ekspert anmeldelser, eksklusive bonusser og omfattende sammenligninger. Find din perfekte bookmaker i dag.",
  keywords: "danske betting sider, bookmakere Danmark, betting bonusser, sports betting Danmark",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="da">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <div
          className="min-h-screen relative"
          style={{
            backgroundImage: "url(/bg-7.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="relative z-10">
            <MainSiteHeader />
            <main>{children}</main>
            <MainSiteFooter />
          </div>
        </div>
      </body>
    </html>
  )
}
