sap.ui.define(
  [
    "<%= modulePath %>/controller/SuperController",
    "<%= modulePath %>/util/Enum",
    "<%= modulePath %>/util/Formatter",
  ],

  (
    SuperController,
    Enum,
    Formatter
  ) => {
    "use strict";

    /**
     *
     * NOTE! the extend() method does not inherit from a super class like in most oop-languages ( where a instance
     * of the super class is accessible ).
     * What it does instead is that the super controller will us only lend all functions which are declared
     * in the super controller. Hence there is no 'super' keyword to access the declared functions in the super controller.
     * Since the methods got added to the child controller's instance, we need to access them with the 'this' keyword.
     *
     */
    SuperController.extend(
      "<%= moduleName %>.controller.<%= controllerName %>",
      {
        onInit() {
          this.getRouter()
            .getRoute("defaultRoute")
            .attachPatternMatched(this._handleRouteMatched, this);
        },

        onExit() {
          this.getEventBus().destroy();
        },

        _handleRouteMatched(event) {}
      }
    );
  }
);
