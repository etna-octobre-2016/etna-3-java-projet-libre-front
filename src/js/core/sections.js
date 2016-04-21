/*
 * Dependencies
 */
import Events from "modules/core/events.js";

/*
 * Sections
 */
import * as homeSection from "sections/home/home.js";

/*
 * Exports
 */
export function init()
{
  var currentSection;
  
  currentSection = null;
  Events.on("section:load", function(route) {
    
    if (currentSection !== null)
    {
      currentSection.destroy();
    }
    switch (route.name)
    {
      case "home":
        currentSection = homeSection;
        break;
      default:
        currentSection = homeSection;
        break;
    }
    currentSection.init();
  });
}