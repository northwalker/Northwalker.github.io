"use strict";
var fs = require("fs");
var path = require("path");
var amphtmlValidator = require("amphtml-validator");

var htmlString = fs.readFileSync("./public/index.html", "utf8");

amphtmlValidator.getInstance().then(function (validator) {
  var result = validator.validateString(htmlString);
  (result.status === "PASS" ? console.log : console.error)(result.status);
  for (var ii = 0; ii < result.errors.length; ii++) {
    var error = result.errors[ii];
    var msg =
      "line " + error.line + ", col " + error.col + ": " + error.message;
    if (error.specUrl !== null) {
      msg += " (see " + error.specUrl + ")";
    }
    (error.severity === "ERROR" ? console.error : console.warn)(msg);
  }
});
