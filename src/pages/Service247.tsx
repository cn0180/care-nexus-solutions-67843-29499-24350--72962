import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Headset, Clock, Wrench, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Service247 = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Header */}
            <div className="text-center space-y-4 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                24/7 Service & Storing
              </h1>
              <p className="text-xl text-muted-foreground">
                Betrouwbare ondersteuning, altijd beschikbaar voor onze bewoners
              </p>
            </div>

            {/* Content Grid */}
            <div className="grid md:grid-cols-2 gap-8 animate-fade-in">
              <div className="bg-muted/50 rounded-lg p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Clock className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">24/7 Monitoring</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Onze systemen monitoren continu de gezondheid en veiligheid van bewoners. 
                  Bij noodsituaties wordt automatisch alarm geslagen en wordt direct hulp ingezet.
                </p>
              </div>

              <div className="bg-muted/50 rounded-lg p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Wrench className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Storing Oplossen</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Technische storingen worden 24/7 gemonitord en zo snel mogelijk verholpen. 
                  Ons team staat klaar om systemen te herstellen en de continuïteit te waarborgen.
                </p>
              </div>

              <div className="bg-muted/50 rounded-lg p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Betrouwbaar</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Onze systemen werken betrouwbaar en continu. We zorgen voor optimale uptime 
                  en directe actie bij storingen voor maximale veiligheid.
                </p>
              </div>

              <div className="bg-muted/50 rounded-lg p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Headset className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Direct Hulp</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Bij alarm of storing wordt direct hulp ingezet. Bewoners krijgen snel de 
                  ondersteuning die ze nodig hebben, dag en nacht.
                </p>
              </div>
            </div>

            {/* Info Section */}
            <div className="bg-gradient-subtle rounded-lg p-8 space-y-6 animate-fade-in">
              <h2 className="text-3xl font-bold text-foreground text-center">
                Hoe werkt onze 24/7 Service?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Continue Monitoring</h3>
                    <p className="text-muted-foreground">
                      Al onze systemen worden 24/7 gemonitord op functionaliteit en alarmen
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Automatische Detectie</h3>
                    <p className="text-muted-foreground">
                      Bij storing of alarm wordt dit automatisch gedetecteerd door onze systemen
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Directe Actie</h3>
                    <p className="text-muted-foreground">
                      Ons team wordt direct geïnformeerd en onderneemt actie om te helpen of de storing te verhelpen
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Hulp Ingezet</h3>
                    <p className="text-muted-foreground">
                      Bewoners krijgen snel de hulp die ze nodig hebben of systemen worden hersteld
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-subtle rounded-lg p-8 text-center space-y-4 animate-fade-in">
              <h2 className="text-2xl font-bold text-foreground">
                Vragen over onze 24/7 service?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Neem contact met ons op voor meer informatie over onze betrouwbare dienstverlening.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-primary text-primary-foreground">
                  <Headset className="mr-2 h-5 w-5" />
                  Neem Contact Op
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Service247;
