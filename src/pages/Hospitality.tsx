import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Hotel, Star, Sparkles, HeadphonesIcon, Globe, Award } from "lucide-react";
import EnterpriseFeatures from "@/components/EnterpriseFeatures";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";

const Hospitality = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                Elevate Your{" "}
                <span className="text-primary">Guest Experience</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Empower your hospitality team with instant access to guest preferences, 
                service standards, and property information—delivering exceptional experiences every time.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="gap-2">
                  Get Started
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 backdrop-blur-sm border border-primary/20">
                <Hotel className="w-full h-64 text-primary opacity-20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[hsl(var(--dark-navy))] text-white">
        <div className="container mx-auto max-w-7xl px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Exceptional Service, Every Interaction
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 border-white/20 p-8 backdrop-blur-sm">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Personalized Service
              </h3>
              <p className="text-white/80">
                Access guest profiles, preferences, and history instantly. Enable your team 
                to provide personalized service that creates memorable experiences.
              </p>
            </Card>
            
            <Card className="bg-white/10 border-white/20 p-8 backdrop-blur-sm">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <HeadphonesIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Concierge Excellence
              </h3>
              <p className="text-white/80">
                Instant access to local attractions, restaurant recommendations, and property 
                amenities. Turn every staff member into an expert concierge.
              </p>
            </Card>
            
            <Card className="bg-white/10 border-white/20 p-8 backdrop-blur-sm">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Service Recovery
              </h3>
              <p className="text-white/80">
                Quick access to protocols for handling complaints and special requests. 
                Empower staff to resolve issues immediately and turn problems into opportunities.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Built for <span className="text-primary">Hospitality Excellence</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Features that help you deliver world-class service
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">Multi-Property Management</h3>
                <p className="text-muted-foreground">
                  Manage knowledge across multiple properties while maintaining unique local 
                  information. Perfect for hotel chains and resort groups.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">Standards & Quality</h3>
                <p className="text-muted-foreground">
                  Maintain brand standards across all touchpoints. Instant access to service 
                  protocols ensures consistency in every guest interaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Features */}
      <EnterpriseFeatures />

      {/* Pricing Section */}
      <PricingSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

export default Hospitality;
