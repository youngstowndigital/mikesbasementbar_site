const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './src/client/index.js'),
    module: {
        rules: [
            {
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
            }
        ]
    },
        resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: path.resolve(__dirname, './src/client/dist'),
        filename: 'bundle.js'
    },
    plugins: [new webpack.HotModuleReplacementPlugin(), new Dotenv({ systemvars: true })],
    devServer: {
        contentBase: path.resolve(__dirname, './src/client/dist'),
        hot: true
    }
};
