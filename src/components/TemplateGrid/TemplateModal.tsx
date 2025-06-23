import React from 'react';
import './TemplateModal.css';
import { X, Star, ShoppingCart, Download, ExternalLink, Eye } from 'lucide-react';
import type { Template } from '../../types/Template';

interface TemplateModalProps {
  template: Template;
  onClose: () => void;
  onAddToCart: (template: Template) => void;
}

export const TemplateModal: React.FC<TemplateModalProps> = ({
  template,
  onClose,
  onAddToCart
}) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`star-icon ${i < Math.floor(rating) ? 'active' : 'inactive'}`}
      />
    ));
  };

  return (
    <div className="template-modal-overlay">
      <div className="template-modal-container">
        <div className="template-modal-background" onClick={onClose} />

        <div className="template-modal-content">
          <button onClick={onClose} className="template-modal-close-btn">
            <X className="icon" />
          </button>

          {/* Left: Image & Badge */}
          <div className="template-modal-image-wrapper" style={{ position: 'relative' }}>
            <img
              src={template.images}
              alt={template.name}
              className="template-modal-image"
            />

            {template.originalPrice && (
              <div className="template-modal-discount">
                -{Math.round(((template.originalPrice - template.price) / template.originalPrice) * 100)}%
              </div>
            )}

            <div className="template-modal-version">
              v{template.version}
            </div>
          </div>

          {/* Right: Details */}
          <div className="template-modal-details">
            <div>
              <span className="template-modal-category">{template.category}</span>
              <h1 className="template-modal-title">{template.name}</h1>
              <p className="template-modal-description">{template.description}</p>
            </div>

            <div className="template-modal-stats">
              <div>
                <div className="template-modal-rating">{renderStars(template.rating)}</div>
                <span className="template-modal-stat-label">
                  {template.rating} ({template.reviews} sharh)
                </span>
              </div>
              <div>
                <div className="template-modal-download">
                  <Download className="icon" />
                  <span className="font-semibold">{template.downloadCount.toLocaleString()}</span>
                </div>
                <span className="template-modal-stat-label">yuklab olindi</span>
              </div>
            </div>

            <div className="template-modal-price">
              <span className="template-price-current">${template.price}</span>
              {template.originalPrice && (
                <span className="template-price-old">${template.originalPrice}</span>
              )}
            </div>

            <div>
              <h3 className="template-modal-subtitle">Texnologiyalar</h3>
              <div className="template-technologies">
                {template.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="template-modal-subtitle">Xususiyatlari</h3>
              <ul className="template-features">
                {template.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="template-modal-actions">
              <button
                onClick={() => onAddToCart(template)}
                disabled={!template.inStock}
                className={`template-buy-button ${
                  template.inStock ? 'active' : 'disabled'
                }`}
              >
                <ShoppingCart className="icon" />
                <span>{template.inStock ? 'Sotib olish' : 'Tugadi'}</span>
              </button>

              {template.demoUrl && (
                <a
                  href={template.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="template-action-icon"
                >
                  <ExternalLink className="icon" />
                </a>
              )}

              <button className="template-action-icon">
                <Eye className="icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
