import React, { useState } from 'react';
import { Search, ShoppingCart,  Code } from 'lucide-react';
import './Header.css'; // CSS faylni import qilish

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
  onSearchChange: (query: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  categories: string[];
}

export const Header: React.FC<HeaderProps> = ({
  cartItemCount,
  onCartClick,
  onSearchChange,
 
  categories,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearchChange(value);
  };

  // Sahifaning tegishli bo'limiga scroll qilish funksiyasi
  const scrollToSection = (category: string) => {
    // Kategoriya nomini ID ga aylantirish (kichik harflar va probellarsiz)
    const sectionId = category.toLowerCase().replace(/\s+/g, '-');
    
    const element = document.getElementById(sectionId);
    if (element) {
      // Smooth scroll bilan bo'limga o'tish
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start', // Bo'lim sahifaning yuqori qismida ko'rinadi
        inline: 'nearest'
      });
    } else {
      // Agar ID topilmasa, alternativ usullar
      const alternativeElement = document.querySelector(`[data-section="${sectionId}"]`) ||
                                document.querySelector(`.${sectionId}-section`) ||
                                document.querySelector(`#${category.toLowerCase()}`);
      
      if (alternativeElement) {
        alternativeElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  const handleCategoryClick = (category: string) => {
    // Faqat bo'limga scroll qilish
    scrollToSection(category);
  };

  return (
    <header className="header">
      <div className="header-container">
       
        <div className="logo-container">
          <div className="logo-icon">
            <Code className="icon-white" />
          </div>
          <h1 className="logo-title">Template Market</h1>
        </div>

     
        <nav className="nav desktop-nav">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className="nav-button"
            >
              {category}
            </button>
          ))}
        </nav>

      
        <div className="search-container desktop-search">
          <div className="search-icon">
            <Search size={20} />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Shablonlarni qidiring..."
            className="search-input"
          />
        </div>

        <div className="actions desktop-actions">
          <button onClick={onCartClick} className="action-button cart-button">
            <ShoppingCart size={24} />
            {cartItemCount > 0 && (
              <span className="cart-badge">{cartItemCount}</span>
            )}
          </button>
        </div>

        
        <div className="actions mobile-actions">
        </div>
      </div>

     
      {isMenuOpen && (
        <div className="mobile-nav">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                handleCategoryClick(category);
                setIsMenuOpen(false);
              }}
              className="mobile-nav-button"
            >
              {category}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};