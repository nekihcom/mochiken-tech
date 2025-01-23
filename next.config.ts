import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '35.77.104.45',
        port: '',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
