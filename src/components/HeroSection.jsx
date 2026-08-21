import React from 'react';
import { ArrowRight, Tag } from 'lucide-react';

export const HeroSection = ({ onShopNow }) => {
  return (
    <section className="relative w-full overflow-hidden bg-[#F5EEDC] select-none">
      <div className="mx-auto max-w-[1491px] relative min-h-[460px] sm:min-h-[520px] lg:h-[551px]">
        
        {/* 3a. Abstract Creative Layered Backdrop */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          
          {/* Main Abstract Navy Panel with Dynamic Slanted Geometry */}
          <div 
            className="absolute right-0 top-0 bottom-0 w-[55%] sm:w-[60%] lg:w-[70%] h-full bg-[#16264F]"
            style={{
              clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 8% 100%)',
              WebkitClipPath: 'polygon(25% 0, 100% 0, 100% 100%, 8% 100%)'
            }}
          >
            {/* Abstract Ambient Gradient & Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_25%,#1F3B77_0%,#16264F_55%,#0B142B_100%)] opacity-95" />

            {/* Abstract Sports Halftone Dot Matrix Texture */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] opacity-10 [background-size:14px_14px] sm:[background-size:18px_18px]" />

            {/* Abstract Secondary Angled Blade (Royal Blue Accent) */}
            <div 
              className="absolute inset-0 w-full h-full bg-[#1B3B8A] opacity-40 mix-blend-screen"
              style={{
                clipPath: 'polygon(12% 0, 38% 0, 20% 100%, 0% 100%)',
                WebkitClipPath: 'polygon(12% 0, 38% 0, 20% 100%, 0% 100%)'
              }}
            />

            {/* Oversized Outlined "JV" Abstract Monogram */}
            <div className="absolute right-[2%] top-[10%] opacity-[0.08] sm:opacity-[0.10] pointer-events-none select-none">
              <span className="font-bebas text-[220px] sm:text-[340px] lg:text-[420px] font-black text-white leading-none tracking-tighter">
                JV
              </span>
            </div>
          </div>

        </div>

        {/* Hero Grid Container */}
        <div className="relative z-10 grid grid-cols-12 h-full items-stretch min-h-[460px] sm:min-h-[520px] lg:min-h-[551px]">
          
          {/* Left Content Column (7 cols on mobile, 6 cols on lg) */}
          <div className="col-span-7 lg:col-span-6 z-20 flex flex-col justify-center px-4 sm:px-10 lg:pl-[90px] lg:pr-4 py-6 sm:py-8 max-w-[580px]">
            
            {/* 1. Eyebrow Line */}
            <div className="mb-2 sm:mb-[16px]">
              <span className="text-[11px] sm:text-[13px] lg:text-[15px] font-bold tracking-[0.5px] sm:tracking-[1px] uppercase text-[#1A1A1A]">
                AUTHENTIC. <span className="text-[#2451A3]">ELITE.</span> UNMATCHED.
              </span>
            </div>

            {/* 2. Headline */}
            <h1 className="font-bebas text-[28px] sm:text-[44px] lg:text-[56px] leading-[0.95] sm:leading-[0.96] font-black uppercase tracking-normal mb-3 sm:mb-[20px]">
              <span className="text-[#1A1A1A] block">WEAR WHAT</span>
              <span className="text-[#1A1A1A] block">THE PROS WEAR.</span>
              <span className="text-[#1B3B8A] block">ELITE MATCH KITS.</span>
            </h1>

            {/* 3. Body Paragraph */}
            <p className="text-[12px] sm:text-[14px] lg:text-[15px] leading-[1.4] sm:leading-[1.5] text-[#3A3A3A] font-normal max-w-[420px] mb-4 sm:mb-[28px] line-clamp-3 sm:line-clamp-none">
              Get genuine, pro-grade football jerseys finished exclusively with official club fonts, league lettering, and tournament sleeve patches.
            </p>

            {/* 4. CTA Button Row */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-[16px] mb-3 sm:mb-[20px]">
              {/* Primary Button */}
              <button 
                onClick={onShopNow}
                className="group flex items-center justify-center gap-1.5 sm:gap-[8px] bg-[#16264F] text-white text-[11px] sm:text-[14px] font-bold uppercase tracking-[0.5px] px-4 py-2.5 sm:px-[28px] sm:py-[14px] rounded-[4px] shadow-sm transition-all hover:bg-[#0E1A38] active:scale-95"
              >
                <span>SHOP NOW</span>
                <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Secondary Button */}
              <a 
                href="#categories"
                className="flex items-center justify-center bg-transparent border-[1.5px] border-[#16264F] text-[#16264F] text-[11px] sm:text-[14px] font-bold uppercase tracking-[0.5px] px-3.5 py-2.5 sm:px-[28px] sm:py-[14px] rounded-[4px] transition-all hover:bg-[#16264F] hover:text-white active:scale-95"
              >
                EXPLORE
              </a>
            </div>

            {/* 5. Promo Banner */}
            <div className="w-full max-w-[500px]">
              <div className="flex items-center gap-2 sm:gap-[12px] bg-[#F5EEDC] border border-[#16264F] rounded-[6px] px-3 py-2 sm:px-[20px] sm:py-[14px] shadow-sm">
                <div className="flex h-4 w-4 sm:h-[20px] sm:w-[20px] items-center justify-center rounded bg-[#16264F] text-white flex-shrink-0">
                  <Tag className="h-2.5 w-2.5 sm:h-3 sm:w-3 fill-current text-white" />
                </div>
                <span className="text-[10px] sm:text-[13px] font-normal text-[#16264F] uppercase">
                  BUY ANY 2 JERSEYS & GET <strong className="font-bold">₹100 OFF</strong>
                </span>
              </div>
            </div>

          </div>

          {/* Right Image Area & Inset Panels (5 cols on mobile, 6 cols on lg) */}
          <div className="col-span-5 lg:col-span-6 relative h-full min-h-[460px] sm:min-h-[520px] lg:h-[551px] flex items-end justify-end">
            
            {/* Player Photo Cutout (Positioned and scaled proportionally for all screens) */}
            <div className="absolute right-[22%] sm:right-[28%] lg:right-[35%] top-[-10px] sm:top-[-15px] bottom-0 z-20 h-[430px] sm:h-[530px] lg:h-[590px] pointer-events-none flex items-end justify-end">
              <img 
                src="/images/hero_player_uploaded.png" 
                alt="JerseyVilla Player Kit Model"
                className="h-full w-auto object-contain object-bottom filter drop-shadow-[-12px_15px_30px_rgba(0,0,0,0.4)]"
              />
            </div>

            {/* Bottom-Right Corner Inset Panel (Perfect Right-Angled Triangle containing 3 Product/Fabric Tiles) */}
            <div className="absolute right-0 bottom-0 z-30 flex items-end pointer-events-auto">
              
              {/* Perfect Right-Angled Triangle Outer Container (Responsive sizing) */}
              <div 
                className="relative w-[240px] sm:w-[400px] lg:w-[580px] h-[120px] sm:h-[200px] lg:h-[290px] bg-[#F5EEDC] p-[1.5px] sm:p-[2px] shadow-2xl overflow-hidden"
                style={{
                  clipPath: 'polygon(0 100%, 100% 0, 100% 100%)',
                  WebkitClipPath: 'polygon(0 100%, 100% 0, 100% 100%)'
                }}
              >
                {/* 3 Inner Tiles divided by cream border gaps */}
                <div 
                  className="w-full h-full relative grid grid-cols-12 gap-[1.5px] sm:gap-[2px] bg-[#F5EEDC]"
                  style={{
                    clipPath: 'polygon(0 100%, 100% 0, 100% 100%)',
                    WebkitClipPath: 'polygon(0 100%, 100% 0, 100% 100%)'
                  }}
                >
                  
                  {/* Tile 1 (Leftmost Triangle: Blue Pinstripe Fabric Texture) */}
                  <div className="col-span-3 h-full relative bg-[#0E1F47] overflow-hidden">
                    <div className="absolute inset-0 bg-[#0E1F47]">
                      <svg className="w-full h-full opacity-40" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <line x1="0" y1="0" x2="100" y2="100" stroke="#F5EEDC" strokeWidth="3" />
                        <line x1="25" y1="0" x2="100" y2="75" stroke="#F5EEDC" strokeWidth="3" />
                        <line x1="50" y1="0" x2="100" y2="50" stroke="#F5EEDC" strokeWidth="3" />
                        <line x1="0" y1="25" x2="75" y2="100" stroke="#F5EEDC" strokeWidth="3" />
                        <line x1="0" y1="50" x2="50" y2="100" stroke="#F5EEDC" strokeWidth="3" />
                      </svg>
                    </div>
                  </div>

                  {/* Tile 2 (Center Tile: Circular JERSEYVILLA Seal Badge) */}
                  <div className="col-span-4 h-full relative bg-[#0A1633] flex items-center justify-center p-0.5 sm:p-1 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] opacity-5 [background-size:12px_12px]" />
                    <div className="relative z-10 flex h-[58px] w-[58px] sm:h-[95px] sm:w-[95px] lg:h-[145px] lg:w-[145px] items-center justify-center rounded-full border-[1.5px] sm:border-[2.5px] border-white/90 bg-[#0A1633] p-1 sm:p-2 shadow-2xl">
                      <svg viewBox="0 0 100 100" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50" cy="50" r="46" stroke="#FFFFFF" strokeWidth="2.5" />
                        <circle cx="50" cy="50" r="38" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="3 2" />
                        <path d="M 35 34 L 22 46 L 29 58 L 38 48 L 38 70 L 62 70 L 62 48 L 71 58 L 78 46 L 65 34 Q 50 42 35 34 Z" fill="#FFFFFF" />
                        <text x="50" y="23" fill="#FFFFFF" fontSize="7.5" fontWeight="bold" textAnchor="middle" letterSpacing="1">JERSEYVILLA</text>
                        <text x="50" y="83" fill="#FFFFFF" fontSize="7.5" fontWeight="bold" textAnchor="middle" letterSpacing="1">JERSEYVILLA</text>
                        <text x="22" y="52" fill="#FFFFFF" fontSize="6">★</text>
                        <text x="74" y="52" fill="#FFFFFF" fontSize="6">★</text>
                      </svg>
                    </div>
                  </div>

                  {/* Tile 3 (Rightmost Tile: Macro Authentic Player Tag Photo) */}
                  <div className="col-span-5 h-full relative bg-[#0A142B] overflow-hidden">
                    <img 
                      src="/images/hero_fabric_tag_v2.jpg" 
                      alt="Moody Macro Authentic Tag Photo" 
                      className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};



