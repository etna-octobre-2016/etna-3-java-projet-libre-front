import Tasks from "modules/api/tasks.js";
import template from "./todo-list.html";
import task from "components/task/task.js";

export default {

  template: template,
  props: {

    data: {
      type: Object
    }
  },
  components: {
    "component-task": task
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

    addTask: function(task) {

      task.list_idlist = this.data.idlist;
      Tasks.create(task).then(
        this.onTaskCreateSuccess.bind(this),
        this.onTaskCreateError.bind(this)
      );
    },
    onAddTask: function(e) {

      var taskName;

      taskName = e.target.value;
      if (taskName.length > 0)
      {
        this.addTask({ name: taskName });
      }
    },
    onTaskCreateError: function(e) {

      console.error("Une erreur a eu lieu lors de la création d'une nouvelle tâche. Voir exception ci-dessous :");
      console.log(e);
    },
    onTaskCreateSuccess: function(response) {

      if (response.count === 1)
      {
        this.tasks.push(response.data[0]);
      }
    },
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
