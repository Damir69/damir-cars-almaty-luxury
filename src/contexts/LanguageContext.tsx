import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'RU' | 'EN';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  RU: {
    // Navigation
    'nav.home': 'Главная',
    'nav.cars': 'Автомобили',
    'nav.services': 'Услуги',
    'nav.reviews': 'Отзывы',
    'nav.contact': 'Контакты',

    // Hero
    'hero.title': 'DELUXE car rental',
    'hero.subtitle': 'Аренда автомобилей премиум-класса в Алматы',
    'hero.tagline': 'Элегантность. Мощь. Престиж.',
    'hero.selectCar': 'Выбрать автомобиль',
    'hero.leaveRequest': 'Оставить заявку',

    // Cars
    'cars.title': 'Наш автопарк',
    'cars.subtitle': 'Выберите автомобиль для незабываемой поездки по Алматы',
    'cars.details': 'ПОДРОБНЕЕ',
    'cars.perDay': '/ день',
    'cars.book': 'Забронировать',
    'cars.backToList': '← Назад к списку',

    // Car specs
    'spec.year': 'Год выпуска',
    'spec.engine': 'Двигатель',
    'spec.transmission': 'Трансмиссия',
    'spec.color': 'Цвет',
    'spec.interior': 'Интерьер',
    'spec.comfort': 'Комфорт',
    'spec.audio': 'Аудиосистема',
    'spec.mileage': 'Пробег',

    // Services
    'services.title': 'Наши услуги',
    'services.subtitle': 'Полный спектр услуг для вашего комфорта',
    'services.airport': 'Трансфер в аэропорт',
    'services.airportDesc': 'Комфортная доставка в аэропорт и обратно',
    'services.hourly': 'Почасовая аренда',
    'services.hourlyDesc': 'Гибкая аренда на любое время',
    'services.vip': 'VIP-обслуживание',
    'services.vipDesc': 'Эксклюзивный сервис премиум-класса',
    'services.delivery': 'Доставка авто',
    'services.deliveryDesc': 'Доставим автомобиль в любую точку города',
    'services.insurance': 'Страхование',
    'services.insuranceDesc': 'Полная защита на время аренды',
    'services.longterm': 'Долгосрочная аренда',
    'services.longtermDesc': 'Выгодные условия для длительной аренды',

    // Reviews
    'reviews.title': 'Отзывы клиентов',
    'reviews.subtitle': 'Что говорят наши клиенты о нашем сервисе',

    // Contact
    'contact.title': 'Связаться с нами',
    'contact.subtitle': 'Оставьте заявку, и мы свяжемся с вами в ближайшее время',
    'contact.name': 'Ваше имя',
    'contact.phone': 'Номер телефона',
    'contact.car': 'Желаемый автомобиль',
    'contact.dates': 'Даты аренды',
    'contact.message': 'Дополнительные пожелания',
    'contact.send': 'Отправить заявку',
    'contact.address': 'Адрес',
    'contact.addressValue': '123 Абая, Алматы',
    'contact.workingHours': 'Часы работы',
    'contact.workingHoursValue': 'Ежедневно с 9:00 до 21:00',

    // Car Modal
    'carModal.specifications': 'Характеристики автомобиля',
    'carModal.priceIncludes': 'Цена включает страховку и базовое топливо'
  },
  EN: {
    // Navigation
    'nav.home': 'Home',
    'nav.cars': 'Cars',
    'nav.services': 'Services',
    'nav.reviews': 'Reviews',
    'nav.contact': 'Contact',

    // Hero
    'hero.title': 'DELUXE car rental',
    'hero.subtitle': 'Premium Car Rental in Almaty',
    'hero.tagline': 'Elegance. Power. Prestige.',
    'hero.selectCar': 'Select Car',
    'hero.leaveRequest': 'Leave Request',

    // Cars
    'cars.title': 'Our Fleet',
    'cars.subtitle': 'Choose a car for an unforgettable trip around Almaty',
    'cars.details': 'DETAILS',
    'cars.perDay': '/ day',
    'cars.book': 'Book Now',
    'cars.backToList': '← Back to List',

    // Car specs
    'spec.year': 'Year',
    'spec.engine': 'Engine',
    'spec.transmission': 'Transmission',
    'spec.color': 'Color',
    'spec.interior': 'Interior',
    'spec.comfort': 'Comfort',
    'spec.audio': 'Audio System',
    'spec.mileage': 'Mileage',

    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Full range of services for your comfort',
    'services.airport': 'Airport Transfer',
    'services.airportDesc': 'Comfortable delivery to and from the airport',
    'services.hourly': 'Hourly Rental',
    'services.hourlyDesc': 'Flexible rental for any time',
    'services.vip': 'VIP Service',
    'services.vipDesc': 'Exclusive premium class service',
    'services.delivery': 'Car Delivery',
    'services.deliveryDesc': 'We deliver the car to any point in the city',
    'services.insurance': 'Insurance',
    'services.insuranceDesc': 'Full protection during rental period',
    'services.longterm': 'Long-term Rental',
    'services.longtermDesc': 'Favorable conditions for long-term rental',

    // Reviews
    'reviews.title': 'Customer Reviews',
    'reviews.subtitle': 'What our clients say about our service',

    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Leave a request and we will contact you soon',
    'contact.name': 'Your Name',
    'contact.phone': 'Phone Number',
    'contact.car': 'Desired Car',
    'contact.dates': 'Rental Dates',
    'contact.message': 'Additional Requests',
    'contact.send': 'Send Request',
    'contact.address': 'Address',
    'contact.addressValue': '123 Abaya, Almaty',
    'contact.workingHours': 'Working Hours',
    'contact.workingHoursValue': 'Daily from 9:00 to 21:00',

    // Car Modal
    'carModal.specifications': 'Car Specifications',
    'carModal.priceIncludes': 'Price includes insurance and basic fuel'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('RU');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};