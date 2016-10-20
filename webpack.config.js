var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var DefinePlugin = require('webpack/lib/DefinePlugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    // devtool: '#source-map',
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
            {test: require.resolve('jquery'), loader: 'expose?jQuery!expose?$'},
            {test: /\.component\.ts$/, loader: 'ts!angular2-template'},
            {test: /\.ts$/, exclude: /\.component\.ts$/, loader: 'ts'},
            {test: /\.css$/, include: path.resolve('src/css'), loader: 'style!css'},
            {test: /\.less$/, include: path.resolve('src/less'), loader: 'style!css!less'},
            {test: /\.less$/, include: path.resolve('src/app'), loader: 'raw!less'},
            {test: /\.html/, include: path.resolve('src/app'), loader: 'raw'},
            {test: /\.css$/, exclude: path.resolve('src'), loader: ExtractTextPlugin.extract("style", "css")},
            {test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/, loader: 'file?name=fonts/[name].[ext]'},
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url?limit=10000&name=fonts/[name].[ext]"
            },
            {test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file?name=fonts/[name].[ext]"}
        ]
    },
    resolve: {
        extensions: ['', '.js', '.ts', '.html', '.css', '.less']
    },
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'}),
        new CommonsChunkPlugin({name: ['app', 'polyfills']}),
        new DefinePlugin({
            PRODUCTION: JSON.stringify(process.env.APP_ENVIRONMENT === 'production')
        }),
        new ExtractTextPlugin('[name].[hash].css')
    ]
};
