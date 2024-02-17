sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("einvoiceewaybill.controller.State_Code", {
            onInit: function () {
                debugger
                
                this.oModel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZODATA_EINVOICE_SRV");
                
                var getv = this.getView()
                var that = this
                this.oModel.read("/Es_StateCodeSet", {

                    success: function (odata) {
                    debugger
                        var result = odata.results

                        var jsonStateCode = new sap.ui.model.json.JSONModel(result);
                        that.getView().setModel(jsonStateCode,"json_StateCode");
                        // that.getView().byId("state_codetable").refreshRows()
                    },
                    error: function (req) {
                       debugger

                        sap.m.MessageBox.error("Error reading data");
                    },

            
                });
                // var oTable = this.byId("state_codetable");
                // oTable.getModel().refresh();
                // oTable.getBinding("rows").refresh();
            
            },              
             onBack: function () {
                   	var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                    oRouter.navTo("Create_Compliance_Repository", null, true);
                    var oHistory = History.getInstance();
                    var sPreviousHash = oHistory.getPreviousHash();
                    if (sPreviousHash !== undefined) {
                        window.history.go(-1);
                    } else {
                        var oRouter = UIComponent.getRouterFor(this);
                         oRouter.navTo("Master_Page", {}, true);
                     }
             },
                adddata: function (oevent) {
                    debugger
                	if (!this._addDialog) {
                        this._addDialog = sap.ui.xmlfragment("einvoiceewaybill.fragment.state_code", this);
                    }
        
                    this._addDialog.open();
                },
                closestatecode: function () {
                	this._addDialog.close();
                },
                onEdit: function (oEvent) {
        debugger
                   
        if (!this._oDialog) {
            this._oDialog = sap.ui.xmlfragment("einvoiceewaybill.fragment.EditState_code", this);

        /*	this._oDialog.setModel(this.getView().getModel());*/
        }
        this._oDialog.open();
                    var oTable = this.byId("portalDetails");
                    // var selectedRow = oTable.getSelectedIndex();
                    // var dataContext = oTable.getBinding("rows").getContexts();
                    // var SelectedKey = dataContext[selectedRow].sPath.split("/")[1];
                    // var selectedData = oTable.getModel().oData[SelectedKey];

                    var path= oEvent.getSource().getParent().getParent().oBindingContexts.json_StateCode.sPath.split("/").pop()
                    var rowdata=this.getView().getModel("json_StateCode").getData()[parseInt(path)]
                     var Land11 = rowdata.Land1;
                     var Regio1 = rowdata.Regio;
                      var Stdc=rowdata.Stcd

                    sap.ui.getCore().byId("country1").setValue(Land11);
                    sap.ui.getCore().byId("sapregion1").setValue(Regio1);
                    sap.ui.getCore().byId("govtregion1").setValue(Stdc);
        
                    if (rowdata.Actflag == "true") {
                        sap.ui.getCore().byId("activedeactivestc1").setSelected(true);
                    } else {
                        sap.ui.getCore().byId("activedeactivestc1").setSelected(false);
                    }
        
                },
                onCancel: function () {
                    debugger
             
                },
                onCancel1: function () {
                    debugger
                  
                },
                oncreate: function () {
                    debugger
                    var oTable = this.byId("state_codetable");
                    var that = this;
                    var oEntry = {};
                    var active = sap.ui.getCore().byId("activedeactivestc").getSelected();
                    var Country = sap.ui.getCore().byId("country").getValue();
                    var Region = sap.ui.getCore().byId("sapregion").getValue();
                    if (active == true) {
                        oEntry.Actflag = "true";
                    } else {
                        oEntry.Actflag = "false";
                    }
                    var space = /^\s/;
        
                    if (Country == "" || Country.match(space)) {
                        sap.ui.getCore().byId("country").setValueState("Error");
                    } else {
                        sap.ui.getCore().byId("country").setValueState("None");
                    }
                    if (Region == "" || Region.match(space)) {
                        sap.ui.getCore().byId("sapregion").setValueState("Error");
                    } else {
                        sap.ui.getCore().byId("sapregion").setValueState("None");
                    }
                    if (Country == "" || Country.match(space) || Region == "" || Region.match(space)) {
                        sap.m.MessageToast.show("Space is not allowed");
                    } else {
                        sap.ui.getCore().byId("country").setValueState("None");
                        sap.ui.getCore().byId("sapregion").setValueState("None");
        
                        oEntry.Land1 = Country;
                        oEntry.Regio = Region;
                        oEntry.Stcd = sap.ui.getCore().byId("govtregion").getValue();
        
                        this.oModel.create("/Es_StateCodeSet", oEntry, {
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
                            debugger
                            }
                        });
                    }
                },
                oncreate1: function () {
                    debugger
                    var oTable = this.byId("state_codetable");
                    var that = this;
                    var oEntry = {};
                    var active = sap.ui.getCore().byId("activedeactivestc1").getSelected();
                    if (active == true) {
                        oEntry.Actflag = "true";
                    } else {
                        oEntry.Actflag = "false";
                    }
                    var Land11 = sap.ui.getCore().byId("country1").getValue();
                    var Regio1 = sap.ui.getCore().byId("sapregion1").getValue();
                    var Stcd1 = sap.ui.getCore().byId("govtregion1").getValue();
        
                    oEntry.Land1 = Land11;
                    oEntry.Regio = Regio1;
                    oEntry.Stcd = Stcd1;
        
                    this.oModel.update("/Es_StateCodeSet(Land1='" + Land11 + "',Regio='" + Regio1 + "')", oEntry, {
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
                deletestatecode: function (oEvent) {
                    debugger
                    var oTable = this.byId("state_codetable");
                   var path= oEvent.getSource().getParent().getParent().oBindingContexts.json_StateCode.sPath.split("/").pop()
                   var rowdata=this.getView().getModel("json_StateCode").getData()[parseInt(path)]
                    var Land11 = rowdata.Land1;
                    var Regio1 = rowdata.Regio;
                    var that = this;
                    this.oModel.remove("/Es_StateCodeSet(Land1='" + Land11 + "',Regio='" + Regio1 + "')", {
                        method: "DELETE",
        
                        success: function (oData, oResponse) {
                            //that._oDialog.close();
                            oTable.getModel().refresh(true);
                            oTable.getBinding("rows").refresh(true);
                            that.onInit()
                            //that.onclear1();
                            sap.m.MessageToast.show("Deleted Successfully");
                        },
                        error: function (cc, vv) {
        
                        }
                    });
                },
                onclear: function () {
                 debugger
                    sap.ui.getCore().byId("activedeactivestc").setSelected(false);
                    sap.ui.getCore().byId("country").setValue("");
                    sap.ui.getCore().byId("sapregion").setValue("");
                    sap.ui.getCore().byId("govtregion").setValue("");
        
                },
                onclear1: function () {
                 debugger
                    sap.ui.getCore().byId("activedeactivestc1").setSelected(false);
                    /*	sap.ui.getCore().byId("country1").setValue("");
                        sap.ui.getCore().byId("sapregion1").setValue("");*/
                    sap.ui.getCore().byId("govtregion1").setValue("");
        
                }
       
        });
    });
