import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable strict mode for better error detection
  reactStrictMode: true,

  // Compress responses
  compress: true,

  // Image optimization settings
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },

  // Allow external requests from the API routes
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
        ],
      },
    ];
  },
};

export default nextConfig;
