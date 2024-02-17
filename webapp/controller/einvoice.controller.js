sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("einvoiceewaybill.controller.einvoice", {
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
            onSearch: function () {

                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                var EinvoiceCompanyCode = this.byId("companyCode").getValue();
                var EinvoiceDocnoFrom = this.byId("docnofrom").getValue();
                var EinvoiceDocnoTO = this.byId("docnoto").getValue();
                var billFrom = this.byId("from").getValue();
                var billTo = this.byId("to").getValue();
                var CancelReason = this.byId("cancelReason").getSelectedKey();
                debugger;
                var SelectedItem = this.byId("rbg3").getSelectedButton().getText();
    
                if (EinvoiceCompanyCode == "" && EinvoiceDocnoFrom == "" && billFrom == "") {
                    this.byId("docnofrom").setValueState("Error");
                    this.byId("from").setValueState("Error");
                    sap.m.MessageToast.show("Please fill atleast one mandatory field");
                } else if (EinvoiceCompanyCode !== "" && EinvoiceDocnoFrom == "" && billFrom == "") {
                    this.byId("docnofrom").setValueState("Error");
                    this.byId("from").setValueState("Error");
                    sap.m.MessageToast.show("Please fill atleast one mandatory field");
                } else {
                    this.byId("docnofrom").setValueState("None");
                    this.byId("from").setValueState("None");
                    if (SelectedItem == "Generate E - Invoice") {
                        if (billFrom == "") {
                            billFrom = "0000-00-00T00:00:00";
    
                        }
                        if (billTo == "") {
                            billTo = "0000-00-00T00:00:00";
                        }
                        if (EinvoiceDocnoFrom == "") {
                            EinvoiceDocnoFrom = "0";
                        }
                        if (EinvoiceDocnoTO == "") {
                            EinvoiceDocnoTO = "0";
                        }
                        if (EinvoiceCompanyCode == "") {
                            EinvoiceCompanyCode = "0";
                        }
    
                        if (EinvoiceCompanyCode != "" && EinvoiceDocnoFrom != "" && EinvoiceDocnoTO != "" && billFrom != "" && billTo != "") {
    
                            oRouter.navTo("E-InvoiceGen", {
                                from: billFrom,
                                to: billTo,
                                docFrom: EinvoiceDocnoFrom,
                                docTo: EinvoiceDocnoTO,
                                companyCode: EinvoiceCompanyCode
                            });
                        }
    
                    } else if (SelectedItem == "Cancel E - Invoice") {

                        if (billFrom == "") {
                            billFrom = "0000-00-00T00:00:00";
    
                        }
                        if (billTo == "") {
                            billTo = "0000-00-00T00:00:00";
                        }
                        if (EinvoiceDocnoFrom == "") {
                            EinvoiceDocnoFrom = "0";
                        }
                        if (EinvoiceDocnoTO == "") {
                            EinvoiceDocnoTO = "0";
                        }
                        if (EinvoiceCompanyCode == "") {
                            EinvoiceCompanyCode = "0";
                        }
    
                        if (EinvoiceCompanyCode != "" && EinvoiceDocnoFrom != "" && EinvoiceDocnoTO != "" && billFrom != "" && billTo != "" &&
                            CancelReason != "") {
    
                            oRouter.navTo("E-InvoiceCancel", {
                                from: billFrom,
                                to: billTo,
                                docFrom: EinvoiceDocnoFrom,
                                docTo: EinvoiceDocnoTO,
                                companyCode: EinvoiceCompanyCode,
                                canrsn: CancelReason
                            });
                        }
    
                    } else if (SelectedItem == "Display E - Invoice") {
    
                        if (billFrom == "") {
                            billFrom = "0000-00-00T00:00:00";
    
                        }
                        if (billTo == "") {
                            billTo = "0000-00-00T00:00:00";
                        }
                        if (EinvoiceDocnoFrom == "") {
                            EinvoiceDocnoFrom = "0";
                        }
                        if (EinvoiceDocnoTO == "") {
                            EinvoiceDocnoTO = "0";
                        }
                        if (EinvoiceCompanyCode == "") {
                            EinvoiceCompanyCode = "0";
                        }
    
                        if (EinvoiceCompanyCode != "" && EinvoiceDocnoFrom != "" && EinvoiceDocnoTO != "" && billFrom != "" && billTo != "") {
    
                            oRouter.navTo("E-InvoiceDisplay", {
                                from: billFrom,
                                to: billTo,
                                docFrom: EinvoiceDocnoFrom,
                                docTo: EinvoiceDocnoTO,
                                companyCode: EinvoiceCompanyCode
                            });
                        }
    
                    } else if (SelectedItem == "Print E - Invoice") {
                        if (billFrom == "") {
                            billFrom = "0000-00-00T00:00:00";
    
                        }
                        if (billTo == "") {
                            billTo = "0000-00-00T00:00:00";
                        }
                        if (EinvoiceDocnoFrom == "") {
                            EinvoiceDocnoFrom = "0";
                        }
                        if (EinvoiceDocnoTO == "") {
                            EinvoiceDocnoTO = "0";
                        }
                        if (EinvoiceCompanyCode == "") {
                            EinvoiceCompanyCode = "0";
                        }
    
                        if (EinvoiceCompanyCode != "" && EinvoiceDocnoFrom != "" && EinvoiceDocnoTO != "" && billFrom != "" && billTo != "") {
    
                            oRouter.navTo("E-InvoicePrint", {
                                from: billFrom,
                                to: billTo,
                                docFrom: EinvoiceDocnoFrom,
                                docTo: EinvoiceDocnoTO,
                                companyCode: EinvoiceCompanyCode
                            });
                        }
    
                    }
    
                }
    
            },
            rediobuttons:function(oEvent){
            debugger
            var SelectedItem = this.byId("rbg3").getSelectedButton().getText();
            if(SelectedItem == "Generate E - Invoice"){
                this.byId("SimpleFormChange480_Trial5").setVisible(false);
            }else if(SelectedItem == "Cancel E - Invoice"){
                this.byId("SimpleFormChange480_Trial5").setVisible(true);
            }else if(SelectedItem == "Display E - Invoice"){
                this.byId("SimpleFormChange480_Trial5").setVisible(false);
            }else if(SelectedItem == "Print E - Invoice"){
                this.byId("SimpleFormChange480_Trial5").setVisible(false);
            }
            }
        });
    });
