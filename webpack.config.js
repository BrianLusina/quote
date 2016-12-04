const HTMLWebpackPlugin = require("html-webpack-plugin");
const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template:__dirname + "/app/index.html",
    filename: "index.html",
    inject:"body",
    title:"Quote Machinne",
});

const combineLoaders = require('webpack-combine-loaders');
const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry:__dirname + "/src/index.js",
    module:{
        loaders:[
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
        ],
    },
    output:{
        filename: 'app.js',
        publicPath:"/",
        path: path.join(__dirname + '/build')
    },

    devServer: {
      contentBase: './build',
      hot: true
    },

    plugins: [
      HTMLWebpackPluginConfig,
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ],
};
