import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Check, Clock } from 'lucide-react';

export const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Custom Order / Inquiry',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', subject: 'Custom Order / Inquiry', message: '' });
  };

  return (
    <div className="w-full bg-[#F5EEDC] min-h-screen py-12 lg:py-20 select-none">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="font-bebas text-4xl sm:text-6xl font-black uppercase text-[#16264F] tracking-tight leading-none mb-3">
            GET IN TOUCH WITH US
          </h1>
          <p className="text-[#3A3A3A] text-sm sm:text-base font-normal">
            Have questions about custom printing, squad orders, or tracking your delivery? Our team is ready to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Contact Details (5 Cols) */}
          <div className="lg:col-span-5 bg-[#0E1B38] text-white rounded-2xl p-8 sm:p-10 border-2 border-[#16264F] shadow-xl space-y-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] opacity-5 [background-size:16px_16px]" />
            
            <div className="relative z-10 space-y-2 border-b border-white/10 pb-6">
              <h2 className="font-bebas text-3xl font-bold uppercase text-white">CUSTOMER HELP DESK</h2>
              <p className="text-xs text-gray-300">
                Direct support for order customizations, sizing guidance, and bulk team kits.
              </p>
            </div>

            <div className="relative z-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#16264F] rounded-lg text-white">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">WhatsApp & Phone Support</h4>
                  <p className="text-sm font-bold text-white mt-0.5">+91 98765 43210</p>
                  <p className="text-[11px] text-emerald-400 font-semibold mt-1">Available Mon–Sat: 10 AM – 7 PM IST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#16264F] rounded-lg text-white">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">Email Inquiries</h4>
                  <p className="text-sm font-bold text-white mt-0.5">support@jerseyvilla.com</p>
                  <p className="text-[11px] text-gray-400 mt-1">Replies within 2 to 4 business hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#16264F] rounded-lg text-white">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">Printing Lab & HQ</h4>
                  <p className="text-sm font-bold text-white mt-0.5">JerseyVilla Apparel Ltd.</p>
                  <p className="text-xs text-gray-300">Plot 45, Sports Complex Industrial Area, Mumbai, Maharashtra 400001</p>
                </div>
              </div>
            </div>

          </div>

          {/* Contact Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white border-2 border-[#16264F]/20 rounded-2xl p-8 sm:p-10 shadow-sm">
            <h2 className="font-bebas text-2xl font-black uppercase text-[#16264F] mb-6">
              SEND US A MESSAGE
            </h2>

            {submitted && (
              <div className="mb-6 p-4 bg-emerald-700 text-white rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                <Check className="h-5 w-5" />
                <span>Thank you! Your message has been received. Our team will contact you shortly.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#16264F] mb-1.5">
                    Your Full Name
                  </label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full bg-[#F5EEDC]/40 border-2 border-[#16264F]/20 rounded-lg px-3.5 py-2.5 text-sm font-bold text-[#16264F] focus:border-[#16264F] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#16264F] mb-1.5">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full bg-[#F5EEDC]/40 border-2 border-[#16264F]/20 rounded-lg px-3.5 py-2.5 text-sm font-bold text-[#16264F] focus:border-[#16264F] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#16264F] mb-1.5">
                  Subject / Topic
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-[#F5EEDC]/40 border-2 border-[#16264F]/20 rounded-lg px-3.5 py-2.5 text-sm font-bold text-[#16264F] focus:border-[#16264F] focus:outline-none"
                >
                  <option value="Custom Order / Inquiry">Custom Jersey Printing Inquiry</option>
                  <option value="Order Status & Tracking">Order Status & Tracking</option>
                  <option value="Bulk Squad Orders">Bulk Squad / Team Orders (10+ Kits)</option>
                  <option value="Exchanges & Returns">Exchanges & Returns</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#16264F] mb-1.5">
                  Message
                </label>
                <textarea 
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about the jersey customization, player name, or squad requirements you need..."
                  className="w-full bg-[#F5EEDC]/40 border-2 border-[#16264F]/20 rounded-lg px-3.5 py-2.5 text-sm font-bold text-[#16264F] focus:border-[#16264F] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#16264F] hover:bg-[#0E1A38] text-white font-bebas text-lg font-bold uppercase tracking-wider rounded-lg shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Send className="h-4 w-4" />
                <span>SUBMIT MESSAGE</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
};
