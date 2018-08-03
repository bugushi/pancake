const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const eslintFormatter = require('react-dev-utils/eslintFormatter');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const destDir = process.env.NODE_ENV === 'production' ? '/dist' : '/static';

module.exports = {
  entry: [require.resolve('./src/index.jsx')],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        enforce: 'pre',
        use: [
          {
            options: {
              formatter: eslintFormatter,
              eslintPath: require.resolve('eslint')
            },
            loader: require.resolve('eslint-loader')
          }
        ],
        include: path.join(__dirname, '/src')
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader',
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'url-loader',
        options: {
          limit: 10000,
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // import时可省略js,jsx
  },
  output: {
    filename: '[name].[hash].bundle.js',
    chunkFilename: '[name].[chunkhash].bundle.js',
    path: path.join(__dirname, destDir),
  },
  watchOptions: {
    aggregateTimeout: 300 // 延迟 300ms watch
  },
  mode: process.env.NODE_ENV,
  plugins: [
    new CleanWebpackPlugin(['./static', './dist']),
    new HTMLWebpackPlugin({
      template: path.join(__dirname, '/src/index.html')
    })
  ]
};
