<<<<<<< HEAD
import withPWA from "next-pwa";
=======
// next.config.mjs
import WorkboxPlugin from "workbox-webpack-plugin";

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
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
>>>>>>> b6e4e758da4856ed257af723d5ea551129bef690

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

// Configuração do PWA
const withPWAConfig = withPWA({
    dest: "public",
    register: true,
    skipWaiting: true,
})(nextConfig);

export default withPWAConfig;
