import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "@/assets/care-nexus-logo.png";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Care-Nexus Logo" className="h-28 w-28 mt-7" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/gps-tracking" className="text-foreground hover:text-primary transition-colors">
              GPS Tracking
            </Link>
            <Link to="/thuiszorg" className="text-foreground hover:text-primary transition-colors">
              Thuiszorg
            </Link>
            <Link to="/oproepsysteem" className="text-foreground hover:text-primary transition-colors">
              Oproepsysteem
            </Link>
            <Link to="/infrastructuur" className="text-foreground hover:text-primary transition-colors">
              Infrastructuur
            </Link>
            <Link to="/service247" className="text-foreground hover:text-primary transition-colors">
              24/7 Service
            </Link>
            <Link to="/contact">
              <Button className="bg-primary text-primary-foreground">
                <Phone className="mr-2 h-4 w-4" />
                Contact
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden py-4 space-y-4 animate-fade-in">
            <Link to="/" onClick={() => setIsOpen(false)} className="block w-full text-left px-4 py-2 text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/gps-tracking" onClick={() => setIsOpen(false)} className="block w-full text-left px-4 py-2 text-foreground hover:text-primary transition-colors">
              GPS Tracking
            </Link>
            <Link to="/thuiszorg" onClick={() => setIsOpen(false)} className="block w-full text-left px-4 py-2 text-foreground hover:text-primary transition-colors">
              Thuiszorg
            </Link>
            <Link to="/oproepsysteem" onClick={() => setIsOpen(false)} className="block w-full text-left px-4 py-2 text-foreground hover:text-primary transition-colors">
              Oproepsysteem
            </Link>
            <Link to="/infrastructuur" onClick={() => setIsOpen(false)} className="block w-full text-left px-4 py-2 text-foreground hover:text-primary transition-colors">
              Infrastructuur
            </Link>
            <Link to="/service247" onClick={() => setIsOpen(false)} className="block w-full text-left px-4 py-2 text-foreground hover:text-primary transition-colors">
              24/7 Service
            </Link>
            <div className="px-4">
              <Link to="/contact" onClick={() => setIsOpen(false)} className="block w-full">
                <Button className="w-full bg-primary text-primary-foreground">
                  <Phone className="mr-2 h-4 w-4" />
                  Contact
                </Button>
              </Link>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;