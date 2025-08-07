import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

interface CarCardProps {
  id: string;
  name: string;
  price: string;
  image: string;
  onViewDetails: (carId: string) => void;
}

const CarCard = ({ id, name, price, image, onViewDetails }: CarCardProps) => {
  const { t } = useLanguage();
  
  return (
    <Card className="group overflow-hidden bg-card border-border hover:shadow-luxury transition-luxury cursor-pointer">
      <div className="relative overflow-hidden">
        <img 
          src={image}
          alt={name}
          className="w-full h-64 object-cover transition-luxury group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-luxury"></div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="font-luxury text-xl font-semibold mb-3 text-foreground">
          {name}
        </h3>
        
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">
            {price}
            <span className="text-sm font-normal text-muted-foreground ml-1">
              {t('cars.perDay')}
            </span>
          </div>
          
          <Button 
            onClick={() => onViewDetails(id)}
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-luxury font-medium"
          >
            {t('cars.details')}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CarCard;