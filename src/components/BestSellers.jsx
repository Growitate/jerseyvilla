import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ShoppingCart, Check } from 'lucide-react';
import { JerseyGraphic } from './JerseyGraphic';

const products = [
  {
    id: 'lfc-2425',
    title: 'Liverpool Home Player Version 24/25',
    price: '₹1499',
    graphicType: 'liverpool-home',
    badge: 'NEW',
  },
  {
    id: 'rm-2425',
    title: 'Real Madrid Home Player Version 24/25',
    price: '₹1499',
    graphicType: 'real-madrid-home',
    badge: 'NEW',
  },
  {
    id: 'mcfc-2425',
    title: 'Man City Home Fan Version 24/25',
    price: '₹1199',
    graphicType: 'mancity-home',
    badge: 'NEW',
  },
  {
    id: 'barca-2425',
    title: 'Barcelona Home Player Version 24/25',
    price: '₹1499',
    graphicType: 'barcelona-home',
    badge: 'NEW',
  },
  {
    id: 'afc-2425',
    title: 'Arsenal Home Fan Version 24/25',
    price: '₹1199',
    graphicType: 'arsenal-home',
    badge: 'NEW',
  },
  {
    id: 'acm-retro-1996',
    title: 'AC Milan Retro 1996 Home Jersey',
    price: '₹1799',
    graphicType: 'acmilan-retro',
    badge: 'NEW',
  },
];

export const BestSellers = ({ onAddToCart }) => {
  const [addedIds, setAddedIds] = useState([]);

  const handleAdd = (product) => {
    onAddToCart(product);
    setAddedIds((prev) => [...prev, product.id]);
    setTimeout(() => {
      setAddedIds((prev) => prev.filter((id) => id !== product.id));
    }, 1800);
  };

  return (
    <section id="shop" className="w-full bg-[#F6F4EE] py-12 sm:py-16 border-b border-[#E3DDD0]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8 flex items-end justify-between">
          <div>
            <span className="text-[10px] font-black tracking-[0.25em] text-[#0A192F] uppercase">
              POPULAR PICKS
            </span>
            <h2 className="font-bebas text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-[#0A192F] tracking-tight">
              Best Sellers Right Now
            </h2>
          </div>

          {/* Slider Navigation Arrows */}
          <div className="flex items-center space-x-2">
            <button 
              aria-label="Previous"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#0A192F]/30 bg-transparent text-[#0A192F] transition-colors hover:bg-[#0A192F] hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button 
              aria-label="Next"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#0A192F]/30 bg-transparent text-[#0A192F] transition-colors hover:bg-[#0A192F] hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 sm:gap-6">
          {products.map((item) => {
            const isAdded = addedIds.includes(item.id);
            return (
              <div
                key={item.id}
                className="group relative flex flex-col justify-between rounded-xl border border-[#E3DDD0] bg-[#FAF8F3] p-3 sm:p-4 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#0A192F] hover:shadow-2xl"
              >
                {/* Badge Tag */}
                {item.badge && (
                  <span className="absolute top-3 left-3 z-10 rounded bg-[#0A192F] px-2 py-0.5 font-bebas text-[10px] font-bold text-white tracking-wider">
                    {item.badge}
                  </span>
                )}

                {/* Jersey Preview Image */}
                <div className="my-4 flex items-center justify-center py-2 transition-transform duration-300 group-hover:scale-105">
                  <JerseyGraphic type={item.graphicType} className="h-36 sm:h-44 w-full object-contain" />
                </div>

                {/* Info & Button */}
                <div className="mt-auto space-y-2 text-left">
                  <h3 className="font-sans text-xs sm:text-sm font-bold text-[#0A192F] line-clamp-2 leading-snug">
                    {item.title}
                  </h3>
                  
                  <div className="font-bebas text-lg sm:text-xl font-black text-[#0A192F]">
                    {item.price}
                  </div>

                  <button
                    onClick={() => handleAdd(item)}
                    className={`w-full flex items-center justify-center gap-2 rounded-md py-2 font-bebas text-xs font-bold uppercase tracking-wider transition-all duration-200 active:scale-95 ${
                      isAdded
                        ? 'bg-emerald-700 text-white'
                        : 'bg-[#0A192F] text-white hover:bg-[#11253E] shadow-sm'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="h-3.5 w-3.5" />
                        <span>ADDED</span>
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="h-3.5 w-3.5" />
                        <span>ADD TO CART</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
