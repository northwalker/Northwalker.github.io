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

  // TODO: update to build flow
  result = result.replace(/__VERSION__/g, process.env.version || "4.0.2-beta");

  console.log("========== HTML minified ==========");
  console.log(result);
  console.log("========== HTML minified ==========");

  fs.writeFileSync("./dist/index.html", result);
} catch (e) {
  console.log("Error:", e.stack);
}
