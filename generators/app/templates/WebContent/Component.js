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
   metadata: {
    manifest: "json"
   },

   destroy() {
    UIComponent.prototype.destroy.apply(this, arguments);
   },

   navigateBack: () => window.history.go(-1),

   createURL() {
    if (window.location.hostname === "localhost") {
     const {
      serviceProxyURL,
      directURL
     } = this.getMetadata().getConfig().serviceConfigLocal
     if (window.location.port === "1337") {
      return directURL;
     } else {
      return serviceProxyURL;
     }
    } else {
     return this.getMetadata().getConfig().serviceConfig.serviceURL || "";
    }
   },

   init() {
    const odataModel = new ODataModel(
     this.createURL()
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

    this.setModel(odataModel, "odataModel");
    this.setModel(deviceModel, "device");
    this.setModel(applicationDataModel, "appData");

    UIComponent.prototype.init.apply(this, arguments);
    this.router = this.getRouter().initialize();
   }
  });
 }
);