import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow HMR/dev assets when opening the app via LAN IP (not only localhost).
  allowedDevOrigins: ["192.168.1.13"],
};

export default nextConfig;
