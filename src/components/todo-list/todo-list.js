import template from "./todo-list.html";

export default {

  template: template,
  props: {

    title: {
      type: String,
      required: true
    }
  },
  data: function() {

    return {
      isCollapsed: false
    };
  },
  methods: {

    onTitleClick: function() {

      this.isCollapsed = !this.isCollapsed;
    }
  }
};
