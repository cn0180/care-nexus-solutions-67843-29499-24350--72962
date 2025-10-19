import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Shield, Brain } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Bedankt! We nemen zo spoedig mogelijk contact met u op.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-7xl space-y-12 animate-fade-in-up">
            {/* Header */}
            <div className="space-y-4">
              <h1 className="text-5xl font-bold text-foreground">Contact</h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Neem gerust contact op voor vragen over onze technische zorgoplossingen.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Phone, title: "Telefoon", value: "+31 (0)20 123 4567" },
                { icon: Mail, title: "Email", value: "info@care-nexus.nl" },
                { icon: MapPin, title: "Locatie", value: "Nederland" }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <Card key={i} className="border-border">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">{item.value}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Additional Info */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-border">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">24/7 Thuiszorg Monitoring</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Wij houden 24/7 een oogje in het zeil voor thuiszorg mensen die onze GPS tracking en oproepsystemen gebruiken. 
                    Altijd hulp wanneer het nodig is.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-border">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                    <Brain className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">AI Software Specialist</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Als specialist in AI-software ontwikkelen wij slimme oplossingen die zorgtechnologie naar een hoger niveau tillen. 
                    Innovatie voor betere zorg.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Form */}
            <Card className="border-border shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl">Stuur een bericht</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    placeholder="Uw naam"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Uw email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                  <Input
                    type="tel"
                    placeholder="Uw telefoonnummer"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                  <Textarea
                    placeholder="Uw vraag over technische oplossingen"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                  />
                  <Button type="submit" className="w-full bg-primary text-primary-foreground">
                    Verstuur Bericht
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
