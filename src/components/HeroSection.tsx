import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Professional photography camera with golden bokeh lighting representing Avasar Arts photography services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-in-up">
        <p className="font-body text-primary uppercase tracking-[0.3em] text-sm mb-6 animate-fade-in-delay-1">
          Capturing Life's Precious Moments
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-foreground mb-6 leading-tight">
          Avasar <span className="text-primary italic">Arts</span>
        </h1>
        <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-delay-2">
          Professional photography services that transform your special occasions 
          into timeless memories. From weddings to portraits, we capture the 
          essence of every moment.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-3">
          <Button variant="hero" size="xl" asChild>
            <a href="#gallery">View Portfolio</a>
          </Button>
          <Button variant="elegant" size="xl" asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <a
          href="#about"
          className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
          aria-label="Scroll to about section"
        >
          <span className="font-body text-xs uppercase tracking-widest mb-2">
            Scroll
          </span>
          <ChevronDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
