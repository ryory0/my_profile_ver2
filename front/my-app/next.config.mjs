/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // Strict Modeを無効化
  experimental: {
    appDir: true, // App Routerを有効化
  },
};

export default nextConfig;
