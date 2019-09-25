module.exports = {
  entry: {
    demo: [
      // We require the babel polyfill because the swagger2openapi module uses generators
      'babel-polyfill',
      'react-hot-loader/patch',
      'whatwg-fetch',
      './example/index.jsx',
    ],
    reference: [
      'babel-polyfill',
      'react-hot-loader/patch',
      'whatwg-fetch',
      './example/reference/index.jsx',
    ],
  },
  module: {
    rules: [
      {
        test: /\.js(x?)$/,
        use: {
          loader: 'babel-loader',
          options: {
            extends: './.babelrc',
          },
        },
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      },

    ],
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
  },
  node: {
    fs: 'empty',
  },
};
