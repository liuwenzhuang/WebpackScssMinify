const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const srcPath = path.join(__dirname, 'src');
const dstPath = path.join(__dirname, 'dst');

const sassLoaders = [
    'css-loader?minimize',
    'sass-loader?indentedSyntax=sass&includePaths[]=' + srcPath
];

module.exports = {
    entry: {
        client: './src/js/client'
    },
    module: {
        loaders: [
            /*README:https://github.com/babel/babel-loader*/
            {
                test: /\.(js|jsx)$/,
                exculde: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015'],
                    cacheDirectory: true
                },
                plugins: ['transform-runtime']
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', sassLoaders.join('!'))
            },
            {
                test: /\.(png|jpg|bmp)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    },
    output: {
        path: dstPath,
        filename: '[name].js'
    },
    plugins: [
        new ExtractTextPlugin('[name].min.css')
    ]
};