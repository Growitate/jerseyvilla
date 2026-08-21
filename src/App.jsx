import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ShopByCategory } from './components/ShopByCategory';
import { WhyChooseUs } from './components/WhyChooseUs';
import { BestSellers } from './components/BestSellers';
import { OfferBanner } from './components/OfferBanner';
import { Testimonials } from './components/Testimonials';
import { TrustBar } from './components/TrustBar';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { CustomizationPage } from './components/CustomizationPage';
import { ShopPage } from './components/ShopPage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    {
      id: 'rm-2425',
      title: 'Real Madrid Home Player Version 24/25',
      price: '₹1499',
      graphicType: 'real-madrid-home',
      quantity: 1,
    },
    {
      id: 'barca-2425',
      title: 'Barcelona Home Player Version 24/25',
      price: '₹1499',
      graphicType: 'barcelona-home',
      quantity: 1,
    },
  ]);

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(id);
    } else {
      setCartItems((prev) =>
        prev.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
      );
    }
  };

  const handleRemoveItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#F6F4EE] text-[#0A192F] font-sans antialiased flex flex-col justify-between">
      <div>
        {/* Header Navigation */}
        <Header 
          cartCount={totalCartCount} 
          onOpenCart={() => setCartOpen(true)}
          activePage={activePage}
          onNavigate={(pageKey) => {
            setActivePage(pageKey);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />

        {/* Dynamic Page Views */}
        {activePage === 'home' && (
          <main>
            <HeroSection onShopNow={() => setActivePage('customization')} />
            <ShopByCategory onSelectCategory={() => setActivePage('shop')} />
            <WhyChooseUs />
            <BestSellers onAddToCart={handleAddToCart} />
            <OfferBanner onShopNow={() => setActivePage('customization')} />
            <Testimonials />
            <TrustBar />
          </main>
        )}

        {activePage === 'about' && (
          <main>
            <AboutPage onShopNow={() => setActivePage('shop')} />
          </main>
        )}

        {activePage === 'shop' && (
          <main>
            <ShopPage onAddToCart={handleAddToCart} />
          </main>
        )}

        {activePage === 'customization' && (
          <main>
            <CustomizationPage onAddToCart={handleAddToCart} />
          </main>
        )}

        {activePage === 'contact' && (
          <main>
            <ContactPage />
          </main>
        )}
      </div>

      {/* Footer */}
      <Footer />

      {/* Slide-out Cart Drawer */}
      <CartDrawer 
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  );
}
