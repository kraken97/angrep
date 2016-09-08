// Karma configuration
// Generated on Thu Sep 08 2016 13:14:55 GMT+0300 (FLE Daylight Time)

var webpack=require('./webpack.config.test.js')

module.exports = function(config) {
  config.set({


    webpack:webpack,

        webpackMiddleware: {
            stats: {
                colors: true
            }
        },
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: './',
    frameworks: ['mocha','chai'],
    files: [
    { pattern: 'node_modules/babel-polyfill/browser.js', instrument: false},
      './ClientApp/**/*.spec.ts'
    ],
    exclude: [],
    preprocessors: {
      'ClientApp/**/*.spec.ts': ['webpack']
    },

    // list of files / patterns to load in the browser
    files: [
      {pattern: './ClientApp/**/*.spec.ts'}
    ],

  


    // list of files to exclude
    exclude: [
    ],



    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
    
  })
}
