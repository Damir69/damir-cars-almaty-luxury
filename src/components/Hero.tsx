import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-mercedes-amg.jpg";

const Hero = () => {
  const { t } = useLanguage();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage}
          alt="Luxury Car"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="font-luxury text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
          {t('hero.title')}
        </h1>
        
        <h2 className="font-luxury text-xl md:text-2xl lg:text-3xl mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          {t('hero.subtitle')}
        </h2>
        
        <p className="text-lg md:text-xl mb-8 text-white/90 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          {t('hero.tagline')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <Button 
            onClick={() => scrollToSection("cars")}
            variant="outline"
            size="lg"
            className="border-2 border-primary text-primary bg-background/10 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-luxury font-medium px-8 py-3"
          >
            {t('hero.selectCar')}
          </Button>
          
          <Button 
            onClick={() => scrollToSection("contact")}
            size="lg"
            className="bg-primary hover:bg-primary-glow text-primary-foreground transition-luxury font-medium px-8 py-3 shadow-gold"
          >
            {t('hero.leaveRequest')}
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-luxury-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;