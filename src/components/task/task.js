import template from "./task.html";

export default {

  template: template,
  props: {

    data: {
      type: Object
    }
  },
  data: function() {

    return {
      isDone: true
    };
  },
  watch: {

    isDone: function(val) {

      console.log("isDone changed");
      console.log(val);
    }
  }
};
