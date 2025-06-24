import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CookiePolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/">
        <Button variant="ghost" className="text-white hover:bg-white/20 mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Tilbage til Hjem
        </Button>
      </Link>

      <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 shadow-lg max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Cookie Politik</h1>
        <p className="text-gray-600 mb-6">
          Sidst opdateret: {new Date().toLocaleDateString("da-DK", { month: "long", day: "numeric", year: "numeric" })}
        </p>

        <div className="prose max-w-none">
          <h2>Forståelse af Cookies</h2>
          <p>
            Cookies er små datafiler gemt på din enhed når du browser vores hjemmeside. Disse filer hjælper hjemmesider
            med at fungere mere effektivt og giver værdifulde oplysninger til sideoperatører om brugeradfærd og
            præferencer.
          </p>

          <h2>Vores Cookie Brug</h2>
          <p>Vi bruger cookies til forskellige vigtige funktioner:</p>
          <ul>
            <li>
              <strong>Nødvendige cookies:</strong> Krævet til grundlæggende hjemmeside funktionalitet og navigation
            </li>
            <li>
              <strong>Ydeevne cookies:</strong> Hjælper os med at analysere besøgendes interaktioner og side
              brugsmønstre
            </li>
            <li>
              <strong>Marketing cookies:</strong> Brugt til at præsentere målrettede reklamer og kampagneindhold
            </li>
            <li>
              <strong>Præference cookies:</strong> Gemmer dine tilpassede indstillinger og brugerpræferencer
            </li>
          </ul>

          <h2>Cookie Kategorier Vi Implementerer</h2>
          <h3>Midlertidige cookies</h3>
          <p>
            Disse kortvarige cookies fjernes automatisk når du forlader din browser. De hjælper med at opretholde din
            sessionstilstand mens du navigerer mellem forskellige sider på vores side.
          </p>

          <h3>Permanente cookies</h3>
          <p>
            Disse filer forbliver gemt på din enhed i en forudbestemt varighed eller indtil manuelt slettet. De hjælper
            os med at identificere tilbagevendende besøgende og personalisere deres browsing oplevelse tilsvarende.
          </p>

          <h2>Eksterne Cookie Kilder</h2>
          <p>Vi kan implementere tredjepartscookies fra forskellige partnere og tjenesteudbydere, såsom:</p>
          <ul>
            <li>Analyseplatforme til omfattende hjemmeside ydeevne sporing</li>
            <li>Sociale netværkssider til indhold delingsfunktionalitet</li>
            <li>Reklamepartnere til personaliserede marketingkampagner</li>
          </ul>

          <h2>Cookie Administrationsmuligheder</h2>
          <p>
            Du opretholder fuld kontrol over cookie indstillinger gennem flere metoder. De fleste webbrowsere gør det
            muligt for dig at:
          </p>
          <ul>
            <li>Gennemgå alle cookies i øjeblikket gemt på din enhed</li>
            <li>Fjerne cookies selektivt eller fuldstændigt</li>
            <li>Forhindre cookies fra specifikke hjemmesider</li>
            <li>Blokere alle cookie installationer</li>
            <li>Automatisk rydde cookies ved browser lukning</li>
          </ul>

          <h2>Dine Cookie Præferencer</h2>
          <p>
            Ved at fortsætte med at browse vores hjemmeside anerkender og accepterer du vores cookie brug som beskrevet
            i denne politik. Du kan modificere eller trække dit samtykke tilbage til enhver tid ved at justere din
            browsers cookie indstillinger eller præferencer.
          </p>
        </div>
      </div>
    </div>
  )
}
