/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { hostname: "cdn.sanity.io" },
            { hostname: "img.clerk.com" },
        ]
    }
};

export default nextConfig;
