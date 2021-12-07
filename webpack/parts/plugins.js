const path = require('path');
const webpack = require('webpack');

const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin');

module.exports = (isDev) => [
  new MiniCSSExtractPlugin({
    filename: isDev ? '[name].css' : '[name].[contenthash].css',
    chunkFilename: isDev ? '[id].css' : '[id].[contenthash].css',
  }),
  new HTMLWebpackPlugin({
    template: path.resolve(__dirname, '../..', 'src/index.html'),
  }),
  new ReactRefreshWebpackPlugin(),
  new SimpleProgressWebpackPlugin({
    format: 'minimal',
  }),
  new webpack.WatchIgnorePlugin({ paths: [/scss\.d\.ts$/] }),
];
