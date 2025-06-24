import Link from "next/link"
import { ArrowLeft, Shield, Clock, AlertTriangle, Phone, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ResponsibleGamingPage() {
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
          <div className="text-center mb-8">
            <Shield className="w-16 h-16 text-green-primary mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Ansvarligt Spil</h1>
            <p className="text-xl text-gray-700 font-medium">Din sikkerhed og velbefindende er vores topprioritet</p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
            <div className="flex items-center mb-3">
              <AlertTriangle className="w-6 h-6 text-red-600 mr-3" />
              <h2 className="text-red-800 font-bold text-xl mb-0">Vigtig Meddelelse</h2>
            </div>
            <p className="text-red-700 mb-2">
              Spil skal altid forblive sjovt og underholdende. Hvis betting stopper med at være fornøjeligt eller
              begynder at forårsage problemer i dit liv, er det tid til at søge hjælp.
            </p>
            <p className="text-red-700 font-semibold">Husk: Du er aldrig alene, og hjælp er altid tilgængelig.</p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Spil Ansvarligt</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Ansvarligt spil betyder at nyde betting som en form for underholdning samtidig med at opretholde kontrol
            over din tid og penge. Det involverer at forstå risiciene, sætte grænser og vide hvornår man skal stoppe.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Nøgleprincipper for Ansvarligt Spil</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">Sæt Tidsgrænser</h4>
              <p className="text-blue-800 text-sm">
                Beslut hvor meget tid du vil bruge på spil før du starter, og hold dig til det.
              </p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">Sæt Pengegrænser</h4>
              <p className="text-blue-800 text-sm">
                Spil kun med penge du har råd til at tabe. Lån aldrig penge til spil.
              </p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">Tag Regelmæssige Pauser</h4>
              <p className="text-blue-800 text-sm">
                Træk dig væk fra spil regelmæssigt for at opretholde perspektiv og kontrol.
              </p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">Jag Ikke Tab</h4>
              <p className="text-blue-800 text-sm">
                Accepter tab som en del af underholdningsomkostningen. Prøv aldrig at vinde tilbage hvad du har tabt.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Advarselstegn</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Det er vigtigt at genkende hvornår spil måske bliver et problem. Hold øje med disse advarselstegn:
          </p>
          <ul className="text-gray-700 space-y-2 mb-6">
            <li>• Bruge mere tid eller penge på spil end du havde til hensigt</li>
            <li>• Føle angst, depression eller skyld omkring dit spil</li>
            <li>• Lyve til familie eller venner om dine spilaktiviteter</li>
            <li>• Låne penge eller sælge ejendele for at finansiere spil</li>
            <li>• Forsømme arbejde, familie eller andre ansvar</li>
            <li>• Tænke på spil konstant</li>
            <li>• Føle behov for at satse flere penge for at få samme spænding</li>
            <li>• Være ude af stand til at stoppe eller reducere dit spil</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Selvhjælpsværktøjer</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De fleste respektable spilsider tilbyder værktøjer til at hjælpe dig med at opretholde kontrol:
          </p>
          <div className="bg-green-50 p-6 rounded-lg mb-6">
            <ul className="text-green-800 space-y-2">
              <li>
                <strong>Indskudsgrænser:</strong> Sæt daglige, ugentlige eller månedlige grænser for hvor meget du kan
                indsætte
              </li>
              <li>
                <strong>Tabsgrænser:</strong> Sæt grænser for hvor meget du kan tabe i en specifik tidsperiode
              </li>
              <li>
                <strong>Session Tidsgrænser:</strong> Sæt grænser for hvor længe du kan spille i én session
              </li>
              <li>
                <strong>Virkeligheds Tjek:</strong> Modtag regelmæssige påmindelser om hvor længe du har spillet
              </li>
              <li>
                <strong>Selvudelukkelse:</strong> Midlertidigt eller permanent blokere dig selv fra spilsider
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Få Hjælp</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Hvis du er bekymret for dit spil eller det for nogen du kender, er hjælp tilgængelig. Disse organisationer
            giver gratis, fortrolig støtte:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Globe className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Spillemyndigheden</h3>
              </div>
              <p className="text-gray-700 text-sm mb-3">
                Danmarks officielle spilmyndighed der regulerer og overvåger spilmarkedet.
              </p>
              <div className="space-y-2">
                <p className="text-sm">
                  <strong>Hjemmeside:</strong> spillemyndigheden.dk
                </p>
                <p className="text-sm">
                  <strong>Telefon:</strong> 33 92 09 00
                </p>
              </div>
            </div>

            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Phone className="w-6 h-6 text-green-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Ludomani</h3>
              </div>
              <p className="text-gray-700 text-sm mb-3">
                Giver støtte, information og rådgivning til alle der lider af et spilproblem.
              </p>
              <div className="space-y-2">
                <p className="text-sm">
                  <strong>Hjemmeside:</strong> ludomani.dk
                </p>
                <p className="text-sm">
                  <strong>Hjælpelinje:</strong> 70 20 12 12
                </p>
              </div>
            </div>

            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-purple-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Spillerådgivningen</h3>
              </div>
              <p className="text-gray-700 text-sm mb-3">Professionel rådgivning og behandling for spilleafhængighed.</p>
              <div className="space-y-2">
                <p className="text-sm">
                  <strong>Hjemmeside:</strong> spilleraadgivningen.dk
                </p>
                <p className="text-sm">
                  <strong>Telefon:</strong> 70 20 12 12
                </p>
              </div>
            </div>

            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 text-orange-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Anonyme Spillere</h3>
              </div>
              <p className="text-gray-700 text-sm mb-3">Selvhjælpsgrupper for mennesker med spilproblemer.</p>
              <div className="space-y-2">
                <p className="text-sm">
                  <strong>Hjemmeside:</strong> anonyme-spillere.dk
                </p>
                <p className="text-sm">
                  <strong>Møder:</strong> Lokale støttegrupper tilgængelige
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">For Familie og Venner</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Spilproblemer påvirker ikke kun spilleren - de påvirker også familier og venner. Hvis nogen du holder af har
            et spilproblem:
          </p>
          <ul className="text-gray-700 space-y-2 mb-6">
            <li>• Ignorer ikke problemet eller håb på at det forsvinder</li>
            <li>• Opfordr dem til at søge professionel hjælp</li>
            <li>• Lån dem ikke penge eller betal deres spilgæld</li>
            <li>• Sørg for dit eget velbefindende</li>
            <li>• Overvej at søge støtte til dig selv</li>
          </ul>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
            <h3 className="text-yellow-800 font-bold mb-3">Husk</h3>
            <p className="text-yellow-700 mb-2">
              Spilafhængighed er en anerkendt medicinsk tilstand, ikke en moralsk fejl eller mangel på viljestyrke.
            </p>
            <p className="text-yellow-700">
              Helbredelse er mulig med den rette støtte og behandling. Det første skridt er at anerkende der er et
              problem og bede om hjælp.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Vores Forpligtelse</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Hos Betting Bedste Danske Sider er vi forpligtet til at fremme ansvarligt spil. Vi anbefaler kun operatører
            der:
          </p>
          <ul className="text-gray-700 space-y-2 mb-6">
            <li>• Giver omfattende ansvarlige spilværktøjer</li>
            <li>• Har klare politikker for at identificere problemspil</li>
            <li>• Tilbyder nem adgang til støtteressourcer</li>
            <li>• Implementerer strenge aldersverifikationsprocedurer</li>
            <li>• Giver gennemsigtige vilkår og betingelser</li>
            <li>• Støtter ansvarlige spilorganisationer</li>
          </ul>

          <div className="text-center mt-8 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Har Du Brug for Hjælp Lige Nu?</h3>
            <p className="text-gray-700 mb-4">
              Hvis du eller nogen du kender har brug for øjeblikkelig støtte, vent ikke. Hjælp er tilgængelig 24/7.
            </p>
            <div className="space-y-2">
              <p className="text-lg font-semibold text-green-600">National Spil Hjælpelinje: 70 20 12 12</p>
              <p className="text-sm text-gray-600">Gratis, fortrolig og tilgængelig 24 timer i døgnet</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
