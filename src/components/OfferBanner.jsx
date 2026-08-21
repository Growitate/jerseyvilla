import React from 'react';
import { ArrowRight } from 'lucide-react';
import { JerseyGraphic } from './JerseyGraphic';

export const OfferBanner = ({ onShopNow }) => {
  return (
    <section className="w-full bg-[#F6F4EE] py-10 sm:py-14 border-b border-[#E3DDD0]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="relative overflow-hidden rounded-2xl bg-[#0A192F] text-white shadow-2xl border-2 border-[#11253E]">
          
          {/* Background Decorative Slant */}
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 relative z-10 p-6 sm:p-10 lg:p-12">
            
            {/* Left Content (6 Cols) */}
            <div className="lg:col-span-6 space-y-4 text-left">
              <h2 className="font-bebas text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-none">
                BUY ANY 2 JERSEYS & GET
              </h2>
              
              <div className="font-bebas text-5xl sm:text-7xl lg:text-8xl font-black text-white leading-none tracking-tight flex items-baseline gap-2">
                <span>₹100 OFF</span>
              </div>

              <div className="pt-2">
                <button
                  onClick={onShopNow}
                  className="group inline-flex items-center gap-3 rounded-md border-2 border-white bg-transparent px-7 py-3 font-bebas text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-white hover:text-[#0A192F]"
                >
                  <span>SHOP NOW</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Right Jersey Trio (6 Cols) */}
            <div className="lg:col-span-6 flex items-center justify-center sm:justify-end space-x-[-30px] sm:space-x-[-45px] pt-4 lg:pt-0">
              
              {/* Argentina 10 */}
              <div className="z-10 transition-transform duration-300 hover:scale-110 hover:z-30">
                <JerseyGraphic type="argentina-home" className="h-40 sm:h-52 lg:h-60 w-36 sm:w-48 lg:w-56 drop-shadow-xl" />
              </div>

              {/* Brazil 10 (Centered Foreground) */}
              <div className="z-20 transform -translate-y-3 transition-transform duration-300 hover:scale-110 hover:z-30">
                <JerseyGraphic type="brazil-home" className="h-44 sm:h-56 lg:h-64 w-40 sm:w-52 lg:w-60 drop-shadow-2xl" />
              </div>

              {/* France 10 */}
              <div className="z-10 transition-transform duration-300 hover:scale-110 hover:z-30">
                <JerseyGraphic type="france-blue" className="h-40 sm:h-52 lg:h-60 w-36 sm:w-48 lg:w-56 drop-shadow-xl" />
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
