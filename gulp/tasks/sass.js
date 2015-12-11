/*
 * Node Dependencies
 */
var Colors = require("colors/safe");
var Gulp = require("gulp");
var Path = require("path");
var Sass = require("gulp-sass");

/*
 * Modules
 */
var argv = require("../modules/argv");
var config = require("../modules/config");

/*
 * Internal functions
 */
function onSassError(callback, err)
{
  console.log(Colors.red.underline(err.message));
  callback();
}

/*
 * Task
 */
Gulp.task("sass", function(callback) {

  return Gulp
    .src(Path.resolve("../", config.paths.sources.sass))
    .pipe(Sass(config.sass[argv.mode]))
    .on("error", onSassError.bind(null, callback))
    .pipe(Gulp.dest(Path.resolve("../", config.paths.builds.css[argv.mode])));
});
