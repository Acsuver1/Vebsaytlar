import React from 'react';
import { X, Plus, Minus, ShoppingBag, Download } from 'lucide-react';
import type { CartItem } from '../../types/Template';
import './Cart.css'; // CSS faylni shu yerda ulaysiz

interface CartProps {
  isOpen: boolean;
  items: CartItem[];
  total: number;
  onClose: () => void;
  onRemoveItem: (templateId: number) => void;
  onUpdateQuantity: (templateId: number, quantity: number) => void;
}

export const Cart: React.FC<CartProps> = ({
  isOpen,
  items,
  total,
  onClose,
  onRemoveItem,
  onUpdateQuantity
}) => {
  if (!isOpen) return null;

  return (
    <div className="cart-overlay">
      <div className="cart-overlay-bg" onClick={onClose} />

      <div className="cart-sidebar">
        <div className="cart-header">
          <h2>Savatcha</h2>
          <button onClick={onClose} className="cart-close-button">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="cart-content">
          {items.length === 0 ? (
            <div className="cart-empty">
              <ShoppingBag className="cart-empty-icon" />
              <p className="cart-empty-text">Savatcha bo'sh</p>
            </div>
          ) : (
            <div className="cart-item-list">
              {items.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.images} alt={item.name} />
                  <div className="cart-item-info">
                    <h3>{item.name}</h3>
                    <p>${item.price}</p>
                    <div className="cart-item-download">
                      <Download className="w-3 h-3" />
                      <span>{item.downloadCount.toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="cart-quantity">
                    <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>
                      <Minus className="w-4 h-4" />
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <button onClick={() => onRemoveItem(item.id)} className="cart-remove-button">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="cart-footer">
            <div className="total">
              <span>Jami:</span>
              <strong>${total.toFixed(2)}</strong>
            </div>
            <button className="cart-checkout-btn">Sotib olish</button>
          </div>
        )}
      </div>
    </div>
  );
};
