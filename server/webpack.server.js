const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
  // Inform webpack that we're building a bundle 
  // for Node JS, rather than for the browser
  target: 'node',

  // tell Webpack the root file of our server application
  entry: './src/index.js',

  // tell Webpack where to put the output file
  // dirname is reference to the current working directory
  // that our project is being executed in
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },

  externals: [webpackNodeExternals()]
}

module.exports = merge(baseConfig, config);