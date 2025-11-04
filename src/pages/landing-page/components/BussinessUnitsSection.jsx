import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const BusinessUnitsSection = () => {
  const [activeUnit, setActiveUnit] = useState(null);

  const businessUnits = [
  {
    id: 'agriculture',
    title: 'Pertanian & Perkebunan',
    icon: 'Wheat',
    image: "https://images.unsplash.com/photo-1677222383404-cf4510f7f5d1",
    imageAlt: 'Indonesian farmers working in green rice terraces with traditional farming tools during harvest season',
    description: 'Mengembangkan sektor pertanian dengan teknologi modern dan praktik berkelanjutan',
    services: [
    'Produksi beras organik',
    'Budidaya sayuran hidroponik',
    'Peternakan ayam kampung',
    'Pengolahan pupuk kompos'],

    contact: '+62 812-3456-7890',
    revenue: 'Rp 800 juta/tahun',
    members: '150 petani'
  },
  {
    id: 'tourism',
    title: 'Wisata Desa',
    icon: 'Camera',
    image: "https://images.unsplash.com/photo-1729669375200-9008ea007cdd",
    imageAlt: 'Traditional Indonesian village tourism site with bamboo houses, cultural performances, and visitors enjoying local activities',
    description: 'Mengembangkan potensi wisata alam dan budaya untuk meningkatkan ekonomi masyarakat',
    services: [
    'Wisata alam dan edukasi',
    'Homestay tradisional',
    'Paket wisata kuliner',
    'Workshop kerajinan lokal'],

    contact: '+62 812-3456-7891',
    revenue: 'Rp 600 juta/tahun',
    members: '80 pelaku wisata'
  },
  {
    id: 'umkm',
    title: 'UMKM & Kerajinan',
    icon: 'Hammer',
    image: "https://images.unsplash.com/photo-1677146339793-ad2f6e8bf64f",
    imageAlt: 'Indonesian artisan crafting traditional bamboo products in workshop with various handmade items displayed',
    description: 'Memberdayakan usaha kecil dan menengah serta kerajinan tangan khas daerah',
    services: [
    'Kerajinan bambu dan rotan',
    'Produk makanan olahan',
    'Tekstil dan batik lokal',
    'Pemasaran online'],

    contact: '+62 812-3456-7892',
    revenue: 'Rp 1.2 miliar/tahun',
    members: '200 UMKM'
  },
  {
    id: 'water',
    title: 'Pengelolaan Air',
    icon: 'Droplets',
    image: "https://images.unsplash.com/photo-1472633000120-16b5381f2c04",
    imageAlt: 'Modern water management facility in Indonesian village with clean water distribution system and storage tanks',
    description: 'Menyediakan air bersih berkualitas dan mengelola sistem irigasi desa',
    services: [
    'Penyediaan air bersih',
    'Sistem irigasi pertanian',
    'Pengolahan air limbah',
    'Maintenance infrastruktur'],

    contact: '+62 812-3456-7893',
    revenue: 'Rp 400 juta/tahun',
    members: '100% warga terlayani'
  }];


  const handleWhatsAppContact = (phoneNumber, unitTitle) => {
    const message = encodeURIComponent(`Halo! Saya tertarik dengan unit usaha ${unitTitle} BUMDes Mranggen. Mohon informasi lebih lanjut.`);
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
          <p className="font-inter text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
            Empat pilar utama BUMDes Mranggen yang menggerakkan ekonomi desa dan menciptakan lapangan kerja berkelanjutan untuk masyarakat
          </p>
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

              {/* Card Content - Responsive padding */}
              <div className="p-4 sm:p-6">
                {/* Quick Stats - Responsive grid */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="text-center">
                    <p className="font-poppins font-semibold text-base sm:text-lg text-primary">
                      <span className="hidden sm:inline">{unit?.revenue}</span>
                      <span className="sm:hidden">{unit?.revenue?.replace('/tahun', '')}</span>
                    </p>
                    <p className="font-inter text-xs sm:text-sm text-gray-600">Pendapatan</p>
                  </div>
                  <div className="text-center">
                    <p className="font-poppins font-semibold text-base sm:text-lg text-primary">
                      {unit?.members}
                    </p>
                    <p className="font-inter text-xs sm:text-sm text-gray-600">Anggota</p>
                  </div>
                </div>

                {/* Expandable Content */}
                {activeUnit === unit?.id &&
              <div className="space-y-4 border-t border-gray-100 pt-4 sm:pt-6">
                    <div>
                      <h4 className="font-poppins font-semibold text-gray-900 mb-3 text-sm sm:text-base">
                        Layanan Utama:
                      </h4>
                      <ul className="space-y-2">
                        {unit?.services?.map((service, serviceIndex) =>
                    <li key={serviceIndex} className="flex items-start space-x-2">
                            <Icon name="Check" size={16} color="var(--color-primary)" className="mt-0.5 flex-shrink-0" />
                            <span className="font-inter text-gray-700 text-sm sm:text-base">{service}</span>
                          </li>
                    )}
                      </ul>
                    </div>

                    <Button
                  variant="default"
                  size="sm"
                  onClick={(e) => {
                    e?.stopPropagation();
                    handleWhatsAppContact(unit?.contact, unit?.title);
                  }}
                  iconName="MessageCircle"
                  iconPosition="left"
                  className="w-full min-h-12 sm:min-h-10 text-sm sm:text-base">

                      Hubungi via WhatsApp
                    </Button>
                  </div>
              }

                {/* Toggle Button - Touch-friendly */}
                <div className="flex justify-center mt-4">
                  <button
                  className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors duration-200 min-h-11 px-4 py-2 rounded-md"
                  onClick={(e) => {
                    e?.stopPropagation();
                    setActiveUnit(activeUnit === unit?.id ? null : unit?.id);
                  }}>

                    <span className="font-inter text-sm sm:text-base">
                      {activeUnit === unit?.id ? 'Tutup Detail' : 'Lihat Detail'}
                    </span>
                    <Icon
                    name={activeUnit === unit?.id ? 'ChevronUp' : 'ChevronDown'}
                    size={16} />

                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Call to Action - Responsive design */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-surface p-6 sm:p-8 rounded-2xl sm:rounded-3xl">
            <h3 className="font-poppins font-bold text-xl sm:text-2xl text-gray-900 mb-4">
              Tertarik Bergabung dengan Unit Usaha Kami?
            </h3>
            <p className="font-inter text-gray-600 mb-6 max-w-2xl mx-auto text-sm sm:text-base px-2 sm:px-0">
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