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
     * NOTE! We are extending the SuperController, and it lends us all the functions declared.
     * You can easily acccess the functions with the 'this' keyword.
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
