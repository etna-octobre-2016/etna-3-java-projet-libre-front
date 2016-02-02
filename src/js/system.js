"use strict";

System.config({
  baseURL: "js",
  map: {
    core: "core",
    modules: "modules",
    sections: "../../sections"
  },
  paths: {
    eventEmitter: "../vendors/eventEmitter/EventEmitter.min.js",
    json: "../vendors/plugin-json/json.js",
    router5: "../vendors/router5/dist/amd/router5.min.js",
    router5Listeners: "../vendors/router5-listeners/dist/amd/router5-listeners.min.js",
    router5History: "../vendors/router5-history/dist/amd/router5-history.min.js",
    text: "../vendors/plugin-text/text.js",
    vue: "../vendors/vue/dist/vue.min.js"
  }
});
System.import("main.js");
