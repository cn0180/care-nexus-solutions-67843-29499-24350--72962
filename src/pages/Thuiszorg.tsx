import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle2, Lightbulb, Shield, Cpu } from "lucide-react";
import thuiszorgHomeCareImage from "@/assets/thuiszorg-home-care.jpg";
import thuiszorgMonitoringImage from "@/assets/thuiszorg-monitoring.jpg";
const Thuiszorg = () => {
  return <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="animate-fade-in-up space-y-12">
            {/* Header */}
            <div className="text-center space-y-4">
              <h1 className="text-5xl font-bold text-foreground">Thuiszorg
            </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Meer vrijheid voor bewoners, minder druk voor zorgteams</p>
            </div>

            {/* Content Sections */}
            <div className="space-y-12">
              {/* Section 1 */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <img src={thuiszorgHomeCareImage} alt="GPS monitoring voor wijkzorg" className="w-full h-64 object-cover rounded-lg shadow-lg" />
                </div>
                <div className="order-1 md:order-2 space-y-4">
                  <h2 className="text-3xl font-bold text-foreground">Thuis Ouder Worden</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Steeds meer bewoners kiezen ervoor om <strong>thuis ouder te worden</strong>, 
                    maar dit wordt voor wijkzorgteams steeds lastiger om te monitoren.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Wij hebben hiervoor een speciale <strong>GPS die 24/7 aanstaat</strong> en 
                    duidelijkheid geeft aan het wijkzorgteam wanneer er oprecht zorg nodig is 
                    niet alleen thuis maar ook wanneer de bewoner buiten huis is.
                  </p>
                  <ul className="space-y-2">
                    {["24/7 GPS monitoring", "Duidelijkheid voor zorgteams", "Thuis én buitenshuis", "Real-time inzichten"].map((item, i) => <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>)}
                  </ul>
                </div>
              </div>

              {/* Section 2 */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-foreground">Vrijheid en Minder Druk</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Met deze oplossingen zorgen we ervoor dat de bewoner vrij kan leven en zorgmedewerkers <strong>minder druk ervaren</strong>.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Het wijkzorgteam weet precies wanneer zorg nodig is en kan efficiënter werken, 
                    terwijl bewoners hun autonomie behouden.
                  </p>
                  <div className="space-y-3 pt-4">
                    <div className="bg-muted/50 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <Lightbulb className="w-6 h-6 text-primary flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">Meer Vrijheid</h4>
                          <p className="text-sm text-muted-foreground">
                            Bewoners kunnen vrij leven zonder constante controle
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <Shield className="w-6 h-6 text-primary flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">Minder Werkdruk</h4>
                          <p className="text-sm text-muted-foreground">
                            Zorgmedewerkers weten wanneer zorg echt nodig is
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <Cpu className="w-6 h-6 text-primary flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">24/7 Bereikbaar</h4>
                          <p className="text-sm text-muted-foreground">
                            Beschikbaar voor het monitoren van bewoners wanneer nodig
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <img src={thuiszorgMonitoringImage} alt="Wijkzorg monitoring" className="w-full h-64 object-cover rounded-lg shadow-lg" />
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-primary/5 rounded-xl p-8 text-center space-y-4">
              <h2 className="text-2xl font-bold text-foreground">24/7 GPS Monitoring voor uw wijkzorgteam?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Neem contact op voor meer informatie over onze monitoring oplossingen
              </p>
              <div className="pt-2">
                <a href="/contact" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground h-11 px-8">
                  Contact Opnemen
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>;
};
export default Thuiszorg;