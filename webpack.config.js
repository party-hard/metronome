const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const packageJSON = require('./package.json');
const ENV = process.env.ENV;
require("babel-core/register");
require("babel-polyfill");

module.exports = {
  devServer: {
    hot: true
  },

  entry: ['babel-polyfill', './src/index.js'],

  stats: {
    colors: true,
    reasons: true
  },

  module: {
    rules: [
      {
        test: /\.wav$/,
        loader: 'file-loader',
        options: {
            name: '[path][name].[ext]',
            emitFile: false
        },
        include: [
          path.resolve(__dirname, 'src', 'worker'),
          path.resolve(__dirname, 'src', 'sounds')
        ]
      }, {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
              presets: ['react', 'es2015']
          }
        },
      }, {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      }, {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new HtmlWebpackPlugin({
      filename: 'auth/success.html',
      template: path.resolve(__dirname, 'src/auth', 'success.html')
    })
  ]
};
