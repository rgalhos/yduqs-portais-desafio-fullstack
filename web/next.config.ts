import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    prependData: '@use "@/app/variables";',
  },
};

export default nextConfig;
