sap.ui.define(
 ["<%= modulePath %>/controller/SuperController"],

 SuperController => {
  "use strict";

  return SuperController.extend("<%= moduleName %>.controller.App", {});
 }
);