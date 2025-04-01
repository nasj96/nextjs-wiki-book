import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  compiler: {
    // stylecComponents 활성화
    styledComponents: true,
  },
};

export default nextConfig;
