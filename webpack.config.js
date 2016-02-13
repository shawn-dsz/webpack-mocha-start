var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './src/app.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    preLoaders: [{
      test: /\.js$/,
      loaders: ['eslint-loader'],
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
  eslint: {
    configFile: '.eslintrc',
    quiet: false
  },
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
