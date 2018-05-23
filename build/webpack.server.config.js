const merge = require("webpack-merge");

const baseconfig = require("./webpack.base.config");

module.exports = merge(baseconfig, {
  target: "node",
  entry: ["./src/App.js"],
  devtool: "source-map",
  output: {
    libraryTarget: "commonjs2",
    path: __dirname + "/../dist",
    filename: "App.js"
  }
});
