var path = require('path');
var webpack = require('webpack');
var merge = require('extendify')({ isDeep: true, arrays: 'concat' });
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractCSS = new ExtractTextPlugin('styles.css');

var isDevelopment = process.env.ASPNETCORE_ENVIRONMENT === 'Development';

var devConfig= {
    devtool: 'inline-source-map'
};


var prodConfig={
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false },
            minimize: true,
            mangle: false // Due to https://github.com/angular/angular/issues/6678
        })
    ]
};




module.exports = merge({
    resolve: {
        extensions: [ '', '.js', '.ts' ]
    },
    module: {
        loaders: [
            { test: /\.ts$/, include: /ClientApp/, loader: 'ts-loader?silent=true' },
            { test: /\.html$/, loader: 'raw-loader' },
            { test: /\.css/, loader: 'raw-loader' }
        ]
    },
    entry: {
        main: ['./ClientApp/boot-client.ts'],
        vendor: ['./ClientApp/vendor.ts'],
    },
    output: {
        path: path.join(__dirname, 'wwwroot', 'dist'),
        filename: '[name].js',
        publicPath: '/dist/'
    },
    plugins: [
        // extractCSS,
        // new webpack.DllReferencePlugin({
        //     context: __dirname,
        //     manifest: require('./wwwroot/dist/vendor-manifest.json')
        // })
    ]
}, isDevelopment ? devConfig : prodConfig);
