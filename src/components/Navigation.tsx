import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">AP</span>
            </div>
            <span className="text-xl font-bold text-foreground">AthenaPro.ai</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link to="/retail" className="text-foreground hover:text-primary transition-colors">
              Retail
            </Link>
            <Link to="/qsr" className="text-foreground hover:text-primary transition-colors">
              QSR
            </Link>
            <Link to="/hospitality" className="text-foreground hover:text-primary transition-colors">
              Hospitality
            </Link>
            <a href="#pricing" className="text-foreground hover:text-primary transition-colors">
              Pricing
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
            <Button>Login</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
