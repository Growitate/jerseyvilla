import React from 'react';
import { Mail, Phone, Instagram, MessageCircle } from 'lucide-react';
import { JerseyLogo } from './JerseyLogo';

export const Footer = () => {
  return (
    <footer className="w-full bg-[#FAF8F3] text-[#0A192F] pt-12 pb-6 border-t border-[#E3DDD0]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 pb-10 border-b border-[#E3DDD0]">
          
          {/* Col 1: Brand Info (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <JerseyLogo className="h-10 w-10" />
            
            <p className="text-xs text-gray-600 leading-relaxed max-w-sm font-medium">
              To bridge the gap between the professional pitch and the fan by delivering elite, pro-grade player-issue jerseys worldwide.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://instagram.com/jerseyvilla.shop"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0A192F] text-white transition-colors hover:bg-[#D4AF37] hover:text-[#0A192F]"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/917985721822"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0A192F] text-white transition-colors hover:bg-[#D4AF37] hover:text-[#0A192F]"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href="mailto:Cristiano.akash7@gmail.com"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0A192F] text-white transition-colors hover:bg-[#D4AF37] hover:text-[#0A192F]"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bebas text-sm font-bold uppercase tracking-wider text-[#0A192F]">
              QUICK LINKS
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-gray-700">
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Home</a></li>
              <li><a href="#shop" className="hover:text-[#D4AF37] transition-colors">Shop</a></li>
              <li><a href="#categories" className="hover:text-[#D4AF37] transition-colors">Club Jersey</a></li>
              <li><a href="#categories" className="hover:text-[#D4AF37] transition-colors">International</a></li>
              <li><a href="#categories" className="hover:text-[#D4AF37] transition-colors">Retro Jerseys</a></li>
              <li><a href="#categories" className="hover:text-[#D4AF37] transition-colors">Special Editions</a></li>
              <li><a href="#about" className="hover:text-[#D4AF37] transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-[#D4AF37] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Col 3: Customer Service (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bebas text-sm font-bold uppercase tracking-wider text-[#0A192F]">
              CUSTOMER SERVICE
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-gray-700">
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Shipping & Delivery</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Track Your Order</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Col 4: Contact Us (2 Cols) */}
          <div id="contact" className="lg:col-span-2 space-y-3">
            <h4 className="font-bebas text-sm font-bold uppercase tracking-wider text-[#0A192F]">
              CONTACT US
            </h4>
            <div className="space-y-2.5 text-xs text-gray-700 font-medium">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-[#0A192F] flex-shrink-0" />
                <a href="mailto:Cristiano.akash7@gmail.com" className="hover:underline break-all">
                  Cristiano.akash7@gmail.com
                </a>
              </div>
              
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-[#0A192F] flex-shrink-0" />
                <a href="tel:7985721822" className="hover:underline">
                  7985721822
                </a>
              </div>

              <div className="flex items-center space-x-2">
                <Instagram className="h-4 w-4 text-[#0A192F] flex-shrink-0" />
                <a href="https://instagram.com/jerseyvilla.shop" target="_blank" rel="noreferrer" className="hover:underline break-all">
                  instagram.com/jerseyvilla.shop
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 text-center text-xs font-semibold text-gray-500">
          © 2025 Jerseyvilla. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};
