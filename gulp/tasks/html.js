/*
 * Node Dependencies
 */
var Gulp = require("gulp");
var Jade = require("gulp-jade");

/*
 * Modules
 */
var argv = require("../modules/argv");
var config = require("../modules/config");
var replace = require("../modules/replace");
var paths = require("../modules/paths");

/*
 * Task
 */
Gulp.task("html", function(callback) {

  // TODO: add error handling

  // TODO: add selection of languages using i18n value in html.json config file

  return Gulp
    .src(paths.relocatePath(config.paths.sources.html))
    .pipe(Jade(config.jade))
    .pipe(replace)
    .pipe(Gulp.dest(paths.relocatePath(config.paths.builds.html[argv.mode])));
});
