/*
 * Node Dependencies
 */
var Path = require("path");


module.exports = {

  relocatePath: function(p) {

    if (typeof p === "string")
    {
      return Path.resolve("../", p);
    }
    throw new Error("unexpected param type");
  },
  relocatePaths: function(p) {

    if (p instanceof Array)
    {
      return p.map(function(item) {

        return this.relocatePath(item);

      }, this);
    }
    throw new Error("unexpected param type");
  }
};
