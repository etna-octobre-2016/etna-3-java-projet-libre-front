(function() {

  ///////////////////////////////////////////////////////////////////////////
  // LOCAL VARIABLES
  ///////////////////////////////////////////////////////////////////////////

  // Get the contents of the template (_currentScript is available with webcomponents.js, use currentScript if you don't use this Polyfill)
  var template = document._currentScript.ownerDocument.querySelector('template');

  // Create a prototype for this component
  var prototype = Object.create(HTMLElement.prototype, {

    ///////////////////////////////////////////////////////////////////////////
    // INSTANCE PROPERTIES
    ///////////////////////////////////////////////////////////////////////////

    // Example property
    firstname: {

      get: function() {

        console.log("firstname getter");
        return this.firstname;
      },
      set: function(firstname) {

        console.log("firstname setter");
        this.firstname = firstname;
      }

    },

    ///////////////////////////////////////////////////////////////////////////
    // INSTANCE METHODS
    ///////////////////////////////////////////////////////////////////////////

    // Example method
    sayHello: function() {

      console.log("Hello " + this.firstname);
    }

  });

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

      console.log("example component created");
  };

  // Called when the component instance is attached to the DOM
  prototype.attachedCallback = function() {

    console.log("example component attached");
  };

  // Called when one of this components attributes change
  prototype.attributeChangedCallback = function(attrName, oldVal, newVal) {

    console.log("example component attribute changed");
    console.log("attr = %s, oldValue = %s, newVal = %s", attrName, oldVal, newVal);
    switch(attrName)
    {
      case "firstname":
        this.firstname = newVal;
        break;
      default:
        break;
    }
  };

  ///////////////////////////////////////////////////////////////////////////
  // INITIALIZATION
  ///////////////////////////////////////////////////////////////////////////

  // Register the element with the document
  document.registerElement("example-component", {prototype: prototype});

}());
