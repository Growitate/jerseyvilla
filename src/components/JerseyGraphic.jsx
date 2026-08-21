import React from 'react';

const jerseyImages = {
  'bellingham-back': '/images/hero_bellingham.jpg',
  'liverpool-home': '/images/liverpool.jpg',
  'real-madrid-home': '/images/real_madrid.jpg',
  'mancity-home': '/images/man_city.jpg',
  'barcelona-home': '/images/barcelona.jpg',
  'arsenal-home': '/images/arsenal.jpg',
  'acmilan-retro': '/images/ac_milan.jpg',
  'france-black-gold': '/images/france_black.jpg',
  'france-blue': '/images/france_blue.jpg',
  'argentina-home': '/images/argentina.jpg',
  'brazil-home': '/images/brazil.jpg',
};

const jerseyTitles = {
  'bellingham-back': 'Real Madrid Bellingham #5 Jersey',
  'liverpool-home': 'Liverpool Home Jersey 24/25',
  'real-madrid-home': 'Real Madrid Home Jersey 24/25',
  'mancity-home': 'Manchester City Home Jersey 24/25',
  'barcelona-home': 'Barcelona Home Jersey 24/25',
  'arsenal-home': 'Arsenal Home Jersey 24/25',
  'acmilan-retro': 'AC Milan Retro 1996 Jersey',
  'france-black-gold': 'France Special Edition Black & Gold Jersey',
  'france-blue': 'France Home Jersey',
  'argentina-home': 'Argentina Home Jersey',
  'brazil-home': 'Brazil Home Jersey',
};

export const JerseyGraphic = ({ type, className = "h-48 w-full" }) => {
  const imageSrc = jerseyImages[type];
  const title = jerseyTitles[type] || 'Football Jersey';

  if (imageSrc) {
    return (
      <img
        src={imageSrc}
        alt={title}
        className={`object-cover rounded-lg shadow-md transition-transform duration-300 ${className}`}
        loading="lazy"
      />
    );
  }

  return (
    <div className={`flex items-center justify-center bg-gray-200 rounded-lg ${className}`}>
      <span className="text-xs text-gray-500 font-bold">{title}</span>
    </div>
  );
};

