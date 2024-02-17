sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("einvoiceewaybill.controller.UOM_Code", {
            onInit: function () {
                debugger
                
                this.oModel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZODATA_EINVOICE_SRV");
                
                var getv = this.getView()
                var that = this
                this.oModel.read("/Es_UOMCodeSet", {

                    success: function (odata) {
                    debugger
                        var result = odata.results

                        var jsonStateCode = new sap.ui.model.json.JSONModel(result);
                        that.getView().setModel(jsonStateCode,"json_UOMCodeSet");

                    },
                    error: function (req) {
                       debugger

                        sap.m.MessageBox.error("Error reading data");
                    }
                });


            },onBack: function () {
                debugger
                /*	var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("Create_Compliance_Repository", null, true);*/
                var oHistory = History.getInstance();
                var sPreviousHash = oHistory.getPreviousHash();
                if (sPreviousHash !== undefined) {
                    window.history.go(-1);
                } else {
                    var oRouter = UIComponent.getRouterFor(this);
                    oRouter.navTo("Master_Page", {}, true);
                }
            },
            onAdd: function () {
                debugger
                if (!this._addDialog) {
                    this._addDialog = sap.ui.xmlfragment("einvoiceewaybill.fragment.uom_code", this);
                }
    
                this._addDialog.open();
    
            },
            onEdit: function (oEvent) {
                debugger
                if (!this._oDialog) {
                    this._oDialog = sap.ui.xmlfragment("einvoiceewaybill.fragment.EditUOM_code", this);
    
                }
                this._oDialog.open();
    
                // var oTable = this.byId("uomcodetable");
                // var selectedRow = oTable.getSelectedIndex();
                // var dataContext = oTable.getBinding("rows").getContexts();
                // var SelectedKey = dataContext[selectedRow].sPath.split("/")[1];
                // var selectedData = oTable.getModel().oData[SelectedKey];
    
                var oTable = this.byId("uomcodetable");
                // var selectedRow = oTable.getSelectedIndex();
                // var dataContext = oTable.getBinding("rows").getContexts();
                // var SelectedKey = dataContext[selectedRow].sPath.split("/")[1];
                // var selectedData = oTable.getModel().oData[SelectedKey];
                var path= oEvent.getSource().getParent().getParent().oBindingContexts.json_UOMCodeSet.sPath.split("/").pop()
                var rowdata=this.getView().getModel("json_UOMCodeSet").getData()[parseInt(path)]
                 var GovUom1 = rowdata.GovUom;
                 var SapUom1 = rowdata.SapUom;
    
                sap.ui.getCore().byId("govtuom1").setValue(GovUom1);
                sap.ui.getCore().byId("sapuom1").setValue(SapUom1);
    
                if (oEvent.getSource().getBindingContext().getObject().Actflag == "X") {
                    sap.ui.getCore().byId("activedeactiveuom1").setSelected(true);
                } else {
                    sap.ui.getCore().byId("activedeactiveuom1").setSelected(false);
                }
    
            },
            onCancel: function () {
                this._addDialog.close();
            },
            onCancel1: function () {
                this._oDialog.close();
            },
            oncreate: function () {
                debugger
                var oTable = this.byId("uomcodetable");
                var that = this;
                var oEntry = {};
                var active = sap.ui.getCore().byId("activedeactiveuom").getSelected();
                if (active == true) {
                    oEntry.Actflag = "X";
                } else {
                    oEntry.Actflag = false;
                }
                var govUOM = sap.ui.getCore().byId("govtuom").getValue().toUpperCase();
                var sapUOM = sap.ui.getCore().byId("sapuom").getValue().toUpperCase();
                var space = /^\s/;
                if (govUOM == "" || govUOM.match(space)) {
                    sap.ui.getCore().byId("govtuom").setValueState("Error");
                } else {
                    sap.ui.getCore().byId("govtuom").setValueState("None");
                }
                if (sapUOM == "" || sapUOM.match(space)) {
                    sap.ui.getCore().byId("sapuom").setValueState("Error");
                } else {
                    sap.ui.getCore().byId("sapuom").setValueState("None");
                }
                if (govUOM == "" || govUOM.match(space) || sapUOM == "" || sapUOM.match(space)) {
                    sap.m.MessageToast.show("Space is not allowed");
                } else {
                    sap.ui.getCore().byId("govtuom").setValueState("None");
                    sap.ui.getCore().byId("sapuom").setValueState("None");
    
                    oEntry.GovUom = sap.ui.getCore().byId("govtuom").getValue().toUpperCase();
                    oEntry.SapUom = sap.ui.getCore().byId("sapuom").getValue().toUpperCase();
    
                    this.oModel.create("/Es_UOMCodeSet", oEntry, {
                        method: "POST",
    
                        success: function (oData, oResponse) {
                            debugger
                            that._addDialog.close();
                            oTable.getModel().refresh(true);
                            oTable.getBinding("rows").refresh(true);
                            that.onInit()
                            that.onclear();
                        },
                        error: function (cc, vv) {
    
                        }
                    });
                }
            },
            oncreate1: function () {
                debugger
                var oTable = this.byId("uomcodetable");
                var that = this;
                var oEntry = {};
                var active = sap.ui.getCore().byId("activedeactiveuom1").getSelected();
                if (active == true) {
                    oEntry.Actflag = "X";
                } else {
                    oEntry.Actflag = false;
                }
                var GovUom1 = sap.ui.getCore().byId("govtuom1").getValue().toUpperCase();
                var SapUom1 = sap.ui.getCore().byId("sapuom1").getValue().toUpperCase();
                // var oSrc = oEvent.getSource();
    
                // if (oSrc && oSrc.setValue) {
                // 	oSrc.setValue(oSrc.getValue().toUpperCase());
                // }
    
                oEntry.GovUom = GovUom1;
                oEntry.SapUom = SapUom1;
    
                this.oModel.update("/Es_UOMCodeSet(GovUom='" + GovUom1 + "',SapUom='" + SapUom1 + "')", oEntry, {
                    method: "PUT",
    
                    success: function (oData, oResponse) {
                        debugger
                        that._oDialog.close();
                        oTable.getModel().refresh(true);
                        oTable.getBinding("rows").refresh(true);
                        that.onInit()
                        that.onclear1();
                    },
                    error: function (cc, vv) {
    
                    }
                });
            },
            deleteUOMcode: function (oEvent) {
                debugger
                var that=this
                var oTable = this.byId("uomcodetable");
                var path= oEvent.getSource().getParent().getParent().oBindingContexts.json_UOMCodeSet.sPath.split("/").pop()
                var rowdata=this.getView().getModel("json_UOMCodeSet").getData()[parseInt(path)]
                 var GovUom1 = rowdata.GovUom;
                 var SapUom1 = rowdata.SapUom;
    
                this.oModel.remove("/Es_UOMCodeSet(GovUom='" + GovUom1 + "',SapUom='" + SapUom1 + "')", {
                    method: "DELETE",
    
                    success: function (oData, oResponse) {
                        debugger
                        //that._oDialog.close();
                        oTable.getModel().refresh(true);
                        oTable.getBinding("rows").refresh(true);
                        //that.onclear1();
                        that.onInit()
                        sap.m.MessageToast.show("Deleted Successfully");
                    },
                    error: function (cc, vv) {
    
                    }
                });
            },
            onclear: function () {
                debugger
                sap.ui.getCore().byId("activedeactiveuom").setSelected(false);
                sap.ui.getCore().byId("govtuom").setValue("");
                sap.ui.getCore().byId("sapuom").setValue("");
    
            },
            onclear1: function () {
    debugger
                sap.ui.getCore().byId("activedeactiveuom1").setSelected(false);
                /*	sap.ui.getCore().byId("govtuom1").setValue("");
                    sap.ui.getCore().byId("sapuom1").setValue("");*/
    
            }
       
        });
    });
