import { Card } from "@/components/ui/card";
import { Scale, Shield, Zap, Users, Award, TrendingUp } from "lucide-react";

const EnterpriseFeatures = () => {
  const features = [
    {
      icon: Scale,
      title: "Scalable",
      description: "Powerful to serve the needs of the biggest multi-nationals, with built-in support for multi-lingual, multi-location, and up to millions of users."
    },
    {
      icon: Shield,
      title: "Secure",
      description: "Enterprise-grade security with SOC 2 compliance, end-to-end encryption, and role-based access controls to protect your sensitive information."
    },
    {
      icon: Zap,
      title: "Efficient",
      description: "Reduce information retrieval time by 80%. AI-powered instant answers mean your team spends less time searching and more time serving customers."
    },
    {
      icon: Users,
      title: "User Centric Design",
      description: "Intuitive interface designed for frontline workers. No training required—if you can use a search engine, you can use AthenaPro."
    },
    {
      icon: Award,
      title: "Enterprise Grade",
      description: "Built for mission-critical operations with 99.9% uptime SLA, dedicated support, and custom deployment options including on-premise solutions."
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Continuously evolving with the latest AI advancements. Regular updates ensure you're always leveraging cutting-edge knowledge management technology."
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            AI-Powered Knowledge,{" "}
            <span className="text-primary">Tailored for Enterprise Excellence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Enhance productivity with intelligent knowledge sharing, secure access controls, 
            and tailored solutions for enterprise-wide success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnterpriseFeatures;
