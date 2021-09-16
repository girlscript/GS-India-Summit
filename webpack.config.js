const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src", "js", "main.js"),
  output: {
    path: path.resolve(__dirname, "static", "js"),
    filename: "bundle.js",
  },
  externals: {
    jquery: "jQuery",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
