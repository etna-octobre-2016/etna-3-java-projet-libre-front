/*
 * Node Dependencies
 */
var Colors = require("colors/safe");
var Gulp = require("gulp");
var GulpInline = require("gulp-inline-source");
var RunSequence = require("run-sequence").use(Gulp);
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
function onGulpInlineError(callback, err)
{
  console.log(Colors.red.underline('"components" task failed!'));
  callback(err);
}
function onSassError(callback, err)
{
  console.log(Colors.red.underline('"components" task failed!'));
  console.log("\t- Cause: " + err.message);
  callback(err);
}
function onTaskComplete(callback)
{
  console.log(Colors.green.underline('"components" task completed successfully!'));
  callback();
}

/*
 * Task
 */
Gulp.task("components", function(callback) {

  RunSequence("components-js", "components-sass", "components-html", function(){

    global.browserSync.reload();
    callback();
  });
});

Gulp.task("components-html", function(callback) {

  var destination;

  destination = (argv.mode === "distributable") ? config.common.paths.builds.components[argv.mode][argv.env] : config.common.paths.builds.components[argv.mode];
  return Gulp
    .src(paths.relocate(config.common.paths.sources.components.html))
    .pipe(GulpInline({
        rootpath: paths.relocate(config.common.paths.sources.components.includeBaseDir)
    }))
    .on("error", onGulpInlineError.bind(null, callback))
    .pipe(Gulp.dest(paths.relocate(destination)));
});

Gulp.task("components-sass", function(callback) {

  return Gulp
    .src(paths.relocate(config.common.paths.sources.components.sass))
    .pipe(Sass(config.nodeModules.sass[argv.mode]))
      .on("error", onSassError.bind(null, callback))
    .pipe(Gulp.dest(paths.relocate(config.common.paths.builds.components.development)));
});

Gulp.task("components-js", function(callback) {

  return Gulp
    .src(paths.relocate(config.common.paths.sources.components.js))
    .pipe(Gulp.dest(paths.relocate(config.common.paths.builds.components.development)));
});
