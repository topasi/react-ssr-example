const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
    entry: ['./client/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'build/[name].js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.scss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
        ],
    },
    externals: ['react-helmet'],
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'build/styles.css',
        }),
        new HTMLWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'client/index.html'),
            minify: false,
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'client/assets/favicon.ico'),
                    to: path.resolve(__dirname, 'dist/favicon.ico'),
                },
            ],
        }),
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.scss'],
    },
    devServer: {
        host: '0.0.0.0',
        port: 3000,
        historyApiFallback: true,
    },
    devtool: 'source-map',
}
