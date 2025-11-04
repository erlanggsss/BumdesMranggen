import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const LeadershipTeamSection = () => {
  const leadershipTeam = [
  {
    id: 1,
    name: 'Budi Santoso',
    position: 'Direktur Utama',
    image: "https://images.unsplash.com/photo-1660609389476-c961a2a11d40",
    imageAlt: 'Professional headshot of Indonesian man in formal business suit with confident smile and leadership presence',
    experience: '15 tahun',
    education: 'S2 Manajemen Bisnis',
    achievements: [
    'Meningkatkan pendapatan BUMDes 300%',
    'Memimpin transformasi digital UMKM',
    'Penghargaan Direktur Terbaik 2023'],

    testimonial: `"Pak Budi telah membawa perubahan luar biasa bagi desa kami. Visinya yang jelas dan kepemimpinan yang kuat membuat BUMDes berkembang pesat."`,
    testimonialAuthor: 'Siti Rahayu - Ketua PKK Desa'
  },
  {
    id: 2,
    name: 'Sari Dewi',
    position: 'Manajer Operasional',
    image: "https://images.unsplash.com/photo-1590649880765-91b1956b8276",
    imageAlt: 'Professional Indonesian businesswoman in blue blazer with warm smile and approachable demeanor in office setting',
    experience: '10 tahun',
    education: 'S1 Ekonomi Pembangunan',
    achievements: [
    'Mengkoordinasi 4 unit usaha utama',
    'Implementasi sistem manajemen modern',
    'Pelatihan 200+ UMKM lokal'],

    testimonial: `"Bu Sari sangat membantu dalam mengembangkan usaha kecil kami. Bimbingannya sangat praktis dan mudah dipahami."`,
    testimonialAuthor: 'Ahmad Fauzi - Pelaku UMKM'
  },
  {
    id: 3,
    name: 'Agus Wijaya',
    position: 'Kepala Unit Pertanian',
    image: "https://images.unsplash.com/photo-1700279207976-b0afc9ec77e6",
    imageAlt: 'Experienced Indonesian agricultural expert in casual shirt with farming background and knowledgeable expression',
    experience: '20 tahun',
    education: 'S1 Pertanian',
    achievements: [
    'Modernisasi sistem pertanian desa',
    'Peningkatan hasil panen 200%',
    'Pelopor pertanian organik'],

    testimonial: `"Pak Agus mengajarkan teknik pertanian modern yang sangat membantu. Hasil panen kami meningkat drastis berkat bimbingannya."`,
    testimonialAuthor: 'Sutrisno - Petani Lokal'
  },
  {
    id: 4,
    name: 'Maya Kusuma',
    position: 'Koordinator Wisata',
    image: "https://images.unsplash.com/photo-1662807995522-8818e4434b97",
    imageAlt: 'Enthusiastic Indonesian tourism coordinator with bright smile and cultural tourism background elements',
    experience: '8 tahun',
    education: 'S1 Pariwisata',
    achievements: [
    'Mengembangkan 5 destinasi wisata',
    'Meningkatkan kunjungan 400%',
    'Pelatihan guide wisata lokal'],

    testimonial: `"Bu Maya berhasil mengangkat potensi wisata desa kami. Sekarang banyak wisatawan yang datang dan ekonomi warga meningkat."`,
    testimonialAuthor: 'Rina Sari - Pemilik Homestay'
  }];


  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-6">
            Tim Kepemimpinan
          </h2>
          <p className="font-inter text-lg text-gray-600 max-w-3xl mx-auto">
            Dipimpin oleh profesional berpengalaman yang berkomitmen memajukan ekonomi desa dan memberdayakan masyarakat
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {leadershipTeam?.map((leader) =>
          <div key={leader?.id} className="bg-surface rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Leader Profile */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
                <div className="relative">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden">
                    <Image
                    src={leader?.image}
                    alt={leader?.imageAlt}
                    className="w-full h-full object-cover" />

                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <Icon name="Star" size={16} color="white" />
                  </div>
                </div>

                <div className="text-center sm:text-left flex-1">
                  <h3 className="font-poppins font-bold text-xl text-gray-900 mb-1">
                    {leader?.name}
                  </h3>
                  <p className="font-inter text-primary font-semibold mb-3">
                    {leader?.position}
                  </p>
                  
                  <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Icon name="Clock" size={14} />
                      <span>{leader?.experience} pengalaman</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="GraduationCap" size={14} />
                      <span>{leader?.education}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="mb-8">
                <h4 className="font-poppins font-semibold text-gray-900 mb-4 flex items-center">
                  <Icon name="Trophy" size={20} color="var(--color-primary)" className="mr-2" />
                  Pencapaian Utama
                </h4>
                <ul className="space-y-2">
                  {leader?.achievements?.map((achievement, index) =>
                <li key={index} className="flex items-start space-x-2">
                      <Icon name="Check" size={16} color="var(--color-primary)" className="mt-0.5 flex-shrink-0" />
                      <span className="font-inter text-gray-700 text-sm">{achievement}</span>
                    </li>
                )}
                </ul>
              </div>

              {/* Community Testimonial */}
              <div className="bg-white p-6 rounded-2xl border-l-4 border-primary">
                <div className="flex items-start space-x-3 mb-3">
                  <Icon name="Quote" size={20} color="var(--color-primary)" className="flex-shrink-0 mt-1" />
                  <p className="font-inter text-gray-700 italic leading-relaxed">
                    {leader?.testimonial}
                  </p>
                </div>
                <div className="flex items-center space-x-2 ml-8">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="User" size={16} color="var(--color-primary)" />
                  </div>
                  <span className="font-inter text-sm font-medium text-gray-900">
                    {leader?.testimonialAuthor}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Organizational Structure */}
        <div className="mt-20">
          <h3 className="font-poppins font-bold text-2xl sm:text-3xl text-center text-gray-900 mb-12">
            Struktur Organisasi
          </h3>
          
          <div className="bg-surface p-8 rounded-3xl">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Crown" size={28} color="white" />
                </div>
                <h4 className="font-poppins font-semibold text-gray-900 mb-2">Direktur Utama</h4>
                <p className="font-inter text-sm text-gray-600">Kepemimpinan strategis dan visi jangka panjang</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Settings" size={28} color="white" />
                </div>
                <h4 className="font-poppins font-semibold text-gray-900 mb-2">Manajer Operasional</h4>
                <p className="font-inter text-sm text-gray-600">Koordinasi operasional harian dan implementasi</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Wheat" size={28} color="white" />
                </div>
                <h4 className="font-poppins font-semibold text-gray-900 mb-2">Kepala Unit Pertanian</h4>
                <p className="font-inter text-sm text-gray-600">Pengembangan sektor pertanian dan perkebunan</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Camera" size={28} color="white" />
                </div>
                <h4 className="font-poppins font-semibold text-gray-900 mb-2">Koordinator Wisata</h4>
                <p className="font-inter text-sm text-gray-600">Pengelolaan dan promosi wisata desa</p>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership Values */}
        <div className="mt-16 text-center">
          <h3 className="font-poppins font-bold text-2xl sm:text-3xl text-gray-900 mb-8">
            Nilai-Nilai Kepemimpinan Kami
          </h3>
          
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                <Icon name="Heart" size={28} color="var(--color-primary)" />
              </div>
              <h4 className="font-poppins font-semibold text-xl text-gray-900">Integritas</h4>
              <p className="font-inter text-gray-600">
                Berkomitmen pada transparansi dan akuntabilitas dalam setiap keputusan dan tindakan
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                <Icon name="Lightbulb" size={28} color="var(--color-primary)" />
              </div>
              <h4 className="font-poppins font-semibold text-xl text-gray-900">Inovasi</h4>
              <p className="font-inter text-gray-600">
                Mengembangkan solusi kreatif dan teknologi modern untuk kemajuan ekonomi desa
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                <Icon name="Users" size={28} color="var(--color-primary)" />
              </div>
              <h4 className="font-poppins font-semibold text-xl text-gray-900">Kolaborasi</h4>
              <p className="font-inter text-gray-600">
                Membangun kemitraan yang kuat dengan masyarakat dan stakeholder untuk kemajuan bersama
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default LeadershipTeamSection;