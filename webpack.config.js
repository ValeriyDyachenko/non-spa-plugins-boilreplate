const path = require("path");
const webpack = require("webpack");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    selectRegion: ['./src/modules/selectRegion/index.js'],
    // justTest: ['./src/modules/justTest/index.js'],
  },
  output: {
    publicPath: "/dist/",
    path: path.resolve(__dirname, "dist/"),
    filename: "[name].js",
    chunkFilename: '[name].bundle.js',

    // library: "[name]",
    // libraryTarget: 'var',
    // Using the library does not allow you to access the function directly,
    // but only through an intermediary "dafault" key, for example selectRegion.default.selectRegion
    // So i'm just use global window for expose variables: window.selectRegion = selectRegion
  },
  optimization: {
    minimizer: [new UglifyJsPlugin({
      test: /\.js(\?.*)?$/i,
      exclude: /node_modules/
    })],
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/](react|react-dom|react-redux|redux|redux-thunk)[\\/]/,
          name: 'vendorDepends',
          chunks: 'all',
        },
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: [
            'babel-loader',
            'eslint-loader'
        ],
      },
      {
        test: /\.css$/,
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  resolve: {extensions: ['*', '.js', '.jsx']},
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
    hotOnly: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(['dist']),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    // new BundleAnalyzerPlugin(),
  ],
};
