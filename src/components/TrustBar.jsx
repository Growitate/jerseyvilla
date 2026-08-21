import React from 'react';
import { Lock, RefreshCw, ShieldCheck, Headphones } from 'lucide-react';

const trustItems = [
  {
    icon: Lock,
    title: 'SECURE PAYMENTS',
    subtitle: 'Safe, easy & trusted checkout',
  },
  {
    icon: RefreshCw,
    title: 'EASY RETURNS',
    subtitle: 'Hassle-free returns & exchanges',
  },
  {
    icon: ShieldCheck,
    title: 'ORIGINAL PRODUCTS',
    subtitle: '100% genuine & authentic',
  },
  {
    icon: Headphones,
    title: 'FAST SUPPORT',
    subtitle: "We're here to help you",
  },
];

export const TrustBar = () => {
  return (
    <div className="w-full bg-[#0A192F] text-white py-6 border-b border-[#11253E]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-4">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center space-x-3.5 justify-center sm:justify-start">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#11253E] text-[#D4AF37] border border-white/10">
                  <Icon className="h-5 w-5 stroke-[2]" />
                </div>
                <div className="text-left">
                  <h4 className="font-bebas text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                    {item.title}
                  </h4>
                  <p className="text-[10px] sm:text-xs text-gray-300 font-medium leading-tight">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
