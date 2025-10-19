import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle2, Lightbulb, Home, Accessibility } from "lucide-react";
import infrastructuurImage from "@/assets/infrastructuur.jpg";
import infrastructuurTechnicalImage from "@/assets/infrastructuur-technical.jpg";
import infrastructuurInstallationImage from "@/assets/infrastructuur-installation.jpg";

const Infrastructuur = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="animate-fade-in-up space-y-12">
            {/* Header */}
            <div className="text-center space-y-4">
              <h1 className="text-5xl font-bold text-foreground">Technisch Infrastructuur Advies</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Professionele begeleiding bij technische inrichting en slimme aanpassingen
              </p>
            </div>

            {/* Content Sections */}
            <div className="space-y-12">
              {/* Section 1 */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <img 
                    src={infrastructuurTechnicalImage} 
                    alt="Infrastructuur voor ouderenzorg" 
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="order-1 md:order-2 space-y-4">
                  <h2 className="text-3xl font-bold text-foreground">Onze aanpak</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We denken <strong>actief mee</strong> over de beste technische infrastructurele oplossingen voor 
                    thuisomgevingen en zorginstellingen.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Van slimme installaties tot veiligheidssystemen - wij regelen het allemaal met oog voor detail en kwaliteit.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Toegankelijkheid analyse",
                      "Veiligheidsadvies",
                      "Technologie integratie",
                      "Dementievriendelijke inrichting"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Section 2 */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-foreground">Expertise gebieden</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Onze technische specialisten hebben ruime ervaring met <strong>slimme aanpassingen voor ouderen</strong> en 
                    zorginstellingen.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    We combineren technologie met veiligheid en comfort voor een optimaal resultaat.
                  </p>
                  <div className="space-y-3 pt-4">
                    <div className="bg-muted/50 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <Home className="w-6 h-6 text-primary flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">Woningaanpassingen</h4>
                          <p className="text-sm text-muted-foreground">
                            Drempels, trapliften, badkamers en verlichting
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <Accessibility className="w-6 h-6 text-primary flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">Toegankelijkheid</h4>
                          <p className="text-sm text-muted-foreground">
                            Rollatorvriendelijk, brede doorgangen
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <Lightbulb className="w-6 h-6 text-primary flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">Slimme oplossingen</h4>
                          <p className="text-sm text-muted-foreground">
                            Sensoren, noodknoppen en verlichting
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <img 
                    src={infrastructuurInstallationImage} 
                    alt="Technische oplossingen" 
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>

            {/* Process Section */}
            <div className="bg-gradient-subtle rounded-xl p-8 space-y-6">
              <h2 className="text-2xl font-bold text-foreground text-center">Ons proces</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl font-bold text-primary">1</span>
                  </div>
                  <h3 className="font-semibold text-foreground">Intake</h3>
                  <p className="text-sm text-muted-foreground">Behoeften en wensen in kaart</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl font-bold text-primary">2</span>
                  </div>
                  <h3 className="font-semibold text-foreground">Advies</h3>
                  <p className="text-sm text-muted-foreground">Persoonlijk adviesrapport</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl font-bold text-primary">3</span>
                  </div>
                  <h3 className="font-semibold text-foreground">Uitvoering</h3>
                  <p className="text-sm text-muted-foreground">Begeleiding bij realisatie</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-primary/5 rounded-xl p-8 text-center space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Plan een vrijblijvend gesprek</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Laat ons meekijken naar uw situatie en ontdek welke mogelijkheden er zijn
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
    </div>
  );
};

export default Infrastructuur;
