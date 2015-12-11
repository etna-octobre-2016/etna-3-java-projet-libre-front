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
function onSassError(err)
{
  console.log(Colors.red.underline('"sass" task failed!'));
  console.log("\t- Cause: " + err.message);
  throw err;
}
function onSassSuccess()
{
  console.log(Colors.green.underline('"sass" task completed successfully!'));
}

/*
 * Task
 */
Gulp.task("sass", function(callback) {

  return Gulp
    .src(Path.resolve("../", config.paths.sources.sass))
    .pipe(Sass(config.sass[argv.mode]))
    .on("end", onSassSuccess)
    .on("error", onSassError)
    .pipe(Gulp.dest(Path.resolve("../", config.paths.builds.css[argv.mode])));
});
