import Link from "next/link"
import { ArrowLeft, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TermsPage() {
  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundImage: "url(/placeholder.svg?height=1080&width=1920&text=Stadium+Background)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10">
        {/* Header */}
        <header className="bg-gradient-to-r from-emerald-800/95 to-emerald-900/95 backdrop-blur-sm text-white py-6">
          <div className="container mx-auto px-4">
            <Link href="/">
              <Button variant="ghost" className="text-white hover:bg-white/20 mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Tilbage til Hjem
              </Button>
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-emerald-600" />
              </div>
              <h1 className="text-3xl font-bold">Vilkår og Betingelser</h1>
            </div>
            <p className="text-emerald-200">
              Sidst opdateret:{" "}
              {new Date().toLocaleDateString("da-DK", { month: "long", day: "numeric", year: "numeric" })}
            </p>
          </div>
        </header>

        {/* Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 shadow-lg max-w-4xl mx-auto">
            <div className="prose max-w-none">
              <h2>1. Acceptering af Vilkår</h2>
              <p>
                Ved at tilgå og bruge Betting Bedste Danske Sider accepterer du og indvilliger i at være bundet af
                følgende vilkår og bestemmelser. Disse vilkår gælder for alle brugere af vores hjemmeside og tjenester.
              </p>

              <h2>2. Hjemmesidens Formål</h2>
              <p>
                Denne hjemmeside giver information og anmeldelser om betting sider tilgængelige i Danmark. Vi er en
                uafhængig sammenligningsservice og driver ikke selv nogen spiltjenester.
              </p>

              <h2>3. Aldersbegrænsninger</h2>
              <p>
                Du skal være mindst 18 år gammel for at bruge denne hjemmeside. Spil er begrænset til kun voksne. Vi
                tager aldersverifikation seriøst og opfordrer til ansvarligt spil.
              </p>

              <h2>4. Informations Nøjagtighed</h2>
              <p>
                Selvom vi stræber efter at give nøjagtige og opdaterede oplysninger, kan vi ikke garantere nøjagtigheden
                af alt indhold. Betting odds, bonusser og vilkår kan ændre sig uden varsel.
              </p>

              <h2>5. Tredjeparters Links</h2>
              <p>
                Vores hjemmeside indeholder links til tredjeparters betting sider. Vi er ikke ansvarlige for indholdet,
                vilkårene eller praksisserne på disse eksterne sider. Gennemgå venligst deres vilkår og betingelser før
                brug.
              </p>

              <h2>6. Ansvarligt Spil</h2>
              <p>Vi fremmer ansvarligt spil og opfordrer brugere til at:</p>
              <ul>
                <li>Sætte grænser for tid og penge brugt på spil</li>
                <li>Aldrig spille mere end du har råd til at tabe</li>
                <li>Søge hjælp hvis spil bliver et problem</li>
                <li>Bruge selvudelukkelsesværktøjer når nødvendigt</li>
              </ul>

              <h2>7. Intellektuel Ejendom</h2>
              <p>
                Alt indhold på denne hjemmeside, inklusive tekst, grafik, logoer og billeder, er ejendom af Betting
                Bedste Danske Sider og er beskyttet af ophavsretslove.
              </p>

              <h2>8. Ansvarsbegrænsning</h2>
              <p>
                Vi skal ikke være ansvarlige for nogen direkte, indirekte, tilfældige eller følgeskader der opstår fra
                din brug af denne hjemmeside eller de oplysninger indeholdt heri.
              </p>

              <h2>9. Privatliv</h2>
              <p>
                Dit privatliv er vigtigt for os. Gennemgå venligst vores Privatlivspolitik for at forstå hvordan vi
                indsamler, bruger og beskytter dine oplysninger.
              </p>

              <h2>10. Ændringer af Vilkår</h2>
              <p>
                Vi forbeholder os retten til at modificere disse vilkår til enhver tid. Ændringer vil træde i kraft
                øjeblikkeligt ved offentliggørelse på denne hjemmeside.
              </p>

              <h2>11. Gældende Lov</h2>
              <p>Disse vilkår skal være styret af og fortolket i overensstemmelse med Danmarks love.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
