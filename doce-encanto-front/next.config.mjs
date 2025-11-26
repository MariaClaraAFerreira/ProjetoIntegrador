// next.config.mjs
import withPWA from "next-pwa";

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
};

// Configuração do PWA (next-pwa já cuida do service worker)
export default withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
})(nextConfig);
