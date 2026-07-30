import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Redirect old sub-routes to single filterable gallery
  async redirects() {
    return [
      { source: '/gallery/images', destination: '/gallery', permanent: true },
      { source: '/gallery/videos', destination: '/gallery', permanent: true },
    ];
  },

  // Headers for Vercel CDN video streaming (Range headers, byte requests & caching)
  async headers() {
    return [
      {
        source: '/av-tec-videos/:path*',
        headers: [
          { key: 'Accept-Ranges', value: 'bytes' },
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
        ],
      },
      {
        source: '/av-tec-videos-collection/:path*',
        headers: [
          { key: 'Accept-Ranges', value: 'bytes' },
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
        ],
      },
      {
        source: '/assets/videos/:path*',
        headers: [
          { key: 'Accept-Ranges', value: 'bytes' },
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
        ],
      },
    ];
  },
};

export default nextConfig;
