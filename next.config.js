/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MODELS: 25,
    PASSWORD: process.env.PASSWORD,
    LOGIN: process.env.LOGIN,
  },
  async headers() {
    return [
      {
        source: "/about",
        headers: [
          {
            key: "Cache-Control",
            value: "s-maxage=1, stale-while-revalidate",
          },
        ],
      },
    ];
  },
  staticPageGenerationTimeout: 600000,
}

module.exports = nextConfig
