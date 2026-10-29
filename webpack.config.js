const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');

module.exports = {
  entry: './src/app/app.tsx',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/templates/index.html')
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:6].css'
    })
  ],
  output: {
    path: __dirname + '/public',
    filename: 'build/[name].[contenthash].js',
    clean: true
  },
  devServer: {
    static: path.join(__dirname, 'public'),
    host: '127.0.0.1'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          // 'postcss-loader',
          'sass-loader'
        ]
      },
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  }
};
