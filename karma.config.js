
var webpack=require('./webpack.config.test.js')

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai', 'sinon'],
    files: [
      'ClientApp/**/*.spec.ts'
    ],
    exclude: [],
    preprocessors: {
      'ClientApp/**/*.spec.ts': ['webpack']
    },
    webpack: webpack,
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_ERR,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity
  })
}