sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/m/MessageToast",
  ],
  function (Controller, Filter, FilterOperator, MessageToast) {
    "use strict";
    return Controller.extend("ACQ.PaginaAcquisti.controller.Home", {
      onSearch: function () {
        const oTable = this.byId("gridList");
        const sName = this.byId("filterID").getSelectedKeys();
        const sProd = this.byId("fbProd").getValue();

        oTable.setBusy(true);

        var aFilters = [];
        if (sName.length > 0) {
          for (let i = 0; i < sName.length; i++) {
            var filter = new Filter("number", FilterOperator.EQ, sName[i]);
            aFilters.push(filter);
          }
        }
        if (sProd !== "") {
          var filter = new Filter("Driver", FilterOperator.Contains, sProd);
          aFilters.push(filter);
        }

        var oBinding = oTable.getBinding("items");
        oBinding.filter([aFilters]);
        oTable.setBusy(false);
      },
      onClear: function () {
        this.byId("fbProd").setValue();
        this.byId("filterID").setSelectedKeys();
        this.onSearch();
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
