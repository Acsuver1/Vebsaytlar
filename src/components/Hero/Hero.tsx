import React from "react";
import { Play, ArrowRight, Zap, Code, Palette, Smartphone } from "lucide-react";

import { ParticleNetwork } from "../ParticlesBackground/ParticlesBackground"; // yo'lni to'g'ri yozing

import "./Hero.css";

export const Hero: React.FC = () => {
  return (
    <section
      className="hero"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <ParticleNetwork />

      <div className="hero-content" style={{ position: "relative", zIndex: 1 }}>
        <div className="hero-badge">
          <Zap size={18} />
          <span>2025 yilning eng so'nggi shablonlari</span>
        </div>

        <h1 className="hero-title">
          180<span style={{ color: "#22d3ee" }}>+</span>
        </h1>

        <h2 className="hero-subtitle">Tayyor Veb-Sayt Shablonlari</h2>

        <p className="hero-description">
          Sizning shaxsiy va biznes ehtiyojlaringiz uchun chiroyli va chinakam
          noyob oldindan yaratilgan <span>To'liq veb-sayt shablonlari</span>{" "}
          bilan 2025 yilning eng katta kolleksiyasi.
        </p>

        <div className="hero-buttons">
          <button className="hero-button-primary">
            <Play size={20} />
            <span>Demolarni Ko'ring</span>
          </button>
          <button className="hero-button-secondary">
            <span>500+ Element</span>
            <ArrowRight size={20} />
          </button>
        </div>

        <div className="hero-icons">
          <div className="icon-box">
            <div className="icon-container">
              <Code size={34} />
            </div>
            <span className="icon-text">Clean Code</span>
          </div>
          <div className="icon-box">
            <div className="icon-container">
              <Smartphone size={36} />
            </div>
            <span className="icon-text">Responsive</span>
          </div>
          <div className="icon-box">
            <div className="icon-container">
              <Palette size={36} />
            </div>
            <span className="icon-text">Modern Design</span>
          </div>
          <div className="icon-box">
            <div className="icon-container">
              <Zap size={34} />
            </div>
            <span className="icon-text">Fast Loading</span>
          </div>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <div className="stat-number">180+</div>
            <div className="stat-label">Tayyor Shablonlar</div>
          </div>
          <div className="stat">
            <div className="stat-number">500+</div>
            <div className="stat-label">UI Elementlar</div>
          </div>
          <div className="stat">
            <div className="stat-number">50K+</div>
            <div className="stat-label">Baxtli Mijozlar</div>
          </div>
        </div>
      </div>
    </section>
  );
};
