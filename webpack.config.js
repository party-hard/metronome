const HtmlWebPackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
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
  stats: {
    colors: true,
    reasons: true
  },
  cache: false,
  devtool: process.env.NODE_ENV === "production" ? false : 'source-map',
  node: {
    fs: "empty"
  },


  optimization: {
    splitChunks: {
      chunks: 'all',
    }
  },




  entry: {
    index: ['babel-polyfill', './src/index.js'],
    vendors: [
      "react",
      "react-redux",
      "redux",
      "redux-logger",
      "redux-thunk",
      "react-dom",
      "bootstrap",
      "cuid",
      "file-loader",
      "lodash",
    ]
  },

  output: {
     path: path.join(__dirname, 'dist'),
     filename: '[name].[hash].js',
     chunkFilename: '[name].[chunkhash].js',
     publicPath: '',
     globalObject: 'this'
  },

  module: {
    rules: [
      {
        test: /\.wav$/,
        loader: 'file-loader',
        options: {
            name: '[path][name].[ext]',
            useRelativePath: process.env.NODE_ENV === "production"
        },
        include: [
          path.resolve(__dirname, 'src', 'sounds')
        ]
      }, {
        test: /\.(jpe?g|png|gif|ico)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          useRelativePath: process.env.NODE_ENV === "production"
        },
        include: [
          path.resolve(__dirname, 'src', 'icons')
        ]
      }, {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
              presets: ['env', 'react', 'stage-0'],
              plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
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
        use: [
          'css-hot-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],

      }, {
        test: /\.worker\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'worker-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
       favicon: 'src/icons/favicon.ico'
    }),
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
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default'],            
    })
  ]
};
