import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProgramsTimelineSection = () => {
  const [activeProgram, setActiveProgram] = useState(0);

  const programs = [
  {
    id: 1,
    year: '2019',
    title: 'Pendirian BUMDes',
    description: 'Pembentukan BUMDes Makmur Sejahtera dengan modal awal dari pemerintah desa',
    impact: 'Modal awal Rp 500 juta',
    beforeImage: "https://images.unsplash.com/photo-1559449820-e2f3e79d4b75",
    beforeImageAlt: 'Empty village land before BUMDes development with basic infrastructure and few economic activities',
    afterImage: "https://images.unsplash.com/photo-1726910174661-59685be51011",
    afterImageAlt: 'Established BUMDes office building with modern facilities and active community members gathering',
    participants: '50 anggota pendiri',
    status: 'Selesai'
  },
  {
    id: 2,
    year: '2020',
    title: 'Pengembangan Pertanian',
    description: 'Modernisasi sistem pertanian dengan teknologi hidroponik dan pupuk organik',
    impact: 'Peningkatan hasil panen 200%',
    beforeImage: "https://images.unsplash.com/photo-1731988483745-0fb8f19a0e1e",
    beforeImageAlt: 'Traditional farming methods with basic tools and conventional irrigation system in village fields',
    afterImage: "https://images.unsplash.com/photo-1565489358005-5b26fdb50cbb",
    afterImageAlt: 'Modern hydroponic farming facility with advanced irrigation systems and increased crop yields',
    participants: '150 petani terlibat',
    status: 'Berkelanjutan'
  },
  {
    id: 3,
    year: '2021',
    title: 'Wisata Desa',
    description: 'Pengembangan destinasi wisata alam dan budaya untuk meningkatkan pendapatan masyarakat',
    impact: '5000+ wisatawan/tahun',
    beforeImage: "https://images.unsplash.com/photo-1524332745285-01be06b4a0c4",
    beforeImageAlt: 'Undeveloped natural village area with potential for tourism but lacking proper facilities and access',
    afterImage: "https://images.unsplash.com/photo-1692400392623-e1d320f09a44",
    afterImageAlt: 'Developed village tourism site with proper facilities, walking paths, and visitors enjoying cultural activities',
    participants: '80 pelaku wisata',
    status: 'Berkembang'
  },
  {
    id: 4,
    year: '2022',
    title: 'Digitalisasi UMKM',
    description: 'Program pelatihan dan pendampingan UMKM untuk go digital dan ekspansi pasar',
    impact: 'Penjualan online naik 300%',
    beforeImage: "https://images.unsplash.com/photo-1620073317623-f0dcf93e043a",
    beforeImageAlt: 'Traditional small business operations with manual processes and limited market reach in village setting',
    afterImage: "https://images.unsplash.com/photo-1666281467023-294e8dfd78f7",
    afterImageAlt: 'Digitized UMKM operations with computers, online platforms, and expanded market reach through technology',
    participants: '200 UMKM',
    status: 'Aktif'
  },
  {
    id: 5,
    year: '2023',
    title: 'Infrastruktur Air',
    description: 'Pembangunan sistem pengelolaan air bersih dan irigasi modern untuk seluruh desa',
    impact: '100% akses air bersih',
    beforeImage: "https://images.unsplash.com/photo-1634586121888-26eb21d46ba4",
    beforeImageAlt: 'Old water infrastructure with limited access and basic distribution system in village community',
    afterImage: "https://images.unsplash.com/photo-1583601215272-b92c121c606a",
    afterImageAlt: 'Modern water management facility with advanced filtration systems and comprehensive distribution network',
    participants: '500 keluarga terlayani',
    status: 'Selesai'
  },
  {
    id: 6,
    year: '2024',
    title: 'Ekspansi Regional',
    description: 'Pengembangan kemitraan dengan BUMDes lain dan ekspansi ke pasar regional',
    impact: 'Target 10 kemitraan',
    beforeImage: "https://images.unsplash.com/photo-1588263823811-4cdd596b5b14",
    beforeImageAlt: 'Local village business operations with limited regional connections and partnerships',
    afterImage: "https://images.unsplash.com/photo-1573497619860-6d82917e4ec8",
    afterImageAlt: 'Regional business meeting with multiple BUMDes representatives discussing partnership opportunities',
    participants: 'Proses rekrutmen',
    status: 'Dalam Proses'
  }];


  const getStatusColor = (status) => {
    switch (status) {
      case 'Selesai':
        return 'bg-green-100 text-green-800';
      case 'Aktif':case 'Berkelanjutan':case 'Berkembang':
        return 'bg-blue-100 text-blue-800';
      case 'Dalam Proses':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="program" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-6">
            Program Pengembangan
          </h2>
          <p className="font-inter text-lg text-gray-600 max-w-3xl mx-auto">
            Perjalanan transformasi BUMDes Mranggen dalam membangun ekonomi desa yang berkelanjutan dan berdampak positif bagi masyarakat
          </p>
        </div>

        {/* Timeline Navigation */}
        <div className="flex overflow-x-auto pb-4 mb-12 space-x-4">
          {programs?.map((program, index) =>
          <button
            key={program?.id}
            onClick={() => setActiveProgram(index)}
            className={`flex-shrink-0 px-6 py-3 rounded-full font-inter font-medium transition-all duration-300 ${
            activeProgram === index ?
            'bg-primary text-white shadow-lg' :
            'bg-white text-gray-600 hover:bg-gray-50'}`
            }>

              {program?.year} - {program?.title}
            </button>
          )}
        </div>

        {/* Active Program Detail */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Content */}
            <div className="p-8 lg:p-12">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center">
                  <Icon name="Calendar" size={28} color="white" />
                </div>
                <div>
                  <h3 className="font-poppins font-bold text-2xl text-gray-900">
                    {programs?.[activeProgram]?.title}
                  </h3>
                  <p className="font-inter text-primary font-semibold">
                    {programs?.[activeProgram]?.year}
                  </p>
                </div>
              </div>

              <p className="font-inter text-lg text-gray-700 leading-relaxed mb-6">
                {programs?.[activeProgram]?.description}
              </p>

              {/* Impact Metrics */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-surface p-4 rounded-xl">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="TrendingUp" size={20} color="var(--color-primary)" />
                    <span className="font-inter font-semibold text-gray-900">Dampak</span>
                  </div>
                  <p className="font-inter text-gray-700">{programs?.[activeProgram]?.impact}</p>
                </div>

                <div className="bg-surface p-4 rounded-xl">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="Users" size={20} color="var(--color-primary)" />
                    <span className="font-inter font-semibold text-gray-900">Partisipan</span>
                  </div>
                  <p className="font-inter text-gray-700">{programs?.[activeProgram]?.participants}</p>
                </div>
              </div>

              {/* Status Badge */}
              <div className="flex items-center space-x-4 mb-8">
                <span className="font-inter font-medium text-gray-700">Status:</span>
                <span className={`px-3 py-1 rounded-full font-inter text-sm font-medium ${getStatusColor(programs?.[activeProgram]?.status)}`}>
                  {programs?.[activeProgram]?.status}
                </span>
              </div>

              {/* CTA */}
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  const element = document.querySelector('#kontak');
                  if (element) {
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                iconName="MessageCircle"
                iconPosition="left">

                Pelajari Lebih Lanjut
              </Button>
            </div>

            {/* Before/After Images */}
            <div className="p-8 lg:p-12">
              <h4 className="font-poppins font-semibold text-xl text-gray-900 mb-6">
                Transformasi Visual
              </h4>
              
              <div className="space-y-6">
                {/* Before */}
                <div>
                  <p className="font-inter font-medium text-gray-700 mb-3">Sebelum:</p>
                  <div className="relative overflow-hidden rounded-2xl">
                    <Image
                      src={programs?.[activeProgram]?.beforeImage}
                      alt={programs?.[activeProgram]?.beforeImageAlt}
                      className="w-full h-48 object-cover" />

                    <div className="absolute top-3 left-3">
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full font-inter text-sm font-medium">
                        Sebelum
                      </span>
                    </div>
                  </div>
                </div>

                {/* After */}
                <div>
                  <p className="font-inter font-medium text-gray-700 mb-3">Sesudah:</p>
                  <div className="relative overflow-hidden rounded-2xl">
                    <Image
                      src={programs?.[activeProgram]?.afterImage}
                      alt={programs?.[activeProgram]?.afterImageAlt}
                      className="w-full h-48 object-cover" />

                    <div className="absolute top-3 left-3">
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full font-inter text-sm font-medium">
                        Sesudah
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Program Statistics */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Icon name="CheckCircle" size={24} color="var(--color-primary)" />
            </div>
            <p className="font-poppins font-bold text-2xl text-gray-900 mb-2">6</p>
            <p className="font-inter text-gray-600">Program Utama</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Icon name="Users" size={24} color="var(--color-primary)" />
            </div>
            <p className="font-poppins font-bold text-2xl text-gray-900 mb-2">500+</p>
            <p className="font-inter text-gray-600">Penerima Manfaat</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Icon name="TrendingUp" size={24} color="var(--color-primary)" />
            </div>
            <p className="font-poppins font-bold text-2xl text-gray-900 mb-2">250%</p>
            <p className="font-inter text-gray-600">Pertumbuhan Rata-rata</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Icon name="Award" size={24} color="var(--color-primary)" />
            </div>
            <p className="font-poppins font-bold text-2xl text-gray-900 mb-2">5</p>
            <p className="font-inter text-gray-600">Penghargaan Diterima</p>
          </div>
        </div>
      </div>
    </section>);

};

export default ProgramsTimelineSection;