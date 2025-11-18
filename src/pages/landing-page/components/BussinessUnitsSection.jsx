import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const BusinessUnitsSection = () => {
  const [activeUnit, setActiveUnit] = useState(null);

  const businessUnits = [
  {
    id: 'agriculture',
    title: 'Pertanian',
    icon: 'Wheat',
    image: "https://images.unsplash.com/photo-1677222383404-cf4510f7f5d1",
    imageAlt: 'Indonesian farmers working in green rice terraces with traditional farming tools during harvest season',
    description: 'Mengembangkan sektor pertanian dengan teknologi modern dan praktik berkelanjutan',
    contact: '+62 838-4334-3328'
  },
  {
    id: 'livestock',
    title: 'Peternakan',
    icon: 'Beef',
    image: "https://images.unsplash.com/photo-1643727920313-15ba10650995",
    imageAlt: 'Indonesian livestock farm with healthy cattle and modern farming facilities in village setting',
    description: 'Mengembangkan usaha peternakan modern dengan standar kesehatan dan nutrisi terbaik',
    contact: '+62 838-4334-3328'
  }];


  const handleWhatsAppContact = (phoneNumber, unitTitle) => {
    const message = encodeURIComponent(`Halo! Saya tertarik dengan unit usaha ${unitTitle} BUMDes Gotong Royong Sejahtera. Mohon informasi lebih lanjut.`);
    const whatsappUrl = `https://wa.me/${phoneNumber?.replace(/[^0-9]/g, '')}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="unit-usaha" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Mobile-first responsive */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4 sm:mb-6">
            Unit Usaha Kami
          </h2>
          <p className="font-inter text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
            Dua pilar utama BUMDes Gotong Royong Sejahtera menjadi fondasi dalam membangun ekonomi lokal yang mandiri dan berdaya saing.          </p>
        </div>

        {/* Business Units Grid - Responsive layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {businessUnits?.map((unit, index) =>
          <div
            key={unit?.id}
            className={`bg-white rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl cursor-pointer ${
            activeUnit === unit?.id ? 'ring-2 ring-primary' : ''}`
            }
            onClick={() => setActiveUnit(activeUnit === unit?.id ? null : unit?.id)}>

              {/* Card Header - Responsive image */}
              <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                <picture>
                  <source 
                    media="(max-width: 767px)" 
                    srcSet={`${unit?.image}?w=600&h=400&fit=crop&crop=center`}
                  />
                  <source 
                    media="(max-width: 1023px)" 
                    srcSet={`${unit?.image}?w=800&h=500&fit=crop&crop=center`}
                  />
                  <Image
                    src={`${unit?.image}?w=1000&h=600&fit=crop&crop=center`}
                    alt={unit?.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                </picture>

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-lg sm:rounded-xl flex items-center justify-center">
                    <Icon name={unit?.icon} size={20} color="white" className="sm:w-6 sm:h-6" />
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                  <h3 className="font-poppins font-bold text-lg sm:text-xl text-white mb-2">
                    {unit?.title}
                  </h3>
                  <p className="font-inter text-white/90 text-sm sm:text-base line-clamp-2">
                    {unit?.description}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Call to Action - Responsive design */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-surface p-6 sm:p-8 rounded-2xl sm:rounded-3xl">
            <h3 className="font-poppins font-bold text-lg sm:text-xl lg:text-2xl text-gray-900 mb-4">
              Tertarik Bergabung dengan Unit Usaha Kami?
            </h3>
            <p className="font-inter text-sm sm:text-base text-gray-600 mb-6 max-w-2xl mx-auto px-2 sm:px-0">
              Kami selalu terbuka untuk kemitraan dan partisipasi masyarakat dalam mengembangkan ekonomi desa bersama-sama
            </p>
            <Button
              variant="default"
              size="lg"
              onClick={() => {
                const element = document.querySelector('#kontak');
                if (element) {
                  element?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              iconName="Users"
              iconPosition="left"
              className="w-full sm:w-auto min-h-12">

              Hubungi Kami Sekarang
            </Button>
          </div>
        </div>
      </div>
    </section>);

};

export default BusinessUnitsSection;