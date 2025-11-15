import React from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  const handleViewProducts = () => {
    const element = document.querySelector('#produk');
    if (element) {
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLearnMore = () => {
    const element = document.querySelector('#tentang');
    if (element) {
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="beranda" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-14 sm:pt-16 lg:pt-18">
      {/* Background Image with responsive optimization */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source
            media="(max-width: 767px)"
            srcSet="https://images.unsplash.com/photo-1572268806390-e674a8342124?w=800&h=1200&fit=crop&crop=center" />

          <source
            media="(max-width: 1023px)"
            srcSet="https://images.unsplash.com/photo-1572268806390-e674a8342124?w=1200&h=800&fit=crop&crop=center" />

          <Image
            src="https://images.unsplash.com/photo-1572268806390-e674a8342124"
            alt="Beautiful Indonesian village landscape with traditional houses, green rice fields, and mountains in the background during golden hour"
            className="w-full h-full object-cover"
            loading="eager" />

        </picture>

        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content - Mobile-first responsive design */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline - Responsive typography */}
          <h1 className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white mb-4 sm:mb-6 leading-tight">
            Membangun <span className="text-primary">Kemakmuran Desa</span> Bersama{' '}
            <span className="text-primary">Kami</span>
          </h1>

          {/* Supporting Subheadline - Responsive text */}
          <p className="font-inter text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            Badan Usaha Milik Desa yang dikelola secara transparan, didukung oleh pemerintah, dan berkomitmen mengembangkan ekonomi masyarakat serta menciptakan lapangan kerja yang berkelanjutan.
          </p>

          {/* Trust Indicators - Responsive grid */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-2 sm:px-4 min-h-10">
              <Icon name="Shield" size={18} color="white" className="sm:w-5 sm:h-5" />
              <span className="text-white font-inter text-sm sm:text-base">Terdaftar Resmi</span>
            </div>
          </div>

          {/* Dual CTAs - Touch-friendly buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 sm:px-0">
            <Button
              variant="outline"
              size="lg"
              onClick={handleLearnMore}
              iconName="ArrowRight"
              iconPosition="right"
              className="w-full sm:w-auto min-h-12 sm:min-h-11 text-base sm:text-sm font-medium bg-primary/20 backdrop-blur-sm border-primary text-white hover:bg-primary hover:text-white">

              Kenali Lebih Dekat
            </Button>
          </div>
        </div>
      </div>

    </section>);

};

export default HeroSection;