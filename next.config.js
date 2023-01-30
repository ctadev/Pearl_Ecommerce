/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "rb.gy",
      "raw.githubusercontent.com",
      "drive.google.com",
      "images.unsplash.com",
    ],
  },
};

module.exports = nextConfig;
