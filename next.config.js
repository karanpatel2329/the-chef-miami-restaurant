/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images:{
    unoptimized:true
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  assetPrefix: '.'
}


module.exports = nextConfig
