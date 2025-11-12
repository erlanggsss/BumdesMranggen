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
    { name: 'Pertanian Organik', href: '#unit-usaha' },
    { name: 'Wisata Desa', href: '#unit-usaha' },
    { name: 'UMKM & Kerajinan', href: '#unit-usaha' },
    { name: 'Pengelolaan Air', href: '#unit-usaha' },
    { name: 'Pelatihan & Workshop', href: '#program' },
    { name: 'Konsultasi Bisnis', href: '#kontak' }
  ];

  const socialMedia = [
    { name: 'Facebook', icon: 'Facebook', url: 'https://facebook.com/bumdes.mranggen' },
    { name: 'Instagram', icon: 'Instagram', url: 'https://instagram.com/bumdes_mranggen' },
    { name: 'YouTube', icon: 'Youtube', url: 'https://youtube.com/@bumdesmranggen' },
    { name: 'WhatsApp', icon: 'MessageCircle', url: 'https://wa.me/6281234567890' }
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
      content: '+62 812-3456-7890\n(024) 123-4567'
    },
    {
      icon: 'Mail',
      title: 'Email',
      content: 'info@bumdes-mranggen.id\nadmin@bumdes-mranggen.id'
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
    const whatsappUrl = `https://wa.me/6281234567890?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-poppins font-bold text-2xl sm:text-3xl text-white mb-4">
            Dapatkan Update Terbaru BUMDes Gotong Royong Sejahtera
          </h3>
          <p className="font-inter text-white/90 mb-8 max-w-2xl mx-auto">
            Berlangganan newsletter kami untuk mendapatkan informasi terbaru tentang program, produk, dan perkembangan BUMDes Gotong Royong Sejahtera
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Masukkan email Anda"
              className="w-full px-4 py-3 rounded-xl text-gray-900 font-inter focus:ring-2 focus:ring-white focus:outline-none"
            />
            <Button
              variant="outline"
              size="lg"
              iconName="Send"
              iconPosition="left"
              className="bg-white text-primary hover:bg-gray-50 whitespace-nowrap"
            >
              Berlangganan
            </Button>
          </div>
        </div>
      </div>
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
                  <p className="font-inter text-sm text-gray-300">Makmur Sejahtera</p>
                </div>
              </div>
              
              <p className="font-inter text-gray-300 leading-relaxed mb-6">
                Badan Usaha Milik Desa yang berkomitmen membangun kemakmuran masyarakat melalui pemberdayaan ekonomi lokal yang berkelanjutan dan transparan.
              </p>

              {/* Social Media */}
              <div>
                <h4 className="font-poppins font-semibold text-white mb-4">Ikuti Kami</h4>
                <div className="flex space-x-3">
                  {socialMedia?.map((social) => (
                    <a
                      key={social?.name}
                      href={social?.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-xl flex items-center justify-center transition-colors duration-200"
                      aria-label={social?.name}
                    >
                      <Icon name={social?.icon} size={20} color="white" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-poppins font-semibold text-white mb-6">Navigasi Cepat</h4>
              <ul className="space-y-3">
                {quickLinks?.map((link) => (
                  <li key={link?.name}>
                    <button
                      onClick={() => handleScrollToSection(link?.href)}
                      className="font-inter text-gray-300 hover:text-primary transition-colors duration-200 text-left"
                    >
                      {link?.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-poppins font-semibold text-white mb-6">Layanan Kami</h4>
              <ul className="space-y-3">
                {services?.map((service) => (
                  <li key={service?.name}>
                    <button
                      onClick={() => handleScrollToSection(service?.href)}
                      className="font-inter text-gray-300 hover:text-primary transition-colors duration-200 text-left"
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

            {/* Legal Links */}
            <div className="flex items-center space-x-6">
              <button className="font-inter text-gray-400 hover:text-primary text-sm transition-colors duration-200">
                Kebijakan Privasi
              </button>
              <button className="font-inter text-gray-400 hover:text-primary text-sm transition-colors duration-200">
                Syarat & Ketentuan
              </button>
              <button className="font-inter text-gray-400 hover:text-primary text-sm transition-colors duration-200">
                Sitemap
              </button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6 pt-6 border-t border-gray-800">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center sm:text-left">
              <div>
                <h5 className="font-poppins font-semibold text-white text-sm mb-2">Legalitas</h5>
                <p className="font-inter text-gray-400 text-xs">
                  Terdaftar resmi di Kementerian Desa, PDT dan Transmigrasi RI
                </p>
              </div>
              <div>
                <h5 className="font-poppins font-semibold text-white text-sm mb-2">Sertifikasi</h5>
                <p className="font-inter text-gray-400 text-xs">
                  ISO 9001:2015 - Sistem Manajemen Mutu
                </p>
              </div>
              <div className="sm:col-span-2 lg:col-span-1">
                <h5 className="font-poppins font-semibold text-white text-sm mb-2">Penghargaan</h5>
                <p className="font-inter text-gray-400 text-xs">
                  BUMDes Terbaik Tingkat Kabupaten 2023
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;