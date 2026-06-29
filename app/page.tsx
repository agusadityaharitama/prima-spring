import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Package,
  Wrench,
  DollarSign,
  Shield,
  ChevronRight,
  Phone,
} from 'lucide-react'

const features = [
  {
    icon: Clock,
    title: 'Pengerjaan Cepat',
    description: 'Proses kerja yang cepat: 14 hari kerja – 30 hari kerja.',
    color: 'bg-blue-50 text-blue-700',
  },
  {
    icon: Shield,
    title: 'Bahan Kualitas Tinggi',
    description:
      'Material SWP high carbon, SUS (stainless steel wire) 304 standar DIN, JIS, SAE, AISI.',
    color: 'bg-amber-50 text-amber-700',
  },
  {
    icon: DollarSign,
    title: 'Harga Bersaing',
    description: 'Harga dijamin sangat bersaing untuk semua kalangan industri.',
    color: 'bg-green-50 text-green-700',
  },
  {
    icon: Wrench,
    title: 'Mesin Teknologi Tinggi',
    description:
      'Menggunakan mesin CNC + mesin compression dengan tingkat presisi yang tinggi.',
    color: 'bg-purple-50 text-purple-700',
  },
]

const products = [
  {
    name: 'Per Tekan',
    nameEn: 'Compression Spring',
    image: 'http://primaspring.com/wp-content/uploads/2013/11/ptks01.jpg',
    desc: 'Per tekan presisi untuk berbagai kebutuhan industri.',
  },
  {
    name: 'Per Tarik',
    nameEn: 'Extension Spring',
    image: 'http://primaspring.com/wp-content/uploads/2013/11/pts011.jpg',
    desc: 'Per tarik kualitas tinggi berbagai ukuran dan material.',
  },
  {
    name: 'Battery Spring',
    nameEn: 'Battery Spring',
    image: 'http://primaspring.com/wp-content/uploads/2013/11/BSs01.jpg',
    desc: 'Battery spring untuk perangkat elektronik dan alat rumah tangga.',
  },
  {
    name: 'Custom Spring',
    nameEn: 'Custom Spring',
    image: 'http://primaspring.com/wp-content/uploads/2013/11/cs011.jpg',
    desc: 'Pegas custom sesuai spesifikasi kebutuhan Anda.',
  },
]

const stats = [
  { value: '29+', label: 'Tahun Pengalaman' },
  { value: '6', label: 'Kategori Produk' },
  { value: '0.2–7mm', label: 'Ukuran Kawat' },
  { value: '100%', label: 'CNC Precision' },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden pt-20">
        {/* Pattern Overlay */}
        <div className="absolute inset-0 pattern-overlay" />

        {/* Decorative Circles */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/5 rounded-full" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-white/5 rounded-full" />
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-amber-400/10 rounded-full blur-2xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 text-amber-300 text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-white/20">
                <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
                Berdiri sejak 1995
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Produsen Per &{' '}
                <span className="text-amber-400">Pegas</span>{' '}
                Terpercaya
              </h1>
              <p className="text-lg text-blue-100 leading-relaxed mb-8 max-w-xl">
                Prima Spring memproduksi berbagai jenis per/pegas berkualitas
                tinggi untuk industri automotif, elektronik, mesin, dan
                aksesoris. Presisi tinggi dengan teknologi CNC modern.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-7 py-3.5 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Lihat Produk Kami
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 px-7 py-3.5 rounded-lg font-semibold transition-all duration-300"
                >
                  Hubungi Kami
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-4 gap-4 mt-12 pt-8 border-t border-white/20">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl font-bold text-amber-400">
                      {stat.value}
                    </div>
                    <div className="text-xs text-blue-200 mt-1 leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative hidden lg:block">
              <div className="relative">
                {/* Main card */}
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                  <div className="grid grid-cols-2 gap-4">
                    {products.slice(0, 4).map((product) => (
                      <div
                        key={product.name}
                        className="bg-white/10 rounded-xl overflow-hidden group"
                      >
                        <div className="aspect-square relative overflow-hidden">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-2.5">
                          <p className="text-white text-xs font-semibold truncate">
                            {product.name}
                          </p>
                          <p className="text-blue-300 text-xs">{product.nameEn}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Kualitas Terjamin</p>
                    <p className="text-sm font-bold text-gray-800">ISO Standard</p>
                  </div>
                </div>

                {/* Floating badge 2 */}
                <div className="absolute -top-5 -right-5 bg-amber-500 rounded-xl shadow-xl p-4 text-white text-center">
                  <p className="text-2xl font-bold">CNC</p>
                  <p className="text-xs opacity-80">Precision</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 80L60 73.3C120 66.7 240 53.3 360 46.7C480 40 600 40 720 46.7C840 53.3 960 66.7 1080 66.7C1200 66.7 1320 53.3 1380 46.7L1440 40V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-title">Mengapa Memilih Prima Spring?</h2>
            <p className="section-subtitle">
              Kami berkomitmen memberikan produk per/pegas terbaik dengan standar
              kualitas internasional
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="card p-6 hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${f.color}`}
                >
                  <f.icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-12">
            <div>
              <h2 className="section-title mb-2">Produk Unggulan Kami</h2>
              <p className="text-gray-500">
                Berbagai jenis per/pegas untuk kebutuhan industri Anda
              </p>
            </div>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-[#1e3a5f] font-semibold hover:gap-3 transition-all duration-200 whitespace-nowrap"
            >
              Semua Produk <ChevronRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Link
                key={product.name}
                href="/portfolio"
                className="card group overflow-hidden"
              >
                <div className="aspect-square overflow-hidden bg-gray-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-gray-900">{product.name}</h3>
                  <p className="text-xs text-[#2c5f8a] font-medium mb-2">
                    {product.nameEn}
                  </p>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {product.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <span className="text-sm font-semibold text-amber-600 uppercase tracking-wider">
                Tentang Kami
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mt-3 mb-6">
                Berpengalaman Sejak 1995 dalam Industri Per & Pegas
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                PRIMA SPRING berdiri sejak tahun 1995, memproduksi berbagai
                jenis per/pegas untuk keperluan produksi perusahaan Anda
                khususnya di bidang automotif, elektronik, mesin dan aksesoris.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Prima Spring telah berpengalaman melayani pengadaan per/pegas
                untuk industri skala besar – menengah – kecil – sampai
                perorangan. Kami menggunakan mesin dengan teknologi CNC yang
                ditangani oleh tenaga ahli sehingga dapat menghasilkan pegas
                dengan dimensi yang lebih presisi dan variatif.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Ukuran kawat: 0.2mm – 7mm',
                  'Material SWP high carbon & stainless steel',
                  'Mesin CNC presisi tinggi',
                  'Standar DIN, JIS, SAE, AISI',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/profile" className="btn-primary">
                Selengkapnya <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="card p-6 text-center">
                    <div className="text-4xl font-bold text-[#1e3a5f] mb-1">29+</div>
                    <div className="text-sm text-gray-500">Tahun Pengalaman</div>
                  </div>
                  <div className="aspect-square overflow-hidden rounded-xl shadow-sm border border-gray-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="http://primaspring.com/wp-content/uploads/2013/11/mesin-putih.jpg"
                      alt="Mesin CNC Prima Spring"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="aspect-square overflow-hidden rounded-xl shadow-sm border border-gray-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="http://primaspring.com/wp-content/uploads/2013/11/mesin-coklat.jpg"
                      alt="Compression Spring Machine"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="bg-[#1e3a5f] rounded-xl p-6 text-white text-center">
                    <div className="text-4xl font-bold text-amber-400 mb-1">
                      6+
                    </div>
                    <div className="text-sm text-blue-200">Kategori Produk</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Order CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-[#1e3a5f] rounded-2xl p-10 md:p-14 relative overflow-hidden">
            <div className="absolute inset-0 pattern-overlay opacity-50" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Siap Memesan Per/Pegas?
              </h2>
              <p className="text-blue-200 text-lg mb-8 max-w-xl mx-auto">
                Hubungi kami sekarang untuk mendapatkan harga terbaik dan konsultasi
                spesifikasi produk yang Anda butuhkan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/6281212877737"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 px-7 py-3.5 rounded-lg font-semibold transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  081212877737
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
