/*
 * Node Dependencies
 */
var Gulp = require("gulp");
var RunSequence = require("run-sequence");

/*
 * Modules
 */
var argv = require("../modules/argv");

/*
 * Tasks
 */
Gulp.task("build", function(callback) {

  argv.mode = "distributable";
  RunSequence("clean", "build-pre-production", "build-production", callback);
});
Gulp.task("build-pre-production", function(callback) {

  argv.env = "pre-production";
  RunSequence("sass", "svg", "html", "jade", "javascript", "static", callback);
});
Gulp.task("build-production", function(callback) {

  argv.env = "production";
  RunSequence("sass", "svg", "html", "jade", "javascript", "static", callback);
});
