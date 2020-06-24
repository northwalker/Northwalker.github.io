var fs = require("fs");
var path = require("path");
var minify = require("html-minifier").minify;

try {
  var data = fs.readFileSync("./public/index.html", "utf8");
  var result = minify(data, {
    collapseWhitespace: true,
    minifyJS: true,
    minifyCSS: true,
    removeAttributeQuotes: true,
    removeComments: true,
  });
  console.log("HTML minified.", result);
  fs.writeFileSync("index.html", result);
} catch (e) {
  console.log("Error:", e.stack);
}
