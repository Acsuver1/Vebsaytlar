import React, { useState } from 'react';
import './TemplateGrid.css';
import { TemplateCard } from './TemplateCard';
import type { Template } from '../../types/Template';

interface TemplateGridProps {
  templates: Template[];
  onAddToCart: (template: Template) => void;
  onTemplateClick: (template: Template) => void;
}

const categories = [
  { id: 'all', name: 'Hammasi',  },
  { id: 'ijodiy', name: 'Ijodiy',  },
  { id: 'korporativ', name: 'Korporativ',  },
  { id: 'portfolio', name: 'Portfolio',  },
  { id: 'dokon', name: "Do'kon",  },
  { id: 'sahifalik', name: 'Bir Sahifalik',  },
  { id: 'talim', name: "Ta'lim",  }
];

export const TemplateGrid: React.FC<TemplateGridProps> = ({
  templates,
  onAddToCart,
  onTemplateClick
}) => {
  const [activeCategory, setActiveCategory] = useState('all');

  // Filter templates based on active category
  const filteredTemplates = activeCategory === 'all' 
    ? templates 
    : templates.filter(template => template.category === activeCategory);

  return (
    <section className="template-grid-section">
      <div className="template-grid-container">
        <div className="template-grid-header">
          <h2>Oldindan tuzilgan demolar</h2>
          <div className="template-grid-rating">
            <span>4.3</span>
          </div>
          <p className="template-grid-description">
            Bootstrap Framework asosidagi ko'p maqsadli ko'p sahifali va bir sahifali HTML5 shablonlari (to'liq veb-saytlar).
          </p>
        </div>

        {/* Category Navigation */}
        <div className="template-categories">
          <nav className="category-nav">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
                
              </button>
            ))}
          </nav>
        </div>

        {filteredTemplates.length === 0 ? (
          <div className="template-grid-empty">
            <span>Hech qanday shablon topilmadi</span>
          </div>
        ) : (
          <div className="template-grid-list">
            {filteredTemplates.map((template) => (
              <TemplateCard
                key={template.id}
                template={template}
                onAddToCart={onAddToCart}
                onTemplateClick={onTemplateClick}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};