import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const VillageIdentitySection = () => {
  const achievements = [
  {
    icon: "Award",
    title: "Juara 1 BUMDes Terbaik",
    description: "Tingkat Kabupaten 2023"
  },
  {
    icon: "Users",
    title: "500+ Anggota Aktif",
    description: "Dari berbagai sektor usaha"
  },
  {
    icon: "TrendingUp",
    title: "Pertumbuhan 150%",
    description: "Dalam 2 tahun terakhir"
  },
  {
    icon: "Building2",
    title: "15 Unit Usaha",
    description: "Tersebar di seluruh desa"
  }];


  return (
    <section id="tentang" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-primary mb-6">
                Tentang BUMDes Surya Buana
              </h2>
              <p className="font-inter text-lg text-gray-700 leading-relaxed mb-6">
                BUMDes Surya Buana didirikan pada tahun 2019 dengan visi menjadi motor penggerak ekonomi desa yang berkelanjutan. Kami berkomitmen untuk memberdayakan masyarakat melalui berbagai unit usaha yang mengoptimalkan potensi lokal.
              </p>
              <p className="font-inter text-lg text-gray-700 leading-relaxed">
                Dengan dukungan penuh pemerintah desa dan partisipasi aktif masyarakat, kami telah berhasil menciptakan ekosistem bisnis yang menguntungkan semua pihak dan berkontribusi nyata terhadap peningkatan kesejahteraan warga.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Icon name="Eye" size={24} color="var(--color-primary)" />
                  </div>
                  <h3 className="font-poppins font-semibold text-xl text-gray-900">Visi</h3>
                </div>
                <p className="font-inter text-gray-700 leading-relaxed">
                  Menjadi BUMDes terdepan dalam pemberdayaan ekonomi masyarakat desa yang berkelanjutan dan berdaya saing.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Icon name="Target" size={24} color="var(--color-primary)" />
                  </div>
                  <h3 className="font-poppins font-semibold text-xl text-gray-900">Misi</h3>
                </div>
                <p className="font-inter text-gray-700 leading-relaxed">
                  Mengembangkan potensi ekonomi lokal melalui inovasi, transparansi, dan partisipasi aktif masyarakat.
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1673590794491-c3e419fc7759"
                alt="Traditional Indonesian village meeting with community members discussing business development in wooden pavilion"
                className="w-full h-96 object-cover" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center">
                  <Icon name="Calendar" size={28} color="white" />
                </div>
                <div>
                  <p className="font-poppins font-bold text-2xl text-gray-900">6+</p>
                  <p className="font-inter text-sm text-gray-600">Tahun Beroperasi</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="mt-20">
          <h3 className="font-poppins font-bold text-2xl sm:text-3xl text-center text-gray-900 mb-12">
            Pencapaian Kami
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements?.map((achievement, index) =>
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={achievement?.icon} size={28} color="var(--color-primary)" />
                </div>
                <h4 className="font-poppins font-semibold text-lg text-gray-900 mb-2">
                  {achievement?.title}
                </h4>
                <p className="font-inter text-gray-600">
                  {achievement?.description}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

};

export default VillageIdentitySection;