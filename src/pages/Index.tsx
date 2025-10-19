import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import CookiesDialog from "@/components/CookiesDialog";
import TermsDialog from "@/components/TermsDialog";
import AboutDialog from "@/components/AboutDialog";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <Features />
      <About />
      <Footer />
      <CookiesDialog />
      <TermsDialog />
      <AboutDialog />
    </div>
  );
};

export default Index;
