/*
 * Dependencies
 */
import Vue from "vue";
import Events from "modules/events.js";
import * as router from "core/router.js";
import * as sections from "core/sections.js";

var mainView;

mainView = new Vue({
  
  el: "body",
  data: {
    currentSection: null
  },
  ready: function() {
    
    sections.init();
    
    Events.on("section:destroyed", () => {  
      
      this.isLoading = true;
    });
    
    Events.on("section:loaded", () => {
      
      this.isLoading = false;
    });
    
    Events.on("router:update", (route) => {
      
      this.currentSection = route.name;  
      Events.emit("section:load", route);
    });
    
    router.init();
  }
});