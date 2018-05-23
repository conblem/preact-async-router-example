const merge = require("webpack-merge");
const CompressionPlugin = require("compression-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const BrotliPlugin = require("brotli-webpack-plugin");

const baseconfig = require("./webpack.base.config");

module.exports = (env, { mode }) => {
  const isProd = mode === "production";
  return merge(baseconfig, {
    entry: ["./src/client.js"],
    devtool: isProd ? false : "source-map",
    output: {
      path: __dirname + "/../dist",
      publicPath: "/dist/",
      filename: "bundle.js"
    },
    devServer: {
      contentBase: "./dist"
    },
    plugins: isProd
      ? [new UglifyJsPlugin(), new CompressionPlugin(), new BrotliPlugin()]
      : [new BundleAnalyzerPlugin()]
  });
};
