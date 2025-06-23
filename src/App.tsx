import React, { useState } from 'react';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { TemplateGrid } from './components/TemplateGrid/TemplateGrid';
import { Cart } from './components/Cart/Cart';
import { TemplateModal } from './components/TemplateGrid/TemplateModal';
import Services from './components/Services/Services';
import Elemnts from './components/Elements/Elements';
import Feedback from './components/Feedback/Feedback';
import  Footer  from './components/Footer/Footer';
import { templates, categories } from './data/templates';
import type { Template, CartItem } from './types/Template';
import './App.css'; // <-- asosiy dizayn

function App() {
  const [selectedCategory, setSelectedCategory] = useState('Barcha Shablonlar');
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);

  // Shablonlarni filterlash
  const filteredTemplates = templates.filter(template => {
    const matchesCategory =
      selectedCategory === 'Barcha Shablonlar' || template.category === selectedCategory;

    const matchesSearch =
      template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  // Savatchaga qo'shish
  const handleAddToCart = (template: Template) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === template.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === template.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...template, quantity: 1 }];
    });
  };

  // Savatchadan o'chirish
  const handleRemoveFromCart = (templateId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== templateId));
  };

  // Miqdorni yangilash
  const handleUpdateQuantity = (templateId: number, quantity: number) => {
    if (quantity === 0) {
      handleRemoveFromCart(templateId);
      return;
    }

    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === templateId ? { ...item, quantity } : item
      )
    );
  };

  // Savatcha statistikasi
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="app-container">
      {/* Header */}
      <Header
        cartItemCount={cartItemCount}
        onCartClick={() => setIsCartOpen(true)}
        onSearchChange={setSearchQuery}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        categories={categories}
      />

      {/* Hero banner */}
      <Hero />

      {/* Template grid */}
      <main>
        <TemplateGrid
          templates={filteredTemplates}
          onAddToCart={handleAddToCart}
          onTemplateClick={setSelectedTemplate}
        />
      </main>

      {/* Services */}
      <Services />

      {/* Elements */}
      <Elemnts />

      {/* Feedback */}
      <Feedback />

      {/* Footer */}
      <Footer />

      
      <Cart
        isOpen={isCartOpen}
        items={cartItems}
        total={cartTotal}
        onClose={() => setIsCartOpen(false)}
        onRemoveItem={handleRemoveFromCart}
        onUpdateQuantity={handleUpdateQuantity}
      />

      {/* Modal */}
      {selectedTemplate && (
        <TemplateModal
          template={selectedTemplate}
          onClose={() => setSelectedTemplate(null)}
          onAddToCart={handleAddToCart}
        />
      )}
    </div>
  );
}

export default App;
