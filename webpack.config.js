const path = require('path');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const webpack = require('webpack');
console.log('OK');
module.exports = {
    entry: './client/index.ts',
    plugins: [
        new LiveReloadPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.graphql$/,

                loader: 'raw-loader',
            },
        ]
    },
    resolve: {
        extensions: [".ts", ".js", ".graphql"]
    },
    output: {
        path: __dirname + "/dist",
        publicPath: 'dist/',
        filename: "bundle.js"
    },

    devtool: 'source-map',
    devServer: {
        historyApiFallback: true,
        hot: true,
        port: 4200
    }
};