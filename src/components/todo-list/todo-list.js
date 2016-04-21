import Tasks from "modules/api/tasks.js";
import template from "./todo-list.html";

export default {

  template: template,
  props: {

    data: {
      type: Object
    }
  },
  data: function() {

    return {
      isCollapsed: true,
      tasks: []
    };
  },
  created: function() {

    Tasks.fetchByTaskList(this.data).then(
      this.onTasksFetchSuccess.bind(this),
      this.onTasksFetchError.bind(this)
    );
  },
  methods: {

    onTasksFetchError: function(e) {

      console.error("Une erreur a eu lieu lors de la récupération des tâches. Voir exception ci-dessous :");
      console.log(e);
    },
    onTasksFetchSuccess: function(response) {

      this.tasks = response.data;
    },
    onTitleClick: function() {

      this.isCollapsed = !this.isCollapsed;
    }
  }
};
