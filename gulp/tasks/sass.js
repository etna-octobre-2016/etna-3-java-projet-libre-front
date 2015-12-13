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

  var destination;

  destination = (argv.mode === "distributable") ? config.common.paths.builds.css[argv.mode][argv.env] : config.common.paths.builds.css[argv.mode];
  Gulp
    .src(paths.relocate(config.common.paths.sources.sass.default))
    .pipe(Sass(config.nodeModules.sass[argv.mode]))
      .on("error", onSassError.bind(null, callback))
    .pipe(Gulp.dest(paths.relocate(destination)))
      .on("end", onTaskComplete.bind(null, callback))
    .pipe(global.browserSync.stream());
});
