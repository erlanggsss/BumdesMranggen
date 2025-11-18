import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQSection = () => {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const faqs = [
    {
      id: 1,
      category: 'Umum',
      question: 'Apa itu BUMDes dan bagaimana cara kerjanya?',
      answer: `BUMDes (Badan Usaha Milik Desa) adalah lembaga usaha yang dimiliki dan dikelola oleh pemerintah desa dan masyarakat. BUMDes Gotong Royong Sejahtera mengelola sektor pertanian dan peternakan dengan standar profesional, transparansi, dan komitmen penuh terhadap pemberdayaan masyarakat.\n\nCara kerja BUMDes:\n• Mengelola unit usaha pertanian dan peternakan dengan efisiensi tinggi\n• Memberikan konsultasi teknis dan dukungan kepada petani dan peternak\n• Mengembangkan ekonomi lokal melalui kemitraan strategis\n• Membagikan keuntungan untuk pembangunan desa dan meningkatkan kesejahteraan masyarakat`
    },
    {
      id: 2,
      category: 'Keanggotaan',
      question: 'Siapa saja yang bisa menjadi anggota BUMDes?',
      answer: `Keanggotaan BUMDes Gotong Royong Sejahtera terbuka untuk:\n\n• Seluruh warga Desa Mranggen yang berusia minimal 17 tahun\n• Memiliki KTP dengan domisili di Desa Mranggen\n• Berkomitmen untuk berpartisipasi aktif dalam kegiatan BUMDes\n• Bersedia mengikuti aturan dan ketentuan yang berlaku\n\nProses pendaftaran mudah dan gratis. Anggota akan mendapatkan akses ke program pelatihan, bantuan modal usaha, dan layanan BUMDes untuk mengembangkan usaha pertanian dan peternakan mereka.`
    },
    {
      id: 3,
      category: 'Layanan',
      question: 'Apa saja layanan yang tersedia di BUMDes Gotong Royong Sejahtera?',
      answer: `BUMDes Gotong Royong Sejahtera menyediakan layanan unggulan di dua sektor utama:\n\n🌾 Unit Pertanian:\n• Produksi pertanian berkualitas dengan standar profesional dan berkelanjutan\n• Konsultasi teknis pertanian dan manajemen lahan\n• Penyediaan bibit unggul dan pupuk berkualitas\n• Bantuan pemasaran hasil pertanian ke pasar yang lebih luas\n\n🐄 Unit Peternakan:\n• Produksi ternak dengan manajemen efektif dan efisien\n• Konsultasi teknis pemeliharaan dan kesehatan hewan\n• Penyediaan pakan berkualitas dan vaksinasi rutin\n• Dukungan pemasaran produk peternakan\n\n🤝 Layanan Kemitraan & Pemberdayaan:\n• Program pelatihan untuk meningkatkan keterampilan petani dan peternak\n• Bantuan modal usaha dengan syarat yang terjangkau\n• Fasilitasi akses ke pasar dan jaringan bisnis\n• Pendampingan bisnis untuk mitra usaha`
    },
    {
      id: 4,
      category: 'Kemitraan',
      question: 'Bagaimana cara bermitra dengan BUMDes Gotong Royong Sejahtera?',
      answer: `Kami menyambut baik kemitraan strategis dengan berbagai pihak:\n\n📋 Syarat Kemitraan:\n• Memiliki legalitas usaha yang lengkap\n• Visi misi yang sejalan dengan pemberdayaan masyarakat\n• Komitmen jangka panjang untuk pengembangan desa\n\n🤝 Bentuk Kemitraan:\n• Kerjasama pemasaran produk\n• Program CSR dan pemberdayaan masyarakat\n• Transfer teknologi dan pengetahuan\n• Investasi pengembangan infrastruktur\n\nHubungi tim kami untuk diskusi lebih lanjut tentang peluang kemitraan yang saling menguntungkan.`
    },
    {
      id: 5,
      category: 'Kontak',
      question: 'Bagaimana cara menghubungi BUMDes untuk informasi lebih lanjut?',
      answer: `Tim customer service BUMDes Gotong Royong Sejahtera siap membantu Anda:\n\n📞 Kontak Utama:\n• WhatsApp: +62 838-4334-3328 (24/7)\n• Email: bumdesgotongroyongsejahtera@gmail.com\n\n🏢 Alamat Kantor:\n• Jl. Sukoharjo, Kedunggandu, Mranggen, Kec. Polokarto, Kabupaten Sukoharjo, Jawa Tengah 57513\n• Jam operasional: Senin-Jumat 08:00-16:00 WIB\n• Sabtu: 08:00-12:00 WIB\n\nKami berkomitmen merespons setiap pertanyaan dalam waktu maksimal 2 jam pada jam kerja.`
    }
  ];

  const categories = ['Semua', 'Umum', 'Keanggotaan', 'Layanan', 'Kemitraan', 'Kontak'];
  const [activeCategory, setActiveCategory] = useState('Semua');

  const filteredFAQs = activeCategory === 'Semua' 
    ? faqs 
    : faqs?.filter(faq => faq?.category === activeCategory);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-20 bg-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="font-inter text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
            Temukan jawaban atas pertanyaan umum tentang BUMDes Gotong Royong Sejahtera, layanan, keanggotaan, dan cara bergabung dengan kami
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories?.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full font-inter text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50 shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {filteredFAQs?.map((faq, index) => (
            <div
              key={faq?.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              {/* Question Header */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex items-start space-x-4 flex-1">
                  <div className="flex-shrink-0">
                    <span className="inline-block w-8 h-8 bg-primary/10 text-primary rounded-full text-sm font-bold flex items-center justify-center">
                      {index + 1}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="px-2 py-1 bg-primary/10 text-primary rounded-lg font-inter text-xs font-medium">
                        {faq?.category}
                      </span>
                    </div>
                    <h3 className="font-poppins font-semibold text-sm sm:text-base lg:text-lg text-gray-900 pr-4">
                      {faq?.question}
                    </h3>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <Icon
                    name={activeAccordion === index ? 'ChevronUp' : 'ChevronDown'}
                    size={24}
                    color="var(--color-primary)"
                    className="transition-transform duration-200"
                  />
                </div>
              </button>

              {/* Answer Content */}
              {activeAccordion === index && (
                <div className="px-6 pb-6">
                  <div className="pl-12">
                    <div className="bg-surface p-6 rounded-xl">
                      <div className="prose prose-sm max-w-none">
                        {faq?.answer?.split('\n')?.map((paragraph, pIndex) => {
                          if (paragraph?.trim() === '') return null;
                          
                          // Handle bullet points
                          if (paragraph?.startsWith('•')) {
                            return (
                              <div key={pIndex} className="flex items-start space-x-2 mb-2">
                                <Icon name="Check" size={16} color="var(--color-primary)" className="mt-1 flex-shrink-0" />
                                <span className="font-inter text-sm sm:text-base text-gray-700">{paragraph?.substring(1)?.trim()}</span>
                              </div>
                            );
                          }
                          
                          // Handle emoji headers
                          if (paragraph?.match(/^[🌾🏕️🏭💧📋🤝💰📊🎯📱📦💳🎓🏆📅📞🏢🌐]/)) {
                            return (
                              <h4 key={pIndex} className="font-poppins font-semibold text-sm sm:text-base text-gray-900 mt-4 mb-2 first:mt-0">
                                {paragraph}
                              </h4>
                            );
                          }
                          
                          // Regular paragraphs
                          return (
                            <p key={pIndex} className="font-inter text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
                              {paragraph}
                            </p>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                <Icon name="MessageCircle" size={32} color="var(--color-primary)" />
              </div>
            </div>
            <h3 className="font-poppins font-bold text-lg sm:text-xl lg:text-2xl text-gray-900 mb-4">
              Masih Ada Pertanyaan?
            </h3>
            <p className="font-inter text-xs sm:text-sm lg:text-base text-gray-600 mb-6 max-w-2xl mx-auto">
              Tim customer service kami siap membantu menjawab pertanyaan spesifik Anda. Jangan ragu untuk menghubungi kami kapan saja.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => {
                  const message = encodeURIComponent('Halo! Saya memiliki pertanyaan tentang BUMDes Gotong Royong Sejahtera. Mohon bantuan informasinya.');
                  const whatsappUrl = `https://wa.me/6283843343328?text=${message}`;
                  window.open(whatsappUrl, '_blank');
                }}
                className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-inter text-xs sm:text-sm font-medium transition-colors duration-200"
              >
                <Icon name="MessageCircle" size={20} />
                <span>Chat WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;