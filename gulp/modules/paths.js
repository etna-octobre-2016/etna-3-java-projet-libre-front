/*
 * Node Dependencies
 */
var Path = require("path");

/*
 * Internal functions
 */
function relocate(path)
{
  return Path.resolve("../", path);
}

module.exports = {

  relocate: function(p) {

    if (typeof p === "string")
    {
      return relocate(p);
    }
    else if (p instanceof Array)
    {
      return p.map(function(item) {

        return relocate(item);

      }, this);
    }
    throw new Error("unexpected param type");
  }
};
