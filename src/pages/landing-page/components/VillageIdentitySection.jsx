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
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-6">
            Tentang BUMDes Gotong Royong Sejahtera
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <p className="font-inter text-lg text-gray-700 leading-relaxed mb-6">
                BUMDes Gotong Royong Sejahtera adalah lembaga usaha desa yang mengelola sektor pertanian dan peternakan dengan standar profesional dan efisiensi tinggi. Didukung oleh komitmen transparansi dan pemberdayaan masyarakat, kami beroperasi sebagai mitra terpercaya bagi petani, peternak, dan stakeholder lokal.
              </p>
              <p className="font-inter text-lg text-gray-700 leading-relaxed">
                Misi kami berfokus pada pertumbuhan berkelanjutan: meningkatkan produktivitas pertanian dan ternak, melibatkan komunitas dalam proses bisnis, mengembangkan jaringan kemitraan yang kuat, dan meningkatkan kesejahteraan ekonomi mitra usaha kami. Semua ini dijalankan dengan semangat gotong royong yang mengutamakan kemajuan bersama.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative lg:mt-22">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1673590794491-c3e419fc7759"
                alt="Traditional Indonesian village meeting with community members discussing business development in wooden pavilion"
                className="w-full h-96 object-cover" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
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
                <h3 className="font-poppins font-semibold text-xl text-gray-900">Visi</h3>
              </div>
              <p className="font-inter text-gray-700 leading-relaxed">
                Menjadikan Badan Usaha Milik Desa sebagai Badan Usaha yang terpercaya dan mewujudkan kesejahteraan serta kemajuan masyarakat desa.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Icon name="Target" size={24} color="var(--color-primary)" />
                </div>
                <h3 className="font-poppins font-semibold text-xl text-gray-900">Misi</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <Icon name="Check" size={20} color="var(--color-primary)" className="mt-0.5 flex-shrink-0" />
                  <span className="font-inter text-gray-700">Melakukan usaha produksi pertanian yang baik dan menguntungkan.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Icon name="Check" size={20} color="var(--color-primary)" className="mt-0.5 flex-shrink-0" />
                  <span className="font-inter text-gray-700">Peningkatan produksi ternak secara efektif dan efesien.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Icon name="Check" size={20} color="var(--color-primary)" className="mt-0.5 flex-shrink-0" />
                  <span className="font-inter text-gray-700">Melibatkan masyarakat dalam usaha berbasis pemberdayaan.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Icon name="Check" size={20} color="var(--color-primary)" className="mt-0.5 flex-shrink-0" />
                  <span className="font-inter text-gray-700">Menjalin kemitraan dengan beberapa pihak.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Icon name="Check" size={20} color="var(--color-primary)" className="mt-0.5 flex-shrink-0" />
                  <span className="font-inter text-gray-700">Meningkatkan kesejahteraan mitra petani dan peternak.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default VillageIdentitySection;