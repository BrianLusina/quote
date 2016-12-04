const path = require('path');
const webpack = require('webpack');

module.exports ={
  devtool : "source-map",
  entry : [
    __dirname + '/app/index.js'
  ],

  output:{
      filename: 'app.js',
      path: __dirname + '/build'
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
        minimize:true,
        compress:{
          warnings:false
        }
      }
    ),
    new webpack.DefinePlugin({
      'process.env':{
        "NODE_ENV":JSON.stingify("production")
      }
    })
  ],

  modules :
}
