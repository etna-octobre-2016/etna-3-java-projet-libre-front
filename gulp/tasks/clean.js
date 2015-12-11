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
function onCleanError(callback, err)
{
  console.log(Colors.red.underline('"clean" task failed!'));
  console.log("\t- Path: " + err.path);
  console.log("\t- Cause: " + Errno.code[err.code].description);
  callback(err);
}
function onCleanSuccess(callback, deletedItems)
{
  console.log(Colors.green.underline('"clean" task completed successfully!'));
  if (deletedItems.length > 0)
  {
    console.log(Colors.blue("\nDeleted items:"));
    deletedItems.forEach(function(filePath){
      console.log("\t- " + filePath);
    });
  }
  callback();
}

/*
 * Task
 */
Gulp.task("clean", function(callback) {

  var targets = paths.relocate(config.tasks.clean.paths[argv.mode]);
  var options = {force: true};

  Del(targets, options).then(
    onCleanSuccess.bind(null, callback),
    onCleanError.bind(null, callback)
  );
});
