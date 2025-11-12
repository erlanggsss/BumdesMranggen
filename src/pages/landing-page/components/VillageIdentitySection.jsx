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
                Tentang BUMDes Gotong Royong Sejahtera
              </h2>
              <p className="font-inter text-lg text-gray-700 leading-relaxed mb-6">
                BUMDes Gotong Royong Sejahtera merupakan Badan Usaha Milik Desa yang berdiri sebagai wadah penggerak ekonomi lokal dan pemberdayaan masyarakat. Dengan dukungan penuh dari pemerintah desa serta partisipasi aktif warga, kami berkomitmen untuk mengelola potensi desa secara profesional, transparan, dan berkelanjutan.
              </p>
              <p className="font-inter text-lg text-gray-700 leading-relaxed">
                Melalui berbagai unit usaha, kami berupaya meningkatkan kesejahteraan masyarakat, membuka lapangan kerja baru, serta menciptakan kemandirian ekonomi desa. Kami percaya bahwa kemajuan desa berawal dari kolaborasi, inovasi, dan semangat gotong royong seluruh warga Desa Mranggen.
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
                  Mewujudkan kemandirian ekonomi desa melalui pengelolaan potensi lokal yang produktif, transparan, dan berkelanjutan.
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
                  Mengembangkan unit usaha desa yang inovatif dan memberdayakan masyarakat untuk meningkatkan kesejahteraan bersama.
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
          </div>
        </div>
      </div>
    </section>);

};

export default VillageIdentitySection;