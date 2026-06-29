'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import { X, ExternalLink } from 'lucide-react'

type Category =
  | 'All'
  | 'Per Tekan'
  | 'Per Tarik'
  | 'Battery Spring'
  | 'Custom Spring'
  | 'Per Bonnel M Guard'
  | 'Mesin'

const categories: Category[] = [
  'All',
  'Per Tekan',
  'Per Tarik',
  'Battery Spring',
  'Custom Spring',
  'Per Bonnel M Guard',
  'Mesin',
]

interface Product {
  id: number
  name: string
  category: Exclude<Category, 'All'>
  image: string
}

const products: Product[] = [
  // Per Tekan
  { id: 1, name: 'Per Tekan 01', category: 'Per Tekan', image: 'http://primaspring.com/wp-content/uploads/2013/11/ptks01.jpg' },
  { id: 2, name: 'Per Tekan 02', category: 'Per Tekan', image: 'http://primaspring.com/wp-content/uploads/2013/11/ptks022.jpg' },
  { id: 3, name: 'Per Tekan 03', category: 'Per Tekan', image: 'http://primaspring.com/wp-content/uploads/2013/11/ptks03.jpg' },
  { id: 4, name: 'Per Tekan 04', category: 'Per Tekan', image: 'http://primaspring.com/wp-content/uploads/2013/11/ptks04.jpg' },
  { id: 5, name: 'Per Tekan 05', category: 'Per Tekan', image: 'http://primaspring.com/wp-content/uploads/2013/11/ptks05.jpg' },
  { id: 6, name: 'Per Tekan 06', category: 'Per Tekan', image: 'http://primaspring.com/wp-content/uploads/2013/11/ptks06.jpg' },
  { id: 7, name: 'Per Tekan 07', category: 'Per Tekan', image: 'http://primaspring.com/wp-content/uploads/2013/11/ptks07.jpg' },
  { id: 8, name: 'Per Tekan 08', category: 'Per Tekan', image: 'http://primaspring.com/wp-content/uploads/2013/11/ptks08.jpg' },
  { id: 9, name: 'Per Tekan 09', category: 'Per Tekan', image: 'http://primaspring.com/wp-content/uploads/2013/11/ptks09.jpg' },
  { id: 10, name: 'Per Tekan 10', category: 'Per Tekan', image: 'http://primaspring.com/wp-content/uploads/2013/11/ptks10.jpg' },
  { id: 11, name: 'Per Tekan 11', category: 'Per Tekan', image: 'http://primaspring.com/wp-content/uploads/2013/11/ptks11.jpg' },
  { id: 12, name: 'Per Tekan 12', category: 'Per Tekan', image: 'http://primaspring.com/wp-content/uploads/2013/11/ptks12.jpg' },
  { id: 13, name: 'Per Tekan 13', category: 'Per Tekan', image: 'http://primaspring.com/wp-content/uploads/2013/11/ptks13.jpg' },
  { id: 14, name: 'Per Tekan 14', category: 'Per Tekan', image: 'http://primaspring.com/wp-content/uploads/2013/11/ptks14.jpg' },
  { id: 15, name: 'Per Tekan 15', category: 'Per Tekan', image: 'http://primaspring.com/wp-content/uploads/2013/11/ptks15.jpg' },
  { id: 16, name: 'Per Tekan 16', category: 'Per Tekan', image: 'http://primaspring.com/wp-content/uploads/2014/05/ptks16.jpg' },
  { id: 17, name: 'Per Tekan 17', category: 'Per Tekan', image: 'http://primaspring.com/wp-content/uploads/2014/05/ptks17.jpg' },
  { id: 18, name: 'Per Tekan 18', category: 'Per Tekan', image: 'http://primaspring.com/wp-content/uploads/2014/05/ptks18.jpg' },
  { id: 19, name: 'Per Tekan 19', category: 'Per Tekan', image: 'http://primaspring.com/wp-content/uploads/2014/05/ptks19.jpg' },

  // Per Tarik
  { id: 20, name: 'Per Tarik 01', category: 'Per Tarik', image: 'http://primaspring.com/wp-content/uploads/2013/11/pts011.jpg' },
  { id: 21, name: 'Per Tarik 02', category: 'Per Tarik', image: 'http://primaspring.com/wp-content/uploads/2013/11/pts02.jpg' },
  { id: 22, name: 'Per Tarik 03', category: 'Per Tarik', image: 'http://primaspring.com/wp-content/uploads/2013/11/pts03.jpg' },
  { id: 23, name: 'Per Tarik 04', category: 'Per Tarik', image: 'http://primaspring.com/wp-content/uploads/2013/11/pts04.jpg' },
  { id: 24, name: 'Per Tarik 05', category: 'Per Tarik', image: 'http://primaspring.com/wp-content/uploads/2013/11/pts05.jpg' },

  // Battery Spring
  { id: 25, name: 'Battery Spring 01', category: 'Battery Spring', image: 'http://primaspring.com/wp-content/uploads/2013/11/BSs01.jpg' },
  { id: 26, name: 'Battery Spring 02', category: 'Battery Spring', image: 'http://primaspring.com/wp-content/uploads/2013/11/BSs02.jpg' },
  { id: 27, name: 'Battery Spring 03', category: 'Battery Spring', image: 'http://primaspring.com/wp-content/uploads/2013/11/BSs03.jpg' },
  { id: 28, name: 'Battery Spring 04', category: 'Battery Spring', image: 'http://primaspring.com/wp-content/uploads/2013/11/BsS04.jpg' },
  { id: 29, name: 'Battery Spring 05', category: 'Battery Spring', image: 'http://primaspring.com/wp-content/uploads/2013/11/BSs05.jpg' },
  { id: 30, name: 'Battery Spring 06', category: 'Battery Spring', image: 'http://primaspring.com/wp-content/uploads/2013/11/BSs06.jpg' },
  { id: 31, name: 'Battery Spring 07', category: 'Battery Spring', image: 'http://primaspring.com/wp-content/uploads/2013/11/BsS07.jpg' },
  { id: 32, name: 'Battery Spring 08', category: 'Battery Spring', image: 'http://primaspring.com/wp-content/uploads/2013/11/BSs08.jpg' },
  { id: 33, name: 'Battery Spring 09', category: 'Battery Spring', image: 'http://primaspring.com/wp-content/uploads/2013/11/BSs09.jpg' },
  { id: 34, name: 'Battery Spring 10', category: 'Battery Spring', image: 'http://primaspring.com/wp-content/uploads/2013/11/BSs10.jpg' },

  // Custom Spring
  { id: 35, name: 'Custom Spring 01', category: 'Custom Spring', image: 'http://primaspring.com/wp-content/uploads/2013/11/cs011.jpg' },
  { id: 36, name: 'Custom Spring 02', category: 'Custom Spring', image: 'http://primaspring.com/wp-content/uploads/2013/11/css02.jpg' },
  { id: 37, name: 'Custom Spring 03', category: 'Custom Spring', image: 'http://primaspring.com/wp-content/uploads/2013/11/css03.jpg' },
  { id: 38, name: 'Custom Spring 04', category: 'Custom Spring', image: 'http://primaspring.com/wp-content/uploads/2013/11/css04.jpg' },
  { id: 39, name: 'Custom Spring 05', category: 'Custom Spring', image: 'http://primaspring.com/wp-content/uploads/2013/11/css05.jpg' },
  { id: 40, name: 'Custom Spring 06', category: 'Custom Spring', image: 'http://primaspring.com/wp-content/uploads/2013/11/css06.jpg' },
  { id: 41, name: 'Custom Spring 07', category: 'Custom Spring', image: 'http://primaspring.com/wp-content/uploads/2013/11/css07.jpg' },
  { id: 42, name: 'Custom Spring 08', category: 'Custom Spring', image: 'http://primaspring.com/wp-content/uploads/2013/11/css08.jpg' },
  { id: 43, name: 'Custom Spring 09', category: 'Custom Spring', image: 'http://primaspring.com/wp-content/uploads/2013/11/css09.jpg' },

  // Per Bonnel M Guard
  { id: 44, name: 'Per Bonnel + M Guard 01', category: 'Per Bonnel M Guard', image: 'http://primaspring.com/wp-content/uploads/2013/11/bos011.jpg' },
  { id: 45, name: 'Per Bonnel + M Guard 02', category: 'Per Bonnel M Guard', image: 'http://primaspring.com/wp-content/uploads/2013/11/bos02.jpg' },
  { id: 46, name: 'Per Bonnel + M Guard 03', category: 'Per Bonnel M Guard', image: 'http://primaspring.com/wp-content/uploads/2013/11/bos03.jpg' },

  // Mesin
  { id: 47, name: 'CNC Spring Former Machine', category: 'Mesin', image: 'http://primaspring.com/wp-content/uploads/2013/11/sf.jpg' },
  { id: 48, name: 'Compression Spring Machine (White)', category: 'Mesin', image: 'http://primaspring.com/wp-content/uploads/2013/11/mesin-putih.jpg' },
  { id: 49, name: 'Compression Spring Machine', category: 'Mesin', image: 'http://primaspring.com/wp-content/uploads/2013/11/mesin-coklat.jpg' },
]

const categoryColors: Record<Exclude<Category, 'All'>, string> = {
  'Per Tekan': 'bg-blue-100 text-blue-700',
  'Per Tarik': 'bg-green-100 text-green-700',
  'Battery Spring': 'bg-amber-100 text-amber-700',
  'Custom Spring': 'bg-purple-100 text-purple-700',
  'Per Bonnel M Guard': 'bg-rose-100 text-rose-700',
  'Mesin': 'bg-gray-100 text-gray-700',
}

export default function PortfolioPage() {
  const [active, setActive] = useState<Category>('All')
  const [lightbox, setLightbox] = useState<Product | null>(null)
  const [animating, setAnimating] = useState(false)

  const filtered =
    active === 'All' ? products : products.filter((p) => p.category === active)

  const handleFilter = useCallback((cat: Category) => {
    if (cat === active) return
    setAnimating(true)
    setTimeout(() => {
      setActive(cat)
      setAnimating(false)
    }, 220)
  }, [active])

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
            / <span className="text-white">Our Product</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Products
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            Koleksi lengkap per/pegas berkualitas tinggi untuk berbagai
            kebutuhan industri Anda.
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

      {/* Filter & Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  active === cat
                    ? 'bg-[#1e3a5f] text-white shadow-md scale-105'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
                {cat !== 'All' && (
                  <span className="ml-1.5 text-xs opacity-70">
                    ({products.filter((p) => p.category === cat).length})
                  </span>
                )}
                {cat === 'All' && (
                  <span className="ml-1.5 text-xs opacity-70">
                    ({products.length})
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Count */}
          <p className="text-sm text-gray-400 mb-6 text-center">
            Menampilkan {filtered.length} produk
            {active !== 'All' && ` dalam kategori "${active}"`}
          </p>

          {/* Grid */}
          <div
            className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 transition-all duration-200 ${
              animating ? 'opacity-0 translate-y-3' : 'opacity-100 translate-y-0'
            }`}
          >
            {filtered.map((product) => (
              <button
                key={product.id}
                onClick={() => setLightbox(product)}
                className="card group overflow-hidden text-left hover:-translate-y-1 transition-all duration-300"
              >
                <div className="aspect-square overflow-hidden bg-gray-50 relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <ExternalLink className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                <div className="p-3">
                  <p className="text-xs font-medium text-gray-900 truncate">
                    {product.name}
                  </p>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full mt-1 inline-block ${categoryColors[product.category]}`}
                  >
                    {product.category}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="bg-white rounded-2xl overflow-hidden max-w-lg w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-square overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={lightbox.image}
                alt={lightbox.name}
                className="w-full h-full object-contain bg-gray-50"
              />
            </div>
            <div className="p-6 flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900 text-lg">
                  {lightbox.name}
                </h3>
                <span
                  className={`text-sm px-3 py-1 rounded-full mt-2 inline-block ${categoryColors[lightbox.category]}`}
                >
                  {lightbox.category}
                </span>
              </div>
              <div className="flex gap-3">
                <Link
                  href="/order"
                  className="btn-primary text-sm py-2 px-4"
                  onClick={() => setLightbox(null)}
                >
                  Pesan
                </Link>
                <button
                  onClick={() => setLightbox(null)}
                  className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">
            Tidak Menemukan yang Anda Cari?
          </h2>
          <p className="text-gray-500 mb-8">
            Kami menerima pesanan custom spring sesuai spesifikasi Anda.
            Hubungi kami untuk konsultasi gratis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/order" className="btn-primary">
              Buat Pesanan Custom
            </Link>
            <Link href="/contact" className="btn-outline">
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
