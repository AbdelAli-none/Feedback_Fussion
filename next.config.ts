import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  serverExternalPackages: ["@prisma/client", "pg"],

  turbopack: {
    resolveAlias: {
      // Helps Turbopack find your custom Prisma output
      "../generated/prisma": "./generated/prisma",
      // or if using @ alias:
      // "@/generated/prisma": "./generated/prisma",
    },
  },
};

export default nextConfig;
