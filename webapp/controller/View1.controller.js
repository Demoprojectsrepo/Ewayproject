sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("einvoiceewaybill.controller.View1", {
            onInit: function () {

            },
            masterpage:function(oEvent){
                debugger
                // this.byId("app").to(this.byId("page2"))
                var oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("MasterPage");
            },
            einvoice:function(oEvent){
                debugger
                // this.byId("app").to(this.byId("page3"))
                var oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("E-Invoice");
            },
            ewaybill:function(oEvent){
                debugger
                // this.byId("app").to(this.byId("page4"))
                var oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("E-WayBill");
            }
        });
    });
