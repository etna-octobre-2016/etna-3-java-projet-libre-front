/*
 * Dependencies
 */
import Events from "modules/core/events.js";
import Vue from "vue";
import template from "./signup.html";
import auth from "modules/api/auth.js";
import ui from "modules/ui/index.js";

var view;

export function init()
{
  console.log("signup section loaded");
  view = new Vue({
    el: "#main",
    replace: false,
    template: template,
    data: {
      formValidator: null
    },
    ready: function() {
      
      Events.emit("section:loaded");
      this.formValidator = new window.Validatinator({
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
        form = new ui.form(this.$els.signupform);
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
          console.log("requête");
          auth.signup(form.getData()).then(
            this.onFormSubmitComplete.bind(this),
            this.onFormSubmitError.bind(this)
          );
        }
      },
      onFormSubmitComplete: function(details) {
        
        console.log("onFormSubmitComplete");
        console.log(details);
        // switch (details.status)
        // {
        //   case "OK":
        //     window.location.hash = "#/home";
        //     localStorage.setItem("user", JSON.stringify(details.data));
        //     break;
        //   case "KO":
        //     this.$els.loginform.setAttribute("data-state", "bad-credentials");
        //     break;
        //   default:
        //     this.$els.loginform.setAttribute("data-state", "unexpected-error");
        //     break;
        // }
      },
      onFormSubmitError: function(details) {
        
        console.log("onFormSubmitError");
        console.log(details);
        
        // this.$els.loginform.setAttribute("data-state", "unexpected-error");
      }
    }
  });
}
export function destroy()
{
  Events.emit("section:destroyed");
  console.log("signup section destroyed");
}
