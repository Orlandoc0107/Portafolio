/** @type {import('next').NextConfig} */
const nextConfig = {}

//module.exports = nextConfig

module.exports = {
    images: {
        domains: [new URL(process.env.NEXT_PUBLIC_BACKEND_URL).hostname],
    },
  }