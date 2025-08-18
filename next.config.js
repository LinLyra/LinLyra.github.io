// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // 为 GitHub Pages 做静态导出
  output: 'export',
  // 关闭 Next 的图片优化（静态托管不支持）
  images: { unoptimized: true },
  // 生成以 / 结尾的路径，保证 /index.html 能命中
  trailingSlash: true,
};

module.exports = nextConfig;
