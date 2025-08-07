import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    car: "",
    dates: "",
    message: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.phone) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните обязательные поля",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the data to your backend
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время",
    });

    // Reset form
    setFormData({
      name: "",
      phone: "",
      car: "",
      dates: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-luxury text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-card border-border shadow-card">
            <CardHeader>
              <CardTitle className="font-luxury text-2xl text-foreground">
                {t('contact.title')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground font-medium">
                    {t('contact.name')} *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder={t('contact.name')}
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="border-border focus:border-primary focus:ring-primary"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground font-medium">
                    {t('contact.phone')} *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+7 (707) 123-4567"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="border-border focus:border-primary focus:ring-primary"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="car" className="text-foreground font-medium">
                    {t('contact.car')}
                  </Label>
                  <Select value={formData.car} onValueChange={(value) => handleInputChange("car", value)}>
                    <SelectTrigger className="border-border focus:border-primary focus:ring-primary">
                      <SelectValue placeholder={t('contact.car')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bmw-5-series">BMW 5 Series</SelectItem>
                      <SelectItem value="audi-q7">Audi Q7</SelectItem>
                      <SelectItem value="tesla-model-s">Tesla Model S</SelectItem>
                      <SelectItem value="lexus-rx">Lexus RX</SelectItem>
                      <SelectItem value="mercedes-s-class">Mercedes S-Class</SelectItem>
                      <SelectItem value="hyundai-sonata">Hyundai Sonata</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dates" className="text-foreground font-medium">
                    {t('contact.dates')}
                  </Label>
                  <Input
                    id="dates"
                    type="text"
                    placeholder="Например: 15-20 декабря"
                    value={formData.dates}
                    onChange={(e) => handleInputChange("dates", e.target.value)}
                    className="border-border focus:border-primary focus:ring-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground font-medium">
                    {t('contact.message')}
                  </Label>
                  <Textarea
                    id="message"
                    placeholder={t('contact.message')}
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className="border-border focus:border-primary focus:ring-primary resize-none"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-glow text-primary-foreground shadow-gold transition-luxury font-medium py-3"
                >
                  {t('contact.send')}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Address */}
            <Card className="bg-card border-border shadow-card">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 border-2 border-primary rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-luxury text-lg font-semibold text-foreground mb-2">
                      {t('contact.address')}
                    </h3>
                    <p className="text-muted-foreground">
                      {t('contact.addressValue')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Phone */}
            <Card className="bg-card border-border shadow-card">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 border-2 border-primary rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-luxury text-lg font-semibold text-foreground mb-2">
                      {t('contact.phone')}
                    </h3>
                    <p className="text-muted-foreground">
                      <a href="tel:+77071234567" className="hover:text-primary transition-fast">
                        +7 (707) 123-4567
                      </a>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* WhatsApp */}
            <Card className="bg-card border-border shadow-card">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 border-2 border-primary rounded-full flex items-center justify-center">
                      <MessageCircle className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-luxury text-lg font-semibold text-foreground mb-2">
                      WhatsApp
                    </h3>
                    <p className="text-muted-foreground">
                      <a 
                        href="https://wa.me/77071234567" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-fast"
                      >
                        Написать в WhatsApp
                      </a>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map placeholder */}
            <Card className="bg-card border-border shadow-card">
              <CardContent className="p-0">
                <div className="h-64 bg-muted/50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
                    <p className="text-muted-foreground">Карта офиса</p>
                    <p className="text-sm text-muted-foreground">123 Abaya Avenue, Алматы</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;