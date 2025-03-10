import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.jp',
        port: '',
        pathname: '/**',
        search: '',
      },
    ],
    domains: ["qiita-user-contents.imgix.net", "assets.st-note.com"],
  },
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
};

export default nextConfig;
