sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("einvoiceewaybill.controller.ewaybill", {
            onInit: function () {

            },
            home:function(oEvent){
                var oRouter = this.getOwnerComponent().getRouter();
			    oRouter.navTo("RouteView1");
            },
            masterpage:function(oEvent){
                debugger
                var oRouter = this.getOwnerComponent().getRouter();
			    oRouter.navTo("MasterPage");
            },
            einvoice:function(oEvent){
                debugger
                var oRouter = this.getOwnerComponent().getRouter();
			    oRouter.navTo("E-Invoice");
            },
            ewaybill:function(oEvent){
                debugger
                var oRouter = this.getOwnerComponent().getRouter();
			    oRouter.navTo("E-WayBill");
            },
            Searchoption:function(oEvent){
                debugger
            var SelectedItem = this.byId("Rad_grp").getSelectedButton().getText();

            
            if(SelectedItem == "Generate E-Way Bill"){
                this.byId("Panel").setVisible(true);
                this.byId("panel1").setVisible(false);
            }else if(SelectedItem == "Cancel E-Way Bill"){
                this.byId("panel1").setVisible(true);
                this.byId("Panel").setVisible(false);
            }else if(SelectedItem == "Display E-Way Bill"){
                this.byId("Panel").setVisible(false);
                this.byId("panel1").setVisible(false);
            }else if(SelectedItem == "Print E-Way Bill"){
                this.byId("Panel").setVisible(false);
                this.byId("panel1").setVisible(false);
            }
            }
        });
    });
