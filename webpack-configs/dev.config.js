import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const devConfig = {
  mode: 'development',
  devtool: 'eval-source-map',
  output: {
    path: path.join(__dirname, '../build'),
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new webpack.DefinePlugin({
      WEBPACK_DEV_BUILD: true,
      WEBPACK_PROD_BUILD: false,
    }),
  ],
  devServer: {
    port: 3000,
    historyApiFallback: true,
    publicPath: '/',
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
      },
    },
  },
};

export default devConfig;
