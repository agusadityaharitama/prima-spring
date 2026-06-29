'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MapPin, Phone, Mail, Globe, Clock, Send } from 'lucide-react'

const contactInfo = [
  {
    icon: MapPin,
    title: 'Alamat',
    lines: ['Jl. Wergu Tempel No 21', 'Kudus, Jawa Tengah', 'Indonesia'],
    color: 'bg-blue-50 text-blue-700',
    iconColor: 'text-blue-600',
  },
  {
    icon: Phone,
    title: 'Telepon',
    lines: ['081212877737', '0291 431388', '0291 432520'],
    color: 'bg-amber-50 text-amber-700',
    iconColor: 'text-amber-600',
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['nicholas_yohanes@yahoo.com'],
    color: 'bg-green-50 text-green-700',
    iconColor: 'text-green-600',
  },
  {
    icon: Clock,
    title: 'Jam Operasional',
    lines: ['Senin – Sabtu', '08:00 – 17:00 WIB'],
    color: 'bg-purple-50 text-purple-700',
    iconColor: 'text-purple-600',
  },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', message: '' })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = `Halo Nama Saya ${form.name}\n${form.message}`
    window.open(`https://wa.me/6281212877737?text=${encodeURIComponent(text)}`, '_blank')
  }

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
            / <span className="text-white">Contact Us</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Hubungi Kami
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            Kami siap membantu Anda. Kirimkan pesan, kritik, saran, atau
            pertanyaan mengenai produk kami.
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

      {/* Contact Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info) => (
              <div key={info.title} className="card p-6">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${info.color}`}
                >
                  <info.icon className={`w-6 h-6 ${info.iconColor}`} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">{info.title}</h3>
                {info.lines.map((line, idx) => (
                  <p key={idx} className="text-sm text-gray-500">
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Main Section: Form + Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-2">
                Kirim Pesan
              </h2>
              <p className="text-gray-500 text-sm mb-8">
                Tuliskan pesan Anda dan kami akan membalas melalui WhatsApp.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Nama <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Nama Anda"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]/30 focus:border-[#1e3a5f] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Pesan <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tuliskan pesan, pertanyaan, saran, atau kritik Anda..."
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]/30 focus:border-[#1e3a5f] transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full btn-primary justify-center py-3.5"
                >
                  <Send className="w-4 h-4" />
                  Kirim Pesan via WhatsApp
                </button>
              </form>
            </div>

            {/* Map + Info */}
            <div className="space-y-6">
              {/* Google Maps Embed */}
              <div className="card overflow-hidden">
                <div className="h-72 bg-gray-100 relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.1!2d110.8369!3d-6.8046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNDgnMTYuNiJTIDExMMKwNTAnMTIuOCJF!5e0!3m2!1sen!2sid!4v1000000000000!5m2!1sen!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Prima Spring Location"
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                <div className="p-4 flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[#1e3a5f] flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Jl. Wergu Tempel No 21
                    </p>
                    <p className="text-xs text-gray-500">
                      Kudus, Jawa Tengah, Indonesia
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
