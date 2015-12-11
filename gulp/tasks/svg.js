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
function onSvgSpriteError(err)
{
  console.log(Colors.red.underline('"svg" task failed!'));
  console.log("\t- Cause: " + err.message);
  throw err;
}
function onSvgSpriteSuccess()
{
  console.log(Colors.green.underline('"svg" task completed successfully!'));
}

/*
 * Task
 */
Gulp.task("svg", function() {

  return Gulp
    .src(paths.relocatePath(config.paths.sources.svg))
    .pipe(SvgSprite(config.svgSprite))
    .on("error", onSvgSpriteError)
    .on("end", onSvgSpriteSuccess)
    .pipe(Gulp.dest(paths.relocatePath(config.paths.builds.svg[argv.mode])));
});
