/*
 * Node Dependencies
 */
var Gulp = require("gulp");
var RunSequence = require("run-sequence").use(Gulp);
var Watch = require("gulp-watch");

/*
 * Modules
 */
var config = require("../modules/config");
var paths = require("../modules/paths");

/*
 * Task
 */
Gulp.task("dev", function(callback) {

  RunSequence("clean", "sass", "svg", "html", "javascript", "livereload", function() {

    Watch(paths.relocate(config.common.paths.sources.html.watch), function() {
      RunSequence("html");
    });
    Watch(paths.relocate(config.common.paths.sources.js), function() {
      RunSequence("javascript");
    });
    Watch(paths.relocate(config.common.paths.sources.sass.watch), function() {
      RunSequence("sass");
    });
    Watch(paths.relocate(config.common.paths.sources.svg), function() {
      RunSequence("svg");
    });
    callback();
  });
});
