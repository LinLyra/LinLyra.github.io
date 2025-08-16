// next.config.mjs
const nextConfig = {
  // GH Pages 专用的 output: "export" 要去掉
  // images 你可以保留或删除；删除后可用 Vercel 的图片优化
  images: { unoptimized: true }, // 可留可去
};

export default nextConfig;
