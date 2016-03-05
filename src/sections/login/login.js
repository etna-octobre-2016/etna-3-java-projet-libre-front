/*
 * Dependencies
 */
import Events from "modules/core/events.js";
import Vue from "vue";
import template from "./login.html";

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
        
        e.preventDefault();
        if (this.formValidator.fails("loginForm"))
        {
          console.log(this.formValidator.errors.loginForm);
        }
        else
        {
          console.log("form ok");
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
