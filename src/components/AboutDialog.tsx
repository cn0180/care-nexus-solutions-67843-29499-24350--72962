import { X } from "lucide-react";

const AboutDialog = () => {
  return (
    <dialog id="about-dialog" className="backdrop:bg-background/80 backdrop:backdrop-blur-sm bg-card text-card-foreground rounded-lg shadow-lg max-w-2xl w-full p-0 border border-border">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h2 className="text-2xl font-bold">Meer over ons</h2>
          <button
            onClick={() => (document.getElementById('about-dialog') as HTMLDialogElement)?.close()}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="space-y-4 text-sm text-muted-foreground">
          <div>
            <h3 className="font-semibold text-foreground mb-2">Professionele Verpleegoproepsystemen</h3>
            <p>
              Wij van Care-Nexus zijn gespecialiseerd in het opzetten van professionele verpleegoproepsystemen voor onze klanten. 
              Ons doel is om de zorg te ontlasten door betrouwbare technische oplossingen te bieden, zodat zorgmedewerkers zich volledig kunnen richten op wat écht belangrijk is: de zorg voor hun cliënten. 
              Wij staan 24/7 klaar voor technische ondersteuning, onderhoud en hulp bij alarmering. 
              Of het nu gaat om zorginstellingen, thuiszorgwoningen of doelgroepen met een beperking, wij passen ons aan aan elke situatie en denken graag mee in oplossingen.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-2">Renovaties en Nieuwe Ontwikkelingen</h3>
            <p>
              Wij staan klaar om uw zorgorganisatie te helpen bij renovaties en nieuwe ontwikkelingen. Graag komen wij met u in contact om te horen welke ideeën en wensen er binnen uw team leven. 
              Samen bekijken we wat er op dit moment speelt binnen uw zorgomgeving en waar we met onze oplossingen verbeteringen kunnen aanbrengen. Ons team denkt met u mee en zet zich in om uw plannen werkelijkheid te maken met oog voor kwaliteit, gebruiksgemak en de mensen die ermee werken.
            </p>
            <p>
              Bent u nog niet bekend met zorgsystemen? Geen zorgen! Eén van onze collega's vertelt u graag meer over de mogelijkheden en wat wij voor uw organisatie kunnen betekenen. 
              Samen zorgen we voor een moderne, veilige en toekomstgerichte zorgomgeving.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-2">Ondersteuning en Training</h3>
            <p>
              Ons team staat klaar voor uw vragen en wensen. Wij streven ernaar om écht naast de zorgmedewerkers te staan als een betrouwbaar vangnet dat hen ondersteunt in hun dagelijkse werk. 
              Hoe meer processen geautomatiseerd worden, hoe minder druk er op het zorgpersoneel komt te liggen. In de afgelopen jaren hebben wij bij veel zorginstellingen gezien waar het soms misgaat: producten worden gebruikt zonder dat zorgmedewerkers precies weten wat het is of waarvoor het dient.
            </p>
            <p>
              Daarom bieden wij trainingen op locatie aan, zodat zorgmedewerkers leren hoe zij onze systemen optimaal kunnen gebruiken en op ons kunnen vertrouwen. Heldere communicatie is daarbij essentieel. Tijdens dag-, avond- en nachtdiensten kunnen zorgteams altijd contact met ons opnemen voor ondersteuning of vragen. 
              Wij zijn actief in zowel Nederland als België en staan klaar om samen met u te bouwen aan een zorgomgeving die betrouwbaar, efficiënt en mensgericht is.
            </p>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={() => (document.getElementById('about-dialog') as HTMLDialogElement)?.close()}
            className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            Sluiten
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default AboutDialog;
