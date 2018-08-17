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
        test: /\.css$/,
        use: [
          'style-loader', // 注入css内容到html中或者引入处
          'css-loader', // 处理@import 或 url()等
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                require('precss')(), // 类sass，包含postcss-preset-env, preset-env包含autoprefixer
                require('cssnano')()
              ]
            }
          }
        ]
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
    filename: '[name].[hash].bundle.js', // 入口文件hash
    chunkFilename: '[name].[chunkhash].bundle.js', // 内部import文件的hash
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
