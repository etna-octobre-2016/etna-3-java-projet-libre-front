import Rlite from "rlite";

class RouterException extends Error
{
  constructor(message)
  {
    super(message);
    this.name = "RouterException";
  }
}

export default class Router
{
  constructor(routes)
  {
    this.validateRoutes(routes);

    this.callback = null;
    this.defaultRoute = "";
    this.rlite = null;
    this.routes = routes;
  }
  init()
  {
    this.rlite = new Rlite();
    for (let item of this.routes)
    {
      this.rlite.add(item.uri.substr(1), (r) => {

        this.callback({
          name:   item.name,
          params: r.params,
          uri:    item.uri
        });
      });
    }

    // Hash-based routing
    function processHash()
    {
      var hash

      hash = window.location.hash || "#";
      if (!this.rlite.run(hash.slice(2)))
      {
        window.location.hash = "#" + this.defaultRoute.uri;
      }
    }
    window.addEventListener("hashchange", processHash.bind(this));
    processHash.call(this);
  }
  onRouteChange(cb)
  {
    this.validateCallback(cb);
    this.callback = cb;
  }
  setDefaultRoute(name)
  {
    for (let item of this.routes)
    {
      if (item.name === name)
      {
        this.defaultRoute = item;
        return;
      }
    }
  }
  validateCallback(callback)
  {
    if (typeof callback === "undefined")
    {
      throw new RouterException('Callback function missing');
    }
    else if (typeof callback !== "function")
    {
      throw new RouterException('Invalid callback function');
    }
  }
  validateRoutes(routes)
  {
    if (routes === null || typeof routes === "undefined" || routes.constructor !== Array)
    {
      throw new RouterException('Invalid "routes" constructor argument');
    }
    for (let item of routes)
    {
      if (item === null || typeof item === "undefined" || item.constructor !== Object)
      {
        throw new RouterException("Invalid route. See console for more details");
      }
      else if (typeof item.name === "undefined" || typeof item.uri === "undefined")
      {
        throw new RouterException('"name" or "uri" field missing in the route. See console for more details');
      }
    }
  }
}
