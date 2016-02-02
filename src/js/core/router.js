/*
 * Dependencies
 */
import Events from "modules/events.js";
import Router from "modules/router.js";

export function init()
{
  var router = new Router([
    {
      name: "home",
      uri: "/home"
    }
  ]);
  router.setDefaultRoute("home");
  router.onRouteChange(function(route) {
    Events.emit("router:update", route);
  });
  router.init();
}