/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',           // 关键：导出静态站点到 ./out
  images: { unoptimized: true },
  // 可选
  // trailingSlash: true,
  reactStrictMode: true,
};
export default nextConfig;
