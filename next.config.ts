import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/',// Page racine
        destination: '/dashboard', //Page cible
        permanent: false, // Redirection temporaire
      },
    ];
  },
};

export default nextConfig;
