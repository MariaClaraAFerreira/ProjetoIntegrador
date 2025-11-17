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

export default nextConfig;
