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

function onBabelError(callback, err)
{
  console.log(Colors.red.underline('"javascript" task failed!'));
  console.log(err.name + ": " + err.message);
  callback(err);
}
function onReplaceError(callback, err)
{
  console.log(Colors.red.underline('"javascript" task failed!'));
  console.log(err);
  callback(err);
}
function onTaskComplete(callback)
{
  console.log(Colors.green.underline('"javascript" task completed successfully!'));
  callback();
}

/*
 * Task
 */
Gulp.task("javascript", function(callback) {

  Gulp
    .src(paths.relocate(config.common.paths.sources.js))
    .pipe(replace)
      .on("error", onReplaceError.bind(null, callback))
    .pipe(Babel())
      .on("error", onBabelError.bind(null, callback))
    .pipe(Gulp.dest(paths.relocate(config.common.paths.builds.js[argv.mode])))
      .on("end", onTaskComplete.bind(null, callback));
});
