import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface CarSpec {
  label: string;
  value: string;
}

interface CarData {
  id: string;
  name: string;
  price: string;
  images: string[];
  specs: CarSpec[];
}

interface CarModalProps {
  isOpen: boolean;
  onClose: () => void;
  car: CarData | null;
}

const CarModal = ({ isOpen, onClose, car }: CarModalProps) => {
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  if (!car) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % car.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + car.images.length) % car.images.length);
  };

  const openLightbox = () => {
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
          <DialogHeader className="p-6 pb-0">
            <div className="flex items-center justify-between">
              <Button
                variant="outline"
                onClick={onClose}
                className="flex items-center gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <ArrowLeft className="h-4 w-4" />
                {t('cars.backToList')}
              </Button>
              <DialogTitle className="font-luxury text-2xl text-primary">
                {car.name}
              </DialogTitle>
            </div>
          </DialogHeader>

          <div className="p-6">
            {/* Image Gallery */}
            <div className="mb-8">
              {/* Main Image */}
              <div className="relative mb-4 group">
                <img 
                  src={car.images[currentImageIndex]}
                  alt={`${car.name} - ${currentImageIndex + 1}`}
                  className="w-full h-96 object-cover rounded-lg cursor-pointer transition-luxury hover:shadow-luxury"
                  onClick={openLightbox}
                />
                
                {car.images.length > 1 && (
                  <>
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 border-primary text-primary hover:bg-primary hover:text-primary-foreground opacity-0 group-hover:opacity-100 transition-luxury"
                      onClick={prevImage}
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </Button>
                    
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 border-primary text-primary hover:bg-primary hover:text-primary-foreground opacity-0 group-hover:opacity-100 transition-luxury"
                      onClick={nextImage}
                    >
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  </>
                )}
              </div>

              {/* Thumbnail Strip */}
              {car.images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {car.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${car.name} thumbnail ${index + 1}`}
                      className={`w-20 h-16 object-cover rounded cursor-pointer transition-luxury flex-shrink-0 ${
                        index === currentImageIndex 
                          ? "border-2 border-primary shadow-gold" 
                          : "border border-border hover:border-primary"
                      }`}
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Car Details */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Price and Action */}
              <div className="lg:col-span-2 flex items-center justify-between bg-muted/30 p-6 rounded-lg">
                <div>
                  <h3 className="font-luxury text-3xl font-bold text-primary mb-2">
                    {car.price}
                    <span className="text-lg font-normal text-muted-foreground ml-2">{t('cars.perDay')}</span>
                  </h3>
                  <p className="text-muted-foreground">{t('carModal.priceIncludes')}</p>
                </div>
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary-glow text-primary-foreground shadow-gold transition-luxury font-medium px-8"
                >
                  {t('cars.book')}
                </Button>
              </div>

              {/* Specifications */}
              <div className="lg:col-span-2">
                <h4 className="font-luxury text-xl font-semibold mb-4 text-foreground">
                  {t('carModal.specifications')}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {car.specs.map((spec, index) => (
                    <div key={index} className="flex items-center justify-between py-2 border-b border-border/50">
                      <span className="text-muted-foreground font-medium">{spec.label}:</span>
                      <span className="text-foreground font-semibold">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Lightbox */}
      {isLightboxOpen && (
        <div className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4">
          <Button
            variant="outline"
            size="icon"
            className="absolute top-4 right-4 bg-background/80 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={closeLightbox}
          >
            <X className="h-5 w-5" />
          </Button>
          
          <div className="relative max-w-6xl max-h-full">
            <img 
              src={car.images[currentImageIndex]}
              alt={`${car.name} - ${currentImageIndex + 1}`}
              className="max-w-full max-h-full object-contain"
            />
            
            {car.images.length > 1 && (
              <>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={prevImage}
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={nextImage}
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CarModal;