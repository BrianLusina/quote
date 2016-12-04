const HTMLWebpackPlugin = require("html-webpack-plugin");
const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template:__dirname + "/src/index.html",
    filename: "index.html",
    inject:"body",
    title:"Quote Machinne",
});

const combineLoaders = require('webpack-combine-loaders');
const path = require("path");
const webpack = require("webpack");

module.exports = {
  devtool: 'eval',

  entry:[
      __dirname + "/src/index.js",
      'webpack-hot-middleware/client',
    ],
  output:{
      filename: 'app.js',
      publicPath:"/public/",
      path: path.join(__dirname + 'public')
  },

  plugins: [
    HTMLWebpackPluginConfig,
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  module:{
    loaders:[
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader:'babel',
        include:path.join(__dirname, "src")
      },

      {
        test:/\.css$/,
        loader:"style!css!sass",
        include: path.join(__dirname, 'src', 'styles')
      },

      {
        test: /\.png$/,
        loader: 'file'
      },

      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file'
      }
    ]

  },

  resolve: {
    extensions: ['', '.js']
  },

  devServer: {
    contentBase: './build',
    hot: true
  },

};
