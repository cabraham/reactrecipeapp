var webpack = require('webpack');
var path = require('path');

var CONFIG = {
  srcPath: path.join(__dirname, 'src'),
  buildPath: path.join(__dirname, 'build'),
  entryFile: 'index.js',
  publicPath: '/assets/',
  buildFilename: 'bundle.js'
};

module.exports = {
  entry: path.join(CONFIG.srcPath, CONFIG.entryFile),
  output: {
    path: CONFIG.buildPath,
    filename: CONFIG.buildFilename,
    publicPath: CONFIG.publicPath
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ }
    ]
  }
}
