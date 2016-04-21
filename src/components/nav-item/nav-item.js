import template from "./nav-item.html";

export default {

  template: template,
  props: {
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    }
  },
  methods: {

    onDelete: function() {

      this.$dispatch("delete");
    }
  }
};
