/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'shop-phinf.pstatic.net',
      },
    ],
  },
};

module.exports = nextConfig;
