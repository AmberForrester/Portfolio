/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    swcMinify: true,
    typescript: {
      ignoreBuildErrors: true,
    }
    // Add any additional configurations here if needed
  };
  
  export default nextConfig;