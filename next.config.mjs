/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',           // 关键：让 Next 导出静态站点
  images: { unoptimized: true },
  trailingSlash: true         // 生成 .../index.html，配合 GitHub Pages 更稳
};
export default nextConfig;

