var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");


module.exports = {
    entry: ['babel-polyfill', './source/scripts/main.js'],
    output: {
        path: path.resolve(__dirname, "build"),
        filename: 'scripts/app.js',
    },
    module: {
        rules: [
            {
                test: /\.(s?css|sass)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader', // if can't extract css, inline it into JS bundle
                    use: [
                        { loader: 'css-loader', options: {sourceMap: true} },
                        { loader: 'sass-loader', options: {sourceMap: true} }
                    ]
                })
            },
            {
                test: [/\.js$/, /\.es6$/, /\.json$/],
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "build"),
        compress: true,
        stats: "errors-only",
        historyApiFallback: true,
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Project Demo',
            hash: true,
            template: './source/index.html',
        }),
        new ExtractTextPlugin({
            filename: 'styles/style.css',
            allChunks: true
        })
    ],
    watch: true
};
