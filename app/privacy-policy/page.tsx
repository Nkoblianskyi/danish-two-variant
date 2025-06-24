import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/">
        <Button variant="ghost" className="text-white hover:bg-white/20 mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Tilbage til Hjem
        </Button>
      </Link>

      <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 shadow-lg max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Privatlivspolitik</h1>
        <p className="text-gray-600 mb-6">
          Sidst opdateret: {new Date().toLocaleDateString("da-DK", { month: "long", day: "numeric", year: "numeric" })}
        </p>

        <div className="prose max-w-none">
          <h2>1. Data Vi Indsamler</h2>
          <p>
            Vi indsamler oplysninger som du frivilligt giver når du registrerer en konto, abonnerer på vores
            opdateringer, eller kontakter os for hjælp og supporttjenester.
          </p>

          <h3>Individuelle Data</h3>
          <ul>
            <li>Fulde navn og elektronisk postadresse</li>
            <li>Internet protokol adresse og browser detaljer</li>
            <li>Hjemmeside brugsmønstre og brugerpræferencer</li>
            <li>Sporings teknologier og analytiske data</li>
          </ul>

          <h2>2. Informations Udnyttelse</h2>
          <p>Vi bruger indsamlede oplysninger til følgende formål:</p>
          <ul>
            <li>Levere og forbedre vores platform tjenester</li>
            <li>Distribuere nyhedsbreve og kampagne kommunikation</li>
            <li>Undersøge brugeradfærdsmønstre og hjemmeside tendenser</li>
            <li>Opretholde overholdelse af regulatoriske krav</li>
          </ul>

          <h2>3. Data Delingspraksisser</h2>
          <p>
            Vi sælger, udveksler eller overfører ikke dine personlige oplysninger til eksterne parter uden eksplicit
            samtykke, undtagen som specifikt beskrevet i denne privatlivspolitik.
          </p>

          <h2>4. Cookie Teknologi</h2>
          <p>
            Vi anvender cookies til at forbedre din browsing oplevelse på vores platform. Du kan deaktivere cookies
            gennem din browser konfiguration, selvom dette kan påvirke visse hjemmeside funktionaliteter.
          </p>

          <h2>5. Informations Sikkerhed</h2>
          <p>
            Vi opretholder robuste sikkerhedsprotokoller til at beskytte dine personlige data mod uautoriseret adgang,
            modifikation, offentliggørelse eller ødelæggelse gennem industri-standard beskyttelsesforanstaltninger.
          </p>

          <h2>6. Brugerrettigheder</h2>
          <p>Under gældende databeskyttelsesreguleringer besidder du retten til:</p>
          <ul>
            <li>Gennemgå dine gemte personlige oplysninger</li>
            <li>Modificere ukorrekte eller forældede data</li>
            <li>Anmode om sletning af dine oplysninger</li>
            <li>Protestere mod specifikke databehandlingsaktiviteter</li>
            <li>Overføre dine data til en anden tjenesteudbyder</li>
          </ul>

          <h2>7. Politik Modifikationer</h2>
          <p>
            Vi kan periodisk opdatere denne Privatlivspolitik for at afspejle ændringer i vores praksisser eller
            juridiske krav. Vi vil informere dig om betydelige ændringer ved at poste den reviderede politik på denne
            side med en opdateret ikrafttrædelsesdato.
          </p>
        </div>
      </div>
    </div>
  )
}
