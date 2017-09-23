const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const baseConfig = require('./base')
const root = path.resolve(__dirname, '../')

module.exports = merge(baseConfig, {
    entry: [
        'webpack/hot/dev-server',
        path.join(root, 'src/main.js')
    ],
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(root, '../dist'),
        historyApiFallback: true,
        inline: true,
        compress: true,
        port: 3000,
        progress: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(root, 'index.html'),
            inject: 'body'
        })
    ],
})