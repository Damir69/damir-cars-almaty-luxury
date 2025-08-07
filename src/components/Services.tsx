import { Card, CardContent } from "@/components/ui/card";
import { 
  Plane, 
  Clock, 
  Crown, 
  Truck, 
  Shield, 
  Calendar 
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";


const Services = () => {
  const { t } = useLanguage();
  
  const servicesData = [
    {
      icon: Plane,
      title: t('services.airport'),
      description: t('services.airportDesc')
    },
    {
      icon: Clock,
      title: t('services.hourly'),
      description: t('services.hourlyDesc')
    },
    {
      icon: Crown,
      title: t('services.vip'),
      description: t('services.vipDesc')
    },
    {
      icon: Truck,
      title: t('services.delivery'),
      description: t('services.deliveryDesc')
    },
    {
      icon: Shield,
      title: t('services.insurance'),
      description: t('services.insuranceDesc')
    },
    {
      icon: Calendar,
      title: t('services.longterm'),
      description: t('services.longtermDesc')
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-luxury text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('services.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index}
                className="group bg-card border-border hover:shadow-luxury transition-luxury cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 border-2 border-primary rounded-full mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-luxury">
                    <IconComponent className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-luxury" />
                  </div>
                  
                  <h3 className="font-luxury text-xl font-semibold mb-4 text-foreground">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;