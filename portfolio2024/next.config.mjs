/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,  // This will skip ESLint during builds
  },
  images: {
    unoptimized: true,  // Disable image optimization for static export
  }
};

export default nextConfig;