/*
 * Modules
 */
var argv = require("../modules/argv");
var config = require("../modules/config");

module.exports = {

  patterns: [
    {
      match: "CACHE_BUST",
      replacement: Date.now()
    }
  ]
};
