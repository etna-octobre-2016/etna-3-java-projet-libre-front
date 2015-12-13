System.config({
  baseURL: "js",
  map: {
    json: "../vendors/plugin-json/json.js",
    text: "../vendors/plugin-text/text.js",
    vue: "../vendors/vue/dist/vue.min.js"
  }
});
System.import("main.js");
