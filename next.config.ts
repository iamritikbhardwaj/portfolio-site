import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  // basePath: "",
  // output: "export",
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
};

export default nextConfig;
