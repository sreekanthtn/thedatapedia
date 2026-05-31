/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['raw.githubusercontent.com'],
  },
  async headers() {
    return [
      {
        source: '/data/:path*',
        headers: [{ key: 'Cache-Control', value: 's-maxage=3600, stale-while-revalidate=86400' }],
      },
    ]
  },
}

module.exports = nextConfig
