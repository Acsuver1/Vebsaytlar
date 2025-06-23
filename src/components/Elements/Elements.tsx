import React from 'react';
import {
  Zap, Layout, Monitor, AlertTriangle, Image, MousePointer, 
  Droplet, BarChart3, Target, Calculator, Briefcase, Settings,
  Edit, Calendar, DollarSign, FileText,  File,
  Star, Users, 
  Type
} from 'lucide-react';
import './Elements.css'; // CSS faylni ulash

const ElementsShowcase: React.FC = () => {
  const elements = [
    { icon: <Zap />, name: "Animatsiyalar" },
    { icon: <Layout />, name: "35+ Sahifalar" },
    { icon: <Monitor />, name: "Nav Menyulari" },
    { icon: <AlertTriangle />, name: "Aloqa Shakli" },
    { icon: <Image />, name: "20 Dan Ortiq Bloglar" },
    { icon: <MousePointer />, name: "20+ Portfol" },
    { icon: <Users />, name: "20+ Jamoa" },
    { icon: <Target />, name: "Hisoblehgilar" },
    { icon: <Settings />, name: "Akkordeon" },
    { icon: <AlertTriangle />, name: "Ogohlantiishlar" },
    { icon: <Briefcase />, name: "Brendlar" },
    { icon: <Target />, name: "Tugmalar" },
    { icon: <Droplet />, name: "Zarrachalar" },
    { icon: <BarChart3 />, name: "Vaqealar" },
    { icon: <FileText />, name: "Yangiliklar Qutlari" },
    { icon: <Calculator />, name: "Ro'yxatlar" },
    { icon: <Type />, name: "Xaritalari" },
    { icon: <Image />, name: "Sahifalik" },
    { icon: <Edit />, name: "Tipografiya" },
    { icon: <Calendar />, name: "Yoriqlar" },
    { icon: <DollarSign />, name: "5+ Axborat Byullenteni" },
    { icon: <FileText />, name: "Vaqt jadvali" },
    { icon: <File />, name: "Noutbuk" },
    { icon: <Star />, name: "Ijtimoiy tarmoqlar" },
   

  ];

  return (
    <div className="elements-section">
      <div className="elements-container">
        <div className="elements-header">
          <div className="elements-count-wrapper">
            <h1 className="elements-count">500<span>+</span></h1>
            <div className="elements-count-shadow">500+</div>
          </div>
          <h2>Shablonlar Ichidagi</h2>
          <h3>Elementlar</h3>
          <p>
            Ushbu elementlar bilan sahifalarngizni quvvatlang. Har bir element sizning tanlovingiz uchun turli xil variantlar bilan birga keladi.
          </p>
        </div>
        <div className="elements-grid">
          {elements.map((element, index) => (
            <div key={index} className="element-card">
              <div className="element-icon">{element.icon}</div>
              <span>{element.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ElementsShowcase;
