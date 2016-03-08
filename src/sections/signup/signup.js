/*
 * Dependencies
 */
import Events from "modules/core/events.js";
import Vue from "vue";
import template from "./signup.html";
// import auth from "modules/api/auth.js";
// import ui from "modules/ui/index.js";

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
      // this.formValidator = new window.Validatinator({
      //   "loginForm": {
      //     "email": "required|email",
      //     "password": "required"
      //   }
      // });
    },
    methods: {
      
      onFormSubmit: function(e) {
        
        e.preventDefault();
        console.log("on submit");
        
        // var errors,
        //     fieldNames,
        //     fields,
        //     form;
        //     
        // e.preventDefault();
        // form = new ui.form(this.$els.loginform);
        // if (this.formValidator.fails("loginForm"))
        // {
        //   this.$els.loginform.setAttribute("data-state", "invalid");
        //   errors = this.formValidator.errors.loginForm;
        //   fields = form.getFields();
        //   fieldNames = form.getFieldNames();
        //   fieldNames.forEach(function(name) {
        //     
        //     if (typeof errors[name] !== "undefined")
        //     {
        //       fields[name].classList.add("is-invalid");
        //     }
        //     else
        //     {
        //       fields[name].classList.remove("is-invalid");
        //     }
        //   });
        // }
        // else
        // {
        //   this.$els.loginform.removeAttribute("data-state");
        //   fields = form.getFields(true, true);
        //   fields.forEach(function(f) {
        //     
        //     f.classList.remove("is-invalid");
        //   });
        //   auth.login(form.getData()).then(
        //     this.onFormSubmitComplete.bind(this),
        //     this.onFormSubmitError.bind(this)
        //   );
        // }
      },
      onFormSubmitComplete: function(details) {
        
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
      onFormSubmitError: function() {
        
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
