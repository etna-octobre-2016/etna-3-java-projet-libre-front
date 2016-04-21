/*
 * Dependencies
 */
import Events from "modules/core/events.js";
import Vue from "vue";
import TaskLists from "modules/api/task-lists.js";
import template from "./category.html";
import todoList from "components/todo-list/todo-list.js";

var view;

export function init()
{
  view = new Vue({
    el: "#main",
    replace: false,
    template: template,
    data: {
      category: null,
      taskLists: []
    },
    components: {
      "component-todo-list": todoList
    },
    created: function() {

      this.category = this.getSelectedCategory();
      if (this.category === null)
      {
        window.location.hash = "#/home";
      }
      else
      {
        TaskLists.fetchByCategory({ idcategory: this.category.id }).then(
          this.onTaskListsFetchSuccess.bind(this),
          this.onTaskListsFetchError.bind(this)
        );
      }
    },
    ready: function() {

      Events.emit("section:loaded");
    },
    methods: {

      addTaskList: function(list) {

        alert(list.name);
      },
      getSelectedCategory: function() {

        var selectedCategory;

        selectedCategory = window.localStorage.getItem("selectedCategory");
        if (selectedCategory !== null)
        {
          return JSON.parse(selectedCategory);
        }
        return null;
      },
      onAddTaskList: function(e) {

        var taskListName;

        taskListName = e.target.value;
        if (taskListName.length > 0)
        {
          this.addTaskList({ name: taskListName });
        }
      },
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
