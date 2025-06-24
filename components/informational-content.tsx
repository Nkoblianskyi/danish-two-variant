"use client"

export function InformationalContent() {
  return (
    <div className="mt-12 max-w-[1580px] mx-auto">
      {/* Main Guide Section */}
      <section className="bg-brand-dark/95 backdrop-blur-sm rounded-lg overflow-hidden shadow-strong mb-8 border border-white/30">
        <div className="relative px-6 py-8 bg-black/50 backdrop-blur-md">
          <div className="relative z-10 text-white">
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-center">
                Din Ultimate <span className="text-brand-accent">Danske Bookmaker</span> Udvælgelsesguide
              </h2>

              <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                At vælge den perfekte bookmaker kræver ekspert indsigt og grundig analyse. Vores omfattende guide
                eliminerer gætværket med professionelle anmeldelser og detaljerede sammenligninger.
              </p>
            </div>

            {/* Content Sections */}
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-3 text-brand-accent">Find Din Ideelle Betting Partner</h3>
                <div className="space-y-3 text-gray-300 leading-relaxed">
                  <p>
                    Hver spiller har forskellige præferencer og specifikke behov. Begynd med at bestemme hvilke
                    sportsgrene og betting markeder der interesserer dig mest, og bekræft derefter at dine valgte
                    udbydere tilbyder omfattende dækning på tværs af disse kategorier.
                  </p>
                  <p>
                    Derudover skal du undersøge hver udbyders prisstruktur og afkastsatser omhyggeligt. Forbedrede odds
                    øger væsentligt dine potentielle afkast og overordnede betting præstation.
                  </p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-3 text-brand-accent">Udnyt Bonus Muligheder</h3>
                <div className="space-y-3 text-gray-300 leading-relaxed">
                  <p>
                    Dagens konkurrenceprægede betting landskab driver udbydere til kontinuerligt at forbedre deres
                    kampagnetilbud for at tiltrække og fastholde loyale kunder. Velkomstpakker har udviklet sig
                    betydeligt og leverer exceptionel værdi til nytilkomne, der mestrer kunsten at strategisk bonus
                    udnyttelse.
                  </p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-3 text-brand-accent">Forstå Danske Spilregler</h3>
                <div className="space-y-3 text-gray-300 leading-relaxed">
                  <p>
                    Danmarks spilmarked opererer under strenge regulatoriske rammer designet til at beskytte forbrugere
                    samtidig med at sikre fair play på tværs af alle platforme. Licenserede operatører skal overholde
                    omfattende retningslinjer, der dækker alt fra finansiel sikkerhed til kundedata beskyttelse.
                  </p>
                  <p>
                    Dette regulatoriske tilsyn giver ro i sindet for danske spillere, der ved at deres valgte platforme
                    opfylder de højeste industristandarder.
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Informative Section */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-bold mb-3 text-brand-accent">Hvorfor Vælge Danske Licenserede Bookmakere?</h3>
              <div className="space-y-3 text-gray-300 leading-relaxed">
                <p>
                  Danske licenserede bookmakere tilbyder uovertruffen sikkerhed og forbrugerbeskyttelse. Med streng
                  regulatorisk tilsyn fra Spillemyndigheden sikrer disse platforme fair play, sikre transaktioner og
                  ansvarlige spilpraksisser.
                </p>
                <p>
                  Derudover tilbyder danske operatører lokaliseret kundesupport, velkendte betalingsmetoder og
                  omfattende dækning af danske sportsgrene inklusive fodbold, håndbold og cykling fra førende danske
                  begivenheder.
                </p>
              </div>
            </div>

            {/* Footer Disclaimer */}
            <div className="mt-8 pt-6 border-t border-white/20">
              <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4 text-center">
                <p className="text-red-300 font-bold mb-2 text-sm">
                  DETTE MATERIALE ER OPHAVSRETLIGT BESKYTTET. ALLE TJENESTER OG KAMPAGNER ER UDELUKKENDE FOR DANSKE
                  BORGERE PÅ 18 ÅR OG DEROVER.
                </p>
                <p className="text-red-200 text-xs">
                  YDERLIGERE BEGRÆNSNINGER KAN GÆLDE INKLUSIVE IDENTITETSVERIFIKATION, LOKATIONSBEGRÆNSNINGER OG
                  STATSBORGERSKABSKRAV.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
