import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-luxury ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md shadow-card" 
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4 lg:py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="font-luxury text-2xl lg:text-3xl font-bold text-primary cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            DELUXE car rental
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-8">
              {[
                { name: t('nav.home'), id: "home" },
                { name: t('nav.cars'), id: "cars" },
                { name: t('nav.services'), id: "services" },
                { name: t('nav.reviews'), id: "reviews" },
                { name: t('nav.contact'), id: "contact" }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-foreground hover:text-primary transition-fast relative group font-medium"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>
          </div>

          {/* Language Toggle */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setLanguage(language === "RU" ? "EN" : "RU")}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-luxury font-medium"
            >
              <Globe className="h-4 w-4 mr-2" />
              {language}
            </Button>
          </div>

          {/* Mobile Menu Button & Language Toggle */}
          <div className="lg:hidden flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setLanguage(language === "RU" ? "EN" : "RU")}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              {language}
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-4 pt-4">
              {[
                { name: t('nav.home'), id: "home" },
                { name: t('nav.cars'), id: "cars" },
                { name: t('nav.services'), id: "services" },
                { name: t('nav.reviews'), id: "reviews" },
                { name: t('nav.contact'), id: "contact" }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-foreground hover:text-primary transition-fast font-medium py-2"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;