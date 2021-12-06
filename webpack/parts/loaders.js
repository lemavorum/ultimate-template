const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

const sassScssCss = {
  test: /\.(s[ac]|c)ss$/i,
  use: [MiniCSSExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
};

const tsx = {
  test: /\.tsx$/,
  exclude: /node_modules/,
  use: 'ts-loader',
};

const js = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: 'babel-loader',
};

const icoGifPngJpegJpg = {
  test: /\.(?:ico|gif|png|jpeg|jpg)$/,
  type: 'asset',
};

const wofEotTtfOtf = {
  test: /\.(?:woff(2)|eot|ttf|otf|)$/,
  type: 'asset/inline',
};

const svg = {
  test: /\.svg$/,
  exclude: /node_modules/,
  use: {
    loader: 'svg-react-loader',
  },
};

module.exports = [sassScssCss, tsx, js, icoGifPngJpegJpg, wofEotTtfOtf, svg];
