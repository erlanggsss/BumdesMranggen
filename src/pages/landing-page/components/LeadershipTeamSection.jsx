import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const LeadershipTeamSection = () => {
  return (
    <section id="struktur-organisasi" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6">
            Struktur Organisasi
          </h2>
          <p className="font-inter text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
            Tim manajemen yang solid dan berpengalaman dalam mengelola BUMDes yang berkomitmen memajukan ekonomi desa dan memberdayakan masyarakat
          </p>
        </div>

        {/* Organizational Structure */}
        <div className="flex flex-col items-center space-y-8">
          {/* Level 1: PENASEHAT */}
          <div className="bg-surface px-6 py-4 rounded-lg text-center">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-3 shadow-lg">
              <Icon name="Crown" size={20} color="white" />
            </div>
            <h4 className="font-poppins font-semibold text-xs sm:text-sm text-gray-900 mb-1">PENASEHAT</h4>
            <p className="font-inter text-xs sm:text-sm text-gray-600">Darmadi</p>
          </div>

          {/* Arrow */}
          <div className="text-primary">
            <Icon name="ChevronDown" size={20} />
          </div>

          {/* Level 2: PENGAWAS and DIREKTUR */}
          <div className="flex gap-8 md:gap-16 items-start justify-center w-full">
            {/* PENGAWAS */}
            <div className="bg-surface px-6 py-4 rounded-lg text-center">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-3 shadow-lg">
                <Icon name="Eye" size={20} color="white" />
              </div>
              <h4 className="font-poppins font-semibold text-xs sm:text-sm text-gray-900">PENGAWAS</h4>
              <p className="font-inter text-xs sm:text-sm text-gray-600">Giyatno</p>
            </div>

            {/* Vertical line divider */}
            <div className="hidden md:block border-l-2 border-gray-300" style={{ height: '120px' }}></div>

            {/* DIREKTUR */}
            <div className="bg-surface px-6 py-4 rounded-lg text-center">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-3 shadow-lg">
                <Icon name="Briefcase" size={20} color="white" />
              </div>
              <h4 className="font-poppins font-semibold text-xs sm:text-sm text-gray-900">DIREKTUR</h4>
              <p className="font-inter text-xs sm:text-sm text-gray-600">Wiyono, Amd.</p>
            </div>
          </div>

          {/* Arrow from DIREKTUR */}
          <div className="text-primary">
            <Icon name="ChevronDown" size={20} />
          </div>

          {/* Level 3: SEKRETARIS and BENDAHARA */}
          <div className="flex gap-8 md:gap-16 items-start justify-center w-full">
            {/* SEKRETARIS */}
            <div className="bg-surface px-6 py-4 rounded-lg text-center">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-3 shadow-lg">
                <Icon name="FileText" size={20} color="white" />
              </div>
              <h4 className="font-poppins font-semibold text-xs sm:text-sm text-gray-900">SEKRETARIS</h4>
              <p className="font-inter text-xs sm:text-sm text-gray-600">Eva Dwi R.</p>
            </div>

            {/* Vertical line divider */}
            <div className="hidden md:block border-l-2 border-gray-300" style={{ height: '120px' }}></div>

            {/* BENDAHARA */}
            <div className="bg-surface px-6 py-4 rounded-lg text-center">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-3 shadow-lg">
                <Icon name="Wallet" size={20} color="white" />
              </div>
              <h4 className="font-poppins font-semibold text-xs sm:text-sm text-gray-900">BENDAHARA</h4>
              <p className="font-inter text-xs sm:text-sm text-gray-600">Triyono</p>
            </div>
          </div>

          {/* Arrow from BENDAHARA */}
          <div className="text-primary">
            <Icon name="ChevronDown" size={20} />
          </div>

          {/* Level 4: KEPALA/MANAJER BIDANG USAHA */}
          <div className="flex gap-8 md:gap-16 items-start justify-center w-full">
            {/* BIDANG USAHA 1 */}
            <div className="bg-surface px-6 py-4 rounded-lg text-center">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-3 shadow-lg">
                <Icon name="Users" size={20} color="white" />
              </div>
              <h4 className="font-poppins font-semibold text-xs sm:text-sm text-gray-900">KEPALA/MANAJER<br />BIDANG USAHA 1</h4>
              <p className="font-inter text-xs sm:text-sm text-gray-600 mt-1">Andi Setiawan, S.P</p>
            </div>

            {/* Vertical line divider */}
            <div className="hidden md:block border-l-2 border-gray-300" style={{ height: '120px' }}></div>

            {/* BIDANG USAHA 2 */}
            <div className="bg-surface px-6 py-4 rounded-lg text-center">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-3 shadow-lg">
                <Icon name="Users" size={20} color="white" />
              </div>
              <h4 className="font-poppins font-semibold text-xs sm:text-sm text-gray-900">KEPALA/MANAJER<br />BIDANG USAHA 2</h4>
              <p className="font-inter text-xs sm:text-sm text-gray-600 mt-1">Muh. Afif Abdilah</p>
            </div>
          </div>
        </div>

        {/* Leadership Values */}
        <div className="mt-16 text-center">
          <h3 className="font-poppins font-bold text-lg sm:text-xl lg:text-2xl text-gray-900 mb-8">
            Nilai-Nilai Kepemimpinan Kami
          </h3>
          
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                <Icon name="Heart" size={28} color="var(--color-primary)" />
              </div>
              <h4 className="font-poppins font-semibold text-base sm:text-lg text-gray-900">Integritas</h4>
              <p className="font-inter text-sm sm:text-base text-gray-600">
                Berkomitmen pada transparansi dan akuntabilitas dalam setiap keputusan dan tindakan
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                <Icon name="Lightbulb" size={28} color="var(--color-primary)" />
              </div>
              <h4 className="font-poppins font-semibold text-base sm:text-lg text-gray-900">Inovasi</h4>
              <p className="font-inter text-sm sm:text-base text-gray-600">
                Mengembangkan solusi kreatif dan teknologi modern untuk kemajuan ekonomi desa
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                <Icon name="Users" size={28} color="var(--color-primary)" />
              </div>
              <h4 className="font-poppins font-semibold text-base sm:text-lg text-gray-900">Kolaborasi</h4>
              <p className="font-inter text-sm sm:text-base text-gray-600">
                Membangun kemitraan yang kuat dengan masyarakat dan stakeholder untuk kemajuan bersama
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default LeadershipTeamSection;