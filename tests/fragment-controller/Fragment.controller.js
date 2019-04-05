sap.ui.define(
  ["sap/ui/core/mvc/Controller"],

  Controller => {
    "use strict";

    return Controller.extend(
      "de.test.controller.Fragment",
      {
        init() {
          return this;
        },

        connect(parentController) {
          this.parentController = parentController;
          return this;
        }
      }
    );
  }
);
