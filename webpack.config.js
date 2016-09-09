var path = require('path');
var webpack = require('webpack');
var merge = require('extendify')({ isDeep: true, arrays: 'concat' });
var ExtractTextPlugin = require('extract-text-webpack-plugin');
//TODO READ ABOUT this
// var extractCSS = new ExtractTextPlugin('styles.css');
var devConfig = require('./webpack.config.dev');
var prodConfig = require('./webpack.config.prod');
var isDevelopment = process.env.ASPNETCORE_ENVIRONMENT === 'Development';

module.exports = merge({
    resolve: {
        extensions: [ '', '.js', '.ts' ]
    },
    module: {
        loaders: [
            { test: /\.ts$/, include: /ClientApp/, loaders:['ts-loader?silent=true']},
            { test: /\.html$/, loader: 'raw-loader' },
            // { test: /\.css/, loader: extractCSS.extract(['css']) },
            { test: /\.scss/, loaders:['raw-loader','sass-loader'] }
        ]
    },
    entry: {
        main: ['./ClientApp/boot-client.ts'],
        vendor2:['./ClientApp/vendor2.ts']
    },
    output: {
        path: path.join(__dirname, 'wwwroot', 'dist'),
        filename: '[name].js',
        publicPath: '/dist/'
    },
    plugins: [
         new webpack.optimize.CommonsChunkPlugin({
      name: ['main', 'vendor2']
    }),
        // // extractCSS,
        // new webpack.DllReferencePlugin({
        //     context: __dirname,
        //     manifest: require('./wwwroot/dist/vendor-manifest.json')
        // })
    ]
}, isDevelopment ? devConfig : prodConfig);
