import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FooterSection = () => {
  const currentYear = new Date()?.getFullYear();

  const quickLinks = [
    { name: 'Beranda', href: '#beranda' },
    { name: 'Tentang Kami', href: '#tentang' },
    { name: 'Unit Usaha', href: '#unit-usaha' },
    { name: 'Program', href: '#program' },
    { name: 'Produk', href: '#produk' },
    { name: 'Kontak', href: '#kontak' }
  ];

  const services = [
    { name: 'Pertanian', href: '#unit-usaha' },
    { name: 'Perkebunan', href: '#unit-usaha' },
    { name: 'Peternakan', href: '#unit-usaha' },
    { name: 'Mitra Usaha', href: '#kontak' }
  ];

  const contactInfo = [
    {
      icon: 'MapPin',
      title: 'Alamat',
      content: 'Jl. Desa Mranggen No. 123\nMranggen, Demak, Jawa Tengah 59567'
    },
    {
      icon: 'Phone',
      title: 'Telepon',
      content: '+62 838-4334-3328\n(024) 123-4567'
    },
    {
      icon: 'Clock',
      title: 'Jam Operasional',
      content: 'Senin-Jumat: 08:00-16:00 WIB\nSabtu: 08:00-12:00 WIB'
    }
  ];

  const handleScrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent('Halo! Saya tertarik untuk mengetahui lebih lanjut tentang BUMDes Gotong Royong Sejahtera.');
    const whatsappUrl = `https://wa.me/6283843343328?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                  <Icon name="Leaf" size={28} color="white" />
                </div>
                <div>
                  <h3 className="font-poppins font-bold text-xl text-white">BUMDes</h3>
                  <p className="font-inter text-sm text-gray-300">Gotong Royong Sejahtera</p>
                </div>
              </div>
              
              <p className="font-inter text-gray-300 leading-relaxed mb-6 text-sm">
                BUMDes Gotong Royong Sejahtera merupakan Badan Usaha Milik Desa yang berdiri sebagai wadah penggerak ekonomi lokal dan pemberdayaan masyarakat. Dengan dukungan penuh dari pemerintah desa serta partisipasi aktif warga, BUMDes Mranggen berkomitmen untuk mengelola potensi desa secara profesional, transparan, dan berkelanjutan.
              </p>
            </div>

            {/* Quick Links */}
            <div className="lg:pl-20">
              <h4 className="font-poppins font-semibold text-white mb-6">Navigasi Cepat</h4>
              <ul className="space-y-3">
                {quickLinks?.map((link) => (
                  <li key={link?.name}>
                    <button
                      onClick={() => handleScrollToSection(link?.href)}
                      className="font-inter text-gray-300 hover:text-primary transition-colors duration-200 text-left text-sm"
                    >
                      {link?.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="lg:pl-12">
              <h4 className="font-poppins font-semibold text-white mb-6">Layanan Kami</h4>
              <ul className="space-y-3">
                {services?.map((service) => (
                  <li key={service?.name}>
                    <button
                      onClick={() => handleScrollToSection(service?.href)}
                      className="font-inter text-gray-300 hover:text-primary transition-colors duration-200 text-left text-sm"
                    >
                      {service?.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-poppins font-semibold text-white mb-6">Informasi Kontak</h4>
              <div className="space-y-4">
                {contactInfo?.map((info, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon name={info?.icon} size={16} color="var(--color-primary)" />
                    </div>
                    <div>
                      <h5 className="font-inter font-medium text-white text-sm mb-1">{info?.title}</h5>
                      <div className="space-y-1">
                        {info?.content?.split('\n')?.map((line, lineIndex) => (
                          <p key={lineIndex} className="font-inter text-gray-300 text-sm">
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Contact Button */}
              <div className="mt-6">
                <Button
                  variant="default"
                  size="sm"
                  onClick={handleWhatsAppContact}
                  iconName="MessageCircle"
                  iconPosition="left"
                  className="w-full"
                >
                  Hubungi via WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Footer */}
      <div className="border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="font-inter text-gray-400 text-sm">
                © {currentYear} BUMDes Gotong Royong Sejahtera. Seluruh hak cipta dilindungi undang-undang.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;