sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
    "sap/m/routing/Router",
    "sap/ui/model/odata/v2/ODataModel"
  ],

  (UIComponent, JSONModel, ResourceModel, Router, ODataModel) => {
    return UIComponent.extend("<%= moduleName %>.Component", {
      metadata: { manifest: "json" },

      destroy() {
        UIComponent.prototype.destroy.apply(this, arguments);
      },

      navigateBack: () => window.history.go(-1),

      getURLBasedOnWhereTheAppIsStarted() {
        return window.location.hostname === "localhost"
          ? this.getMetadata().getConfig().serviceConfigLocal.invoiceRemote
          : this.getMetadata().getConfig().serviceConfig.invoiceRemote;
      },

      init() {
        const odataModel = new ODataModel(
          this.getURLBasedOnWhereTheAppIsStarted()
        );
        const deviceModel = new JSONModel({
          isTouch: sap.ui.Device.support.touch,
          isNoTouch: !sap.ui.Device.support.touch,
          isPhone: sap.ui.Device.system.phone,
          isNoPhone: !sap.ui.Device.system.phone,
          listMode: sap.ui.Device.system.phone ? "None" : "SingleSelectMaster",
          listItemType: sap.ui.Device.system.phone ? "Active" : "Inactive"
        });
        const applicationDataModel = new JSONModel({
          modulePath: $.sap.getModulePath("<%= moduleName %>", "")
        });

        odataModel.setUseBatch(false);
        this.setModel(odataModel, "odataModel");
        this.setModel(deviceModel, "device");
        this.setModel(applicationDataModel, "appData");

        UIComponent.prototype.init.apply(this, arguments);
        this.router = this.getRouter().initialize();
      }
    });
  }
);
