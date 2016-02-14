/*
 * Node Dependencies
 */
var Colors = require("colors/safe");
var Gulp = require("gulp");
var JSHint = require("gulp-jshint");
var JSHintStylish = require("jshint-stylish");
var Named = require("vinyl-named");
var Replace = require("gulp-replace-task");
var RunSequence = require("run-sequence").use(Gulp);
var Webpack = require("webpack");
var WebpackStream = require("webpack-stream");

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
function onTaskError(callback, err)
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

  RunSequence("javascript-lint", "javascript-build", function() {

    global.browserSync.reload();
    onTaskComplete(callback);
  });
});
Gulp.task("javascript-build", function(callback) {

  var destination,
      sources;

  sources = paths.relocate(config.common.paths.sources.js.default);
  destination = (argv.mode === "distributable") ? config.common.paths.builds.js[argv.mode][argv.env] : config.common.paths.builds.js[argv.mode];
  return Gulp
    .src(sources)
    .pipe(Named())
      .on("error", onTaskError.bind(null, callback))
    .pipe(WebpackStream(config.nodeModules.webpack, Webpack))
      .on("error", onTaskError.bind(null, callback))
    .pipe(Replace({ patterns: replace.patterns[argv.env] }))
      .on("error", onTaskError.bind(null, callback))
    .pipe(Gulp.dest(paths.relocate(destination)));
});
Gulp.task("javascript-lint", function(callback) {

  return Gulp
    .src(paths.relocate(config.common.paths.sources.js.watch))
    .pipe(JSHint(config.nodeModules.jshint))
      .on("error", onTaskError.bind(null, callback))
    .pipe(JSHint.reporter(JSHintStylish))
    .pipe(JSHint.reporter("fail"))
      .on("error", onTaskError.bind(null, callback));
});
