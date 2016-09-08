var path = require('path');
var webpack = require('webpack');
var merge = require('extendify')({ isDeep: true, arrays: 'concat' });
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractCSS = new ExtractTextPlugin('styles.css');
var devConfig = require('./webpack.config.dev');
var prodConfig = require('./webpack.config.prod');
var isDevelopment = process.env.ASPNETCORE_ENVIRONMENT === 'Development';

module.exports = merge({
    resolve: {
        extensions: [ '', '.js', '.ts' ]
    },
    module: {
        loaders: [
            { test: /\.ts$/,  loaders:[ 'ts-loader','angular2-template-loader'] },
            { test: /\.html$/, loader: 'raw-loader' },
            { test: /\.css$/, loader: 'raw-loader' },
            { test: /\.scss/, loaders: ['raw-loader', 'sass-loader']  },
            { test: /\.json/, loaders: ['json-loader']  }
            
        ]
    },
    entry: {
        main: ['./ClientApp/boot-client.ts']
    },
    output: {
        path: path.join(__dirname, 'wwwroot', 'dist'),
        filename: '[name].js',
        publicPath: '/dist/'
    },
    plugins: [
    ]
});