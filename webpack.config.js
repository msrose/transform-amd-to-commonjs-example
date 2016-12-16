var path = require('path');

module.exports = {
  entry: './index',
  output: {
    filename: 'bundle.js',
    path: './build',
    library: 'TestBundleDayum'
  },
  module: {
    loaders: [
      {
        test: /.js$/,
        loader: 'babel'
      }
    ]
  },
  resolve: {
    root: [
      path.resolve('./more-modules')
    ],
    alias: {
      "module-alias": "aliased-module"
    }
  }
};
