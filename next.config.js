/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'primaspring.com',
        pathname: '/wp-content/**',
      },
      {
        protocol: 'https',
        hostname: 'primaspring.com',
        pathname: '/wp-content/**',
      },
    ],
  },
}

module.exports = nextConfig
