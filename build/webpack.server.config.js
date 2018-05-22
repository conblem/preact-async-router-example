const merge = require("deepmerge");

const baseconfig = require("./webpack.base.config");

module.exports = merge(baseconfig, {
  target: "node",
  entry: ["./src/App.js"],
  output: {
    libraryTarget: "commonjs2",
    path: __dirname + "/../dist",
    filename: "App.js"
  }
});
