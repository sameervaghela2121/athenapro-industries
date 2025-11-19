import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Utensils, Clock, Users, Shield, Zap, BookOpen } from "lucide-react";
import EnterpriseFeatures from "@/components/EnterpriseFeatures";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";

const QSR = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                Accelerate Your{" "}
                <span className="text-primary">Quick Service</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Speed meets accuracy. Give your QSR team instant access to recipes, 
                procedures, and safety protocols—keeping service fast and quality consistent.
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
                <Utensils className="w-full h-64 text-primary opacity-20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[hsl(var(--dark-navy))] text-white">
        <div className="container mx-auto max-w-7xl px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Built for Speed and Precision
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 border-white/20 p-8 backdrop-blur-sm">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Faster Service Times
              </h3>
              <p className="text-white/80">
                Eliminate the time staff spend searching for information. Instant answers 
                mean faster service and shorter wait times for customers.
              </p>
            </Card>
            
            <Card className="bg-white/10 border-white/20 p-8 backdrop-blur-sm">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Food Safety Compliance
              </h3>
              <p className="text-white/80">
                Critical safety protocols and allergen information at your team's fingertips. 
                Reduce risk and ensure compliance across all shifts and locations.
              </p>
            </Card>
            
            <Card className="bg-white/10 border-white/20 p-8 backdrop-blur-sm">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Rapid Onboarding
              </h3>
              <p className="text-white/80">
                New hires become productive faster with instant access to training materials, 
                procedures, and best practices—reducing training costs and time.
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
              Features That Keep You <span className="text-primary">Moving Fast</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Designed for the fast-paced QSR environment
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">Recipe Management</h3>
                <p className="text-muted-foreground">
                  Standardized recipes and prep procedures accessible in seconds. Maintain 
                  quality consistency across all locations and all shifts with zero confusion.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">Instant Updates</h3>
                <p className="text-muted-foreground">
                  Push menu changes, promotional information, and operational updates to 
                  all locations instantly—keeping every team member in the loop.
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

export default QSR;
