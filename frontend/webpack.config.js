const path = require("path");

module.exports = {
  entry: "./src/index.jsx",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js"
  },
  devServer: {
    port: 3000,
    contentBase: path.join(__dirname, "dist"),
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /.js(x)?$/,
        use: "babel-loader",
        exclude: /node_modules/,
        resolve: {
          extensions: [".js", ".jsx"]
        }
      }
    ]
  }
};
