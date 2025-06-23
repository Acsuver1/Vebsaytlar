import React from 'react';
import './Footer.css';

const OrderNowSection: React.FC = () => {
  return (
    <section className="order-section">
      <div className="order-content">
        <h1 className="order-title">Tayyor Veb Saytlarga</h1>
        <h2 className="order-subtitle">Hoziroq Buyurtma Bering</h2>
        <p className="order-description">
          Agar shablon haqida savollaringiz bo‘lsa, bizning jamoamiz sizga yordam berish uchun shu yerda.
        </p>
        <button className="order-button">Hoziroq Buyurtma Bering</button>
      </div>
      <div className="order-bg-text">Buyurtmalar</div>
    </section>
  );
};

export default OrderNowSection;
