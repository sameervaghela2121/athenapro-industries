import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, ShoppingBag, Utensils, Hotel } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-7xl text-center">
          <h1 className="text-6xl lg:text-7xl font-bold mb-6">
            Revolutionize{" "}
            <span className="text-primary">Knowledge Access</span>
          </h1>
          <p className="text-2xl text-muted-foreground mb-4">
            A cost effective and focused solution
          </p>
          <p className="text-2xl text-muted-foreground mb-12">
            for seamless information flow
          </p>
          <Button size="lg" className="gap-2">
            Get Started <ArrowRight className="w-5 h-5" />
          </Button>
          <p className="mt-8 text-muted-foreground max-w-2xl mx-auto">
            AthenaPro gets your staff the right information, at the right time, cost effectively.
          </p>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-[hsl(var(--dark-navy))] text-white">
        <div className="container mx-auto max-w-7xl px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Industry-Specific Solutions
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/retail">
              <Card className="bg-white/10 border-white/20 p-8 backdrop-blur-sm hover:bg-white/20 transition-all cursor-pointer group h-full">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <ShoppingBag className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Retail</h3>
                <p className="text-white/80 mb-4">
                  Empower your retail team with instant product knowledge, inventory updates, 
                  and customer service excellence.
                </p>
                <div className="flex items-center text-primary gap-2 group-hover:gap-4 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </div>
              </Card>
            </Link>
            
            <Link to="/qsr">
              <Card className="bg-white/10 border-white/20 p-8 backdrop-blur-sm hover:bg-white/20 transition-all cursor-pointer group h-full">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Utensils className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Quick Service Restaurant</h3>
                <p className="text-white/80 mb-4">
                  Speed meets accuracy with instant access to recipes, procedures, and safety 
                  protocols for your QSR team.
                </p>
                <div className="flex items-center text-primary gap-2 group-hover:gap-4 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </div>
              </Card>
            </Link>
            
            <Link to="/hospitality">
              <Card className="bg-white/10 border-white/20 p-8 backdrop-blur-sm hover:bg-white/20 transition-all cursor-pointer group h-full">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Hotel className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Hospitality</h3>
                <p className="text-white/80 mb-4">
                  Elevate guest experiences with instant access to preferences, service standards, 
                  and property information.
                </p>
                <div className="flex items-center text-primary gap-2 group-hover:gap-4 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-center mb-16">
            Where we are different
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-primary rounded" />
              </div>
              <p className="text-muted-foreground">
                You can publish information to key sets of folks - by facility, by country, 
                by role, or however you manage your business.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-primary rounded-full" />
              </div>
              <p className="text-muted-foreground">
                If ever critical information is not present, we route the inquiry to the 
                right people, improving answers for all.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-primary rounded-lg" />
              </div>
              <p className="text-muted-foreground">
                Unlike older solutions based on keyword search, AthenaPro is AI powered to 
                give precise answers, instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Knowledge Management?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join leading enterprises using AthenaPro for seamless information flow
          </p>
          <Button size="lg" className="gap-2">
            Get Started Today <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
