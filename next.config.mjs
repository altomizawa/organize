/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i0.wp.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 't4.ftcdn.net',
        port: '',
      },
    ],
  },
};

export default nextConfig;
