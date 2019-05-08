sap.ui.define(
 [
  "<%= modulePath %>/controller/SuperController",
  "<%= modulePath %>/util/Enum"
 ],

 (
  SuperController,
  Enum,

 ) => {
  "use strict";

  SuperController.extend(
   "<%= moduleName %>.controller.<%= controllerName %>", {
    onInit() {

    },

    onExit() {
     this.getEventBus().destroy();
    },


   }
  );
 }
);