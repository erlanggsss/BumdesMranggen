import React, { useState, useEffect } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const VillageIdentitySection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Slideshow images
  const slideshowImages = [
    {
      src: '/assets/hero1.png',
      alt: 'BUMDes members processing agricultural products with traditional methods'
    },
    {
      src: '/assets/hero2.png',
      alt: 'Farmer harvesting eggplant in the field with sustainable farming practices'
    },
    {
      src: '/assets/hero3.jpg',
      alt: 'Workers preparing vegetables for market distribution and sale'
    }
  ];

  // Auto-advance slideshow every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % slideshowImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slideshowImages.length]);

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev - 1 + slideshowImages.length) % slideshowImages.length);
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % slideshowImages.length);
  };


  return (
    <section id="tentang" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6">
            Tentang BUMDes Gotong Royong Sejahtera
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <p className="font-inter text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                BUMDes Gotong Royong Sejahtera adalah lembaga usaha desa yang mengelola sektor pertanian dan peternakan dengan standar profesional dan efisiensi tinggi. Didukung oleh komitmen transparansi dan pemberdayaan masyarakat, kami beroperasi sebagai mitra terpercaya bagi petani, peternak, dan stakeholder lokal.
              </p>
              <p className="font-inter text-base sm:text-lg text-gray-700 leading-relaxed">
                Misi kami berfokus pada pertumbuhan berkelanjutan dengan meningkatkan produktivitas pertanian dan ternak, melibatkan komunitas dalam proses bisnis, mengembangkan jaringan kemitraan yang kuat, dan meningkatkan kesejahteraan ekonomi mitra usaha kami. Semua ini dijalankan dengan semangat gotong royong yang mengutamakan kemajuan bersama.
              </p>
            </div>
          </div>

          {/* Image with Slideshow */}
          <div className="relative lg:mt-22">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
              {/* Slideshow Container */}
              <div className="relative w-full h-96">
                {slideshowImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                {/* Navigation Arrows */}
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary rounded-full p-2 transition-all duration-200 opacity-0 group-hover:opacity-100 z-10"
                  aria-label="Previous image"
                >
                  <Icon name="ChevronLeft" size={24} />
                </button>

                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary rounded-full p-2 transition-all duration-200 opacity-0 group-hover:opacity-100 z-10"
                  aria-label="Next image"
                >
                  <Icon name="ChevronRight" size={24} />
                </button>

                {/* Slide Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center space-x-2 z-10">
                  {slideshowImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex
                          ? 'bg-white w-8'
                          : 'bg-white/50 w-2 hover:bg-white/75'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision - Full Width Centered */}
        <div className="mt-16">
          <div className="grid lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Icon name="Eye" size={24} color="var(--color-primary)" />
                </div>
                <h3 className="font-poppins font-semibold text-lg sm:text-xl text-gray-900">Visi</h3>
              </div>
              <p className="font-inter text-sm sm:text-base text-gray-700 leading-relaxed">
                Menjadikan Badan Usaha Milik Desa sebagai Badan Usaha yang terpercaya dan mewujudkan kesejahteraan serta kemajuan masyarakat desa.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Icon name="Target" size={24} color="var(--color-primary)" />
                </div>
                <h3 className="font-poppins font-semibold text-lg sm:text-xl text-gray-900">Misi</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <Icon name="Check" size={20} color="var(--color-primary)" className="mt-0.5 flex-shrink-0" />
                  <span className="font-inter text-sm sm:text-base text-gray-700">Melakukan usaha produksi pertanian yang baik dan menguntungkan.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Icon name="Check" size={20} color="var(--color-primary)" className="mt-0.5 flex-shrink-0" />
                  <span className="font-inter text-sm sm:text-base text-gray-700">Peningkatan produksi ternak secara efektif dan efesien.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Icon name="Check" size={20} color="var(--color-primary)" className="mt-0.5 flex-shrink-0" />
                  <span className="font-inter text-sm sm:text-base text-gray-700">Melibatkan masyarakat dalam usaha berbasis pemberdayaan.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Icon name="Check" size={20} color="var(--color-primary)" className="mt-0.5 flex-shrink-0" />
                  <span className="font-inter text-sm sm:text-base text-gray-700">Menjalin kemitraan dengan beberapa pihak.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Icon name="Check" size={20} color="var(--color-primary)" className="mt-0.5 flex-shrink-0" />
                  <span className="font-inter text-sm sm:text-base text-gray-700">Meningkatkan kesejahteraan mitra petani dan peternak.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default VillageIdentitySection;