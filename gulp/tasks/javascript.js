/*
 * Node Dependencies
 */
var Babel = require("gulp-babel");
var Colors = require("colors/safe");
var Gulp = require("gulp");
var Uglify = require("gulp-uglify");

/*
 * Modules
 */
var argv = require("../modules/argv");
var config = require("../modules/config");
var paths = require("../modules/paths");
var replace = require("../modules/replace");

/*
 * Task
 */

// TODO: add minification when mode === distributable
Gulp.task("javascript", function() {

  return Gulp
    .src(paths.relocatePaths(config.paths.sources.js))
    .pipe(replace)
    .pipe(Babel())
    .pipe(Gulp.dest(paths.relocatePath(config.paths.builds.js[argv.mode])));
});
