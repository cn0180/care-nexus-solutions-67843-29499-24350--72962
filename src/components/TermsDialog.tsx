import { X } from "lucide-react";

const TermsDialog = () => {
  return (
    <dialog id="terms-dialog" className="rounded-lg shadow-elevated max-w-3xl w-full p-0 backdrop:bg-black/50">
      <div className="bg-card text-card-foreground">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-2xl font-bold">Algemene Voorwaarden</h2>
          <button
            onClick={() => (document.getElementById('terms-dialog') as HTMLDialogElement)?.close()}
            className="rounded-full p-2 hover:bg-muted transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-6 space-y-6 max-h-[60vh] overflow-y-auto">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">1. Definities</h3>
            <p className="text-muted-foreground">
              In deze algemene voorwaarden wordt verstaan onder:<br />
              <strong>1.1. Care-Nexus:</strong> de onderneming Care-Nexus B.V., gevestigd in Nederland, actief in levering, installatie, lease, onderhoud en training van zorgsystemen.<br />
              <strong>1.2. Opdrachtgever:</strong> iedere natuurlijke of rechtspersoon die met Care-Nexus een overeenkomst aangaat of een offerte ontvangt.<br />
              <strong>1.3. Producten:</strong> alle door Care-Nexus geleverde of geïnstalleerde goederen, systemen of onderdelen, waaronder ook producten van derde partijen vallen.<br />
              <strong>1.4. Diensten:</strong> alle werkzaamheden, installaties, trainingen, onderhouds- en servicediensten die door Care-Nexus worden verricht.<br />
              <strong>1.5. Overeenkomst:</strong> iedere schriftelijke of mondelinge afspraak tussen Care-Nexus en de opdrachtgever.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">2. Toepasselijkheid</h3>
            <p className="text-muted-foreground">
              2.1. Deze algemene voorwaarden zijn van toepassing op alle offertes, leveringen, diensten en overeenkomsten tussen Care-Nexus en haar opdrachtgevers.<br />
              2.2. Afwijkingen zijn slechts geldig indien deze schriftelijk door Care-Nexus zijn bevestigd.<br />
              2.3. Bij strijdigheid tussen bepalingen in de overeenkomst en deze voorwaarden, prevaleert de overeenkomst.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">3. Aanbod en overeenkomst</h3>
            <p className="text-muted-foreground">
              3.1. Alle aanbiedingen en offertes van Care-Nexus zijn vrijblijvend, tenzij uitdrukkelijk anders vermeld.<br />
              3.2. Een overeenkomst komt tot stand zodra de opdrachtgever de offerte schriftelijk of mondeling heeft geaccepteerd en Care-Nexus dit heeft bevestigd.<br />
              3.3. Bij elke aanvraag of bestelling worden vooraf duidelijke afspraken gemaakt over levering, installatie en kosten.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">4. Levering en transport</h3>
            <p className="text-muted-foreground">
              4.1. Levering geschiedt door Care-Nexus zelf via ervaren medewerkers, tenzij anders overeengekomen.<br />
              4.2. Care-Nexus is verantwoordelijk voor schade of verlies tijdens transport (zie ook artikel 11 – Aansprakelijkheid).<br />
              4.3. De levertijd wordt altijd in overleg met de opdrachtgever bepaald. Deze is afhankelijk van productbeschikbaarheid en planning.<br />
              4.4. Vertraging in levering geeft geen recht op schadevergoeding, tenzij sprake is van grove nalatigheid van Care-Nexus.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">5. Betalingsvoorwaarden</h3>
            <p className="text-muted-foreground">
              5.1. Tenzij anders overeengekomen, geldt voor iedere opdracht een voorschotbetaling. De hoogte hiervan wordt met de opdrachtgever besproken.<br />
              5.2. Facturen dienen binnen 30 dagen na factuurdatum te worden voldaan.<br />
              5.3. Bij te late betaling kunnen rente- en administratiekosten worden berekend.<br />
              5.4. Na vier gemiste of overtreden betalings- of afspraakmomenten behoudt Care-Nexus zich het recht voor de dienstverlening tijdelijk te schorsen.<br />
              5.5. Schorsing wordt altijd vroegtijdig aangekondigd, zodat de opdrachtgever een alternatief kan organiseren.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">6. Installatie, onderhoud en service</h3>
            <p className="text-muted-foreground">
              6.1. Bij de aanschaf van ieder zorgsysteem is een standaard training inbegrepen.<br />
              6.2. Care-Nexus biedt daarnaast service en onderhoud op aanvraag en via jaarlijkse onderhoudsbezoeken per locatie.<br />
              6.3. Voor locaties met een 24/7 serviceovereenkomst gelden maandelijkse servicekosten.<br />
              6.4. Taken zonder spoed vallen buiten de 24/7 service en worden apart gefactureerd.<br />
              6.5. Bij storingen van onze kant neemt Care-Nexus direct contact op met de locatie en blijft in overleg tot de storing is opgelost.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">7. Lease en eigendom</h3>
            <p className="text-muted-foreground">
              7.1. Bij lease blijft het product eigendom van Care-Nexus tot de volledige betaling van alle termijnen.<br />
              7.2. De opdrachtgever is verplicht zorgvuldig om te gaan met het geleasete systeem.<br />
              7.3. Schade of verlies door onzorgvuldig gebruik komt voor rekening van de opdrachtgever.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">8. Garantie</h3>
            <p className="text-muted-foreground">
              8.1. Alle producten van Care-Nexus hebben een garantieperiode van 12 maanden na oplevering.<br />
              8.2. De garantie vervalt bij schade die is ontstaan door verkeerd gebruik, ondeskundige reparatie of nalatigheid van de opdrachtgever.<br />
              8.3. In geval van defect onderzoekt Care-Nexus eerst het product; pas daarna wordt bepaald of reparatie of vervanging plaatsvindt.<br />
              8.4. Schade door externe oorzaken zoals netwerkproblemen of stroomstoringen valt buiten de garantie (zie ook artikel 11.3).
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">9. Trainingen en ondersteuning</h3>
            <p className="text-muted-foreground">
              9.1. Care-Nexus verzorgt trainingen op locatie, zodat zorgmedewerkers leren hoe zij de systemen optimaal kunnen gebruiken.<br />
              9.2. Tijdens dag-, avond- en nachtdiensten kunnen zorgmedewerkers contact opnemen met onze technische ondersteuning.<br />
              9.3. Goede communicatie tussen Care-Nexus en de zorgorganisatie is essentieel om veiligheid en continuïteit te waarborgen.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">10. Annulering en beëindiging</h3>
            <p className="text-muted-foreground">
              10.1. Bij tussentijdse beëindiging van een contract door de opdrachtgever blijft het overeengekomen bedrag volledig verschuldigd.<br />
              10.2. Care-Nexus kan een overeenkomst beëindigen of opschorten bij herhaaldelijke wanbetaling, misbruik van systemen of niet-nakoming van afspraken.<br />
              10.3. Beëindiging wordt altijd tijdig schriftelijk aangekondigd.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">11. Aansprakelijkheid</h3>
            <p className="text-muted-foreground">
              11.1. Care-Nexus is aansprakelijk voor schade die is ontstaan door eigen nalatigheid of fouten in levering en installatie.<br />
              11.2. De aansprakelijkheid is beperkt tot het bedrag van de betreffende factuur, tenzij sprake is van opzet of grove schuld.<br />
              11.3. Care-Nexus is niet aansprakelijk voor schade veroorzaakt door netwerkstoringen, stroomuitval of andere externe factoren buiten haar invloed.<br />
              11.4. De opdrachtgever dient Care-Nexus direct op de hoogte te stellen van incidenten die onze dienstverlening kunnen verstoren.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">12. Privacy en gegevensbescherming</h3>
            <p className="text-muted-foreground">
              12.1. Care-Nexus verwerkt geen persoonlijke gegevens van bewoners, tenzij dit noodzakelijk is voor specifieke zorgsystemen (zoals GPS-trackers).<br />
              12.2. In die gevallen is de verantwoordelijke zorginstelling verantwoordelijk voor toestemming en gegevensbeheer.<br />
              12.3. Care-Nexus werkt conform de AVG-richtlijnen en beschikt over een intern privacybeleid.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">13. Overmacht</h3>
            <p className="text-muted-foreground">
              13.1. Care-Nexus is niet gehouden tot nakoming van verplichtingen indien dit redelijkerwijs onmogelijk is door overmacht, zoals storingen, ziekte, oorlog, brand, pandemieën of overheidsmaatregelen.<br />
              13.2. In dergelijke situaties wordt de uitvoering van de overeenkomst opgeschort zonder schadeplichtigheid.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">14. Toepasselijk recht en geschillen</h3>
            <p className="text-muted-foreground">
              14.1. Op alle overeenkomsten en geschillen is uitsluitend Nederlands recht van toepassing.<br />
              14.2. Geschillen worden bij voorkeur in goed overleg opgelost.<br />
              14.3. Indien dit niet lukt, is de rechtbank Rotterdam bij uitsluiting bevoegd.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">15. Slotbepaling</h3>
            <p className="text-muted-foreground">
              15.1. Indien één of meerdere bepalingen in deze voorwaarden ongeldig blijken, blijven de overige bepalingen onverminderd van kracht.<br />
              15.2. Care-Nexus behoudt zich het recht voor deze voorwaarden te wijzigen. De meest recente versie wordt altijd beschikbaar gesteld aan opdrachtgevers.
            </p>
          </div>
        </div>

        <div className="p-6 border-t border-border">
          <button
            onClick={() => (document.getElementById('terms-dialog') as HTMLDialogElement)?.close()}
            className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors font-medium"
          >
            Sluiten
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default TermsDialog;
