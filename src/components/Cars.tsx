import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import CarCard from "./CarCard";
import CarModal from "./CarModal";
import bmwSedan from "@/assets/bmw-m5-blue.jpg";
import audiSuv from "@/assets/audi-q7-white.jpg";
import teslaSedan from "@/assets/tesla-model-s-gray.jpg";
import lexusSuv from "@/assets/lexus-rx-copper.jpg";
import mercedesSedan from "@/assets/mercedes-s-class-black.jpg";
import hyundaiSonata from "@/assets/hyundai-sonata.jpg";


const Cars = () => {
  const { t } = useLanguage();
  const [selectedCar, setSelectedCar] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Generate cars data with translated specs
  const carsData = [
    {
      id: "bmw-5-series",
      name: "BMW 5 Series",
      price: "25,000 ₸",
      image: bmwSedan,
      images: [bmwSedan, bmwSedan, bmwSedan],
      specs: [
        { label: t('spec.year'), value: "2023" },
        { label: t('spec.engine'), value: "2.0L Turbo" },
        { label: t('spec.transmission'), value: "Automatic" },
        { label: t('spec.color'), value: "White" },
        { label: t('spec.interior'), value: "Leather, Black" },
        { label: t('spec.comfort'), value: "Climate Control" },
        { label: t('spec.audio'), value: "Harman Kardon" },
        { label: t('spec.mileage'), value: "15,000 km" }
      ]
    },
    {
      id: "audi-q7",
      name: "Audi Q7",
      price: "35,000 ₸",
      image: audiSuv,
      images: [audiSuv, audiSuv, audiSuv],
      specs: [
        { label: t('spec.year'), value: "2023" },
        { label: t('spec.engine'), value: "3.0L V6 TFSI" },
        { label: t('spec.transmission'), value: "8-Speed Automatic" },
        { label: t('spec.color'), value: "Black" },
        { label: t('spec.interior'), value: "Valcona Leather" },
        { label: t('spec.comfort'), value: "Seat Massage" },
        { label: t('spec.audio'), value: "Bose Premium" },
        { label: t('spec.mileage'), value: "8,500 km" }
      ]
    },
    {
      id: "tesla-model-s",
      name: "Tesla Model S",
      price: "30,000 ₸",
      image: teslaSedan,
      images: [teslaSedan, teslaSedan, teslaSedan],
      specs: [
        { label: t('spec.year'), value: "2023" },
        { label: t('spec.engine'), value: "Electric Motor" },
        { label: t('spec.transmission'), value: "Automatic" },
        { label: t('spec.color'), value: "Red" },
        { label: t('spec.interior'), value: "Eco-leather, White" },
        { label: t('spec.comfort'), value: "Autopilot" },
        { label: t('spec.audio'), value: "Premium Audio" },
        { label: t('spec.mileage'), value: "12,000 km" }
      ]
    },
    {
      id: "lexus-rx",
      name: "Lexus RX",
      price: "28,000 ₸",
      image: lexusSuv,
      images: [lexusSuv, lexusSuv, lexusSuv],
      specs: [
        { label: t('spec.year'), value: "2023" },
        { label: t('spec.engine'), value: "3.5L V6" },
        { label: t('spec.transmission'), value: "CVT Automatic" },
        { label: t('spec.color'), value: "Silver" },
        { label: t('spec.interior'), value: "Leather, Beige" },
        { label: t('spec.comfort'), value: "Seat Ventilation" },
        { label: t('spec.audio'), value: "Mark Levinson" },
        { label: t('spec.mileage'), value: "18,500 km" }
      ]
    },
    {
      id: "mercedes-s-class",
      name: "Mercedes S-Class",
      price: "45,000 ₸",
      image: mercedesSedan,
      images: [mercedesSedan, mercedesSedan, mercedesSedan],
      specs: [
        { label: t('spec.year'), value: "2023" },
        { label: t('spec.engine'), value: "4.0L V8 BiTurbo" },
        { label: t('spec.transmission'), value: "9G-Tronic Automatic" },
        { label: t('spec.color'), value: "Black" },
        { label: t('spec.interior'), value: "Nappa Leather" },
        { label: t('spec.comfort'), value: "MBUX, Massage" },
        { label: t('spec.audio'), value: "Burmester 4D" },
        { label: t('spec.mileage'), value: "5,200 km" }
      ]
    },
    {
      id: "hyundai-sonata",
      name: "Hyundai Sonata",
      price: "18,000 ₸",
      image: hyundaiSonata,
      images: [hyundaiSonata, hyundaiSonata, hyundaiSonata],
      specs: [
        { label: t('spec.year'), value: "2023" },
        { label: t('spec.engine'), value: "2.5L GDI" },
        { label: t('spec.transmission'), value: "8-Speed Automatic" },
        { label: t('spec.color'), value: "White" },
        { label: t('spec.interior'), value: "Leather, Black" },
        { label: t('spec.comfort'), value: "Heated Seats" },
        { label: t('spec.audio'), value: "Infinity Premium" },
        { label: t('spec.mileage'), value: "22,000 km" }
      ]
    }
  ];

  const handleViewDetails = (carId: string) => {
    setSelectedCar(carId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCar(null);
  };

  const selectedCarData = selectedCar ? carsData.find(car => car.id === selectedCar) : null;

  return (
    <section id="cars" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-luxury text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('cars.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('cars.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {carsData.map((car) => (
            <div key={car.id} className="animate-fade-in">
              <CarCard 
                id={car.id}
                name={car.name}
                price={car.price}
                image={car.image}
                onViewDetails={handleViewDetails}
              />
            </div>
          ))}
        </div>
      </div>

      <CarModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        car={selectedCarData}
      />
    </section>
  );
};

export default Cars;