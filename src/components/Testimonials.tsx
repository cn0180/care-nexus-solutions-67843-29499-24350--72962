import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria van den Berg",
      role: "Dochter van cliënt",
      content: "Het GPS systeem geeft ons zoveel gemoedsrust. Vader kan gewoon zelfstandig naar buiten en wij weten altijd waar hij is. Perfect!"
    },
    {
      name: "Jan Pieterse",
      role: "Zorginstelling",
      content: "De infrastructuur adviezen van Care-Nexus hebben onze locatie veel veiliger gemaakt. Hun technische kennis is uitstekend."
    },
    {
      name: "Sophie Jansen",
      role: "Mantelzorger",
      content: "Het oproepsysteem werkt perfect. Moeder voelt zich veiliger en ik kan rustig naar mijn werk. Aanrader!"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground">Wat Onze Klanten Zeggen</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ervaringen van tevreden gebruikers en familie
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="border-border bg-card hover:shadow-elevated transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-6 space-y-4">
                  <Quote className="w-10 h-10 text-primary/30" />
                  <p className="text-muted-foreground leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  <div className="pt-2">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
