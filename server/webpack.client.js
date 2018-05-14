const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {
  // tell Webpack the root file of our client application
  entry: './src/client/client.js',

  // tell Webpack where to put the output file
  // dirname is reference to the current working directory
  // that our project is being executed in
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  }
}

module.exports = merge(baseConfig, config);