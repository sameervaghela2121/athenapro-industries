import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Business Standard",
      price: "$2",
      period: "/ Per User / Month",
      subtitle: "Queries Per Month - pooled between all users",
      pricingDetail: "$10/month for 1000 queries (~5 Users)",
      badge: "2 Month Free",
      promotion: "Enjoy 2 months free.",
      description: "What's included:",
      features: [
        "Key Athena Features",
        "Support a wide number of formats, including text, pdf, word, video & more",
        "No limit on the number of users",
        "Free dedicated app on iOS and Android",
        "24/7 priority support",
        "Buy Extra Queries"
      ],
      buttonText: "Start Now",
      headerColor: "bg-primary"
    },
    {
      name: "Large Enterprise",
      isCustom: true,
      customTitle: "Custom Pricing",
      customDescription: "For large operations that need maximum control, compliance, and customization.",
      description: "What's included:",
      features: [
        "All the features of Business Standard",
        "Support Custom ID systems (e.g., Okta, Entra)",
        "Support Complex Corporate Hierarchies",
        "Custom Dashboards and Analytics",
        "Specialized Franchise Billing Options",
        "Custom Pricing Options",
        "Dedicated Customer Success Manager"
      ],
      buttonText: "Contact Sales",
      headerColor: "bg-gradient-to-r from-purple-600 to-purple-700"
    }
  ];

  return (
    <section className="py-20 px-6 bg-muted/30" id="pricing">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Simple, Transparent <span className="text-primary">Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Choose the plan that fits your organization's needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className="overflow-hidden border-2"
            >
              <div className={`${plan.headerColor} text-white px-6 py-4`}>
                <h3 className="text-2xl font-bold">{plan.name}</h3>
              </div>
              
              <div className="p-6">
                {plan.isCustom ? (
                  <div className="mb-6">
                    <h4 className="text-3xl font-bold mb-4">{plan.customTitle}</h4>
                    <p className="text-muted-foreground">{plan.customDescription}</p>
                  </div>
                ) : (
                  <div className="mb-6">
                    <div className="flex items-baseline mb-2">
                      <span className="text-4xl font-bold text-primary">{plan.price}</span>
                      <span className="text-muted-foreground ml-1">{plan.period}</span>
                    </div>
                    {plan.subtitle && (
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-5 h-5 rounded-full border-2 border-muted-foreground flex items-center justify-center">
                          <span className="text-xs text-muted-foreground">i</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{plan.subtitle}</span>
                      </div>
                    )}
                    {plan.pricingDetail && (
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm">{plan.pricingDetail}</span>
                        {plan.badge && (
                          <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                            {plan.badge}
                          </span>
                        )}
                      </div>
                    )}
                    {plan.promotion && (
                      <p className="text-sm text-muted-foreground mb-4">{plan.promotion}</p>
                    )}
                  </div>
                )}

                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-5 h-5 rounded border border-muted-foreground"></div>
                    <h4 className="font-semibold">{plan.description}</h4>
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  className="w-full"
                  variant={plan.isCustom ? "outline" : "default"}
                  size="lg"
                >
                  {plan.buttonText}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
