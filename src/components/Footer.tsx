import logo from "@/assets/care-nexus-logo.png";
const Footer = () => {
  return <footer className="bg-secondary text-secondary-foreground py-6">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
          <div className="space-y-3">
            <div className="flex items-center">
              <img src={logo} alt="Care-Nexus Logo" className="h-28 w-28 mt-7" />
            </div>
            <p className="text-secondary-foreground/80 text-sm">Innovatieve zorgtechnologie met 24/7 monitoring en ondersteuning.</p>
          </div>

          <div className="grid grid-cols-2 md:col-span-2 gap-6">
            <div>
              <h3 className="font-semibold text-base mb-3">Diensten</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  
                </li>
                <li>
                  <a href="/gps-tracking" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                    GPS Tracking
                  </a>
                </li>
                <li>
                  <a href="/thuiszorg" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                    Thuiszorg
                  </a>
                </li>
                <li>
                  <a href="/oproepsysteem" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                    Oproepsysteem
                  </a>
                </li>
                <li>
                  <a href="/infrastructuur" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                    Infrastructuur
                  </a>
                </li>
                <li>
                  <a href="/service247" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                    24/7 Service
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-base mb-3">Contact</h3>
              <ul className="space-y-2 text-sm text-secondary-foreground/80">
                <li>+31 (0)20 123 4567</li>
                <li>info@care-nexus.nl</li>
                <li>Nederland</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-4 text-center text-sm text-secondary-foreground/60">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <p>© {new Date().getFullYear()} Care-Nexus. Alle rechten voorbehouden.</p>
            <div className="flex gap-3">
              <button onClick={() => (document.getElementById('cookies-dialog') as HTMLDialogElement)?.showModal()} className="hover:text-secondary-foreground transition-colors underline">
                Cookies
              </button>
              <span>|</span>
              <button onClick={() => (document.getElementById('terms-dialog') as HTMLDialogElement)?.showModal()} className="hover:text-secondary-foreground transition-colors underline">
                Algemene Voorwaarden
              </button>
              <span>|</span>
              <button onClick={() => (document.getElementById('about-dialog') as HTMLDialogElement)?.showModal()} className="hover:text-secondary-foreground transition-colors underline">
                Meer over ons?
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;