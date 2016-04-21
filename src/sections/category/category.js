/*
 * Dependencies
 */
import Events from "modules/core/events.js";
import Vue from "vue";
import TaskLists from "modules/api/task-lists.js";
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
      categoryID: route.params.categoryID,
      taskLists: []
    },
    components: {
      "component-todo-list": todoList
    },
    created: function() {

      TaskLists.fetchByCategory({ idcategory: this.categoryID }).then(
        this.onTaskListsFetchSuccess.bind(this),
        this.onTaskListsFetchError.bind(this)
      );
    },
    ready: function() {

      Events.emit("section:loaded");
    },
    methods: {

      onTaskListsFetchError: function(e) {

        console.error("Une erreur a eu lieu lors de la récupération des listes de tâches. Voir exception ci-dessous :");
        console.log(e);
      },
      onTaskListsFetchSuccess: function(response) {

        this.taskLists = response.data;
      }
    }
  });
}
export function destroy()
{
  view.$destroy();
  Events.emit("section:destroyed");
}
