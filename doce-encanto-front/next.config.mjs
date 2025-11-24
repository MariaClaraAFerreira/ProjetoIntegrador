import withPWA from "next-pwa";

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
