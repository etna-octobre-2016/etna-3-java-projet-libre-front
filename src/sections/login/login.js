/*
 * Dependencies
 */
import Events from "modules/core/events.js";
import Vue from "vue";
import template from "./login.html";
import ui from "modules/ui/index.js";

var view;

export function init()
{
  console.log("login section loaded");
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
        "loginForm": {
          "email": "required|email",
          "password": "required"
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
        form = new ui.form(this.$els.loginform);
        if (this.formValidator.fails("loginForm"))
        {
          this.$els.loginform.setAttribute("data-state", "invalid");
          errors = this.formValidator.errors.loginForm;
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
          this.$els.loginform.removeAttribute("data-state");
          fields = form.getFields(true, true);
          fields.forEach(function(f) {
            
            f.classList.remove("is-invalid");
          });
        }
      }
    }
  });
}
export function destroy()
{
  Events.emit("section:destroyed");
  console.log("login section destroyed");
}
