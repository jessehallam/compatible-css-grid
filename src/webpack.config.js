const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: path.join(__dirname, 'index.js'),
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    { loader: 'css-loader' },
                    { loader: 'postcss-loader' }
                ]
            }
        ]
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, '../dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'index.html')
        }),
        new MiniCssExtractPlugin()
    ],
    stats: 'minimal'
};