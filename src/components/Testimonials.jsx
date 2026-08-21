import React, { useState } from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Rahul S',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    stars: 5,
    quote: '"I was skeptical at first because online fakes are everywhere, but the player-issue kit I ordered is 100% verified authentic. Stunning quality, original tags, and perfect fonts!"'
  },
  {
    id: 2,
    name: 'Sakshi',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
    stars: 5,
    quote: '"Excellent service. The official league font printing and sleeve patches are flawless. It looks and feels exactly like what the players wear on match day."'
  }
];

export const Testimonials = () => {
  const [activeDot, setActiveDot] = useState(0);

  return (
    <section className="w-full bg-[#F6F4EE] py-12 sm:py-16 border-b border-[#E3DDD0]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Subtitle & Title */}
        <span className="text-[10px] font-black tracking-[0.25em] text-[#0A192F] uppercase">
          WHAT OUR CUSTOMERS SAY
        </span>
        <h2 className="mt-1 font-bebas text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-[#0A192F] tracking-tight mb-10">
          Trusted by Football Fans Across India
        </h2>

        {/* 2 Review Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8 max-w-5xl mx-auto">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="flex items-start gap-4 rounded-xl border border-[#E3DDD0] bg-[#FAF8F3] p-5 sm:p-6 text-left shadow-sm transition-all hover:border-[#0A192F] hover:shadow-md"
            >
              {/* Avatar */}
              <img
                src={rev.avatar}
                alt={rev.name}
                className="h-12 w-12 rounded-full object-cover border-2 border-[#0A192F] flex-shrink-0"
              />

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-sans text-sm font-bold text-[#0A192F]">
                    {rev.name}
                  </h3>
                  {/* Star Rating */}
                  <div className="flex items-center space-x-0.5 text-red-600">
                    {[...Array(rev.stars)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-red-600 text-red-600" />
                    ))}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-medium">
                  {rev.quote}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="mt-8 flex items-center justify-center space-x-2">
          {[0, 1, 2].map((idx) => (
            <button
              key={idx}
              onClick={() => setActiveDot(idx)}
              aria-label={`Slide ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                activeDot === idx ? 'w-6 bg-[#0A192F]' : 'w-2.5 bg-[#E3DDD0] hover:bg-[#0A192F]/40'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
