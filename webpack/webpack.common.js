
const path = require("path")
const webpack = require("webpack")
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin")
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin');

module.exports = {
  entry: {
    main: "./src/index.tsx"
  },
  output: {
    clean: true,
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "..", "dist"),
    assetModuleFilename: "images/[hash][ext][query]"
  },
  devServer: {
    static: "dist",
    hot: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          MiniCSSExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ]
      },
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        use: "ts-loader"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.(?:ico|gif|png|jpeg|jpg)$/,
        type: "asset"
      },
      {
        test: /\.(?:woff(2)|eot|ttf|otf|)$/,
        type: "asset/inline"
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        use: {
            loader: 'svg-react-loader',
        },
    }
    ]
  },
  plugins: [
    new MiniCSSExtractPlugin(),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "..", "src/index.html")
    }),
    new ReactRefreshWebpackPlugin(),
    new SimpleProgressWebpackPlugin({
      format: "minimal"
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"]
  },
}