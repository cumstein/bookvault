import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: [
      'covers.openlibrary.org',
      'images.unsplash.com',
      's3.amazonaws.com',
    ],
  },
};

export default nextConfig;
