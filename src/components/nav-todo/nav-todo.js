import template from "./nav-todo.html";

export default {

  template: template,
  props: {
    label: {
      type: String,
      required: true
    }
  },
  ready: function() {

    console.log("nav-todo component ready");
  },
  methods: {

    onDelete: function() {

      alert("delete" + this.label);
    }
  }
};
