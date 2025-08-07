import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/77071234567", "_blank", "noopener,noreferrer");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-luxury transition-luxury animate-luxury-pulse"
      size="icon"
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  );
};

export default WhatsAppFloat;