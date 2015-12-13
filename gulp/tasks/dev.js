/*
 * Node Dependencies
 */
var Gulp = require("gulp");
var RunSequence = require("run-sequence").use(Gulp);

/*
 * Task
 */
Gulp.task("dev", function(callback) {

  RunSequence("clean", "sass", "svg", "html", "javascript", "livereload", function(){


    callback();
  });
});
