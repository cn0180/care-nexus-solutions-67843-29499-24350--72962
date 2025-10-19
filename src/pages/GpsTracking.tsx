import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle2, Shield, Clock, MapPin } from "lucide-react";
import gpsTrackingElderlyImage from "@/assets/gps-tracking-elderly.jpg";
import gpsDeviceImage from "@/assets/gps-device-closeup.jpg";

const GpsTracking = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="animate-fade-in-up space-y-12">
            {/* Header */}
            <div className="text-center space-y-4">
              <h1 className="text-5xl font-bold text-foreground">GPS Tracking</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Technische oplossing voor optimale veiligheid en zelfstandigheid
              </p>
            </div>

            {/* Content Sections */}
            <div className="space-y-12">
              {/* Section 1 */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <img 
                    src={gpsTrackingElderlyImage} 
                    alt="GPS Tracking voor ouderenzorg" 
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="order-1 md:order-2 space-y-4">
                  <h2 className="text-3xl font-bold text-foreground">Wat is GPS Tracking?</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Onze GPS tracking systemen bieden <strong>real-time locatiebepaling</strong> voor 
                    ouderen en mensen met dementie.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Deze technische oplossing geeft zowel de gebruiker als familie gemoedsrust. 
                    Het systeem werkt discreet en is gemakkelijk te dragen.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "24/7 real-time tracking",
                      "Veilige zone meldingen",
                      "Discrete draagbare apparaten",
                      "Lange batterijduur"
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
                  <h2 className="text-3xl font-bold text-foreground">Voor wie geschikt?</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Ideaal voor mensen met <strong>dementie</strong>, dwaalgedrag of verminderde oriëntatie.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Ook geschikt voor actieve senioren die hun zelfstandigheid willen behouden met technische ondersteuning.
                  </p>
                  <div className="space-y-3 pt-4">
                    <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                      <Shield className="w-6 h-6 text-primary flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Privacy gewaarborgd</h4>
                        <p className="text-sm text-muted-foreground">Veilige dataopslag volgens AVG wetgeving</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                      <Clock className="w-6 h-6 text-primary flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Directe alerts</h4>
                        <p className="text-sm text-muted-foreground">Meldingen bij verlaten veilige zones</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                      <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Locatiegeschiedenis</h4>
                        <p className="text-sm text-muted-foreground">Inzicht in bewegingspatronen</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <img 
                    src={gpsDeviceImage} 
                    alt="GPS tracking apparaat" 
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-primary/5 rounded-xl p-8 text-center space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Meer informatie nodig?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Neem contact met ons op voor een persoonlijk adviesgesprek over GPS tracking oplossingen
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

export default GpsTracking;
