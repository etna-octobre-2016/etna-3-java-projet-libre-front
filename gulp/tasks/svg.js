/*
 * Node Dependencies
 */
var Colors = require("colors");
var Gulp = require("gulp");
var SvgSprite = require("gulp-svg-sprite");

/*
 * Modules
 */
var argv = require("../modules/argv");
var config = require("../modules/config");
var paths = require("../modules/paths");

/*
 * Internal functions
 */
function onSvgSpriteError(callback, err)
{
  console.log(Colors.red.underline('"svg" task failed!'));
  console.log("\t- Cause: " + err.message);
  console.log(Colors.bgYellow.black("Maybe an SVG file is not correctly formatted. Try to debug them using a web browser (i.e. Google Chrome)"));
  callback(err);
}
function onSvgSpriteSuccess(callback)
{
  console.log(Colors.green.underline('"svg" task completed successfully!'));
  callback();
}

/*
 * Task
 */
Gulp.task("svg", function(callback) {

  Gulp
    .src(paths.relocate(config.paths.sources.svg))
    .pipe(SvgSprite(config.nodeModules.svgSprite))
    .on("error", onSvgSpriteError.bind(null, callback))
    .on("end", onSvgSpriteSuccess.bind(null, callback))
    .pipe(Gulp.dest(paths.relocate(config.paths.builds.svg[argv.mode])));
});
