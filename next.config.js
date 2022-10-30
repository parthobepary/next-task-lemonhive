/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  images: {
    domains: ["i.ibb.co"],
    hostname: ["i.ibb.co"],
  },
};
