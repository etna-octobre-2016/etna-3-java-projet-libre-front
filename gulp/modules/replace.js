/*
 * Node Dependencies
 */
var Replace = require("gulp-replace-task");

/*
 * Modules
 */
var argv = require("../modules/argv");
var config = require("../modules/config");

module.exports = Replace({

  patterns: [
    {
      match: "CACHE_BUST",
      replacement: Date.now()
    }
  ]
});
