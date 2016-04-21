/*
 * Dependencies
 */
import Validatinator from "exports?Validatinator!validatinator";
import Vue from "vue";
import auth from "modules/api/auth.js";
import Form from "modules/ui/form.js";

new Vue({
  el: "#main",
  replace: false,
  data: {
    formValidator: null
  },
  ready: function() {

    this.formValidator = new Validatinator({
      "signupForm": {
        "email": "required|email",
        "password": "required",
        "passwordConfirm": "required|same:password",
        "username": "required"
      }
    });
  },
  methods: {

    onFormSubmit: function(e) {

      var errors,
          fieldNames,
          fields,
          form;

      e.preventDefault();
      form = new Form(this.$els.signupform);
      this.$els.signupform.removeAttribute("data-state");
      if (this.formValidator.fails("signupForm"))
      {
        this.$els.signupform.setAttribute("data-state", "invalid");
        errors = this.formValidator.errors.signupForm;
        fields = form.getFields();
        fieldNames = form.getFieldNames();
        fieldNames.forEach(function(name) {

          if (typeof errors[name] !== "undefined")
          {
            fields[name].classList.add("is-invalid");
          }
          else
          {
            fields[name].classList.remove("is-invalid");
          }
        });
      }
      else
      {
        fields = form.getFields(true, true);
        fields.forEach(function(f) {

          f.classList.remove("is-invalid");
        });
        auth.signup(form.getData()).then(
          this.onFormSubmitComplete.bind(this),
          this.onFormSubmitError.bind(this)
        );
      }
    },
    onFormSubmitComplete: function(details) {

      switch (details.status)
      {
        case "OK":
          window.location.assign("login.html");
          break;
        case "KO":
          this.$els.signupform.setAttribute("data-state", "already-exists");
          break;
        default:
          this.$els.signupform.setAttribute("data-state", "unexpected-error");
          break;
      }
    },
    onFormSubmitError: function() {

      this.$els.signupform.setAttribute("data-state", "unexpected-error");
    }
  }
});
