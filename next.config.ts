import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ["mohair.qodeinteractive.com"], // Add the domain you want to allow
    // You can add more domains as needed, like this:
    // domains: ['mohair.qodeinteractive.com', 'anotherdomain.com'],
  },
};

export default nextConfig;
