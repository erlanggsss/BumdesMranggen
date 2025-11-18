import React, { useState } from 'react';
import Icon from '../AppIcon';

const WhatsAppFloatingButton = ({ 
  phoneNumber = "6283843343328",
  className = "",
  isMenuOpen = false
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Halo BUMDes Gotong Royong Sejahtera! Saya tertarik untuk mengetahui lebih lanjut tentang produk dan layanan yang tersedia."
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className={`fixed bottom-6 right-6 z-40 transition-all duration-300 ${
      isMenuOpen 
        ? 'opacity-0 translate-y-4 pointer-events-none' 
        : 'opacity-100 translate-y-0'
    } ${className}`}>
      <button
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-250 flex items-center justify-center animate-bounce-gentle"
        aria-label="Hubungi via WhatsApp"
      >
        <Icon 
          name="MessageCircle" 
          size={28} 
          color="white" 
          className="transition-transform duration-250 group-hover:scale-110"
        />
        
        {/* Tooltip */}
        <div className={`absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm font-inter rounded-lg shadow-lg whitespace-nowrap transition-all duration-250 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
        }`}>
          Hubungi via WhatsApp
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>

        {/* Pulse Animation Ring */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
      </button>
    </div>
  );
};

export default WhatsAppFloatingButton;