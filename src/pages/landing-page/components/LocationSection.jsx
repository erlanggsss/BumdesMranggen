import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LocationSection = () => {
  const [activeLocation, setActiveLocation] = useState('kantor-pusat');

  const locations = [
    {
      id: 'kantor-pusat',
      name: 'Kantor Pusat BUMDes',
      address: 'Jl. Desa Mranggen No. 123, Mranggen, Demak, Jawa Tengah 59567',
      phone: '+62 812-3456-7890',
      email: 'info@bumdes-mranggen.id',
      hours: 'Senin - Jumat: 08:00 - 16:00 WIB\nSabtu: 08:00 - 12:00 WIB',
      lat: -6.9175,
      lng: 110.4167,
      services: [
        'Administrasi dan pendaftaran',
        'Konsultasi bisnis',
        'Pelatihan UMKM',
        'Layanan keuangan'
      ]
    },
    {
      id: 'unit-pertanian',
      name: 'Unit Pertanian & Perkebunan',
      address: 'Kawasan Pertanian Desa Mranggen, Blok A-C',
      phone: '+62 812-3456-7891',
      email: 'pertanian@bumdes-mranggen.id',
      hours: 'Senin - Sabtu: 06:00 - 18:00 WIB\nMinggu: 06:00 - 12:00 WIB',
      lat: -6.9185,
      lng: 110.4177,
      services: [
        'Penjualan produk pertanian',
        'Konsultasi teknis pertanian',
        'Penyediaan bibit dan pupuk',
        'Pelatihan budidaya'
      ]
    },
    {
      id: 'wisata-desa',
      name: 'Pusat Wisata Desa',
      address: 'Kawasan Wisata Alam Mranggen, Desa Mranggen',
      phone: '+62 812-3456-7892',
      email: 'wisata@bumdes-mranggen.id',
      hours: 'Setiap Hari: 07:00 - 17:00 WIB',
      lat: -6.9195,
      lng: 110.4187,
      services: [
        'Paket wisata alam',
        'Homestay tradisional',
        'Workshop kerajinan',
        'Kuliner lokal'
      ]
    },
    {
      id: 'umkm-center',
      name: 'Pusat UMKM & Kerajinan',
      address: 'Jl. Industri Kecil No. 45, Mranggen, Demak',
      phone: '+62 812-3456-7893',
      email: 'umkm@bumdes-mranggen.id',
      hours: 'Senin - Sabtu: 08:00 - 17:00 WIB',
      lat: -6.9205,
      lng: 110.4197,
      services: [
        'Showroom produk UMKM',
        'Pelatihan keterampilan',
        'Bantuan pemasaran online',
        'Konsultasi bisnis'
      ]
    }
  ];

  const currentLocation = locations?.find(loc => loc?.id === activeLocation);

  const handleWhatsAppContact = (phone, locationName) => {
    const message = encodeURIComponent(`Halo! Saya ingin mengetahui lebih lanjut tentang layanan di ${locationName} BUMDes Gotong Royong Sejahtera.`);
    const whatsappUrl = `https://wa.me/${phone?.replace(/[^0-9]/g, '')}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleGetDirections = (lat, lng, name) => {
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&destination_place_id=${encodeURIComponent(name)}`;
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-6">
            Lokasi & Kontak
          </h2>
          <p className="font-inter text-lg text-gray-600 max-w-3xl mx-auto">
            Kunjungi berbagai unit usaha BUMDes Gotong Royong Sejahtera yang tersebar di seluruh desa untuk mendapatkan layanan terbaik
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Location Selector */}
          <div className="lg:col-span-1">
            <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-6">
              Pilih Lokasi
            </h3>
            <div className="space-y-3">
              {locations?.map((location) => (
                <button
                  key={location?.id}
                  onClick={() => setActiveLocation(location?.id)}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-300 ${
                    activeLocation === location?.id
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-surface text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <h4 className="font-poppins font-semibold mb-1">
                    {location?.name}
                  </h4>
                  <p className={`font-inter text-sm ${
                    activeLocation === location?.id ? 'text-white/80' : 'text-gray-600'
                  }`}>
                    {location?.address?.split(',')?.[0]}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Location Details & Map */}
          <div className="lg:col-span-2 space-y-8">
            {/* Map */}
            <div className="bg-surface rounded-3xl overflow-hidden shadow-lg">
              <div className="h-80 relative">
                <iframe
                  width="100%"
                  height="100%"
                  loading="lazy"
                  title={currentLocation?.name}
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps?q=${currentLocation?.lat},${currentLocation?.lng}&z=15&output=embed`}
                  className="border-0"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl p-3">
                  <div className="flex items-center space-x-2">
                    <Icon name="MapPin" size={20} color="var(--color-primary)" />
                    <span className="font-inter font-semibold text-gray-900">
                      {currentLocation?.name}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Information */}
            <div className="bg-surface rounded-3xl p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="font-poppins font-bold text-2xl text-gray-900 mb-2">
                    {currentLocation?.name}
                  </h3>
                  <p className="font-inter text-gray-600">
                    {currentLocation?.address}
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleGetDirections(currentLocation?.lat, currentLocation?.lng, currentLocation?.name)}
                  iconName="Navigation"
                  iconPosition="left"
                >
                  Petunjuk Arah
                </Button>
              </div>

              {/* Contact Information */}
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Icon name="Phone" size={20} color="var(--color-primary)" className="mt-1" />
                    <div>
                      <p className="font-inter font-semibold text-gray-900">Telepon</p>
                      <p className="font-inter text-gray-600">{currentLocation?.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Icon name="Mail" size={20} color="var(--color-primary)" className="mt-1" />
                    <div>
                      <p className="font-inter font-semibold text-gray-900">Email</p>
                      <p className="font-inter text-gray-600">{currentLocation?.email}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Icon name="Clock" size={20} color="var(--color-primary)" className="mt-1" />
                  <div>
                    <p className="font-inter font-semibold text-gray-900 mb-2">Jam Operasional</p>
                    <div className="space-y-1">
                      {currentLocation?.hours?.split('\n')?.map((hour, index) => (
                        <p key={index} className="font-inter text-gray-600 text-sm">
                          {hour}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div className="mb-8">
                <h4 className="font-poppins font-semibold text-gray-900 mb-4">
                  Layanan Tersedia
                </h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {currentLocation?.services?.map((service, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Icon name="Check" size={16} color="var(--color-primary)" />
                      <span className="font-inter text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="default"
                  onClick={() => handleWhatsAppContact(currentLocation?.phone, currentLocation?.name)}
                  iconName="MessageCircle"
                  iconPosition="left"
                  className="flex-1"
                >
                  Chat WhatsApp
                </Button>
                <Button
                  variant="outline"
                  onClick={() => window.location.href = `tel:${currentLocation?.phone}`}
                  iconName="Phone"
                  iconPosition="left"
                  className="flex-1"
                >
                  Telepon Langsung
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Contact Info */}
        <div className="mt-16 bg-primary rounded-3xl p-8 text-center text-white">
          <h3 className="font-poppins font-bold text-2xl mb-4">
            Butuh Bantuan Segera?
          </h3>
          <p className="font-inter text-white/90 mb-6 max-w-2xl mx-auto">
            Tim customer service kami siap membantu Anda 24/7 melalui WhatsApp untuk pertanyaan mendesak atau informasi lebih lanjut
          </p>
          <Button
            variant="outline"
            size="lg"
            onClick={() => handleWhatsAppContact('+62 812-3456-7890', 'BUMDes Gotong Royong Sejahtera')}
            iconName="MessageCircle"
            iconPosition="left"
            className="bg-white text-primary hover:bg-gray-50"
          >
            Hubungi Customer Service
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;