"use strict";
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

  result = result.replace(/__SHA_SHORT__/g, process.env.SHA_SHORT || "");

  console.log("========== HTML minified ==========");
  console.log(result);
  console.log("========== HTML minified ==========");

  fs.writeFileSync("./dist/index.html", result);
} catch (e) {
  console.log("Error:", e.stack);
}
