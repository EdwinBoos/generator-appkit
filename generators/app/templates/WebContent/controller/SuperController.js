sap.ui.define(
  ["sap/ui/core/mvc/Controller"],

  (Controller) => {
    "use strict";

    return Controller.extend("<%= moduleName %>.controller.SuperController", {
      handleNavigateBack() {
        this.getOwnerComponent().navigateBack();
      },

      getModel(name) {
        return this.getView().getModel(name);
      },

      setModel(model, name) {
        return this.getView().setModel(model, name);
      },

      getODataModel() {
        return this.getOwnerComponent().getModel("odataModel");
      },

      getI18nResourceBundle() {
        return this.getOwnerComponent()
          .getModel("i18n")
          .getResourceBundle();
      },

      getRouter() {
        return this.getOwnerComponent().getRouter();
      },

      getEventBus() {
        return sap.ui.getCore().getEventBus();
      }
    });
  }
);
