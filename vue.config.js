const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin')
module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].inlineSource = '.(js|css)$'
        return args
      })
  },
  configureWebpack: {
    plugins: [
      new HtmlWebpackInlineSourcePlugin()
    ]
  },
  css: {
    extract: false
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/dist/' // project name
    : '/',
  indexPath: '../index.html'
}
