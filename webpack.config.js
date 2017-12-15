var path = require('path');
var SRC_DIR = path.join(__dirname, '/client');
console.log('srdir :', SRC_DIR)
console.log(`${SRC_DIR}/index.jsx`)
var DIST_DIR = path.join(__dirname, '/public');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  devtool: 'eval',
  devServer: {
    publicPath: '/public/',
    historyApiFallback: true
  },
  module : {
    loaders : [
      {
        test : /\.jsx$|\.js$/,
        include : SRC_DIR,
        exclude: /node_modules/,
        loader : 'babel-loader'
      }
    ]
  }
};