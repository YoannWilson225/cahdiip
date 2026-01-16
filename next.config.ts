import { NextConfig } from 'next';

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  // Configuration Turbopack vide pour continuer à utiliser webpack
  turbopack: {},
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Empêche Webpack de charger le module `canvas` côté serveur
      config.externals = [...(config.externals || []), 'canvas'];
    }

    return config;
  },
};

export default nextConfig;
