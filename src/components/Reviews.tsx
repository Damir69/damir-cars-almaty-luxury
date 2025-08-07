import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const reviewsData = [
  {
    id: 1,
    name: "Алия Нурсултанова",
    location: "Алматы",
    text: "Машина в идеальном состоянии. Сервис — на уровне пятизвездочного отеля. Обязательно обращусь снова!",
    rating: 5
  },
  {
    id: 2,
    name: "Ержан Абдуллаев",
    location: "Алматы",
    text: "Взял Mercedes для важной деловой встречи. Всё прошло безупречно, автомобиль подали вовремя, в отличном состоянии.",
    rating: 5
  },
  {
    id: 3,
    name: "Сауле Қасымова",
    location: "Алматы",
    text: "Превосходное обслуживание! BMW была в идеальном состоянии, а персонал очень внимательный и профессиональный.",
    rating: 5
  },
  {
    id: 4,
    name: "Арман Турысбеков",
    location: "Алматы",
    text: "Арендовал Audi Q7 на выходные. Машина просто шикарная, все было организовано на высшем уровне.",
    rating: 5
  }
];

const Reviews = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  useEffect(() => {
    if (!isAutoplay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviewsData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoplay]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviewsData.length);
    setIsAutoplay(false);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviewsData.length) % reviewsData.length);
    setIsAutoplay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoplay(false);
  };

  return (
    <section id="reviews" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-luxury text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('reviews.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('reviews.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Reviews Carousel */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {reviewsData.map((review) => (
                  <div key={review.id} className="w-full flex-shrink-0 px-4">
                    <Card className="bg-card border-primary/20 shadow-card hover:shadow-luxury transition-luxury">
                      <CardContent className="p-8 text-center">
                        <Quote className="h-12 w-12 text-primary mx-auto mb-6 opacity-50" />
                        
                        <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-6 italic">
                          "{review.text}"
                        </blockquote>
                        
                        {/* Stars */}
                        <div className="flex justify-center mb-4">
                          {[...Array(review.rating)].map((_, i) => (
                            <span key={i} className="text-primary text-xl">★</span>
                          ))}
                        </div>
                        
                        <div className="border-t border-border pt-6">
                          <h4 className="font-luxury text-lg font-semibold text-foreground">
                            {review.name}
                          </h4>
                          <p className="text-muted-foreground">
                            {review.location}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={goToPrev}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={goToNext}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {reviewsData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "bg-primary scale-125" 
                    : "bg-muted-foreground/30 hover:bg-primary/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;