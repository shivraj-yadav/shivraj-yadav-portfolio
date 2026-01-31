/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  onDemandEntries: {
    maxInactiveAge: 1000,
    maxSize: 50,
  },
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
}

export default nextConfig
