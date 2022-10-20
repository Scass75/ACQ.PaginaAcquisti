sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
  ],
  function (Controller, JSONModel) {
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
        this.byId("detail").setTitle("Selected car id: " + id);
        this.setData(id);
      },
      setData: function (id) {
        var car = this.getView().getModel("cars").oData[id-1];
        this.getView().setModel( new JSONModel(car),"car")
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
