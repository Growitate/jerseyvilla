import React, { useState } from 'react';
import { Check, Shield, Sparkles, ShoppingBag, RotateCcw, Award } from 'lucide-react';
import { JerseyGraphic } from './JerseyGraphic';

const kitOptions = [
  { id: 'jerseyvilla-home', name: 'JerseyVilla Navy Edition 24/25', graphicType: 'bellingham-back', basePrice: 1499, primaryColor: '#16264F', badgeColor: '#D9C79A' },
  { id: 'real-madrid-home', name: 'Real Madrid Home Player Kit 24/25', graphicType: 'real-madrid-home', basePrice: 1499, primaryColor: '#FFFFFF', badgeColor: '#111827' },
  { id: 'barcelona-home', name: 'Barcelona Home Player Kit 24/25', graphicType: 'barcelona-home', basePrice: 1499, primaryColor: '#800A1D', badgeColor: '#FFD700' },
  { id: 'france-black-gold', name: 'France Special Edition Black & Gold', graphicType: 'france-black-gold', basePrice: 1699, primaryColor: '#111827', badgeColor: '#D4AF37' },
  { id: 'argentina-home', name: 'Argentina 3-Star World Cup Edition', graphicType: 'argentina-home', basePrice: 1499, primaryColor: '#75AADB', badgeColor: '#D4AF37' },
];

const patches = [
  { id: 'none', name: 'No Sleeve Patch', price: 0 },
  { id: 'ucl', name: 'UEFA Champions League Starball + Foundation', price: 199 },
  { id: 'epl', name: 'Premier League Official Lion Badge', price: 149 },
  { id: 'laliga', name: 'La Liga EA Sports Badge', price: 149 },
  { id: 'fifa', name: 'FIFA World Champions Gold Badge', price: 199 },
];

const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

export const CustomizationPage = ({ onAddToCart }) => {
  const [selectedKit, setSelectedKit] = useState(kitOptions[0]);
  const [customName, setCustomName] = useState('YOUR NAME');
  const [customNumber, setCustomNumber] = useState('10');
  const [selectedSize, setSelectedSize] = useState('L');
  const [selectedPatch, setSelectedPatch] = useState(patches[1]);
  const [kitVersion, setKitVersion] = useState('Player Issue (Authentic)');
  const [viewAngle, setViewAngle] = useState('back'); // 'back' or 'front'
  const [addedNotification, setAddedNotification] = useState(false);

  const calculateTotalPrice = () => {
    let total = selectedKit.basePrice;
    if (customName.trim() && customName.toUpperCase() !== 'YOUR NAME') total += 150;
    if (customNumber.trim()) total += 100;
    total += selectedPatch.price;
    if (kitVersion.includes('Player Issue')) total += 200;
    return total;
  };

  const handleAddCustomToCart = () => {
    const customizedProduct = {
      id: `custom-${selectedKit.id}-${Date.now()}`,
      title: `${selectedKit.name} (${customName.toUpperCase()} #${customNumber})`,
      price: `₹${calculateTotalPrice()}`,
      graphicType: selectedKit.graphicType,
      size: selectedSize,
      customName: customName.toUpperCase(),
      customNumber: customNumber,
      patch: selectedPatch.name,
      version: kitVersion,
      quantity: 1,
    };
    onAddToCart(customizedProduct);
    setAddedNotification(true);
    setTimeout(() => setAddedNotification(false), 3000);
  };

  return (
    <div className="w-full bg-[#F5EEDC] min-h-screen py-10 lg:py-16 select-none">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        
        {/* Page Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#16264F]/10 border border-[#16264F]/20 text-[#16264F] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Official Font & Printing Lab</span>
          </div>
          <h1 className="font-bebas text-4xl sm:text-6xl font-black uppercase text-[#16264F] tracking-tight leading-none mb-3">
            CUSTOMIZE YOUR MATCH KIT
          </h1>
          <p className="text-[#3A3A3A] text-sm sm:text-base font-normal max-w-xl mx-auto">
            Design your pro-grade jersey with official player lettering, custom name & number, sleeve tournament patches, and authentic heat-applied vinyl.
          </p>
        </div>

        {/* Customizer Studio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Live 2D Interactive Preview (7 Cols) */}
          <div className="lg:col-span-7 bg-[#0E1B38] rounded-2xl p-6 sm:p-10 shadow-2xl border-2 border-[#16264F] relative overflow-hidden flex flex-col items-center">
            
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1B3B8A_0%,#0E1B38_70%)] opacity-80 pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] opacity-5 [background-size:16px_16px] pointer-events-none" />

            {/* View Angle Toggle */}
            <div className="relative z-20 flex items-center gap-2 bg-[#0A142B]/80 border border-white/10 p-1 rounded-lg mb-6">
              <button 
                onClick={() => setViewAngle('back')}
                className={`px-4 py-1.5 rounded-md text-xs font-bold uppercase transition-all ${
                  viewAngle === 'back' ? 'bg-[#16264F] text-white shadow' : 'text-gray-400 hover:text-white'
                }`}
              >
                Back View (Name & #)
              </button>
              <button 
                onClick={() => setViewAngle('front')}
                className={`px-4 py-1.5 rounded-md text-xs font-bold uppercase transition-all ${
                  viewAngle === 'front' ? 'bg-[#16264F] text-white shadow' : 'text-gray-400 hover:text-white'
                }`}
              >
                Front View (Chest Badge)
              </button>
            </div>

            {/* Live Jersey Preview Card */}
            <div className="relative z-10 w-full max-w-[420px] aspect-[4/5] flex items-center justify-center p-4">
              
              {/* Jersey Base Graphic */}
              <div className="relative w-full h-full flex items-center justify-center">
                <JerseyGraphic 
                  type={selectedKit.graphicType} 
                  className="h-full w-auto max-h-[440px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]" 
                />

                {/* Overlaid Custom Name & Number (When Back View Selected) */}
                {viewAngle === 'back' && (
                  <div className="absolute top-[28%] inset-x-0 flex flex-col items-center pointer-events-none">
                    {/* Custom Name Curved Text */}
                    <span 
                      className="font-bebas text-2xl sm:text-3xl font-black uppercase tracking-widest text-[#F5EEDC] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                      style={{
                        letterSpacing: '3px'
                      }}
                    >
                      {customName || 'NAME'}
                    </span>

                    {/* Custom Number */}
                    <span 
                      className="font-bebas text-7xl sm:text-8xl font-black leading-none text-[#F5EEDC] drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)] -mt-1"
                    >
                      {customNumber || '00'}
                    </span>
                  </div>
                )}
              </div>

            </div>

            {/* Preview Badge Info Footer */}
            <div className="relative z-10 w-full flex items-center justify-between border-t border-white/10 pt-4 mt-2 text-xs text-gray-300">
              <span className="flex items-center gap-1.5">
                <Shield className="h-4 w-4 text-[#D9C79A]" />
                Official Club Font & Vinyl Heat-Press
              </span>
              <span className="font-semibold text-white">
                {selectedPatch.id !== 'none' ? `Sleeve: ${selectedPatch.name}` : 'No Sleeve Patch'}
              </span>
            </div>

          </div>

          {/* Right Column: Customization Controls (5 Cols) */}
          <div className="lg:col-span-5 bg-[#F5EEDC] border-2 border-[#16264F] rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
            
            <h2 className="font-bebas text-2xl font-black uppercase text-[#16264F] tracking-wide border-b border-[#16264F]/20 pb-3 flex items-center justify-between">
              <span>CONFIGURATOR STUDIO</span>
              <span className="text-xl text-[#2451A3]">₹{calculateTotalPrice()}</span>
            </h2>

            {/* 1. Kit Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#16264F] mb-2">
                1. Select Jersey Base
              </label>
              <div className="space-y-2">
                {kitOptions.map((kit) => (
                  <button
                    key={kit.id}
                    onClick={() => setSelectedKit(kit)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg border-2 text-left transition-all text-sm font-bold ${
                      selectedKit.id === kit.id 
                        ? 'border-[#16264F] bg-[#16264F] text-white shadow-md' 
                        : 'border-[#16264F]/20 bg-white/60 text-[#16264F] hover:border-[#16264F]/50'
                    }`}
                  >
                    <span>{kit.name}</span>
                    <span>₹{kit.basePrice}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Custom Name & Number */}
            <div className="grid grid-cols-12 gap-3">
              <div className="col-span-8">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#16264F] mb-1.5">
                  2. Custom Name (+₹150)
                </label>
                <input 
                  type="text" 
                  maxLength={12}
                  value={customName}
                  onChange={(e) => setCustomName(e.target.value.toUpperCase())}
                  placeholder="BELLINGHAM"
                  className="w-full bg-white border-2 border-[#16264F]/30 rounded-lg px-3 py-2 text-sm font-bold uppercase text-[#16264F] focus:border-[#16264F] focus:outline-none"
                />
              </div>
              <div className="col-span-4">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#16264F] mb-1.5">
                  Number (+₹100)
                </label>
                <input 
                  type="text" 
                  maxLength={2}
                  value={customNumber}
                  onChange={(e) => setCustomNumber(e.target.value.replace(/[^0-9]/g, ''))}
                  placeholder="10"
                  className="w-full bg-white border-2 border-[#16264F]/30 rounded-lg px-3 py-2 text-sm font-bold uppercase text-[#16264F] text-center focus:border-[#16264F] focus:outline-none"
                />
              </div>
            </div>

            {/* 3. Tournament Sleeve Patch */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#16264F] mb-2">
                3. Tournament Sleeve Patch
              </label>
              <select
                value={selectedPatch.id}
                onChange={(e) => setSelectedPatch(patches.find(p => p.id === e.target.value) || patches[0])}
                className="w-full bg-white border-2 border-[#16264F]/30 rounded-lg px-3 py-2.5 text-sm font-bold text-[#16264F] focus:border-[#16264F] focus:outline-none"
              >
                {patches.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name} {p.price > 0 ? `(+₹${p.price})` : '(Free)'}
                  </option>
                ))}
              </select>
            </div>

            {/* 4. Fit Version */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#16264F] mb-2">
                4. Kit Version
              </label>
              <div className="grid grid-cols-2 gap-2">
                {['Player Issue (Authentic)', 'Fan Version (Regular)'].map((ver) => (
                  <button
                    key={ver}
                    onClick={() => setKitVersion(ver)}
                    className={`py-2 px-3 rounded-lg border-2 text-xs font-bold uppercase transition-all ${
                      kitVersion === ver 
                        ? 'border-[#16264F] bg-[#16264F] text-white' 
                        : 'border-[#16264F]/20 bg-white/60 text-[#16264F]'
                    }`}
                  >
                    {ver.split(' ')[0]} {ver.includes('Player') ? '(Slim Fit)' : '(Regular)'}
                  </button>
                ))}
              </div>
            </div>

            {/* 5. Size Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#16264F] mb-2">
                5. Select Size
              </label>
              <div className="flex items-center gap-2">
                {sizes.map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setSelectedSize(sz)}
                    className={`flex-1 py-2.5 rounded-lg border-2 text-xs font-black uppercase transition-all ${
                      selectedSize === sz 
                        ? 'border-[#16264F] bg-[#16264F] text-white shadow' 
                        : 'border-[#16264F]/20 bg-white/60 text-[#16264F] hover:border-[#16264F]/50'
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            {/* Notification Banner */}
            {addedNotification && (
              <div className="p-3 bg-emerald-700 text-white rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-md">
                <Check className="h-4 w-4" />
                <span>Added customized {selectedKit.name} to cart!</span>
              </div>
            )}

            {/* Submit Add to Cart Button */}
            <button
              onClick={handleAddCustomToCart}
              className="w-full py-4 bg-[#16264F] hover:bg-[#0E1A38] text-white font-bebas text-xl font-bold uppercase tracking-wider rounded-lg shadow-lg transition-all flex items-center justify-center gap-3 active:scale-95"
            >
              <ShoppingBag className="h-5 w-5" />
              <span>ADD CUSTOMIZED KIT TO CART — ₹{calculateTotalPrice()}</span>
            </button>

          </div>

        </div>

      </div>
    </div>
  );
};
