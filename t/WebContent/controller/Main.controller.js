sap.ui.define(
  [
    "enter/some/module/name/controller/SuperController",
    "enter/some/module/name/util/Enum",
    "enter/some/module/name/util/Formatter",
  ],

  (
    SuperController,
    Enum,
    Formatter
  ) => {
    "use strict";

    SuperController.extend(
      "enter.some.module.name.controller.Main",
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
