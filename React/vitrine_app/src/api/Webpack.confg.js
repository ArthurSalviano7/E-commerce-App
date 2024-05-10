const path = require('path');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
module.exports = {
  resolve: {
    fallback: {
      "fs": false,
      "util": false,
      "path": false,
      "assert": false,
      "url": false,
      "crypto": false
    }
  },
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new NodePolyfillPlugin()
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 9000
  }
};








