import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Building2, Home, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import gpsImage from "@/assets/gps-tracking.jpg";
import infrastructuurImage from "@/assets/infrastructuur.jpg";
import homeCareImage from "@/assets/home-care.jpg";
import oproepsysteemImage from "@/assets/oproepsysteem.jpg";

const Services = () => {
  const services = [
    {
      icon: MapPin,
      title: "GPS Tracking",
      description: "Veiligheid en gemoedsrust door real-time locatiebepaling",
      image: gpsImage,
      link: "/gps-tracking"
    },
    {
      icon: Home,
      title: "Thuiszorg Oplossingen",
      description: "Slimme technologie voor zelfstandig leven",
      image: homeCareImage,
      link: "/thuiszorg"
    },
    {
      icon: Phone,
      title: "Oproepsysteem",
      description: "24/7 bereikbaar met persoonlijke alarmering",
      image: oproepsysteemImage,
      link: "/oproepsysteem"
    },
    {
      icon: Building2,
      title: "Infrastructuur Advies",
      description: "Technische aanpassingen voor een veilige thuisomgeving",
      image: infrastructuurImage,
      link: "/infrastructuur"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Onze Technische Oplossingen
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Slimme technologie afgestemd op uw behoeften
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="bg-card hover:shadow-elevated transition-all duration-300 border-border overflow-hidden animate-fade-in flex flex-col"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg md:text-2xl text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col space-y-4">
                  <p className="text-sm md:text-base text-muted-foreground flex-1">{service.description}</p>
                  <Link to={service.link} className="mt-auto">
                    <Button variant="default" className="w-full">
                      Meer Info
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
