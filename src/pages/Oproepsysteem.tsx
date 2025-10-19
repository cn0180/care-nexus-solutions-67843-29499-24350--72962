import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle2, Phone, Clock, Shield, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import oproepBewonerAlarmImage from "@/assets/oproep-bewoner-alarm.jpg";
import oproepResponseImage from "@/assets/oproep-response.jpg";
const Oproepsysteem = () => {
  return <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Header */}
            <div className="text-center space-y-4 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Oproepsysteem voor Zorginstellingen
              </h1>
              <p className="text-xl text-muted-foreground">
                Direct contact tussen bewoners en zorgteam via draagbare alarmering
              </p>
            </div>

            {/* Content Sections */}
            <div className="space-y-12">
              {/* Section 1 */}
              <div className="grid md:grid-cols-2 gap-8 items-center animate-fade-in">
                <div className="order-2 md:order-1">
                  <img src={oproepBewonerAlarmImage} alt="Oproepsysteem voor ouderen" className="w-full h-64 object-cover rounded-lg shadow-lg" />
                </div>
                <div className="order-1 md:order-2 space-y-4">
                  <h2 className="text-3xl font-bold text-foreground">Hoe werkt ons oproepsysteem?</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Bij onze oproepsysteem is het volgt: de bewoner heeft hulp nodig. Daarvoor kunnen 
                    wij het op verschillende manieren voortbrengen door middel van een draagbare alarm 
                    die de bewoner meedraagt.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Bij het indrukken van deze alarm krijgen de zorgmedewerkers in het zorgtehuis 
                    een melding. Doormiddel van dit kunnen ze direct naar de kamer toe gaan of contact 
                    met de bewoner opnemen door middel van een spraak-luister systeem.
                  </p>
                  <div className="space-y-3 pt-4">
                    <div className="flex items-start gap-3">
                      <Bell className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground">
                        Draagbare alarm die bewoner altijd bij zich draagt
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground">
                        Directe melding naar zorgmedewerkers in het zorgtehuis
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground">
                        Snelste contact via spraak-luister systeem of direct ter plaatse
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2 */}
              <div className="grid md:grid-cols-2 gap-8 items-center animate-fade-in">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-foreground">Toekomst & Innovatie</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Hierdoor is de bewoner het snelst in contact met de zorgteam. Ook zijn wij bezig 
                    met de nieuwe ontwikkelingen AI gerelateerd voor in de toekomst.
                  </p>
                  <div className="space-y-3">
                    <div className="bg-muted/50 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-foreground">Direct Contact</p>
                          <p className="text-sm text-muted-foreground">
                            Snelste verbinding tussen bewoner en zorgteam
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <Shield className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-foreground">AI Ontwikkelingen</p>
                          <p className="text-sm text-muted-foreground">
                            Achter de schermen druk bezig met innovaties voor de toekomst
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-foreground">Veilige Woonplaats</p>
                          <p className="text-sm text-muted-foreground">
                            Voor in de toekomst een veilige woonplaats voor elke bewoner creëren
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <img src={oproepResponseImage} alt="Oproepsysteem innovatie" className="w-full h-64 object-cover rounded-lg shadow-lg" />
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-subtle rounded-lg p-8 text-center space-y-4 animate-fade-in">
              <h2 className="text-2xl font-bold text-foreground">
                Interesse in ons oproepsysteem?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                Neem contact met ons op voor meer informatie over onze oplossingen voor zorginstellingen.
              </p>
              <div className="pt-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-primary text-primary-foreground text-base">
                    <Phone className="mr-2 h-5 w-5" />
                    Neem Contact Op
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>;
};
export default Oproepsysteem;