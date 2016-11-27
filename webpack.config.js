var HTMLWebpackPlugin = require("html-webpack-plugin");
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template:__dirname + "/app/index.html",
    filename: "index.html",
    inject:"body",
    title:"Quote Machinne",
});

var combineLoaders = require('webpack-combine-loaders');

module.exports = {
    entry:__dirname + "/app/index.js",
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
        path: __dirname + '/build',
    },

    plugins: [HTMLWebpackPluginConfig,],
};