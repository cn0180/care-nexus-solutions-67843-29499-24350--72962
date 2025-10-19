import { Users, Heart, Award, Shield } from "lucide-react";
const About = () => {
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground">Over Ons</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Bij Care Nexus combineren we techniek met zorg. Onze innovatieve oplossingen ondersteunen dagelijks welzijn en bieden zekerheid, veiligheid en gemoedsrust  voor gebruikers én hun naasten.</p>
          </div>

          <div className="space-y-4 animate-fade-in">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
          </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[{
            icon: Users,
            title: "Expertise",
            description: "Jarenlange ervaring in zorgtechnologie"
          }, {
            icon: Heart,
            title: "Persoonlijk",
            description: "Oplossingen op maat voor elke situatie"
          }, {
            icon: Award,
            title: "Kwaliteit",
            description: "Alleen de beste technische systemen"
          }, {
            icon: Shield,
            title: "Betrouwbaar",
            description: "24/7 bereikbaar voor ondersteuning"
          }].map((item, index) => {
            const Icon = item.icon;
            return <div key={index} className="text-center space-y-3 p-6 rounded-lg bg-muted/30 animate-fade-in" style={{
              animationDelay: `${index * 100}ms`
            }}>
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>;
          })}
          </div>
        </div>
      </div>
    </section>;
};
export default About;