var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  loaders: utils.cssLoaders({
    sass: 'style!css!sass?indentedSyntax',
    scss: 'style!css!sass',
    postcss: 'style!css!less!postcss',
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction
  }),
  cssModules: {
    localIdentName: '[path][name]---[local]---[hash:base64:5]',
    camelCase: true
  },
  autoprefixer: {
    browsers: [
      "Android >= 2.3", "ChromeAndroid > 1%", "iOS >= 7"
    ],
    cascade: false // 不美化输出 css
  }
}
