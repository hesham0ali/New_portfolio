import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  experimental: {
    globalNotFound: true,
  },
  async redirects() {
    return [
      {
        source: "/projects/salla-ecommerce-stores",
        destination: "/projects/sho9",
        permanent: true,
      },
      {
        source: "/services/salla-store-development",
        destination: "/services/salla-store-design",
        permanent: true,
      },
      {
        source: "/services/salla-theme-development",
        destination: "/services/salla-theme-customization",
        permanent: true,
      },
    ];
  },
};

const withMDX = createMDX();

export default withMDX(nextConfig);
