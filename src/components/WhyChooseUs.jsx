import React from 'react';
import { ShieldCheck, Award, Printer, Shirt, Globe } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: '100% AUTHENTIC',
    desc: 'Genuine & verified player-issue jerseys',
  },
  {
    icon: Award,
    title: 'ELITE QUALITY',
    desc: 'Player-issue quality with premium performance fabric',
  },
  {
    icon: Printer,
    title: 'OFFICIAL PRINTING',
    desc: 'Official club fonts, league lettering & sleeve patches',
  },
  {
    icon: Shirt,
    title: 'PERFECT FIT',
    desc: 'Athletic cuts designed for comfort and performance',
  },
  {
    icon: Globe,
    title: 'SHIPPED ACROSS INDIA',
    desc: 'Fast & reliable nationwide delivery',
  },
];

export const WhyChooseUs = () => {
  return (
    <section id="about" className="w-full bg-[#0A192F] text-white py-12 sm:py-16 shadow-2xl relative overflow-hidden">
      
      {/* Background Subtle Grid Texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8 items-center">
          
          {/* Left Column: Title & Text (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-[10px] font-black tracking-[0.2em] text-[#D4AF37] uppercase">
              WHY CHOOSE JERSEYVILLA
            </span>
            <h2 className="font-bebas text-4xl sm:text-5xl font-black leading-tight tracking-tight uppercase text-white">
              Made For True<br />
              Football Purists.
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-sm">
              We bring you the same jerseys the pros trust — with authentic details, fonts, patches, and performance fabrics that make all the difference.
            </p>
            <div className="pt-2">
              <a
                href="#about"
                className="inline-block rounded border-2 border-white px-5 py-2.5 font-bebas text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-white hover:text-[#0A192F]"
              >
                LEARN MORE ABOUT US
              </a>
            </div>
          </div>

          {/* Right Column: 5 Feature Items (8 Cols) */}
          <div className="lg:col-span-8 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5 lg:gap-0 lg:divide-x lg:divide-white/15">
            {features.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div key={idx} className="flex flex-col items-center text-center px-3 py-2 space-y-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#11253E] border border-white/10 text-[#D4AF37] shadow-inner">
                    <Icon className="h-6 w-6 stroke-[1.8]" />
                  </div>
                  <h3 className="font-bebas text-xs sm:text-sm font-bold tracking-wider uppercase text-white">
                    {feat.title}
                  </h3>
                  <p className="text-[11px] font-medium text-gray-300 leading-snug">
                    {feat.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
