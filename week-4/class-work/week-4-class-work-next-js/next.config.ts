import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    remotePatterns: [
      new URL("http://mars.jpl.nasa.gov/**"),
      new URL("https://apod.nasa.gov/**"),
      new URL("https://api.nasa.gov/**"),
      new URL("https://api.nasa.gov/EPIC/archive/natural/**"),
    ],
  },
};

export default nextConfig;
