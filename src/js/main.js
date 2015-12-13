"use strict";

import Vue from "vue";
import Request from "modules/request.js";
import Router from "modules/router.js";
import exampleJSON from "../assets/data/example.json!json";
import exampleText from "../assets/data/example.json!text";

var req = new Request("http://localhost:3000/assets/data/example.json");

req.send().then(
  function(xhr) {

    console.log("request OK");
    console.log(xhr.responseText);
  },
  function(xhr) {

    console.log("request KO !!!!!");
    console.log(xhr);
  });
console.log(exampleJSON);
console.log(exampleText);
console.log(Vue.version);
console.log(Request);

var router = new Router([
  {
    name: "home",
    uri: "/home"
  },
  {
    name: "about",
    uri: "/about"
  }
], function(route){

    var view = new Vue({
      replace: false,
      el: "#main",
      template: JSON.stringify(route)
    });
});
router.setDefaultRoute("home");
router.init();
console.log(router.defaultRoute);
