/*
 * Node Dependencies
 */
var Babel = require("gulp-babel");
var Colors = require("colors/safe");
var Gulp = require("gulp");
var JSHint = require("gulp-jshint");
var JSHintStylish = require("jshint-stylish");
var Replace = require("gulp-replace-task");

/*
 * Modules
 */
var argv = require("../modules/argv");
var config = require("../modules/config");
var paths = require("../modules/paths");
var replace = require("../modules/replace");

/*
 * Internal functions
 */
function onBabelError(callback, err)
{
  console.log(Colors.red.underline('"javascript" task failed!'));
  console.log(err.name + ": " + err.message);
  callback(err);
}
function onTaskComplete(callback)
{
  console.log(Colors.green.underline('"javascript" task completed successfully!'));
  global.browserSync.reload();
  callback();
}

/*
 * Task
 */
Gulp.task("javascript", function(callback) {

  Gulp
    .src(paths.relocate(config.common.paths.sources.js))
    .pipe(Replace(replace))
    .pipe(JSHint(config.nodeModules.jshint))
    .pipe(JSHint.reporter(JSHintStylish))
    .pipe(Babel())
      .on("error", onBabelError.bind(null, callback))
    .pipe(Gulp.dest(paths.relocate(config.common.paths.builds.js[argv.mode])))
      .on("end", onTaskComplete.bind(null, callback));
});
