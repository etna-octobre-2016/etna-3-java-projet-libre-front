/*
 * Dependencies
 */
import Events from "modules/core/events.js";
import Vue from "vue";
import template from "./login.html";

var view;

export function init()
{
  console.log("login section loaded");
  view = new Vue({
    el: "#main",
    replace: false,
    template: template,
    ready: function() {

      Events.emit("section:loaded");
    }
  });
}
export function destroy()
{
  Events.emit("section:destroyed");
  console.log("login section destroyed");
}
