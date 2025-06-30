import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    domains: ["api.nasa.gov"],
    remotePatterns: [
      new URL("http://mars.jpl.nasa.gov/**"),
      new URL("https://apod.nasa.gov/**"),
      new URL("https://api.nasa.gov/**"),
    ],
  },
};

export default nextConfig;
