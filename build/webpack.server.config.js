const merge = require("deepmerge");

const baseconfig = require("./webpack.base.config");

module.exports = merge(baseconfig, {
  target: "node",
  entry: ["./src/App.js"],
  output: {
    path: __dirname + "/../dist",
    filename: "App.js"
  }
});
