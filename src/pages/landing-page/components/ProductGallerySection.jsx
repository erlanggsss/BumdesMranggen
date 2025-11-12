import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProductGallerySection = () => {
  const [activeCategory, setActiveCategory] = useState('semua');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const categories = [
  { id: 'semua', name: 'Semua Produk', icon: 'Package' },
  { id: 'pertanian', name: 'Pertanian', icon: 'Wheat' },
  { id: 'kerajinan', name: 'Kerajinan', icon: 'Hammer' },
  { id: 'makanan', name: 'Makanan', icon: 'Cookie' },
  { id: 'wisata', name: 'Wisata', icon: 'Camera' }];


  const products = [
  {
    id: 1,
    name: 'Beras Organik Premium',
    category: 'pertanian',
    price: 'Rp 15.000',
    unit: '/kg',
    image: "https://images.unsplash.com/photo-1673158191715-897ae8b527f3",
    imageAlt: 'Premium organic rice grains in traditional Indonesian packaging with natural brown color and high quality texture',
    description: 'Beras organik berkualitas tinggi dari petani lokal Mranggen, bebas pestisida dan pupuk kimia',
    availability: 'Tersedia',
    minOrder: '10 kg',
    features: ['100% Organik', 'Bebas Pestisida', 'Kualitas Premium', 'Langsung dari Petani'],
    contact: '+62 812-3456-7891'
  },
  {
    id: 2,
    name: 'Kerajinan Bambu Anyaman',
    category: 'kerajinan',
    price: 'Rp 75.000',
    unit: '/pcs',
    image: "https://images.unsplash.com/photo-1476462672249-d86aea0265f5",
    imageAlt: 'Traditional Indonesian bamboo woven handicrafts including baskets and decorative items with intricate patterns',
    description: 'Kerajinan bambu anyaman tradisional buatan tangan pengrajin lokal dengan kualitas ekspor',
    availability: 'Pre-order',
    minOrder: '5 pcs',
    features: ['Handmade', 'Ramah Lingkungan', 'Kualitas Ekspor', 'Desain Tradisional'],
    contact: '+62 812-3456-7893'
  },
  {
    id: 3,
    name: 'Keripik Singkong Renyah',
    category: 'makanan',
    price: 'Rp 25.000',
    unit: '/pack',
    image: "https://images.unsplash.com/photo-1609130549171-b7da75df12c8",
    imageAlt: 'Crispy cassava chips in colorful Indonesian packaging with golden brown texture and appetizing appearance',
    description: 'Keripik singkong renyah dengan berbagai varian rasa, olahan UMKM lokal yang higienis',
    availability: 'Tersedia',
    minOrder: '10 pack',
    features: ['Rasa Beragam', 'Higienis', 'Tahan Lama', 'Kemasan Menarik'],
    contact: '+62 812-3456-7893'
  },
  {
    id: 4,
    name: 'Paket Wisata Desa',
    category: 'wisata',
    price: 'Rp 150.000',
    unit: '/orang',
    image: "https://images.unsplash.com/photo-1677507729603-894a91e56717",
    imageAlt: 'Indonesian village tourism package showing traditional activities, cultural performances, and natural scenery',
    description: 'Paket wisata edukasi desa lengkap dengan homestay, kuliner lokal, dan workshop kerajinan',
    availability: 'Booking',
    minOrder: '5 orang',
    features: ['Homestay Included', 'Kuliner Lokal', 'Workshop Kerajinan', 'Guide Berpengalaman'],
    contact: '+62 812-3456-7892'
  },
  {
    id: 5,
    name: 'Sayuran Hidroponik Segar',
    category: 'pertanian',
    price: 'Rp 8.000',
    unit: '/ikat',
    image: "https://images.unsplash.com/photo-1519387918819-51953dc6ba35",
    imageAlt: 'Fresh hydroponic vegetables including lettuce and herbs grown in modern Indonesian farming facility',
    description: 'Sayuran segar hasil budidaya hidroponik modern, bebas pestisida dan selalu fresh',
    availability: 'Tersedia',
    minOrder: '5 ikat',
    features: ['Hidroponik', 'Selalu Segar', 'Bebas Pestisida', 'Nutrisi Tinggi'],
    contact: '+62 812-3456-7891'
  },
  {
    id: 6,
    name: 'Batik Tulis Motif Lokal',
    category: 'kerajinan',
    price: 'Rp 350.000',
    unit: '/lembar',
    image: "https://images.unsplash.com/photo-1614959873617-2787fc0a6795",
    imageAlt: 'Traditional Indonesian hand-drawn batik fabric with local motifs and intricate patterns in vibrant colors',
    description: 'Batik tulis asli dengan motif khas daerah Mranggen, dikerjakan oleh pengrajin berpengalaman',
    availability: 'Pre-order',
    minOrder: '1 lembar',
    features: ['Tulis Tangan', 'Motif Khas', 'Kualitas Premium', 'Sertifikat Asli'],
    contact: '+62 812-3456-7893'
  }];


  const filteredProducts = activeCategory === 'semua' ?
  products :
  products?.filter((product) => product?.category === activeCategory);

  const handleWhatsAppOrder = (product) => {
    const message = encodeURIComponent(
      `Halo! Saya tertarik untuk memesan ${product?.name} dengan harga ${product?.price}${product?.unit}. Mohon informasi lebih lanjut tentang ketersediaan dan cara pemesanan.`
    );
    const whatsappUrl = `https://wa.me/${product?.contact?.replace(/[^0-9]/g, '')}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const getAvailabilityColor = (availability) => {
    switch (availability) {
      case 'Tersedia':
        return 'bg-green-100 text-green-800';
      case 'Pre-order':
        return 'bg-yellow-100 text-yellow-800';
      case 'Booking':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="produk" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-6">
            Produk & Layanan
          </h2>
          <p className="font-inter text-lg text-gray-600 max-w-3xl mx-auto">
            Berbagai produk berkualitas dan layanan unggulan dari BUMDes Gotong Royong Sejahtera yang siap memenuhi kebutuhan masyarakat
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories?.map((category) =>
          <button
            key={category?.id}
            onClick={() => setActiveCategory(category?.id)}
            className={`flex items-center space-x-2 px-6 py-3 rounded-full font-inter font-medium transition-all duration-300 ${
            activeCategory === category?.id ?
            'bg-primary text-white shadow-lg' :
            'bg-white text-gray-600 hover:bg-gray-50 shadow-md'}`
            }>

              <Icon name={category?.icon} size={20} />
              <span>{category?.name}</span>
            </button>
          )}
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProducts?.map((product) =>
          <div
            key={product?.id}
            className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
            onClick={() => setSelectedProduct(product)}>

              {/* Product Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                src={product?.image}
                alt={product?.imageAlt}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />

                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full font-inter text-sm font-medium ${getAvailabilityColor(product?.availability)}`}>
                    {product?.availability}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Icon name="Heart" size={20} color="white" />
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="font-poppins font-bold text-xl text-gray-900 mb-2">
                  {product?.name}
                </h3>
                <p className="font-inter text-gray-600 text-sm mb-4 line-clamp-2">
                  {product?.description}
                </p>

                {/* Price & Order Info */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="font-poppins font-bold text-2xl text-primary">
                      {product?.price}
                    </span>
                    <span className="font-inter text-gray-600">{product?.unit}</span>
                  </div>
                  <div className="text-right">
                    <p className="font-inter text-xs text-gray-500">Min. Order</p>
                    <p className="font-inter font-semibold text-gray-900">{product?.minOrder}</p>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {product?.features?.slice(0, 2)?.map((feature, index) =>
                <span
                  key={index}
                  className="px-2 py-1 bg-primary/10 text-primary rounded-lg font-inter text-xs">

                      {feature}
                    </span>
                )}
                  {product?.features?.length > 2 &&
                <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-lg font-inter text-xs">
                      +{product?.features?.length - 2} lainnya
                    </span>
                }
                </div>

                {/* Action Button */}
                <Button
                variant="default"
                size="sm"
                onClick={(e) => {
                  e?.stopPropagation();
                  handleWhatsAppOrder(product);
                }}
                iconName="ShoppingCart"
                iconPosition="left"
                className="w-full">

                  Pesan Sekarang
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Product Detail Modal */}
        {selectedProduct &&
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                {/* Close Button */}
                <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center z-10">

                  <Icon name="X" size={20} />
                </button>

                {/* Product Image */}
                <div className="h-64 overflow-hidden rounded-t-3xl">
                  <Image
                  src={selectedProduct?.image}
                  alt={selectedProduct?.imageAlt}
                  className="w-full h-full object-cover" />

                </div>

                {/* Product Details */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-poppins font-bold text-2xl text-gray-900 mb-2">
                        {selectedProduct?.name}
                      </h3>
                      <span className={`px-3 py-1 rounded-full font-inter text-sm font-medium ${getAvailabilityColor(selectedProduct?.availability)}`}>
                        {selectedProduct?.availability}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="font-poppins font-bold text-3xl text-primary">
                        {selectedProduct?.price}
                      </span>
                      <span className="font-inter text-gray-600">{selectedProduct?.unit}</span>
                    </div>
                  </div>

                  <p className="font-inter text-gray-700 leading-relaxed mb-6">
                    {selectedProduct?.description}
                  </p>

                  {/* All Features */}
                  <div className="mb-6">
                    <h4 className="font-poppins font-semibold text-gray-900 mb-3">
                      Keunggulan Produk:
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {selectedProduct?.features?.map((feature, index) =>
                    <div key={index} className="flex items-center space-x-2">
                          <Icon name="Check" size={16} color="var(--color-primary)" />
                          <span className="font-inter text-gray-700">{feature}</span>
                        </div>
                    )}
                    </div>
                  </div>

                  {/* Order Info */}
                  <div className="bg-surface p-4 rounded-2xl mb-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <p className="font-inter font-semibold text-gray-900">Minimum Order:</p>
                        <p className="font-inter text-gray-700">{selectedProduct?.minOrder}</p>
                      </div>
                      <div>
                        <p className="font-inter font-semibold text-gray-900">Kontak:</p>
                        <p className="font-inter text-gray-700">{selectedProduct?.contact}</p>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                    variant="default"
                    size="lg"
                    onClick={() => handleWhatsAppOrder(selectedProduct)}
                    iconName="MessageCircle"
                    iconPosition="left"
                    className="flex-1">

                      Pesan via WhatsApp
                    </Button>
                    <Button
                    variant="outline"
                    size="lg"
                    onClick={() => window.location.href = `tel:${selectedProduct?.contact}`}
                    iconName="Phone"
                    iconPosition="left"
                    className="flex-1">

                      Telepon Langsung
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }

        {/* Bulk Order CTA */}
        <div className="text-center">
          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h3 className="font-poppins font-bold text-2xl text-gray-900 mb-4">
              Butuh Pesanan dalam Jumlah Besar?
            </h3>
            <p className="font-inter text-gray-600 mb-6 max-w-2xl mx-auto">
              Kami menyediakan layanan khusus untuk pemesanan dalam jumlah besar dengan harga spesial dan layanan pengiriman
            </p>
            <Button
              variant="default"
              size="lg"
              onClick={() => {
                const message = encodeURIComponent('Halo! Saya tertarik untuk melakukan pemesanan dalam jumlah besar. Mohon informasi harga khusus dan syarat pemesanan.');
                const whatsappUrl = `https://wa.me/6281234567890?text=${message}`;
                window.open(whatsappUrl, '_blank');
              }}
              iconName="Package"
              iconPosition="left">

              Konsultasi Pesanan Besar
            </Button>
          </div>
        </div>
      </div>
    </section>);

};

export default ProductGallerySection;