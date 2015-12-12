/*
 * Node Dependencies
 */
var Colors = require("colors/safe");
var Gulp = require("gulp");
var Sass = require("gulp-sass");

/*
 * Modules
 */
var argv = require("../modules/argv");
var config = require("../modules/config");
var paths = require("../modules/paths");

/*
 * Internal functions
 */
function onSassError(callback, err)
{
  console.log(Colors.red.underline('"sass" task failed!'));
  console.log("\t- Cause: " + err.message);
  callback(err);
}
function onTaskComplete(callback)
{
  console.log(Colors.green.underline('"sass" task completed successfully!'));
  callback();
}

/*
 * Task
 */
Gulp.task("sass", function(callback) {

  Gulp
    .src(paths.relocate(config.paths.sources.sass))
    .pipe(Sass(config.nodeModules.sass[argv.mode]))
      .on("error", onSassError.bind(null, callback))
    .pipe(Gulp.dest(paths.relocate(config.paths.builds.css[argv.mode])))
      .on("end", onTaskComplete.bind(null, callback));
});
