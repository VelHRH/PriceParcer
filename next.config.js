/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MODELS: 25,
    PASSWORD: process.env.PASSWORD,
    LOGIN: process.env.LOGIN,
  },
  staticPageGenerationTimeout: 600000,
}

module.exports = nextConfig
