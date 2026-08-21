import React, { useState } from 'react';
import { Search, Filter, ShoppingBag, Star, Check } from 'lucide-react';
import { JerseyGraphic } from './JerseyGraphic';

const allProducts = [
  { id: 'bellingham-back', title: 'Real Madrid Bellingham #5 Player Version 24/25', price: '₹1499', category: 'Club', graphicType: 'bellingham-back', rating: 5.0, reviews: 142 },
  { id: 'liverpool-home', title: 'Liverpool Home Player Version 24/25', price: '₹1499', category: 'Club', graphicType: 'liverpool-home', rating: 4.9, reviews: 98 },
  { id: 'real-madrid-home', title: 'Real Madrid Home Player Edition 24/25', price: '₹1499', category: 'Club', graphicType: 'real-madrid-home', rating: 5.0, reviews: 215 },
  { id: 'mancity-home', title: 'Manchester City Home Player Version 24/25', price: '₹1499', category: 'Club', graphicType: 'mancity-home', rating: 4.8, reviews: 87 },
  { id: 'barcelona-home', title: 'Barcelona Home Player Version 24/25', price: '₹1499', category: 'Club', graphicType: 'barcelona-home', rating: 4.9, reviews: 176 },
  { id: 'arsenal-home', title: 'Arsenal Home Player Edition 24/25', price: '₹1499', category: 'Club', graphicType: 'arsenal-home', rating: 4.8, reviews: 64 },
  { id: 'acmilan-retro', title: 'AC Milan Retro 1996 OPEL Edition', price: '₹1199', category: 'Retro', graphicType: 'acmilan-retro', rating: 5.0, reviews: 312 },
  { id: 'france-black-gold', title: 'France Special Edition Black & Gold 2024', price: '₹1699', category: 'Special Editions', graphicType: 'france-black-gold', rating: 5.0, reviews: 408 },
  { id: 'france-blue', title: 'France Home International Kit 2024', price: '₹1499', category: 'International', graphicType: 'france-blue', rating: 4.9, reviews: 119 },
  { id: 'argentina-home', title: 'Argentina 3-Star World Cup Champion Kit', price: '₹1499', category: 'International', graphicType: 'argentina-home', rating: 5.0, reviews: 520 },
  { id: 'brazil-home', title: 'Brazil Seleção Home Kit 2024', price: '₹1499', category: 'International', graphicType: 'brazil-home', rating: 4.8, reviews: 93 },
];

const categories = ['All', 'Club', 'International', 'Retro', 'Special Editions'];

export const ShopPage = ({ onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [addedItem, setAddedItem] = useState(null);

  const filteredProducts = allProducts.filter((product) => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAdd = (product) => {
    onAddToCart(product);
    setAddedItem(product.id);
    setTimeout(() => setAddedItem(null), 2000);
  };

  return (
    <div className="w-full bg-[#F5EEDC] min-h-screen py-10 lg:py-16 select-none">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        
        {/* Header Title */}
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <h1 className="font-bebas text-4xl sm:text-6xl font-black uppercase text-[#16264F] tracking-tight leading-none mb-3">
            EXPLORE THE FULL CATALOGUE
          </h1>
          <p className="text-[#3A3A3A] text-sm sm:text-base font-normal">
            Authentic pro-grade match kits, official player printing, retro classics, and tournament special editions.
          </p>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 bg-white/70 border-2 border-[#16264F]/20 p-4 rounded-xl shadow-sm">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#16264F] text-white shadow'
                    : 'bg-white/80 text-[#16264F] hover:bg-[#16264F]/10 border border-[#16264F]/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#16264F]/60" />
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search jerseys..."
              className="w-full bg-white border border-[#16264F]/30 rounded-lg pl-9 pr-4 py-2 text-xs font-bold text-[#16264F] focus:border-[#16264F] focus:outline-none"
            />
          </div>

        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <div 
              key={product.id}
              className="group bg-white border-2 border-[#16264F]/15 rounded-xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Graphic */}
                <div className="relative w-full h-64 bg-[#0E1B38] rounded-lg overflow-hidden flex items-center justify-center p-4 mb-4">
                  <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] opacity-5 [background-size:12px_12px]" />
                  <JerseyGraphic 
                    type={product.graphicType} 
                    className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105" 
                  />
                  <span className="absolute top-2 left-2 bg-[#16264F] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                    {product.category}
                  </span>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-1">
                  <Star className="h-3.5 w-3.5 fill-[#D9C79A] text-[#D9C79A]" />
                  <span className="text-xs font-bold text-[#16264F]">{product.rating}</span>
                  <span className="text-[11px] text-gray-500">({product.reviews})</span>
                </div>

                {/* Title */}
                <h3 className="font-bebas text-xl font-bold uppercase text-[#16264F] leading-tight mb-2">
                  {product.title}
                </h3>
              </div>

              {/* Price & Action */}
              <div className="pt-3 border-t border-gray-100 flex items-center justify-between mt-2">
                <span className="font-bebas text-2xl font-black text-[#16264F]">
                  {product.price}
                </span>

                <button
                  onClick={() => handleAdd(product)}
                  className={`px-4 py-2 rounded-md font-bebas text-sm font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all active:scale-95 ${
                    addedItem === product.id
                      ? 'bg-emerald-700 text-white'
                      : 'bg-[#16264F] hover:bg-[#0E1A38] text-white shadow-sm'
                  }`}
                >
                  {addedItem === product.id ? (
                    <>
                      <Check className="h-3.5 w-3.5" />
                      <span>ADDED</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="h-3.5 w-3.5" />
                      <span>ADD TO CART</span>
                    </>
                  )}
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
