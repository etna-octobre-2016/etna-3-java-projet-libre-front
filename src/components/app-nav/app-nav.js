(function() {

  ///////////////////////////////////////////////////////////////////////////
  // LOCAL VARIABLES
  ///////////////////////////////////////////////////////////////////////////

  // Get the contents of the template (_currentScript is available with webcomponents.js, use currentScript if you don't use this Polyfill)
  var template = document._currentScript.ownerDocument.querySelector('template');

  // Create a prototype for this component
  var prototype = Object.create(HTMLElement.prototype);

  ///////////////////////////////////////////////////////////////////////////
  // WEBCOMPONENT INTERFACE
  ///////////////////////////////////////////////////////////////////////////

  // Register a createdCallback
  prototype.createdCallback = function() {

      var clone;

      // Grab the contents of the template
      clone = document.importNode(template.content, true);

      // Add the template contents to the shadow DOM
      this.createShadowRoot().appendChild(clone);
  };

  ///////////////////////////////////////////////////////////////////////////
  // INITIALIZATION
  ///////////////////////////////////////////////////////////////////////////

  // Register the element with the document
  document.registerElement("app-nav", {prototype: prototype});

}());
