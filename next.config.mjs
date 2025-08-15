/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // 关键：静态导出 -> 生成 out/
  trailingSlash: true,       // 建议：生成 xxx/index.html
  images: { unoptimized: true }, // GitHub Pages 没有 Image Optimizer
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
