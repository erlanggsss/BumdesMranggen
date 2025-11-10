import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
  {
    id: 1,
    type: 'resident',
    name: 'Siti Rahayu',
    role: 'Petani & Anggota BUMDes',
    image: "https://images.unsplash.com/photo-1449595360759-ed590fcf63ed",
    imageAlt: 'Indonesian village woman farmer in traditional clothing with warm smile and agricultural background',
    content: `Sejak bergabung dengan BUMDes Surya Buana, pendapatan keluarga saya meningkat 200%. Program pelatihan pertanian organik sangat membantu meningkatkan kualitas hasil panen. Sekarang produk saya bisa dijual dengan harga yang lebih baik.`,
    rating: 5,
    location: 'Desa Mranggen',
    joinedYear: '2020',
    businessType: 'Pertanian Organik'
  },
  {
    id: 2,
    type: 'partner',
    name: 'Ahmad Fauzi',
    role: 'Direktur PT. Agro Sejahtera',
    image: "https://images.unsplash.com/photo-1723990720514-65968a7d517b",
    imageAlt: 'Professional Indonesian businessman in formal suit with confident expression in modern office setting',
    content: `Kemitraan dengan BUMDes Surya Buana sangat menguntungkan. Mereka konsisten dalam kualitas produk dan tepat waktu dalam pengiriman. Tim manajemen yang profesional membuat kerjasama berjalan lancar dan saling menguntungkan.`,
    rating: 5,
    location: 'Jakarta',
    partnershipYear: '2021',
    businessType: 'Distributor Produk Pertanian'
  },
  {
    id: 3,
    type: 'resident',
    name: 'Budi Santoso',
    role: 'Pengrajin Bambu',
    image: "https://images.unsplash.com/photo-1466611653425-febe3672f454",
    imageAlt: 'Skilled Indonesian bamboo craftsman working with traditional tools in workshop surrounded by handmade products',
    content: `BUMDes memberikan pelatihan dan akses pasar yang luar biasa. Kerajinan bambu saya sekarang diekspor ke berbagai daerah. Program digitalisasi UMKM membantu saya menjual produk secara online dengan omzet yang meningkat drastis.`,
    rating: 5,
    location: 'Desa Mranggen',
    joinedYear: '2019',
    businessType: 'Kerajinan Bambu'
  },
  {
    id: 4,
    type: 'partner',
    name: 'Maya Kusuma',
    role: 'Manager Hotel Santika',
    image: "https://images.unsplash.com/photo-1660609389476-c961a2a11d40",
    imageAlt: 'Professional Indonesian hotel manager in business attire with hospitality industry background and welcoming smile',
    content: `Paket wisata desa dari BUMDes Surya Buana menjadi favorit tamu hotel kami. Pengalaman autentik yang ditawarkan sangat berkesan. Kerjasama ini membuka peluang wisata alternatif yang unik dan berkualitas tinggi.`,
    rating: 5,
    location: 'Semarang',
    partnershipYear: '2022',
    businessType: 'Hospitality & Tourism'
  },
  {
    id: 5,
    type: 'resident',
    name: 'Rina Sari',
    role: 'Pemilik Warung & UMKM',
    image: "https://images.unsplash.com/photo-1545640746-dfed9ddad77e",
    imageAlt: 'Indonesian small business owner woman in casual attire with food products and traditional market background',
    content: `Program pemberdayaan UMKM BUMDes sangat membantu mengembangkan usaha keripik singkong saya. Dari modal Rp 2 juta, sekarang omzet bulanan mencapai Rp 15 juta. Pelatihan manajemen keuangan dan pemasaran sangat bermanfaat.`,
    rating: 5,
    location: 'Desa Mranggen',
    joinedYear: '2021',
    businessType: 'Makanan Olahan'
  },
  {
    id: 6,
    type: 'partner',
    name: 'Dr. Sutrisno',
    role: 'Kepala Dinas Koperasi & UMKM',
    image: "https://images.unsplash.com/photo-1552666135-049975564f65",
    imageAlt: 'Indonesian government official in formal attire with professional demeanor and government office background',
    content: `BUMDes Surya Buana menjadi model percontohan di tingkat kabupaten. Transparansi pengelolaan dan dampak positif terhadap ekonomi masyarakat sangat luar biasa. Ini adalah contoh nyata keberhasilan program pemberdayaan ekonomi desa.`,
    rating: 5,
    location: 'Kabupaten Demak',
    partnershipYear: '2020',
    businessType: 'Pemerintah Daerah'
  }];


  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials?.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, testimonials?.length]);

  const handleTestimonialChange = (index) => {
    setActiveTestimonial(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10 seconds
  };

  const currentTestimonial = testimonials?.[activeTestimonial];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) =>
    <Icon
      key={index}
      name="Star"
      size={20}
      color={index < rating ? "#F59E0B" : "#E5E7EB"}
      className={index < rating ? "fill-current" : ""} />

    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-6">
            Testimoni Masyarakat
          </h2>
          <p className="font-inter text-lg text-gray-600 max-w-3xl mx-auto">
            Dengarkan langsung pengalaman dan kesuksesan masyarakat serta mitra bisnis yang telah bergabung dengan BUMDes Surya Buana
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="bg-surface rounded-3xl p-8 lg:p-12 mb-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Testimonial Content */}
            <div className="order-2 lg:order-1">
              {/* Type Badge */}
              <div className="flex items-center space-x-2 mb-6">
                <span className={`px-4 py-2 rounded-full font-inter text-sm font-medium ${
                currentTestimonial?.type === 'resident' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`
                }>
                  {currentTestimonial?.type === 'resident' ? 'Warga Desa' : 'Mitra Bisnis'}
                </span>
                <div className="flex items-center space-x-1">
                  {renderStars(currentTestimonial?.rating)}
                </div>
              </div>

              {/* Quote */}
              <div className="relative mb-8">
                <Icon name="Quote" size={48} color="var(--color-primary)" className="absolute -top-4 -left-2 opacity-20" />
                <p className="font-inter text-lg lg:text-xl text-gray-700 leading-relaxed pl-8">
                  {currentTestimonial?.content}
                </p>
              </div>

              {/* Author Info */}
              <div className="space-y-4">
                <div>
                  <h4 className="font-poppins font-bold text-xl text-gray-900">
                    {currentTestimonial?.name}
                  </h4>
                  <p className="font-inter text-primary font-semibold">
                    {currentTestimonial?.role}
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Icon name="MapPin" size={16} />
                    <span>{currentTestimonial?.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Calendar" size={16} />
                    <span>
                      {currentTestimonial?.type === 'resident' ?
                      `Bergabung ${currentTestimonial?.joinedYear}` :
                      `Mitra sejak ${currentTestimonial?.partnershipYear}`
                      }
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 sm:col-span-2">
                    <Icon name="Briefcase" size={16} />
                    <span>{currentTestimonial?.businessType}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Author Image */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src={currentTestimonial?.image}
                    alt={currentTestimonial?.imageAlt}
                    className="w-full h-full object-cover" />

                </div>
                
                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 bg-primary text-white p-4 rounded-2xl shadow-lg">
                  <div className="text-center">
                    <Icon name={currentTestimonial?.type === 'resident' ? 'Users' : 'Handshake'} size={24} color="white" />
                    <p className="font-inter text-xs mt-1">
                      {currentTestimonial?.type === 'resident' ? 'Warga' : 'Mitra'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {testimonials?.map((testimonial, index) =>
          <button
            key={testimonial?.id}
            onClick={() => handleTestimonialChange(index)}
            className={`flex items-center space-x-3 p-4 rounded-2xl transition-all duration-300 ${
            activeTestimonial === index ?
            'bg-primary text-white shadow-lg' :
            'bg-white text-gray-600 hover:bg-gray-50 shadow-md'}`
            }>

              <div className="w-10 h-10 rounded-full overflow-hidden">
                <Image
                src={testimonial?.image}
                alt={testimonial?.imageAlt}
                className="w-full h-full object-cover" />

              </div>
              <div className="text-left hidden sm:block">
                <p className="font-inter font-semibold text-sm">{testimonial?.name}</p>
                <p className={`font-inter text-xs ${
              activeTestimonial === index ? 'text-white/80' : 'text-gray-500'}`
              }>
                  {testimonial?.role}
                </p>
              </div>
            </button>
          )}
        </div>

        {/* Statistics */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Icon name="Users" size={24} color="var(--color-primary)" />
            </div>
            <p className="font-poppins font-bold text-2xl text-gray-900 mb-2">500+</p>
            <p className="font-inter text-gray-600">Anggota Aktif</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Icon name="Star" size={24} color="var(--color-primary)" />
            </div>
            <p className="font-poppins font-bold text-2xl text-gray-900 mb-2">4.9/5</p>
            <p className="font-inter text-gray-600">Rating Kepuasan</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Icon name="Handshake" size={24} color="var(--color-primary)" />
            </div>
            <p className="font-poppins font-bold text-2xl text-gray-900 mb-2">50+</p>
            <p className="font-inter text-gray-600">Mitra Bisnis</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Icon name="TrendingUp" size={24} color="var(--color-primary)" />
            </div>
            <p className="font-poppins font-bold text-2xl text-gray-900 mb-2">250%</p>
            <p className="font-inter text-gray-600">Peningkatan Pendapatan</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-primary rounded-3xl p-8 text-white">
            <h3 className="font-poppins font-bold text-2xl mb-4">
              Bergabunglah dengan Kisah Sukses Kami
            </h3>
            <p className="font-inter text-white/90 mb-6 max-w-2xl mx-auto">
              Jadilah bagian dari komunitas BUMDes Surya Buana dan rasakan sendiri dampak positifnya bagi kehidupan dan usaha Anda
            </p>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                const element = document.querySelector('#kontak');
                if (element) {
                  element?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              iconName="UserPlus"
              iconPosition="left"
              className="bg-white text-primary hover:bg-gray-50">

              Bergabung Sekarang
            </Button>
          </div>
        </div>
      </div>
    </section>);

};

export default TestimonialsSection;