sap.ui.define(
  [
    "de/test/controller/SuperController",
    "de/test/util/Enum",
    "de/test/util/Formatter",
  ],

  (
    SuperController,
    Enum,
    Formatter
  ) => {
    "use strict";

    SuperController.extend(
      "de.test.controller.Main.controller.js",
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
