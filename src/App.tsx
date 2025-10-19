import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import GpsTracking from "./pages/GpsTracking";
import Infrastructuur from "./pages/Infrastructuur";
import Thuiszorg from "./pages/Thuiszorg";
import Oproepsysteem from "./pages/Oproepsysteem";
import Service247 from "./pages/Service247";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/gps-tracking" element={<GpsTracking />} />
          <Route path="/infrastructuur" element={<Infrastructuur />} />
          <Route path="/thuiszorg" element={<Thuiszorg />} />
          <Route path="/oproepsysteem" element={<Oproepsysteem />} />
          <Route path="/service247" element={<Service247 />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
