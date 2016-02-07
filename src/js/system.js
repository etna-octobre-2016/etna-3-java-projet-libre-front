System.config({
  map: {
    core: "js/core",
    modules: "js/modules",
    sections: "sections"
  },
  paths: {
    eventEmitter: "vendors/eventEmitter/EventEmitter.min.js",
    json: "vendors/plugin-json/json.js",
    rlite: "vendors/rlite/rlite.min.js",
    text: "vendors/plugin-text/text.js",
    vue: "vendors/vue/dist/vue.min.js"
  }
});
System.import("js/main.js");
