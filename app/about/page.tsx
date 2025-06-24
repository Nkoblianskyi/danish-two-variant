import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/">
        <Button variant="ghost" className="text-white hover:bg-white/20 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Tilbage til Hjem
        </Button>
      </Link>

      <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 lg:p-12 shadow-lg max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Om Betting Bedste Danske Sider</h1>

          <p className="text-xl text-gray-700 mb-8 text-center font-medium">
            Din førende destination for danske bookmaker anmeldelser og analyse
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Vores Formål</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Hos Betting Bedste Danske Sider er vi dedikerede til at levere de mest grundige, pålidelige og aktuelle
            oplysninger om Danmarks online bookmakere. Vi anerkender, at valg af den perfekte betting platform kan føles
            overvældende givet de mange tilgængelige muligheder, hvilket er præcis hvorfor vi har forpligtet os til at
            forenkle denne beslutningsproces.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Hvordan Vi Evaluerer Bookmakere</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Vores evalueringsramme er baseret på omfattende erfaring og grundig forståelse af hvad danske spillere
            værdsætter mest. Vi vurderer hver bookmaker på tværs af adskillige faktorer for at garantere vores
            anbefalinger er både troværdige og relevante.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Vores Vurderingsstandarder</h3>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <ul className="space-y-2 text-gray-700">
              <li>
                <strong>Licens & Tilsyn:</strong> Vi fremhæver udelukkende platforme licenseret af anerkendte
                myndigheder
              </li>
              <li>
                <strong>Sikkerhed & Tillid:</strong> Avancerede sikkerhedsprotokoller og ansvarlige spilinitiativer
              </li>
              <li>
                <strong>Markedsdækning:</strong> Omfattende udvalg af sportsgrene og væddemålsmuligheder
              </li>
              <li>
                <strong>Priskonkurrenceevne:</strong> Overlegne odds på tværs af store sportsbegivenheder
              </li>
              <li>
                <strong>Kampagneværdi:</strong> Retfærdighed og værdi af introduktionstilbud
              </li>
              <li>
                <strong>Bankmuligheder:</strong> Forskellige indskuds- og udbetalingsalternativer
              </li>
              <li>
                <strong>Supportkvalitet:</strong> Effektivitet og standard af hjælpetjenester
              </li>
              <li>
                <strong>Mobil Platform:</strong> Kvalitet af applikationer og mobile hjemmesider
              </li>
              <li>
                <strong>Live Væddemål:</strong> Realtids betting funktioner og live udsendelser
              </li>
              <li>
                <strong>Platform Design:</strong> Hjemmeside navigation og overordnet brugervenlighed
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Vores Vurderingsmetode</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Hver bookmaker vist på vores side gennemgår omfattende evaluering. Vores erfarne vurderingsteam etablerer
            konti, behandler indskud, placerer væddemål og evaluerer kundeservice for at levere autentiske perspektiver
            baseret på faktiske brugeroplevelser.
          </p>

          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <h4 className="font-semibold text-blue-900 mb-3">Vores Evalueringsmetode</h4>
            <ul className="space-y-1 text-blue-800 text-sm">
              <li>• Kontooprettelse og identitetsverifikationsprocedurer</li>
              <li>• Indskuds- og udbetalingstest med faktiske midler</li>
              <li>• Væddemål på tværs af forskellige sportsgrene og markeder</li>
              <li>• Kundeservice effektivitet og kvalitetsvurdering</li>
              <li>• Mobil applikation og hjemmeside ydeevnetest</li>
              <li>• Kampagnevilkår og betingelser undersøgelse</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Hvorfor Vores Anmeldelser Betyder Noget</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Redaktionel uafhængighed danner grundlaget for vores operationer. Selvom vi kan tjene kompensation når du
            tilgår bookmaker platforme gennem vores side, påvirker dette aldrig vores rangeringer eller vurderinger.
            Vores redaktionelle team opretholder fuldstændig autonomi, og vores evalueringer er baseret udelukkende på
            hver bookmakeres kvalitet og tilbud.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Vores Løfte til Dig</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-2">Åbenhed</h4>
              <p className="text-green-800 text-sm">
                Fuldstændig offentliggørelse af vores vurderingsproces og forretningsforhold
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-2">Præcision</h4>
              <p className="text-green-800 text-sm">
                Konsistente opdateringer for at opretholde informationsnøjagtighed og relevans
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-2">Ansvarlighed</h4>
              <p className="text-green-800 text-sm">Fortalervirksomhed for sikre og ansvarlige spilvaner</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-2">Viden</h4>
              <p className="text-green-800 text-sm">Vurderinger udført af erfarne betting industri specialister</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sikre Spilpraksisser</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Vi fremmer ansvarlige spilprincipper. Vi opretholder at betting skal forblive sjovt og aldrig resultere i
            økonomiske eller personlige vanskeligheder. Alle anbefalede bookmakere skal demonstrere engagement i
            ansvarligt spil gennem:
          </p>
          <ul className="text-gray-700 space-y-1 mb-6">
            <li>• Selvbegrænsningsværktøjer og forbrugskontrols</li>
            <li>• Ressourcer til spilafhængighedsstøtteorganisationer</li>
            <li>• Aldersbekræftelsesprocedurer</li>
            <li>• Gennemsigtige vilkår og politikker</li>
            <li>• Klare kampagnekrav</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Opretholdelse af Aktualitet</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Online betting industrien ændrer sig hurtigt, med nye platforme der lanceres og etablerede operatører der
            modificerer deres tjenester regelmæssigt. Vores team overvåger konstant markedsudviklinger for at sikre
            vores vurderinger og rangeringer nøjagtigt afspejler hver bookmakeres nuværende status.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Vi opdaterer vores evalueringer når større udviklinger opstår, hvad enten det introducerer nye
            betalingsmuligheder, reviderede bonusvilkår eller licensændringer. Dette engagement i nøjagtighed sikrer du
            altid tilgår de mest pålidelige oplysninger når du vælger din bookmaker.
          </p>

          <div className="bg-red-50 border-l-4 border-red-400 p-6 mt-8">
            <h3 className="text-red-800 font-bold mb-3">Vigtig Meddelelse</h3>
            <p className="text-red-700 mb-2">
              Spil skal forblive sjovt og underholdende. Spil aldrig ud over dine økonomiske midler, og oprethold altid
              ansvarlige spilvaner.
            </p>
            <p className="text-red-700">
              Hvis spil bliver problematisk, søg venligst hjælp fra organisationer der specialiserer sig i
              spilafhængighedsstøtte og rådgivningstjenester.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
