var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var DefinePlugin = require('webpack/lib/DefinePlugin');

module.exports = {
    entry: {
        'app': './src/main.ts',
        'polyfills': [
            'core-js/es6',
            'core-js/es7/reflect',
            'zone.js/dist/zone'
        ]
    },
    output: {
        path: './dist',
        filename: "[name].[hash].js"
    },
    module: {
        loaders: [
            {test: /\.ts/, loader: "ts"}
        ]
    },
    resolve: {
        extensions: ['', '.js', '.ts', '.html', '.css']
    },
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'}),
        new CommonsChunkPlugin({name: 'polyfills'}),
        new DefinePlugin({
            PRODUCTION: JSON.stringify(process.env.APP_ENVIRONMENT === 'production')
        })
    ]
};
