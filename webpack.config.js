var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    preLoaders: [{
      test: /\.js$/,
      loaders: ['eslint'],
      exclude: /(node_modules|bower_components)/
    }],
    loaders: [{
      loader: 'babel-loader',
      test: path.join(__dirname, 'src'),
      query: {
        presets: 'es2015'
      }
    }]
  },
  watch: true,
  plugins: [
    // Avoid publishing files when compilation fails
    new webpack.NoErrorsPlugin()
  ],
  stats: {
    // Nice colored output
    colors: true
  },
  // Create Sourcemaps for the bundle
  devtool: 'source-map'
}
