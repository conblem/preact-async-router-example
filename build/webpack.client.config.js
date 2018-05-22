const merge = require("deepmerge");

const baseconfig = require("./webpack.base.config");

module.exports = merge(baseconfig, {
  entry: ["./src/client.js"],
  output: {
    path: __dirname + "/../dist",
    publicPath: "/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: "./dist"
  }
});
