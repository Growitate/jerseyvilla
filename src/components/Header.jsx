import React, { useState } from 'react';
import { Search, User, ShoppingBag, Menu, X, Sparkles } from 'lucide-react';

export const Header = ({ cartCount = 2, onOpenCart, activePage = 'home', onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { key: 'home', label: 'HOME' },
    { key: 'about', label: 'ABOUT US' },
    { key: 'shop', label: 'SHOP' },
    { key: 'customization', label: 'CUSTOMIZATION', highlight: true },
    { key: 'contact', label: 'CONTACT' },
  ];

  const handleNavClick = (key) => {
    onNavigate(key);
    setMobileMenuOpen(false);
  };

  return (
    <header className="w-full bg-[#F5EEDC] border-b border-[#16264F]/20 z-50 sticky top-0 shadow-sm">
      <div className="mx-auto flex h-[84px] max-w-[1491px] items-center justify-between px-6 lg:px-12">
        
        {/* Left: Logo Lockup */}
        <button 
          onClick={() => handleNavClick('home')} 
          className="flex items-center gap-3 group text-left"
        >
          <div className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-[#16264F] border border-[#D9C79A] shadow-sm transition-transform group-hover:scale-105">
            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-white stroke-white" strokeWidth="0.5" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 4L3 9L6 11V20H18V11L21 9L17 4H14C14 5.2 13 6.2 12 6.2C11 6.2 10 5.2 10 4H7Z" />
            </svg>
          </div>
          <span className="font-bebas text-[22px] font-extrabold tracking-[0.5px] uppercase text-[#16264F]">
            JERSEYVILLA
          </span>
        </button>

        {/* Center: Nav Links */}
        <nav className="hidden lg:flex items-center space-x-[36px] text-[13px] font-bold tracking-[0.5px] uppercase text-[#16264F]">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => handleNavClick(item.key)}
              className={`py-1 transition-all relative flex items-center gap-1.5 ${
                activePage === item.key
                  ? 'text-[#16264F] border-b-2 border-[#16264F] font-black'
                  : 'text-[#16264F]/80 hover:text-[#16264F]'
              }`}
            >
              {item.highlight && <Sparkles className="h-3.5 w-3.5 text-[#2451A3]" />}
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Right: Icons */}
        <div className="flex items-center space-x-[24px]">
          <button 
            onClick={() => handleNavClick('shop')}
            aria-label="Search" 
            className="p-1 text-[#16264F] hover:opacity-75 transition-opacity"
          >
            <Search className="h-[22px] w-[22px] stroke-[#16264F] stroke-[1.5]" />
          </button>
          
          <button 
            onClick={() => handleNavClick('contact')}
            aria-label="Account" 
            className="p-1 text-[#16264F] hover:opacity-75 transition-opacity"
          >
            <User className="h-[22px] w-[22px] stroke-[#16264F] stroke-[1.5]" />
          </button>
          
          <button 
            onClick={onOpenCart}
            aria-label="Cart" 
            className="relative p-1 text-[#16264F] hover:opacity-75 transition-opacity"
          >
            <ShoppingBag className="h-[22px] w-[22px] stroke-[#16264F] stroke-[1.5]" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-[16px] w-[16px] items-center justify-center rounded-full bg-[#16264F] text-[10px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1 text-[#16264F]"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F5EEDC] border-t border-[#16264F]/20 px-6 py-4 space-y-3 font-bold text-[13px] tracking-[0.5px] uppercase text-[#16264F]">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => handleNavClick(item.key)}
              className={`block w-full text-left py-2 font-bold ${
                activePage === item.key ? 'text-[#2451A3] font-black' : 'text-[#16264F]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
