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

  modules:{
    loader:[
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader:'babel-loader',
      },
      {
          test:/\.css$/,
          loader:combineLoaders([
              {
                  loader: 'style-loader'
              },
              {
                  loader:'css-loader',
                  query:{
                      modules:true,
                      localIdentName: '[name]__local__[hash:base64:5]'
                  }
              }
          ]),
      },
    ]
  }
}
