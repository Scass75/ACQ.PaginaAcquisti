sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/Fragment",
  ],
  function (Controller, JSONModel, Fragment) {
    "use strict";
    return Controller.extend("ACQ.PaginaAcquisti.controller.Detail", {
      onInit: function () {
        var oRouter = this.getOwnerComponent().getRouter();
        oRouter
          .getRoute("detail")
          .attachPatternMatched(this.onRouteMatched, this);
      },
      onRouteMatched: function (oEvent) {
        const id = oEvent.getParameter("arguments").cars;
        this.byId("detail").setTitle("Selected car id:" + id);
        this.setData(id);
      },
      setData: function (id) {
        const oModel = new JSONModel("./cars.json", true);
        oModel.read("/Detail(" + id + ")", {
          success: function (JSONModel) {
            const data = new JSONModel(oModel);
            this.getView().setModel(data, "car");
          },
        });
      },
      onYou: function () {
        this.byId("you").setText("Actual owner:you");
        this.setData(id);
      },
      onBack: function () {
        var oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("home");
      },
      onBack1: function () {
        var oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("main");
      },
    });
  }
);
