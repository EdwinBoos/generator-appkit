sap.ui.define(
  ["sap/ui/core/mvc/Controller"],

  Controller => {
    "use strict";

    return Controller.extend(
      "<%= moduleName %>.controller.<%= controllerName %>",
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
