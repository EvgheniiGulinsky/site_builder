/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@platform/ui-kit', '@platform/core', '@platform/features', '@platform/shared'],
  output: 'standalone',
};

module.exports = nextConfig;


