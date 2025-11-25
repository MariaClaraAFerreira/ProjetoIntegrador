// next.config.mjs
import withPWA from "next-pwa";
import WorkboxPlugin from "workbox-webpack-plugin";

const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "blobs.vercel.com",
      },
    ],
  },
  webpack: (config, { isServer }) => {
    // Só aplica no client e em produção
    if (!isServer && isProd) {
      config.plugins.push(
        new WorkboxPlugin.GenerateSW({
          clientsClaim: true,
          skipWaiting: true,
          maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, // 5MB
        })
      );
    }
    return config;
  },
};

// Configuração do PWA
export default withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
})(nextConfig);
