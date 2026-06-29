import Link from 'next/link'
import { CheckCircle, ArrowRight, Factory, Award, Users, Gauge } from 'lucide-react'

const advantages = [
  {
    icon: Factory,
    title: 'Proses Kerja Cepat',
    desc: '14 hari kerja – 30 hari kerja',
    color: 'bg-blue-50 text-blue-700',
  },
  {
    icon: Award,
    title: 'Material Premium',
    desc: 'SWP high carbon, SUS 304 standar DIN / JIS / SAE / AISI',
    color: 'bg-amber-50 text-amber-700',
  },
  {
    icon: Gauge,
    title: 'Ukuran Bervariasi',
    desc: 'Kawat 0.2mm – 7mm (>7mm khusus per tekan)',
    color: 'bg-green-50 text-green-700',
  },
  {
    icon: Users,
    title: 'Semua Skala Industri',
    desc: 'Besar – menengah – kecil – perorangan',
    color: 'bg-purple-50 text-purple-700',
  },
]

const products = [
  {
    name: 'Per Tekan (Compression Spring)',
    desc: 'Per tekan / compression spring berbagai ukuran dan spesifikasi.',
  },
  {
    name: 'Per Tarik (Extension Spring)',
    desc: 'Per tarik / extension spring / tension spring kualitas tinggi.',
  },
  {
    name: 'Torsion Spring',
    desc: 'Per torsi untuk berbagai kebutuhan mekanis.',
  },
  {
    name: 'Custom Spring',
    desc: 'Pegas custom sesuai gambar atau spesifikasi khusus pelanggan.',
  },
  {
    name: 'Conical Spring (Tirus)',
    desc: 'Per bentuk kerucut / conical spring untuk aplikasi khusus.',
  },
  {
    name: 'Aksesoris Spring Bed',
    desc: 'Per bonnel 15/16/17cm, M Guard, kawat ulir, dan aksesoris lainnya.',
  },
]

const timeline = [
  { year: '1995', event: 'Prima Spring berdiri di Kudus, Jawa Tengah.' },
  {
    year: '2000an',
    event: 'Ekspansi melayani industri besar – menengah – kecil.',
  },
  {
    year: '2010',
    event: 'Adopsi mesin CNC (Computer Numerical Control) untuk presisi lebih tinggi.',
  },
  {
    year: '2013',
    event: 'Peluncuran website resmi primaspring.com.',
  },
  {
    year: '2024',
    event: 'Terus berinovasi dengan teknologi dan material terkini.',
  },
]

export default function ProfilePage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-[#1e3a5f] to-[#2c5f8a] relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm text-blue-300 mb-3">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>{' '}
            / <span className="text-white">Profile</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Profil Perusahaan
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            Mengenal lebih jauh Prima Spring — produsen per/pegas terpercaya
            Indonesia sejak 1995.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 50" fill="none">
            <path
              d="M0 50L1440 50L1440 0C1200 30 960 50 720 40C480 30 240 10 0 30Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-sm font-semibold text-amber-600 uppercase tracking-wider">
                Sejarah Perusahaan
              </span>
              <h2 className="text-3xl font-bold text-[#1e3a5f] mt-3 mb-6">
                Sejarah Prima Spring
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                <strong className="text-gray-800">PRIMA SPRING</strong> berdiri
                sejak tahun <strong className="text-[#1e3a5f]">1995</strong>,
                memproduksi berbagai jenis per/pegas untuk keperluan produksi
                perusahaan Anda khususnya di bidang automotif, elektronik, mesin
                dan aksesoris.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                Prima Spring telah berpengalaman melayani pengadaan per/pegas
                untuk industri skala besar – menengah – kecil – sampai
                perorangan. Kami menggunakan mesin dengan teknologi CNC yang
                ditangani oleh tenaga ahli sehingga dapat menghasilkan pegas
                dengan dimensi yang lebih presisi dan variatif.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Berlokasi di Kudus, Jawa Tengah, kami bangga menjadi salah satu
                produsen per/pegas yang dipercaya oleh berbagai perusahaan di
                seluruh Indonesia dengan kualitas yang konsisten dan harga yang
                kompetitif.
              </p>

              {/* Timeline */}
              <div className="mt-10 space-y-4">
                {timeline.map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-[#1e3a5f] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                        {item.year.slice(-2)}
                      </div>
                      {idx < timeline.length - 1 && (
                        <div className="w-0.5 flex-1 bg-gray-200 mt-2" />
                      )}
                    </div>
                    <div className="pb-4">
                      <span className="text-sm font-semibold text-amber-600">
                        {item.year}
                      </span>
                      <p className="text-gray-700 text-sm mt-0.5">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right – machines */}
            <div className="space-y-6">
              <div className="card overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="http://primaspring.com/wp-content/uploads/2013/11/sf.jpg"
                  alt="CNC Spring Former Machine"
                  className="w-full h-64 object-cover"
                />
                <div className="p-5">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    CNC Spring Former Machine
                  </h3>
                  <p className="text-sm text-gray-500">
                    Mesin CNC canggih untuk produksi pegas dengan presisi tinggi.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="card overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="http://primaspring.com/wp-content/uploads/2013/11/mesin-putih.jpg"
                    alt="Compression Spring Machine"
                    className="w-full h-36 object-cover"
                  />
                  <div className="p-3">
                    <p className="text-xs font-medium text-gray-700">
                      Compression Spring Machine
                    </p>
                  </div>
                </div>
                <div className="card overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="http://primaspring.com/wp-content/uploads/2013/11/mesin-coklat.jpg"
                    alt="Spring Machine"
                    className="w-full h-36 object-cover"
                  />
                  <div className="p-3">
                    <p className="text-xs font-medium text-gray-700">
                      Compression Machine
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-amber-600 uppercase tracking-wider">
              Lini Produk
            </span>
            <h2 className="section-title mt-3">Produk Prima Spring</h2>
            <p className="section-subtitle">
              Kami menyediakan berbagai jenis per/pegas untuk memenuhi
              kebutuhan industri Anda
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, idx) => (
              <div key={idx} className="card p-6 hover:-translate-y-1 transition-all duration-300">
                <div className="w-8 h-8 bg-[#1e3a5f] rounded-lg flex items-center justify-center mb-4">
                  <span className="text-amber-400 font-bold text-sm">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {product.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Advantages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-amber-600 uppercase tracking-wider">
              Keunggulan
            </span>
            <h2 className="section-title mt-3">Keunggulan Produk</h2>
            <p className="section-subtitle">
              Standar kualitas yang kami jaga untuk kepuasan pelanggan
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="grid grid-cols-1 gap-5">
              {advantages.map((adv, idx) => (
                <div key={idx} className="card p-5 flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${adv.color}`}
                  >
                    <adv.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{adv.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{adv.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#1e3a5f] rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 pattern-overlay" />
              <div className="relative">
                <h3 className="text-xl font-bold mb-6 text-amber-400">
                  Spesifikasi Teknis
                </h3>
                <ul className="space-y-4">
                  {[
                    {
                      label: 'Material',
                      value: 'SWP high carbon, SUS 304',
                    },
                    {
                      label: 'Standar',
                      value: 'DIN / JIS / SAE / AISI',
                    },
                    {
                      label: 'Diameter Kawat',
                      value: '0.2 mm – 7 mm',
                    },
                    {
                      label: 'Khusus Per Tekan',
                      value: 'Ukuran > 7 mm tersedia',
                    },
                    {
                      label: 'Teknologi Mesin',
                      value: 'CNC + Compression Machine',
                    },
                    {
                      label: 'Lead Time',
                      value: '14 – 30 hari kerja',
                    },
                  ].map((spec) => (
                    <li
                      key={spec.label}
                      className="flex justify-between items-center border-b border-white/10 pb-4 last:border-0 last:pb-0"
                    >
                      <span className="text-blue-200 text-sm">{spec.label}</span>
                      <span className="text-white font-medium text-sm text-right">
                        {spec.value}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/order"
                  className="mt-8 w-full inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Pesan Sekarang <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
