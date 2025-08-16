// next.config.mjs
import webpack from "webpack";

const nextConfig = {
  output: "export",                  // 你本来就在用
  images: { unoptimized: true },     // GitHub Pages 推荐
  // trailingSlash: true,            // 可选：GH Pages 常用
  webpack: (config, { isServer }) => {
    if (isServer) {
      // 在服务端构建时直接忽略 three/@react-three/*，防止预渲染阶段评估它们
      config.plugins.push(
        new webpack.IgnorePlugin({
          resourceRegExp: /^(@react-three\/fiber|@react-three\/drei|three)$/
        })
      );
    }
    return config;
  },
};

export default nextConfig;
