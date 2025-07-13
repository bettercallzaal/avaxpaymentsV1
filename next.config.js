/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Disable server-side rendering for components that use browser APIs
  // This is important for thirdweb components
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    return config;
  },
  // Disable image optimization for thirdweb images
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
