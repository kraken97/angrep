var webpackConfig = require('./webpack.config.js');
webpackConfig.entry = {};

module.exports = function(config) {

  config.set({
    basePath: '',
    frameworks: ['jasmine', 'chai'],

    reporters: ['progress'],
    port: 9876,
    colors: false,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    autoWatchBatchDelay: 300,
    typescriptPreprocessor: {
      // options passed to the typescript compiler 
      options: {
        sourceMap: false, // (optional) Generates corresponding .map file. 
        target: 'ES5', // (optional) Specify ECMAScript target version: 'ES3' (default), or 'ES5' 
        module: 'amd', // (optional) Specify module code generation: 'commonjs' or 'amd' 
        noImplicitAny: true, // (optional) Warn on expressions and declarations with an implied 'any' type. 
        noResolve: true, // (optional) Skip resolution and preprocessing. 
        removeComments: true, // (optional) Do not emit comments to output. 
        concatenateOutput: false // (optional) Concatenate and emit output to single file. By default true if module option is omited, otherwise false. 
      },
      // transforming the filenames 
      transformPath: function(path) {
        return path.replace(/\.ts$/, '.js');
      }
    },

    files: [
      './app/bundle.js',
      './node_modules/angular-mocks/angular-mocks.js',
      './tests/**/*.js'],

    preprocessors: {
      './ClientApp/boot-client.ts': ['typescript'],      
      './tests/**/*.spec.js': ['ts-loader']
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      noInfo: true
    }
  });
}