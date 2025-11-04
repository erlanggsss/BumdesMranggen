import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    visitorType: '',
    name: '',
    email: '',
    phone: '',
    organization: '',
    subject: '',
    message: '',
    preferredContact: 'whatsapp',
    urgency: 'normal'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const visitorTypeOptions = [
    { value: 'villager', label: 'Warga Desa', description: 'Warga Desa Mranggen yang ingin bergabung atau mendapat informasi' },
    { value: 'business', label: 'Mitra Bisnis', description: 'Perusahaan atau individu yang tertarik bermitra' },
    { value: 'government', label: 'Stakeholder Pemerintah', description: 'Instansi pemerintah atau lembaga resmi' },
    { value: 'investor', label: 'Investor', description: 'Pihak yang tertarik berinvestasi' },
    { value: 'media', label: 'Media/Peneliti', description: 'Jurnalis, akademisi, atau peneliti' },
    { value: 'other', label: 'Lainnya', description: 'Kategori lain yang tidak disebutkan di atas' }
  ];

  const subjectOptions = {
    villager: [
      { value: 'membership', label: 'Pendaftaran Keanggotaan' },
      { value: 'training', label: 'Program Pelatihan' },
      { value: 'products', label: 'Informasi Produk' },
      { value: 'complaint', label: 'Keluhan/Saran' }
    ],
    business: [
      { value: 'partnership', label: 'Kemitraan Bisnis' },
      { value: 'distribution', label: 'Distribusi Produk' },
      { value: 'bulk-order', label: 'Pemesanan Besar' },
      { value: 'csr', label: 'Program CSR' }
    ],
    government: [
      { value: 'collaboration', label: 'Kerjasama Program' },
      { value: 'reporting', label: 'Pelaporan & Evaluasi' },
      { value: 'funding', label: 'Bantuan Pendanaan' },
      { value: 'policy', label: 'Diskusi Kebijakan' }
    ],
    investor: [
      { value: 'investment', label: 'Peluang Investasi' },
      { value: 'financial', label: 'Informasi Keuangan' },
      { value: 'expansion', label: 'Rencana Ekspansi' },
      { value: 'roi', label: 'Return on Investment' }
    ],
    media: [
      { value: 'interview', label: 'Wawancara' },
      { value: 'research', label: 'Penelitian' },
      { value: 'documentation', label: 'Dokumentasi' },
      { value: 'data', label: 'Permintaan Data' }
    ],
    other: [
      { value: 'general', label: 'Informasi Umum' },
      { value: 'visit', label: 'Kunjungan' },
      { value: 'other', label: 'Lainnya' }
    ]
  };

  const urgencyOptions = [
    { value: 'low', label: 'Tidak Mendesak', description: 'Respon dalam 2-3 hari kerja' },
    { value: 'normal', label: 'Normal', description: 'Respon dalam 24 jam' },
    { value: 'high', label: 'Mendesak', description: 'Respon dalam 2-4 jam' },
    { value: 'urgent', label: 'Sangat Mendesak', description: 'Respon segera via WhatsApp' }
  ];

  const contactMethods = [
    { value: 'whatsapp', label: 'WhatsApp', icon: 'MessageCircle' },
    { value: 'email', label: 'Email', icon: 'Mail' },
    { value: 'phone', label: 'Telepon', icon: 'Phone' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
      // Reset subject when visitor type changes
      ...(field === 'visitorType' && { subject: '' })
    }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      
      // Send WhatsApp message for urgent requests
      if (formData?.urgency === 'urgent' || formData?.preferredContact === 'whatsapp') {
        const message = encodeURIComponent(
          `Halo! Saya ${formData?.name} (${formData?.visitorType}). ${formData?.message}`
        );
        const whatsappUrl = `https://wa.me/6281234567890?text=${message}`;
        window.open(whatsappUrl, '_blank');
      }

      // Reset form
      setFormData({
        visitorType: '',
        name: '',
        email: '',
        phone: '',
        organization: '',
        subject: '',
        message: '',
        preferredContact: 'whatsapp',
        urgency: 'normal'
      });

    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getResponseTime = () => {
    const urgencyMap = {
      low: '2-3 hari kerja',
      normal: '24 jam',
      high: '2-4 jam',
      urgent: 'Segera via WhatsApp'
    };
    return urgencyMap?.[formData?.urgency] || '24 jam';
  };

  return (
    <section id="kontak" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-6">
            Hubungi Kami
          </h2>
          <p className="font-inter text-lg text-gray-600 max-w-3xl mx-auto">
            Kami siap membantu menjawab pertanyaan dan melayani kebutuhan Anda. Pilih cara komunikasi yang paling sesuai dengan kebutuhan Anda.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-surface rounded-3xl p-8">
            <h3 className="font-poppins font-bold text-2xl text-gray-900 mb-6">
              Kirim Pesan
            </h3>

            {submitStatus === 'success' && (
              <div className="bg-green-100 border border-green-200 rounded-xl p-4 mb-6">
                <div className="flex items-center space-x-2">
                  <Icon name="CheckCircle" size={20} color="#10B981" />
                  <p className="font-inter text-green-800">
                    Pesan berhasil dikirim! Kami akan merespons dalam waktu {getResponseTime()}.
                  </p>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-100 border border-red-200 rounded-xl p-4 mb-6">
                <div className="flex items-center space-x-2">
                  <Icon name="AlertCircle" size={20} color="#EF4444" />
                  <p className="font-inter text-red-800">
                    Terjadi kesalahan. Silakan coba lagi atau hubungi kami via WhatsApp.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Visitor Type */}
              <Select
                label="Kategori Pengunjung"
                description="Pilih kategori yang paling sesuai dengan Anda"
                required
                options={visitorTypeOptions}
                value={formData?.visitorType}
                onChange={(value) => handleInputChange('visitorType', value)}
                placeholder="Pilih kategori Anda"
              />

              {/* Personal Information */}
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  label="Nama Lengkap"
                  type="text"
                  required
                  value={formData?.name}
                  onChange={(e) => handleInputChange('name', e?.target?.value)}
                  placeholder="Masukkan nama lengkap"
                />

                <Input
                  label="Nomor WhatsApp"
                  type="tel"
                  required
                  value={formData?.phone}
                  onChange={(e) => handleInputChange('phone', e?.target?.value)}
                  placeholder="08xxxxxxxxxx"
                />
              </div>

              <Input
                label="Email"
                type="email"
                required
                value={formData?.email}
                onChange={(e) => handleInputChange('email', e?.target?.value)}
                placeholder="nama@email.com"
              />

              {/* Organization (conditional) */}
              {['business', 'government', 'investor', 'media']?.includes(formData?.visitorType) && (
                <Input
                  label="Nama Organisasi/Perusahaan"
                  type="text"
                  value={formData?.organization}
                  onChange={(e) => handleInputChange('organization', e?.target?.value)}
                  placeholder="Masukkan nama organisasi"
                />
              )}

              {/* Subject (conditional) */}
              {formData?.visitorType && subjectOptions?.[formData?.visitorType] && (
                <Select
                  label="Topik Pertanyaan"
                  required
                  options={subjectOptions?.[formData?.visitorType]}
                  value={formData?.subject}
                  onChange={(value) => handleInputChange('subject', value)}
                  placeholder="Pilih topik pertanyaan"
                />
              )}

              {/* Message */}
              <div>
                <label className="block font-inter font-medium text-gray-900 mb-2">
                  Pesan <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData?.message}
                  onChange={(e) => handleInputChange('message', e?.target?.value)}
                  placeholder="Jelaskan pertanyaan atau kebutuhan Anda secara detail..."
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl font-inter focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                />
              </div>

              {/* Preferred Contact Method */}
              <div>
                <label className="block font-inter font-medium text-gray-900 mb-3">
                  Metode Kontak Preferensi
                </label>
                <div className="grid sm:grid-cols-3 gap-3">
                  {contactMethods?.map((method) => (
                    <button
                      key={method?.value}
                      type="button"
                      onClick={() => handleInputChange('preferredContact', method?.value)}
                      className={`flex items-center space-x-2 p-3 rounded-xl border-2 transition-all duration-200 ${
                        formData?.preferredContact === method?.value
                          ? 'border-primary bg-primary/10 text-primary' :'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <Icon name={method?.icon} size={20} />
                      <span className="font-inter text-sm">{method?.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Urgency */}
              <Select
                label="Tingkat Urgensi"
                description="Pilih sesuai dengan seberapa cepat Anda membutuhkan respons"
                options={urgencyOptions}
                value={formData?.urgency}
                onChange={(value) => handleInputChange('urgency', value)}
              />

              {/* Expected Response Time */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={20} color="#3B82F6" />
                  <p className="font-inter text-blue-800">
                    <strong>Estimasi Respons:</strong> {getResponseTime()}
                  </p>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="default"
                size="lg"
                loading={isSubmitting}
                iconName="Send"
                iconPosition="left"
                className="w-full"
              >
                {isSubmitting ? 'Mengirim Pesan...' : 'Kirim Pesan'}
              </Button>
            </form>
          </div>

          {/* Contact Information & Quick Actions */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <div className="bg-primary rounded-3xl p-8 text-white">
              <h3 className="font-poppins font-bold text-2xl mb-6">
                Kontak Langsung
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="MessageCircle" size={24} color="white" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold mb-2">WhatsApp 24/7</h4>
                    <p className="text-white/90 mb-3">Respons tercepat untuk pertanyaan mendesak</p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        const message = encodeURIComponent('Halo! Saya ingin mengetahui lebih lanjut tentang BUMDes Mranggen.');
                        const whatsappUrl = `https://wa.me/6281234567890?text=${message}`;
                        window.open(whatsappUrl, '_blank');
                      }}
                      className="bg-white text-primary hover:bg-gray-50"
                    >
                      +62 812-3456-7890
                    </Button>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} color="white" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold mb-2">Telepon Kantor</h4>
                    <p className="text-white/90 mb-3">Senin-Jumat: 08:00-16:00 WIB</p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.location.href = 'tel:+6281234567890'}
                      className="bg-white text-primary hover:bg-gray-50"
                    >
                      (024) 123-4567
                    </Button>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} color="white" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold mb-2">Email Resmi</h4>
                    <p className="text-white/90 mb-3">Untuk komunikasi formal dan dokumentasi</p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.location.href = 'mailto:info@bumdes-mranggen.id'}
                      className="bg-white text-primary hover:bg-gray-50"
                    >
                      info@bumdes-mranggen.id
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-surface rounded-3xl p-8">
              <h3 className="font-poppins font-bold text-2xl text-gray-900 mb-6">
                Jam Operasional
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="font-inter font-medium text-gray-900">Senin - Jumat</span>
                  <span className="font-inter text-gray-600">08:00 - 16:00 WIB</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="font-inter font-medium text-gray-900">Sabtu</span>
                  <span className="font-inter text-gray-600">08:00 - 12:00 WIB</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="font-inter font-medium text-gray-900">Minggu</span>
                  <span className="font-inter text-gray-600">Tutup</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="font-inter font-medium text-gray-900">WhatsApp</span>
                  <span className="font-inter text-primary font-semibold">24/7</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
                <div className="flex items-start space-x-2">
                  <Icon name="Info" size={20} color="#F59E0B" className="flex-shrink-0 mt-0.5" />
                  <p className="font-inter text-yellow-800 text-sm">
                    <strong>Catatan:</strong> Untuk keperluan mendesak di luar jam operasional, silakan hubungi WhatsApp kami yang tersedia 24/7.
                  </p>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="font-poppins font-bold text-2xl text-gray-900 mb-6">
                Lokasi Kantor
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="MapPin" size={20} color="var(--color-primary)" className="mt-1" />
                  <div>
                    <p className="font-inter font-medium text-gray-900">Alamat Lengkap</p>
                    <p className="font-inter text-gray-600">
                      Jl. Desa Mranggen No. 123<br />
                      Mranggen, Demak, Jawa Tengah 59567
                    </p>
                  </div>
                </div>

                <Button
                  variant="outline"
                  onClick={() => {
                    const googleMapsUrl = 'https://www.google.com/maps/dir/?api=1&destination=-6.9175,110.4167';
                    window.open(googleMapsUrl, '_blank');
                  }}
                  iconName="Navigation"
                  iconPosition="left"
                  className="w-full"
                >
                  Buka di Google Maps
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;