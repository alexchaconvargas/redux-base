var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: ['babel-regenerator-runtime',
  './src/main.js'],
  output: { path: __dirname + '/dist',
    filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devServer: {
    contentBase: './dist',
    hot: true
  }
};