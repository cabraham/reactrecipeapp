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
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=image/svg+xml" }
    ]
  }
}
