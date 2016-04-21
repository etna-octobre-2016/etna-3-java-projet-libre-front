import Vue from "vue";
import template from "./nav.html";
import navItem from "components/nav-item/nav-item.js";

export default {

  template: template,
  components: {
    "component-nav-item": navItem
  },
  data: function() {

    return {

      isAddingCategory: false,
      categories: []
    };
  },
  methods: {

    addCategory: function(todo) {

      this.categories.push(todo);
    },
    onAddBtnClick: function() {

      this.isAddingCategory = true;
      Vue.nextTick(function() {

        this.$els.input.focus();

      }.bind(this));
    },
    onAddComplete: function(e) {

      var categoryLabel;

      categoryLabel = e.target.value;
      if (categoryLabel.length > 0)
      {
        this.addCategory({ label: categoryLabel });
        e.target.value = "";
      }
      this.isAddingCategory = false;
    }
  }
};
