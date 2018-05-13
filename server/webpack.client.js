const path = require('path');

module.exports = {

  // tell Webpack the root file of our client application
  entry: './src/client/client.js',

  // tell Webpack where to put the output file
  // dirname is reference to the current working directory
  // that our project is being executed in
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },

  // Tell webpack to run babel on every file it runs through
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'stage-0',
            ['env', { targets: { browsers: ['last 2 versions'] }}]
          ]
        }
      }
    ]
  }
}