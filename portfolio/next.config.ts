import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/portforlio",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
