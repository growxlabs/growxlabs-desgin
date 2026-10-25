import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  webpack(config) {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "lucide-react": path.resolve(__dirname, "./components/icons/index.ts"),
    };
    return config;
  },
  turbopack: {
    resolveAlias: {
      "lucide-react": "./components/icons/index.ts",
    },
  },
  /** Hides the bottom-left Next.js dev badge in development */
  devIndicators: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '**',
      },
    ],
  },
  compress: true,
  async redirects() {
    return [
      {
        source: '/en',
        destination: '/',
        permanent: true,
      },
      {
        source: '/en-IN',
        destination: '/',
        permanent: true,
      },
      {
        source: '/en/:path*',
        destination: '/:path*',
        permanent: true,
      },
      {
        source: '/en-IN/:path*',
        destination: '/:path*',
        permanent: true,
      },
    ];
  },
  experimental: {
    optimizePackageImports: [
      'lucide-react', 
      'framer-motion', 
      'three', 
      'clsx',
      'tailwind-merge'
    ],
    scrollRestoration: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
