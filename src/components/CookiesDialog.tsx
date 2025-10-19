import { X } from "lucide-react";

const CookiesDialog = () => {
  return (
    <dialog id="cookies-dialog" className="rounded-lg shadow-elevated max-w-2xl w-full p-0 backdrop:bg-black/50">
      <div className="bg-card text-card-foreground">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-2xl font-bold">Cookiebeleid</h2>
          <button
            onClick={() => (document.getElementById('cookies-dialog') as HTMLDialogElement)?.close()}
            className="rounded-full p-2 hover:bg-muted transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
          <p className="text-muted-foreground">
            Care-Nexus gebruikt cookies om uw ervaring op onze website te verbeteren en te analyseren hoe onze website wordt gebruikt.
          </p>
          
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">Wat zijn cookies?</h3>
            <p className="text-muted-foreground">
              Cookies zijn kleine tekstbestanden die op uw apparaat worden geplaatst wanneer u onze website bezoekt. 
              Ze helpen ons de website beter te laten functioneren en uw voorkeuren te onthouden.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">Soorten cookies die wij gebruiken</h3>
            <ul className="space-y-2 text-muted-foreground list-disc list-inside">
              <li><strong>Noodzakelijke cookies:</strong> Voor de basisfunctionaliteit van de website</li>
              <li><strong>Analytische cookies:</strong> Om te begrijpen hoe bezoekers onze website gebruiken</li>
              <li><strong>Functionele cookies:</strong> Om uw voorkeuren te onthouden</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">Cookies beheren</h3>
            <p className="text-muted-foreground">
              U kunt cookies beheren via uw browserinstellingen. Let op: het uitschakelen van cookies kan 
              de functionaliteit van onze website beperken.
            </p>
          </div>
        </div>

        <div className="p-6 border-t border-border">
          <button
            onClick={() => (document.getElementById('cookies-dialog') as HTMLDialogElement)?.close()}
            className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors font-medium"
          >
            Sluiten
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default CookiesDialog;
