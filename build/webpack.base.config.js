module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: "babel-loader"
      }
    ]
  }
};
