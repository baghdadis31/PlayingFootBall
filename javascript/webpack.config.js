
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { resolve } = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

/*const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});*/

const devPlugins = [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.DefinePlugin({
      '__DEV__': true,
      'process.env': { NODE_ENV: JSON.stringify('dev') }
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin({ filename: '[name].css', disable: true, allChunks: true }),
  ];

const config = {
    entry : {
        playingFootball:'./index.js'
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          }
        ]
      },
}
module.exports = {
  
  plugins: devPlugins
};

module.exports = config;