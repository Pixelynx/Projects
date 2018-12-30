var webpack = require("webpack");
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
const path = require('path');

module.exports = {
   entry: "./js/index.js", //set entry file

// Resolve to output directory and set file
output: {
    path: path.resolve("dist/bundle"),
    filename: "bundle.js",
    publicPath: "bundle"
},

// Add Url param to open browser plugin
plugins: [new OpenBrowserPlugin({url: 'http://localhost:3000'})],

// Set dev-server configuration
devServer: {
   inline: true,
   contentBase: './dist',
   port: 3000
},

// Add babel-loader to transpile js and jsx files
module: {
    rules: [
        {
           test: /\.js?$/,
           exclude: /(node_modules)/,
           use:
                 {loader: 'babel-loader'}

      }]
}
}
