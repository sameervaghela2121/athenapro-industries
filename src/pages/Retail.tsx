import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingBag, Users, TrendingUp, MessageSquare, BarChart3, Package } from "lucide-react";

const Retail = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                Transform Your{" "}
                <span className="text-primary">Retail Operations</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Empower your retail team with instant access to product information, 
                inventory updates, and customer service protocols—all powered by AI.
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
                <ShoppingBag className="w-full h-64 text-primary opacity-20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[hsl(var(--dark-navy))] text-white">
        <div className="container mx-auto max-w-7xl px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Retail Solutions That Drive Results
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 border-white/20 p-8 backdrop-blur-sm">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Customer Service Excellence
              </h3>
              <p className="text-white/80">
                Equip your staff with instant answers to customer queries about products, 
                returns, and store policies—reducing wait times and improving satisfaction.
              </p>
            </Card>
            
            <Card className="bg-white/10 border-white/20 p-8 backdrop-blur-sm">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <Package className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Inventory Management
              </h3>
              <p className="text-white/80">
                Real-time inventory visibility across all locations. Staff can instantly 
                check stock levels, locate products, and process transfers seamlessly.
              </p>
            </Card>
            
            <Card className="bg-white/10 border-white/20 p-8 backdrop-blur-sm">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Sales Enablement
              </h3>
              <p className="text-white/80">
                Provide your team with product knowledge, upselling techniques, and 
                promotional information to maximize every customer interaction.
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
              Purpose-Built for <span className="text-primary">Retail Success</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Every feature designed with the retail environment in mind
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">Multi-Store Communication</h3>
                <p className="text-muted-foreground">
                  Share updates, policies, and best practices across all locations instantly. 
                  Ensure consistency in customer experience regardless of location.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">Performance Analytics</h3>
                <p className="text-muted-foreground">
                  Track which information is most accessed, identify knowledge gaps, 
                  and continuously improve your team's capabilities with data-driven insights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Revolutionize Your Retail Operations?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join leading retailers using AthenaPro to empower their teams
          </p>
          <Button size="lg" className="gap-2">
            Schedule a Demo
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Retail;
