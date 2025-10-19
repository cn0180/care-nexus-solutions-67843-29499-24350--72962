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
            <h3 className="text-lg font-semibold text-foreground">1. Toepasselijkheid</h3>
            <p className="text-muted-foreground">
              Deze algemene voorwaarden zijn van toepassing op alle diensten en producten die worden aangeboden 
              door Care-Nexus. Door gebruik te maken van onze diensten, gaat u akkoord met deze voorwaarden.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">2. Dienstverlening</h3>
            <p className="text-muted-foreground">
              Care-Nexus levert technische zorgoplossingen inclusief GPS tracking, oproepsystemen, infrastructuur 
              advies en 24/7 monitoring diensten. Wij streven ernaar onze diensten met de grootst mogelijke zorg 
              uit te voeren.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">3. Prijzen en Betaling</h3>
            <p className="text-muted-foreground">
              Alle vermelde prijzen zijn exclusief BTW, tenzij anders vermeld. Betaling dient te geschieden 
              binnen de overeengekomen betalingstermijn. Bij niet-tijdige betaling behouden wij ons het recht 
              voor om wettelijke rente in rekening te brengen.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">4. Privacy en Gegevensverwerking</h3>
            <p className="text-muted-foreground">
              Care-Nexus gaat zorgvuldig om met uw persoonlijke gegevens en respecteert uw privacy. 
              Wij verwerken persoonsgegevens uitsluitend conform de geldende privacywetgeving (AVG).
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">5. Aansprakelijkheid</h3>
            <p className="text-muted-foreground">
              Care-Nexus is niet aansprakelijk voor indirecte schade, gevolgschade of schade door storingen 
              buiten onze controle. Onze aansprakelijkheid is te allen tijde beperkt tot het bedrag dat door 
              onze verzekering wordt gedekt.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">6. 24/7 Monitoring en Support</h3>
            <p className="text-muted-foreground">
              Onze 24/7 monitoring diensten zijn beschikbaar voor continue bewaking. Support is beschikbaar 
              volgens de overeengekomen service level agreements. In geval van storingen streven wij naar 
              oplossing binnen de kortst mogelijke tijd.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">7. Wijzigingen</h3>
            <p className="text-muted-foreground">
              Care-Nexus behoudt zich het recht voor deze algemene voorwaarden te wijzigen. Wijzigingen 
              worden van kracht na publicatie op onze website. Wij adviseren deze voorwaarden regelmatig 
              te raadplegen.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">8. Toepasselijk Recht</h3>
            <p className="text-muted-foreground">
              Op deze voorwaarden is Nederlands recht van toepassing. Geschillen zullen bij voorkeur in 
              overleg worden opgelost. Indien dit niet mogelijk is, zijn de bevoegde rechters in Nederland 
              exclusief bevoegd.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">Contact</h3>
            <p className="text-muted-foreground">
              Voor vragen over deze algemene voorwaarden kunt u contact met ons opnemen via:<br />
              E-mail: info@care-nexus.nl<br />
              Telefoon: +31 (0)20 123 4567
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
