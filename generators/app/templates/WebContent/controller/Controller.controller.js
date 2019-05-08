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

  SuperController.extend(
   "<%= moduleName %>.controller.<%= controllerName %>", {
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