import _reject from "lodash/reject.js";
import Vue from "vue";
import TaskCategories from "modules/api/task-categories.js";
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
  created: function() {

    TaskCategories.fetchAll().then(
      this.onTaskCategoriesFetchSuccess.bind(this),
      this.onTaskCategoriesFetchError.bind(this)
    );
  },
  methods: {

    addCategory: function(category) {

      TaskCategories.create(category).then(
        this.onTaskCategoriesCreateSuccess.bind(this),
        this.onTaskCategoriesCreateError.bind(this)
      );
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
        this.addCategory({ name: categoryLabel });
        e.target.value = "";
      }
      this.isAddingCategory = false;
    },
    onNavItemDelete: function(category) {

      TaskCategories.remove(category).then(
        this.onTaskCategoriesRemoveSuccess.bind(this, category),
        this.onTaskCategoriesRemoveError.bind(this)
      );
    },
    onTaskCategoriesCreateError: function(e) {

      console.error("Une erreur a eu lieu lors de la création d'une catégorie de tâches. Voir exception ci-dessous :");
      console.log(e);
    },
    onTaskCategoriesCreateSuccess: function(response) {

      this.categories.push(response.data[0]);
    },
    onTaskCategoriesFetchError: function(e) {

      console.error("Une erreur a eu lieu lors de la récupération des catégories de tâches. Voir exception ci-dessous :");
      console.log(e);
    },
    onTaskCategoriesFetchSuccess: function(response) {

      this.categories = response.data;
    },
    onTaskCategoriesRemoveError: function(e) {

      console.error("Une erreur a eu lieu lors de la suppression d'une catégorie de tâches. Voir exception ci-dessous :");
      console.log(e);
    },
    onTaskCategoriesRemoveSuccess: function(category) {

      this.categories = _reject(this.categories, category);
    }
  }
};
