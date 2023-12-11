/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.digikala.com'
            },
            {
                protocol: "https",
                hostname: "dkstatics-public.digikala.com"
            },
            {
                protocol: "https",
                hostname: "fakestoreapi.com"
            }
        ]
    }
}

module.exports = nextConfig