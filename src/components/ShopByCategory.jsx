import React from 'react';
import { JerseyGraphic } from './JerseyGraphic';

const categories = [
  {
    id: 'current-season',
    title: 'CURRENT SEASON JERSEY',
    graphicType: 'arsenal-home',
  },
  {
    id: 'club-jersey',
    title: 'CLUB JERSEY',
    graphicType: 'barcelona-home',
  },
  {
    id: 'authentic-player',
    title: 'AUTHENTIC PLAYER VERSION',
    graphicType: 'real-madrid-home',
    price: '₹1499',
  },
  {
    id: 'fan-version',
    title: 'FAN VERSION JERSEY',
    graphicType: 'manutd-home',
    price: '₹1199',
  },
  {
    id: 'retro-jerseys',
    title: 'RETRO JERSEYS',
    graphicType: 'acmilan-retro',
    price: '₹1799',
  },
  {
    id: 'special-editions',
    title: 'SPECIAL EDITIONS',
    graphicType: 'france-black-gold',
  },
  {
    id: 'international-jersey',
    title: 'INTERNATIONAL JERSEY',
    graphicType: 'france-blue',
    subButtons: ['PLAYER VERSION', 'FAN VERSION']
  },
  {
    id: 'kids-kit',
    title: 'KIDS KIT',
    graphicType: 'barcelona-home',
    price: '₹1199',
  },
];

export const ShopByCategory = ({ onSelectCategory }) => {
  return (
    <section id="categories" className="w-full bg-[#F6F4EE] py-12 sm:py-16 border-b border-[#E3DDD0]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Decorative Category Ribbon Header */}
        <div className="mb-10 flex items-center justify-center">
          <div className="flex items-center gap-2">
            {/* Left Decorative Line & Arrow */}
            <div className="hidden sm:flex items-center text-[#0A192F]">
              <span className="h-[2px] w-12 sm:w-20 bg-[#0A192F]" />
              <span className="text-xs font-bold">◆</span>
            </div>
            
            {/* Center Header Badge Pill */}
            <div className="relative flex items-center justify-center rounded-md bg-[#0A192F] px-8 py-2.5 shadow-md">
              <div className="absolute left-2 text-[#D4AF37] text-xs">♦</div>
              <h2 className="font-bebas text-2xl sm:text-3xl font-black uppercase tracking-widest text-white">
                SHOP BY CATEGORY
              </h2>
              <div className="absolute right-2 text-[#D4AF37] text-xs">♦</div>
            </div>

            {/* Right Decorative Line & Arrow */}
            <div className="hidden sm:flex items-center text-[#0A192F]">
              <span className="text-xs font-bold">◆</span>
              <span className="h-[2px] w-12 sm:w-20 bg-[#0A192F]" />
            </div>
          </div>
        </div>

        {/* 8 Categories Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8 sm:gap-5">
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className="group cursor-pointer flex flex-col justify-between rounded-xl border border-[#E3DDD0] bg-[#FAF8F3] p-3 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#0A192F] hover:shadow-xl"
            >
              {/* Category Title */}
              <h3 className="font-bebas text-xs sm:text-sm font-extrabold uppercase leading-tight tracking-wide text-[#0A192F] h-8 flex items-center justify-center">
                {cat.title}
              </h3>

              {/* Jersey Graphic */}
              <div className="my-3 flex items-center justify-center py-2 transition-transform duration-300 group-hover:scale-105">
                <JerseyGraphic type={cat.graphicType} className="h-28 sm:h-32 w-full object-contain" />
              </div>

              {/* Bottom Action / Price Tag */}
              <div className="mt-auto pt-1">
                {cat.price ? (
                  <div className="w-full rounded-md bg-[#0A192F] py-1.5 font-bebas text-xs font-bold tracking-wider text-white transition-colors group-hover:bg-[#11253E]">
                    {cat.price}
                  </div>
                ) : cat.subButtons ? (
                  <div className="space-y-1 text-[9px] font-bold">
                    <button className="w-full rounded bg-[#E2DFD7] py-1 text-[#0A192F] hover:bg-[#0A192F] hover:text-white transition-colors">
                      {cat.subButtons[0]}
                    </button>
                    <button className="w-full rounded bg-[#E2DFD7] py-1 text-[#0A192F] hover:bg-[#0A192F] hover:text-white transition-colors">
                      {cat.subButtons[1]}
                    </button>
                  </div>
                ) : (
                  <div className="w-full rounded-md bg-transparent py-1.5 font-bebas text-xs font-bold tracking-wider text-[#0A192F] group-hover:underline">
                    EXPLORE →
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
