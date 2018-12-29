import webpack from 'webpack';
import path from 'path';

const commonConfig = {
  entry: {
    'babel-polyfill': 'babel-polyfill',
    app: './src/index.jsx',
  },
  output: {
    // The filename to use for output file(s)
    filename: '[name].[hash].js',
    // [chunkhash] - The hash of the chunk content
    chunkFilename: '[name].[chunkhash].chunk.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss', '.sass'],
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(jpg|png|gif|ico)$/,
        loader: 'file-loader?name=assets/images/[name].[ext]',
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?name=assets/fonts/[name].[ext]&limit=100000',
      },
    ],
  },
  optimization: {
    // runtimeChunk -Move webpackBootstrap code into seperate chunk
    runtimeChunk: true,
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          test: /node_modules/,
          name: 'vendor',
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ],
};

export default commonConfig;
