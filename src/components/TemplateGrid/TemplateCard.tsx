import React from 'react';
import './TemplateCard.css';
import {  Eye,  ExternalLink } from 'lucide-react';
import type { Template } from '../../types/Template';

interface TemplateCardProps {
  template: Template;
  onAddToCart: (template: Template) => void;
  onTemplateClick: (template: Template) => void;
}

export const TemplateCard: React.FC<TemplateCardProps> = ({
  template,
  onTemplateClick
}) => {


  return (
    <div className="template-card">
      <div className="template-card-image-wrapper">
        <img
          src={template.images.split(',')[0]}
          alt={template.name}
          className="template-card-image"
        />
        <div className="template-card-hover-overlay" />

        <div className="template-card-actions">
          {template.demoUrl && (
            <a
              href={template.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Live Demo"
            >
              <ExternalLink className="icon" />
            </a>
          )}
          <button onClick={() => onTemplateClick(template)} title="Ko'rish">
            <Eye className="icon" />
          </button>
        </div>

        {template.originalPrice && (
          <div className="discount-badge">
            -{Math.round(((template.originalPrice - template.price) / template.originalPrice) * 100)}%
          </div>
        )}

        {!template.inStock && (
          <div className="out-of-stock-overlay">
          </div>
        )}

        <div className="version-badge">v{template.version}</div>
      </div>

      <div className="template-card-content">
        <div className="template-category">{template.category}</div>

        <h3
          className="template-name"
          onClick={() => onTemplateClick(template)}
        >
          {template.name}
        </h3>

        <p className="template-description">{template.description}</p>

        <div className="template-rating">
        </div>

        <div className="template-technologies">
          {template.technologies.slice(0, 3).map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
         
        </div>


        <div className="template-footer">
         

        </div>
      </div>
    </div>
  );
};
