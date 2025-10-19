import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/thuiszorg-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[50vh] md:min-h-[70vh] flex items-center pt-24 bg-gradient-hero">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professionele thuiszorg" 
          className="w-full h-full object-cover opacity-40 md:opacity-20"
        />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 py-12 md:py-16 relative z-10">
        <div className="max-w-3xl space-y-4 md:space-y-6 animate-fade-in-up">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
            Technische Zorgoplossingen voor Veiligheid en Comfort
          </h1>
          <p className="text-base md:text-xl text-primary-foreground/90 max-w-2xl">
            Slimme technologie en 24/7 monitoring voor een zorgeloze leefomgeving
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link to="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground text-lg px-8">
                Neem Contact Op
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-lg px-8"
              onClick={() => (document.getElementById('about-dialog') as HTMLDialogElement)?.showModal()}
            >
              Meer over ons?
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
