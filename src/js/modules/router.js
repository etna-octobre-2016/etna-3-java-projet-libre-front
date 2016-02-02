import {Router5} from "router5";
import Router5History from "router5History";
import Router5Listeners from "router5Listeners";

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
    this.routes = routes;
  }
  init()
  {
    this.r5 = new Router5([], {
      trailingSlash: true,
      useHash: true
    });
    for (let item of this.routes)
    {
      this.r5.addNode(item.name, item.uri);
    }
    this.r5.setOption("defaultRoute", this.defaultRoute);
    this.r5.usePlugin(Router5History());
    this.r5.usePlugin(Router5Listeners());
    this.r5.addListener((route) => {
      this.callback({
        name:   route.name,
        params: route.params,
        uri:    route.path
      });
    });
    this.r5.start();
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
        this.defaultRoute = name;
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
