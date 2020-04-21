const minify = require("@node-minify/core");
const htmlMinifier = require("@node-minify/html-minifier");

minify({
  compressor: htmlMinifier,
  input: "./public/index.html",
  output: "./index.html",
  options: {
    minifyJS: true,
    minifyCSS: true,
    removeAttributeQuotes: true,
  },
  callback: function (err, min) {
    if (err) console.error(err);

    console.log("HTML minified. Check </Body> and </html> !!!");
  },
});
