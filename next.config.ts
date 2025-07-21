import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  basePath: "/portfolio",
  output: "export",
};

export default nextConfig;
