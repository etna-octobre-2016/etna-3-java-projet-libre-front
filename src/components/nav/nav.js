import Vue from "vue";
import template from "./nav.html";
import navTodo from "components/nav-todo/nav-todo.js";

export default {

  template: template,
  components: {
    "component-nav-todo": navTodo
  },
  data: function() {

    return {

      isAddingTodo: false,
      todos: []
    };
  },
  methods: {

    addTodoList: function(todo) {

      console.log("addTodoList");
      console.log(todo);
      this.todos.push(todo);
    },
    onAddBtnClick: function() {

      this.isAddingTodo = true;
      Vue.nextTick(function() {

        this.$els.input.focus();

      }.bind(this));
    },
    onAddComplete: function(e) {

      var todoLabel;

      todoLabel = e.target.value;
      if (todoLabel.length > 0)
      {
        this.addTodoList({ label: todoLabel });
        e.target.value = "";
      }
      this.isAddingTodo = false;
    }
  }
};
