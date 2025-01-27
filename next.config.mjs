/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true, // Aktifkan folder "app" jika dipakai
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.pexels.com"
            },
            {
                protocol: "https",
                hostname: "static.jakmall.id"
            }
        ]
    }
};

export default nextConfig;
