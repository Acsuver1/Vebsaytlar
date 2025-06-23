import React from 'react';
import {
  Check,
  Headphones,
  Edit,
  CreditCard,
  Folder,
  Image,
  Database,
  BarChart3
} from 'lucide-react';


import './Services.css'; // CSS faylini import qilish

interface ServiceItem {
  icon: React.ReactElement;
  title: string;
  description: string;
}


const ServicesComponent: React.FC = () => {
  const services: ServiceItem[] = [
    {
      icon: <Check />,
      title: "UI/UX Dizayni",
      description: "Biz eng so'ngi tendentsiyalarga rioya qilgan holda eng yaxshi dizayni taqdim etamiz."
    },
    {
      icon: <Headphones />,
      title: "24/7 Qo'llab-Quvvatlash",
      description: "Biz sizning saytingizni yangilab turish majburiyatini olamiz."
    },
    {
      icon: <Edit />,
      title: "Oson Sozlanishi",
      description: "Bir necha daqiqada ajoyib sahifalarni yarating va sozlang."
    },
    {
      icon: <BarChart3 />,
      title: "Katta To'plam",
      description: "Elementlarning katta to'plami va moslashuvhan sxemalar."
    },
    {
      icon: <CreditCard />,
      title: "Bitta / Ko'p Sahifali",
      description: "Ehtiyojingizga mos tartib usulubini tanlang."
    },
    {
      icon: <Folder />,
      title: "Navigatsiya Menyulari",
      description: "Ushbu shablon bir nechta navigatsiya usullari bilan birga keladi."
    },
    {
      icon: <Image />,
      title: "Moslashuvnchah Tasvirlar",
      description: "U ekran o'lchamini aniqlavdi va optimallashtirilgan tasvirlarni taqdim etadi."
    },
    {
      icon: <Database />,
      title: "SEO Optimallashtirilgan",
      description: "Yuqori reytinglarga erishish uchun eng yaxshi SEO amaliyotlari."
    }
  ];

  return (
    <div className="services-section">
      <div className="services-container">
        <div className="services-header">
          <h2>Asosiy Xususiyatlar</h2>
          <p>Template Market sizning loyihangiz uchun juda mos bo'lgan tonna xususiyatlar bilan tayyor.</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;
