/*
 * Dependencies
 */
import Events from "modules/core/events.js";
import Vue from "vue";
import template from "./category.html";

var view;

export function init(route)
{
  view = new Vue({
    el: "#main",
    replace: false,
    template: template,
    data: {
      categoryID: route.params.categoryID
    },
    ready: function() {

      Events.emit("section:loaded");
    }
  });
}
export function destroy()
{
  view.$destroy();
  Events.emit("section:destroyed");
}
