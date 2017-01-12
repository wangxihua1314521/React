var webpack = require('webpack');
var ET = require('extract-text-webpack-plugin');

module.exports = {
  entry: __dirname + '/src/app.js',

  output: {
    path: __dirname + '/bundle/',
    // filename: 'bundle-[hash].js'
    filename: 'bundle.js'
  },

  devtool: 'source-map',

  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css'
      },

//    {
//      test: /\.js$/,
//         loader: 'babel-loader?presets[]=es2015'
////      loader: 'babel',
//      // query: {
//      //   "presets": ['es2015']
//      // }
//    },
      {
        test: /\.js$/,
        loader: 'jsx-loader'
      },

      {
        test: /\.scss$/,
        // loader: 'style!css!sass'
        loader: ET.extract('style', 'css!sass')
      },

      {
        test: /\.html$/,
        loader: 'string'
      }
    ]
  },
	
  devServer: {
    contentBase: __dirname + '/dist',
    port: 8080,
    host: 'localhost',
    proxy: {
      '/api': {
        target: 'http://localhost:9000',
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new ET('bundle.css')
  ]
}
