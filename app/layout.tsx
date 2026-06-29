import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Prima Spring - Spring & Pegas Manufacturer Indonesia',
  description:
    'Prima Spring berdiri sejak 1995, memproduksi berbagai jenis per/pegas berkualitas tinggi untuk industri automotif, elektronik, mesin dan aksesoris di Kudus, Jawa Tengah.',
  keywords: 'prima spring, per tekan, per tarik, compression spring, extension spring, battery spring, custom spring, kudus, indonesia',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
