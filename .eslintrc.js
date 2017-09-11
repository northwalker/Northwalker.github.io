
module.exports = {
  root: true,
  // extends: 'eslint:recommended',
  // add your custom rules here
  env: {
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
  },
  rules: {
    // 'arrow-parens': 0, // allow paren-less arrow functions
    // 'generator-star-spacing': 0, // allow async-await
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,  // allow debugger during development
    // 'space-before-function-paren': 0,
    // 'no-var': 1
  }
}
