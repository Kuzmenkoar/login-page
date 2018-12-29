import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const prodConfig = {
  mode: 'production',
  output: {
    path: path.join(__dirname, '../../output'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    /**
     * HashedModuleIdsPlugin means: despite any new local dependencies, our
     * vendor hash should stay consistent between builds
     */
    new webpack.HashedModuleIdsPlugin(),
    new webpack.DefinePlugin({
      WEBPACK_PROD_BUILD: true,
      WEBPACK_DEV_BUILD: false,
    }),
  ],
};

export default prodConfig;
