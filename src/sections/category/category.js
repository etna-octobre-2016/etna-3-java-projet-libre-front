/*
 * Dependencies
 */
import Events from "modules/core/events.js";
import Vue from "vue";
import template from "./category.html";
import todoList from "components/todo-list/todo-list.js";

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
    components: {
      "component-todo-list": todoList
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
