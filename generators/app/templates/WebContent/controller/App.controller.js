sap.ui.define(
  ["<%= modulePath %>/controller/SuperController"],

  SuperController => {
    "use strict";

    /**
     *
     * NOTE! We are extending the SuperController, and it lends us all the functions declared.
     * You can easily acccess the functions with the 'this' keyword.
     *
     */
    return SuperController.extend("<%= moduleName %>.controller.App", {});
  }
);
