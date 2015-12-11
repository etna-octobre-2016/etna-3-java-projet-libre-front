/*
 * Node Dependencies
 */
var Colors = require("colors");
var Del = require("del");
var Errno = require("errno");
var Gulp = require("gulp");

/*
 * Modules
 */
var argv = require("../modules/argv");
var config = require("../modules/config");
var paths = require("../modules/paths");

/*
 * Internal functions
 */
function onCleanError(err)
{
  console.log(Colors.red.underline('"clean" task failed!'));
  console.log("\t- Path: " + err.path);
  console.log("\t- Cause: " + Errno.code[err.code].description);
  throw err;
}
function onCleanSuccess(callback, deletedItems)
{
  console.log(Colors.green.underline('"clean" task completed successfully!'));
  if (deletedItems.length > 0)
  {
    console.log(Colors.blue("Deleted items:"));
    deletedItems.forEach(function(filePath){
      console.log("\t- " + filePath);
    });
  }
}

/*
 * Task
 */
Gulp.task("clean", function(callback) {

  var targets = paths.relocatePaths(config.clean.paths[argv.mode]);
  var options = {force: true};

  Del(targets, options).then(
    onCleanSuccess.bind(null, callback),
    onCleanError
  );
});
