module.exports = {
  css: {
    extract: false
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/dist/' // project name
    : '/',
  indexPath: '../index.html'
}
