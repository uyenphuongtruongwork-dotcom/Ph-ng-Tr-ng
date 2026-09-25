/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Language, ProductId, CartItem, CustomOptions } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ChatbotDrawer } from './components/ChatbotDrawer';
import { JourneyPage } from './pages/JourneyPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { AboutContactPage } from './pages/AboutContactPage';
import { X } from 'lucide-react';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('vi');
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [activeCustomizerId, setActiveCustomizerId] = useState<ProductId>('the-heritage-clutch');
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Product detail modal state
  const [detailModalProductId, setDetailModalProductId] = useState<ProductId | null>(null);

  // Unified smooth scroll to customizer tool with product selection
  const handleCustomizeProduct = (prodId?: ProductId) => {
    if (prodId) {
      setActiveCustomizerId(prodId);
    }
    if (detailModalProductId) {
      setDetailModalProductId(null);
    }
    setActiveSection('customizer');
    setTimeout(() => {
      const el =
        document.getElementById('design-studio-workspace') ||
        document.getElementById('customizer');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 60);
  };

  // Smooth scroll handler
  const handleScrollToSection = (sectionId: string) => {
    if (sectionId === 'customizer') {
      handleCustomizeProduct();
      return;
    }
    setActiveSection(sectionId);
    if (detailModalProductId) {
      setDetailModalProductId(null);
    }
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Add to cart handler
  const handleAddToCart = (
    productId: ProductId,
    productName: string,
    basePrice: number,
    addonsTotal: number,
    customOptions: CustomOptions,
    summaryText: string
  ) => {
    const newItem: CartItem = {
      cartItemId: `${productId}-${Date.now()}`,
      productId,
      productName,
      basePrice,
      addonsTotal,
      totalPrice: basePrice + addonsTotal,
      customOptions,
      quantity: 1,
      summaryText,
    };

    setCartItems((prev) => [newItem, ...prev]);
  };

  const handleUpdateQuantity = (cartItemId: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(cartItemId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.cartItemId === cartItemId ? { ...item, quantity: newQty } : item
      )
    );
  };

  const handleRemoveItem = (cartItemId: string) => {
    setCartItems((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2C2825] font-sans selection:bg-[#8A3D2B] selection:text-white">
      {/* Fixed Top Navbar with 6 requested items */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        activeSection={activeSection}
        onScrollToSection={handleScrollToSection}
        cartCount={totalCartCount}
        onOpenCart={() => setCartOpen(true)}
      />

      {/* Main Single Continuous Scroll Journey Page */}
      <main className="flex-1">
        <JourneyPage
          currentLang={currentLang}
          activeCustomizerId={activeCustomizerId}
          onCustomizerProductChange={setActiveCustomizerId}
          onOpenCart={() => setCartOpen(true)}
          onAddToCart={handleAddToCart}
          onViewProductDetail={(prodId) => setDetailModalProductId(prodId)}
          onCustomizeProduct={handleCustomizeProduct}
        />

        {/* About & Student Concept Project Section */}
        <section id="about-section" className="border-t border-[#E8DEC8] pt-12">
          <AboutContactPage currentLang={currentLang} />
        </section>
      </main>

      {/* Footer */}
      <Footer
        currentLang={currentLang}
        onNavigate={(target) => {
          if (target === 'home') handleScrollToSection('hero');
          else if (target === 'stories') handleScrollToSection('brocade');
          else if (target === 'shop') handleScrollToSection('shop');
          else if (target === 'customizer') handleCustomizeProduct();
          else handleScrollToSection('about-section');
        }}
      />

      {/* Shopping Cart Drawer */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        currentLang={currentLang}
      />

      {/* Cultural & Styling AI Assistant Chatbot (compact, corner, non-intrusive) */}
      <ChatbotDrawer
        currentLang={currentLang}
        onNavigateToCustomizer={(prodId) => {
          handleCustomizeProduct(prodId);
        }}
      />

      {/* Product Detail Modal */}
      {detailModalProductId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-xs overflow-y-auto">
          <div className="relative w-full max-w-5xl bg-[#FAF7F2] rounded-2xl shadow-2xl border border-[#E8DEC8] max-h-[92vh] overflow-y-auto p-6 sm:p-8 animate-in fade-in zoom-in-95">
            <button
              onClick={() => setDetailModalProductId(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/80 border border-[#E0D5C3] text-stone-600 hover:text-stone-900 transition-colors z-30 cursor-pointer shadow-xs"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <ProductDetailPage
              productId={detailModalProductId}
              currentLang={currentLang}
              onNavigate={(dest, targetProdId?: ProductId) => {
                if (dest === 'customizer') {
                  handleCustomizeProduct(targetProdId || detailModalProductId || undefined);
                } else if (dest === 'shop') {
                  setDetailModalProductId(null);
                  handleScrollToSection('shop');
                }
              }}
              onAddToCart={(...args) => {
                handleAddToCart(...args);
                setDetailModalProductId(null);
                setCartOpen(true);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
