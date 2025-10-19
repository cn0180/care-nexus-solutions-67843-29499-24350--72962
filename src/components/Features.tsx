import { Smartphone, Clock, Users, HeadphonesIcon } from "lucide-react";

const Features = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-2 md:space-y-4 mb-8 md:mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Waarom Care-Nexus?</h2>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-8">
            {[
              {
                icon: Smartphone,
                title: "Slimme Technologie",
                descriptionMobile: "Moderne systemen.",
                descriptionDesktop: "Moderne en gebruiksvriendelijke systemen die eenvoudig te bedienen zijn. Al onze oplossingen zijn getest in de praktijk en ontworpen voor senioren."
              },
              {
                icon: Clock,
                title: "24/7 Bereikbaar",
                descriptionMobile: "Altijd bereikbaar.",
                descriptionDesktop: "Dag en nacht bereikbaar voor hulp en ondersteuning. Ons team staat altijd klaar om snel te reageren op elke situatie, waar en wanneer u ons nodig heeft."
              },
              {
                icon: Users,
                title: "Persoonlijke Aanpak",
                descriptionMobile: "Past bij u.",
                descriptionDesktop: "Elke situatie is uniek. We luisteren naar uw behoeften en bieden oplossingen die perfect aansluiten bij uw levensstijl en wensen."
              },
              {
                icon: HeadphonesIcon,
                title: "Professionele Support",
                descriptionMobile: "Training door experts.",
                descriptionDesktop: "Installatie, training en continue ondersteuning door ervaren specialisten. We zorgen ervoor dat u en uw familie zich veilig voelen."
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="flex gap-4 p-6 rounded-lg bg-card border border-border hover:shadow-elevated transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg md:text-xl font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed md:hidden">{feature.descriptionMobile}</p>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed hidden md:block">{feature.descriptionDesktop}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
