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

    save: function() {

      window.localStorage.setItem("selectedCategory", JSON.stringify({ id: this.id, label: this.label }));
    },
    onClick: function() {

      this.save();
    },
    onDelete: function() {

      this.$dispatch("delete");
    }
  }
};
