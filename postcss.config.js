module.exports = {
  // parser: 'postcss-js',
  plugins: {
    // 'postcss-cssnext': {},
    'postcss-import': {},
    'autoprefixer': {
      browsers: [
        '>1%',
        'last 4 versions',
        'not ie < 9'
      ]
    },
    'cssnano': {}
  },
  sourceMap: true
}
