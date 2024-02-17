
sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("einvoiceewaybill.controller.User_Access_Details", {
            onInit: function () {
                debugger
                
                this.oModel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZODATA_EINVOICE_SRV");
                
                var getv = this.getView()
                var that = this
                this.oModel.read("/Es_UserAcessSet", {

                    success: function (odata) {
                    debugger
                        var result = odata.results

                        var jsonStateCode = new sap.ui.model.json.JSONModel(result);
                        that.getView().setModel(jsonStateCode,"json_UserAcessSet");

                    },
                    error: function (req) {
                       debugger

                        sap.m.MessageBox.error("Error reading data");
                    }
                });
            
            },onBack: function () {
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
    
            oncreate: function () {
    debugger
                var oTable = this.byId("useraccessdetails");
                var that = this;
                var oEntry = {};
                var active = sap.ui.getCore().byId("activedeactiveedituser").getSelected();
                if (active == true) {
                    oEntry.Actflag = "true";
                } else {
                    oEntry.Actflag = false;
                }
                var Syid1 = sap.ui.getCore().byId("sapsysid").getValue();
                var Method1 = sap.ui.getCore().byId("moprodess").getSelectedKey();
                var Bukrs1 = sap.ui.getCore().byId("comcode").getValue();
                var J1bbranc1 = sap.ui.getCore().byId("busplace").getValue();
                var Gstno1 = sap.ui.getCore().byId("Seller_GST_Number").getValue();
                var Username1 = sap.ui.getCore().byId("Portal_User_Name").getValue();
                var Password1 = sap.ui.getCore().byId("Portal_Password").getValue();
                var space = /^\s/;
                debugger;
                if (Syid1 == "" || Syid1.match(space)) {
                    sap.ui.getCore().byId("sapsysid").setValueState("Error");
                } else {
                    sap.ui.getCore().byId("sapsysid").setValueState("None");
                }
                if (Method1 == "" || Method1.match(space)) {
                    sap.ui.getCore().byId("moprodess").setValueState("Error");
                } else {
                    sap.ui.getCore().byId("moprodess").setValueState("None");
                }
                if (Bukrs1 == "" || Bukrs1.match(space)) {
                    sap.ui.getCore().byId("comcode").setValueState("Error");
                } else {
                    sap.ui.getCore().byId("comcode").setValueState("None");
                }
                if (J1bbranc1 == "" || J1bbranc1.match(space)) {
                    sap.ui.getCore().byId("busplace").setValueState("Error");
                } else {
                    sap.ui.getCore().byId("busplace").setValueState("None");
                }
                if (Syid1 == "" || Syid1.match(space) || Method1 == "" || Method1.match(space) || Bukrs1 == "" || Bukrs1.match(space) || J1bbranc1 ==
                    "" || J1bbranc1.match(space)) {
                    sap.m.MessageToast.show("Space is not allowed");
                } else {
    
                    sap.ui.getCore().byId("sapsysid").setValueState("None");
                    sap.ui.getCore().byId("moprodess").setValueState("None");
                    sap.ui.getCore().byId("comcode").setValueState("None");
                    sap.ui.getCore().byId("busplace").setValueState("None");
    
                    oEntry.Syid = Syid1;
                    oEntry.Method = Method1;
                    oEntry.Bukrs = Bukrs1;
                    oEntry.J1bbranc = J1bbranc1;
                    oEntry.Gstno = Gstno1;
                    oEntry.Username = Username1;
                    oEntry.Password = Password1;
    
                    this.oModel.create("/Es_UserAcessSet", oEntry, {
                        method: "POST",
    
                        success: function (oData, oResponse) {
    
                            oTable.getModel().refresh(true);
                            oTable.getBinding("rows").refresh(true);
                            that.onclear();
                            that.onInit()
                            that._addDialog1.close();
                        },
                        error: function (cc, vv) {
    
                        }
                    });
                }
            },
            onclear: function () {
                sap.ui.getCore().byId("activedeactiveedituser").setSelected(false);
                sap.ui.getCore().byId("sapsysid").setValue("");
                sap.ui.getCore().byId("moprodess").setSelectedKey("");
    
                sap.ui.getCore().byId("comcode").setValue("");
                sap.ui.getCore().byId("busplace").setValue("");
                sap.ui.getCore().byId("Seller_GST_Number").setValue("");
                sap.ui.getCore().byId("Portal_User_Name").setValue("");
                sap.ui.getCore().byId("Portal_Password").setValue("");
    
            },
            onclear1: function () {
                debugger
                sap.ui.getCore().byId("activedeactiveedituser1").setSelected(false);
                /*	sap.ui.getCore().byId("sapsysid1").setValue("");
                    sap.ui.getCore().byId("moprodess1").setSelectedKey("");
    
                    sap.ui.getCore().byId("comcode1").setValue("");
                    sap.ui.getCore().byId("busplace1").setValue("");*/
                sap.ui.getCore().byId("Seller_GST_Number1").setValue("");
                sap.ui.getCore().byId("Portal_User_Name1").setValue("");
                sap.ui.getCore().byId("Portal_Password1").setValue("");
    
            },
    
            onAdd: function () {
                debugger
                if (!this._addDialog1) {
                    this._addDialog1 = sap.ui.xmlfragment("einvoiceewaybill.fragment.user_access_Details", this);
                }
    
                this._addDialog1.open();
    
            },
            onEdit: function (oEvent) {
    debugger
                if (!this._oDialog) {
                    this._oDialog = sap.ui.xmlfragment("einvoiceewaybill.fragment.EditUser_Access_Details", this);
    
                    // this._oDialog.setModel(this.getView().getModel());
                }
                this._oDialog.open();
    
                var oTable = this.byId("useraccessdetails");
                var selectedRow = oTable.getSelectedIndex();
                var dataContext = oTable.getBinding("rows").getContexts();
                // var SelectedKey = dataContext[selectedRow].sPath.split("/")[1];
                // var selectedData = oTable.getModel().oData[SelectedKey];

                var path= oEvent.getSource().getParent().getParent().oBindingContexts.json_UserAcessSet.sPath.split("/").pop()
                var rowdata=this.getView().getModel("json_UserAcessSet").getData()[parseInt(path)]
                 var Syid1 = rowdata.Syid;
                 var Method1 = rowdata.Method;
                  var Bukrs1=rowdata.Bukrs;
                  var J1bbranc1=rowdata.J1bbranc;
                  var Gstno1=rowdata.Gstno;
                  var Username1=rowdata.Username;
                  var Password1=rowdata.Password;
    
                sap.ui.getCore().byId("sapsysid1").setValue(Syid1);
                sap.ui.getCore().byId("moprodess1").setValue(Method1);
                sap.ui.getCore().byId("comcode1").setValue(Bukrs1);
                sap.ui.getCore().byId("busplace1").setValue(J1bbranc1);
                sap.ui.getCore().byId("Seller_GST_Number1").setValue(Gstno1);
                sap.ui.getCore().byId("Portal_User_Name1").setValue(Username1);
                sap.ui.getCore().byId("Portal_Password1").setValue(Password1);
                if (rowdata.Actflag == "true") {
                    sap.ui.getCore().byId("activedeactiveedituser1").setSelected(true);
                } else {
                    sap.ui.getCore().byId("activedeactiveedituser1").setSelected(false);
                }
    
                // oEntry.Syid = sap.ui.getCore().byId("sapsysid").getValue();
                // oEntry.Method = sap.ui.getCore().byId("moprodess").getSelectedKey();
                // oEntry.Bukrs = sap.ui.getCore().byId("comcode").getValue();
                // oEntry.J1bbranc = sap.ui.getCore().byId("busplace").getValue();
                // oEntry.Gstno = sap.ui.getCore().byId("Seller_GST_Number").getValue();
                // oEntry.Username = sap.ui.getCore().byId("Portal_User_Name").getValue();
                // oEntry.Password = sap.ui.getCore().byId("Portal_Password").getValue();
    
            },
            onCancel: function () {
                this._addDialog1.close();
            },
            onCancel1: function () {
                this._oDialog.close();
            },
    
            oncreate1: function () {
    debugger
                var oTable = this.byId("useraccessdetails");
                var that = this;
                var oEntry = {};
                var active = sap.ui.getCore().byId("activedeactiveedituser1").getSelected();
                if (active == true) {
                    oEntry.Actflag = "true";
                } else {
                    oEntry.Actflag = false;
                }
                var Syid1 = sap.ui.getCore().byId("sapsysid1").getValue();
                var Method1 = sap.ui.getCore().byId("moprodess1").getSelectedKey();
                var Bukrs1 = sap.ui.getCore().byId("comcode1").getValue();
                var J1bbranc1 = sap.ui.getCore().byId("busplace1").getValue();
                var Gstno1 = sap.ui.getCore().byId("Seller_GST_Number1").getValue();
                var Username1 = sap.ui.getCore().byId("Portal_User_Name1").getValue();
                var Password1 = sap.ui.getCore().byId("Portal_Password1").getValue();
    
                oEntry.Syid = Syid1;
                oEntry.Method = Method1;
                oEntry.Bukrs = Bukrs1;
                oEntry.J1bbranc = J1bbranc1;
                oEntry.Gstno = Gstno1;
                oEntry.Username = Username1;
                oEntry.Password = Password1;
    
                this.oModel.update("/Es_UserAcessSet(Syid='" + Syid1 + "',Method='" + Method1 + "',Bukrs='" + Bukrs1 + "',J1bbranc='" +
                    J1bbranc1 + "')", oEntry, {
                        // oModel.update("/UserAcessSet('" + oEntry.Syid1+ + "')", oEntry, {
                        method: "PUT",
    
                        success: function (oData, oResponse) {
                            debugger
                            that._oDialog.close();
                            oTable.getModel().refresh(true);
                            oTable.getBinding("rows").refresh(true);
                            that.onInit()
                            that.onclear1();
                        },
                        error: function (cc, vv) {}
                    });
            },
            deleteuseraccessdetails: function (oEvent) {

                
                var path= oEvent.getSource().getParent().getParent().oBindingContexts.json_UserAcessSet.sPath.split("/").pop()
                var rowdata=this.getView().getModel("json_UserAcessSet").getData()[parseInt(path)]
                 var Syid1 = rowdata.Syid;
                 var Method1 = rowdata.Method;
                  var Bukrs1=rowdata.Bukrs;
                  var J1bbranc1=rowdata.J1bbranc;
                  var Gstno1=rowdata.Gstno;
                  var Username1=rowdata.Username;
                  var Password1=rowdata.Password;
                  var that = this;
    debugger
                // var oTable = this.byId("useraccessdetails");
                // var Syid1 = oEvent.getSource().getBindingContext().getObject().Syid;
                // var Method1 = oEvent.getSource().getBindingContext().getObject().Method;
                // var Bukrs1 = oEvent.getSource().getBindingContext().getObject().Bukrs;
                // var J1bbranc1 = oEvent.getSource().getBindingContext().getObject().J1bbranc;
                // var Gstno1 = oEvent.getSource().getBindingContext().getObject().Gstno;
                // var Username1 = oEvent.getSource().getBindingContext().getObject().Username;
                // var Password1 = oEvent.getSource().getBindingContext().getObject().Password;
                // var actflag = oEvent.getSource().getBindingContext().getObject().Actflag;
    
                this.oModel.remove("/Es_UserAcessSet(Syid='" + Syid1 + "',Method='" + Method1 + "',Bukrs='" + Bukrs1 + "',J1bbranc='" +
                    J1bbranc1 + "')", {
                        // oModel.update("/UserAcessSet('" + oEntry.Syid1+ + "')", oEntry, {
                        method: "DELETE",
    
                        success: function (oData, oResponse) {
                            debugger
                            // that._oDialog.close();
                            // oTable.getModel().refresh(true);
                            // oTable.getBinding("rows").refresh(true);
                            that.onInit()
                            // that.onclear1();
                            sap.m.MessageToast.show("Deleted Successfully");
                        },
                        error: function (cc, vv) {}
                    });
            }
    
       
        });
    });
