module.exports = {
  entry: './src',
  output: {
    path: 'builds',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        loader: 'babel',
        include: __dirname + '/src'
      },
      {
        test: /\.sass/,
        loader: 'style!css!sass',
      },
      {
        test: /\.html/,
        loader: 'html'
      }
    ]
  }
};
