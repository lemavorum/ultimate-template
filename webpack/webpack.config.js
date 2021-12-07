const path = require('path');

const rules = require('./parts/loaders');
const plugins = require('./parts/plugins');

module.exports = (envVars) => {
  const { env } = envVars;
  const isProd = env === 'production';
  const isDev = env === 'development';

  return {
    mode: env,
    entry: {
      main: './src/index.tsx',
    },
    output: {
      clean: true,
      filename: isDev ? '[name].js' : '[name].[contenthash].js',
      path: path.resolve(__dirname, '..', 'dist'),
      assetModuleFilename: 'images/[hash][ext][query]',
    },
    devServer: {
      static: 'dist',
      hot: true,
      open: true,
    },
    devtool: isProd ? 'source-map' : 'cheap-module-source-map',
    target: isProd ? 'browserslist' : 'web',
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.jsx'],
      alias: {
        '@components': path.resolve('./src/components'),
        '@assets': path.resolve('./src/assets'),
      },
    },
    module: {
      rules,
    },
    plugins: plugins(isDev),
  };
};
