/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MODELS: 25,
  },
  staticPageGenerationTimeout: 600000,
}

module.exports = nextConfig
