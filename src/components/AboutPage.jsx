import React from 'react';
import { ShieldCheck, Award, Truck, HeartHandshake, CheckCircle2, Users } from 'lucide-react';

export const AboutPage = ({ onShopNow }) => {
  return (
    <div className="w-full bg-[#F5EEDC] min-h-screen py-12 lg:py-20 select-none">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 space-y-16">
        
        {/* Header Hero Banner */}
        <div className="bg-[#0E1B38] text-white rounded-2xl p-8 sm:p-14 border-2 border-[#16264F] shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] opacity-5 [background-size:16px_16px]" />
          
          <div className="max-w-3xl relative z-10 space-y-4">
            <span className="text-[#D9C79A] text-xs font-bold uppercase tracking-widest block">
              OUR HERITAGE & CRAFTSMANSHIP
            </span>
            <h1 className="font-bebas text-4xl sm:text-6xl font-black uppercase tracking-tight leading-none text-white">
              CRAFTING AUTHENTIC PRO MATCH KITS FOR TRUE FOOTBALL FANS.
            </h1>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              JerseyVilla was founded with a singular mission: to bring genuine, player-issue football jerseys with authentic tournament lettering, official fonts, and pro heat-press vinyl patches directly to fans across India.
            </p>
          </div>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border-2 border-[#16264F]/20 p-8 rounded-xl shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-lg bg-[#16264F] text-white flex items-center justify-center">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="font-bebas text-2xl font-black text-[#16264F] uppercase">100% Authentic Quality</h3>
            <p className="text-xs text-[#3A3A3A] leading-relaxed">
              Every kit features official club ventilation mesh, heat-applied crests, moisture-wicking Dri-FIT / Heat.RDY fabric, and precise player fit specifications.
            </p>
          </div>

          <div className="bg-white border-2 border-[#16264F]/20 p-8 rounded-xl shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-lg bg-[#16264F] text-white flex items-center justify-center">
              <Award className="h-6 w-6" />
            </div>
            <h3 className="font-bebas text-2xl font-black text-[#16264F] uppercase">Official Printing Lab</h3>
            <p className="text-xs text-[#3A3A3A] leading-relaxed">
              Our customization studio uses licensed club fonts, league sleeve patches (UCL, EPL, La Liga), and official vinyl heat-press technology that withstands hundreds of matches.
            </p>
          </div>

          <div className="bg-white border-2 border-[#16264F]/20 p-8 rounded-xl shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-lg bg-[#16264F] text-white flex items-center justify-center">
              <Truck className="h-6 w-6" />
            </div>
            <h3 className="font-bebas text-2xl font-black text-[#16264F] uppercase">Nationwide Express</h3>
            <p className="text-xs text-[#3A3A3A] leading-relaxed">
              Dispatched with premium eco-friendly protective packaging, tracking updates via WhatsApp, and fast courier delivery to over 18,000 pincodes across India.
            </p>
          </div>
        </div>

        {/* Player Issue vs Fan Version Table */}
        <div className="bg-white border-2 border-[#16264F]/20 rounded-2xl p-8 sm:p-12 shadow-sm space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="font-bebas text-3xl sm:text-4xl font-black text-[#16264F] uppercase">
              PLAYER VERSION VS. FAN VERSION
            </h2>
            <p className="text-xs text-[#3A3A3A] uppercase font-bold tracking-wider mt-1">
              Choose the exact fit that matches your style
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="border-2 border-[#16264F] rounded-xl p-6 bg-[#0E1B38] text-white space-y-4">
              <div className="flex items-center justify-between border-b border-white/20 pb-3">
                <h3 className="font-bebas text-2xl font-bold text-white">PLAYER ISSUE (AUTHENTIC)</h3>
                <span className="bg-[#D9C79A] text-[#16264F] text-[10px] font-black uppercase px-2.5 py-1 rounded">PRO CHOICE</span>
              </div>
              <ul className="space-y-2 text-xs text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#D9C79A]" />
                  <span>Slim athletic fit worn by professional players on matchdays</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#D9C79A]" />
                  <span>Heat-applied lightweight silicone badges & crests</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#D9C79A]" />
                  <span>Ultra-breathable micro-mesh ventilation zones</span>
                </li>
              </ul>
            </div>

            <div className="border-2 border-[#16264F]/30 rounded-xl p-6 bg-[#F5EEDC] text-[#16264F] space-y-4">
              <div className="flex items-center justify-between border-b border-[#16264F]/20 pb-3">
                <h3 className="font-bebas text-2xl font-bold">FAN VERSION (STADIUM)</h3>
                <span className="bg-[#16264F] text-white text-[10px] font-black uppercase px-2.5 py-1 rounded">REGULAR FIT</span>
              </div>
              <ul className="space-y-2 text-xs text-[#3A3A3A]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#16264F]" />
                  <span>Relaxed regular fit designed for everyday comfortable wear</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#16264F]" />
                  <span>Embroidered woven fabric club crests and logos</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#16264F]" />
                  <span>Durable machine-washable performance polyester fabric</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
