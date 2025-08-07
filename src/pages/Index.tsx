import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Cars from "@/components/Cars";
import Services from "@/components/Services";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Cars />
      <Services />
      <Reviews />
      <Contact />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
