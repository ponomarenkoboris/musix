const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ip = require('ip');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        publicPath: "/"
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'build'),
        historyApiFallback: true,
        host: ip.address(),
        port: 777,
        open: true,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/i,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.(css|scss)$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true
                        }
                    },
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpe?g)$/i,
                use: 'file-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/public', 'index.html'),
            favicon: path.resolve(__dirname, 'src/public', 'musix.ico')
        }),
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin(),
        new ESLintPlugin(),
        new CleanWebpackPlugin()
    ]
}