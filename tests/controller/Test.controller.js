sap.ui.define(
  [
    "de/test/controller/SuperController",
    "de/test/util/Enum"
  ],

  (
    SuperController,
    Enum,
  
  ) => {
    "use strict";

    SuperController.extend( 
      "de.test.controller.Test",
      {
        onInit() {

        },

        onExit() {
          this.getEventBus().destroy();
        },


      }
    );
  }
);
