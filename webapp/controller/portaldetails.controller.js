sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/ui/core/UIComponent"
], function (Controller, History, UIComponent) {
	"use strict";
	var ServiceUrl = "/sap/opu/odata/sap/ZODATA_EINVOICE_SRV/";
	var oModel = new sap.ui.model.odata.ODataModel(ServiceUrl);
	var oDialog;
	return Controller.extend("einvoiceewaybill.controller.portaldetails", {

		onInit: function () {
            debugger
			this.mainodata = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/ZODATA_EINVOICE_SRV/");
			var odata = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/ZODATA_EINVOICE_SRV/");
			var that = this;
			odata.read("/Es_PortalDetailsSet", {
				success: function (oData, oResponse) {
					debugger
					var jsonnew = oData
					var jsonno = new sap.ui.model.json.JSONModel(jsonnew);
					that.getView().setModel(jsonno, "json_portaldetails");
					sap.m.MessageToast.show("OData Was Readed");
				},
				error: function (oError) {
					sap.m.MessageBox.error("Error");
				}

			});

		},
		onBack: function () {
                debugger
                var oRouter = this.getOwnerComponent().getRouter();
			    oRouter.navTo("RouteView1");
		},
		onAdd: function (oEvent) {

			if (!this._addDialog) {
				this._addDialog = sap.ui.xmlfragment("einvoiceewaybill.fragment.addportaldetails", this);

				// this._oDialog.setModel(this.getView().getModel());
			}
			this._addDialog.open();

		},
		onEdit: function (oEvent) {

			if (!oDialog) {
				oDialog = sap.ui.xmlfragment("einvoiceewaybill.fragment.editportaldetails", this);
			}
			oDialog.open();

			debugger			
			var spath = oEvent.getSource().getParent().getParent().oBindingContexts.json_portaldetails.sPath.split("/").pop()
			var rowdata =  this.getView().getModel("json_portaldetails").getData().results[parseInt(spath)];
			sap.ui.getCore().byId("sapsystemidport1").setValue(rowdata.Syid);
			sap.ui.getCore().byId("modeofprocess1").setSelectedKey(rowdata.Method);
			sap.ui.getCore().byId("aspuserid1").setValue(rowdata.Username);
			sap.ui.getCore().byId("asppass1").setValue(rowdata.Password);
			sap.ui.getCore().byId("portalversion1").setValue(rowdata.Version);
			sap.ui.getCore().byId("payload1").setValue(rowdata.VersionJson);
			sap.ui.getCore().byId("taxschema1").setValu1e(rowdata.TaxSch);


			if (oEvent.getSource().getBindingContext().getObject().Actflag == "X") {
				sap.ui.getCore().byId("activedeactiveportdet1").setSelected(true);
			} else {
				sap.ui.getCore().byId("activedeactiveportdet1").setSelected(false);
			}

		},
		onCancel: function () {
			this._addDialog.close();
		},
		onCancel1: function () {
			oDialog.close();
		},
		oncreate: function () {
			debugger
			var oTable = this.byId("portalDetails");
			var that = this;
			var oEntry = {};
			var active = sap.ui.getCore().byId("activedeactiveportdet").getSelected();
			if (active == true) {
				oEntry.Actflag = "X";
			} else {
				oEntry.Actflag = "false";
			}
			var Syid1 = sap.ui.getCore().byId("sapsystemidport").getValue();
			var Method1 = sap.ui.getCore().byId("modeofprocess").getSelectedKey();
			var Username1 = sap.ui.getCore().byId("aspuserid").getValue();
			var Password1 = sap.ui.getCore().byId("asppass").getValue();
			var Version1 = sap.ui.getCore().byId("portalversion").getValue();
			var VersionJson1 = sap.ui.getCore().byId("payload").getValue();
			var TaxSch1 = sap.ui.getCore().byId("taxschema").getValue();
			var space = /^\s/;
			if (Syid1 == "" || Syid1.match(space)) {
				sap.ui.getCore().byId("sapsystemidport").setValueState("Error");
			} else {
				sap.ui.getCore().byId("sapsystemidport").setValueState("None");
			}
			if (Method1 == "" || Method1.match(space)) {
				sap.ui.getCore().byId("modeofprocess").setValueState("Error");
			} else {
				sap.ui.getCore().byId("modeofprocess").setValueState("None");
			}
			if (Username1 == "" || Username1.match(space)) {
				sap.ui.getCore().byId("aspuserid").setValueState("Error");
			} else {
				sap.ui.getCore().byId("aspuserid").setValueState("None");
			}
			if (Password1 == "" || Password1.match(space)) {
				sap.ui.getCore().byId("asppass").setValueState("Error");
			} else {
				sap.ui.getCore().byId("asppass").setValueState("None");
			}
			if (Syid1 == "" || Syid1.match(space) || Method1 == "" || Method1.match(space) || Username1 == "" || Username1.match(space) ||
				Password1 == "" || Password1.match(space)) {
				sap.m.MessageToast.show("Space is not allowed");
			} else {
				sap.ui.getCore().byId("sapsystemidport").setValueState("None");
				sap.ui.getCore().byId("modeofprocess").setValueState("None");
				sap.ui.getCore().byId("aspuserid").setValueState("None");
				sap.ui.getCore().byId("asppass").setValueState("None");
				oEntry.Syid = Syid1;
				oEntry.Method = Method1;
				oEntry.Username = Username1;
				oEntry.Password = Password1;
				oEntry.Version = Version1;
				oEntry.VersionJson = VersionJson1;
				oEntry.TaxSch = TaxSch1;

				oModel.create("/Es_PortalDetailsSet", oEntry, {
					method: "POST",

					success: function (oData, oResponse) {
						debugger
						that.onInit();
						that._addDialog.close();
						oTable.getModel().refresh(true);
						oTable.getBinding("rows").refresh(true);
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

			var oTable = this.byId("portalDetails");
			var that = this;
			var oEntry = {};
			var active = sap.ui.getCore().byId("activedeactiveportdet1").getSelected();
			if (active == true) {
				oEntry.Actflag = "X";
			} else {
				oEntry.Actflag = false;
			}
			var SyId1 = sap.ui.getCore().byId("sapsystemidport1").getValue();
			var Method1 = sap.ui.getCore().byId("modeofprocess1").getSelectedKey();
			var Username1 = sap.ui.getCore().byId("aspuserid1").getValue();
			var Password1 = sap.ui.getCore().byId("asppass1").getValue();
			var Version1 = sap.ui.getCore().byId("portalversion1").getValue();
			var VersionJson1 = sap.ui.getCore().byId("payload1").getValue();
			var TaxSch1 = sap.ui.getCore().byId("taxschema1").getValue();

			oEntry.Syid = SyId1;
			oEntry.Method = Method1;
			oEntry.Username = Username1;
			oEntry.Password = Password1;
			oEntry.Version = Version1;
			oEntry.VersionJson = VersionJson1;
			oEntry.TaxSch = TaxSch1;

			oModel.update("/Es_PortalDetailsSet(Syid='" + SyId1 + "',Method='" + Method1 + "',Username='" + Username1 + "',Password='" +
				Password1 + "')", oEntry, {
					method: "PUT",

					success: function (oData, oResponse) {
						oDialog.close();
						that.onInit();
						that.onclear1();
					},
					error: function (cc, vv) {

					}
				});
		},
		Deleteportaldetails: function (oEvent) {
			debugger
				// var oEntry = {};
			var spath = oEvent.getSource().getParent().getParent().oBindingContexts.json_portaldetails.sPath.split("/").pop()
			var rowdata =  this.getView().getModel("json_portaldetails").getData().results[parseInt(spath)];
			var that = this;
			var oModel = new sap.ui.model.odata.ODataModel(ServiceUrl);
			var oTable = this.byId("portalDetails");
			var path = oEvent.getSource().getParent().getParent().getParent().oPropagatedProperties.oModels.json_portaldetails.aBindings[0].sPath
			var SyId1 = rowdata.Syid;
			var Method1 = rowdata.Method;
			var Username1 = rowdata.Username;
			var Password1 = rowdata.Password;
			var Version1 = rowdata.Version;
			var VersionJson1 = rowdata.VersionJson;
			var TaxSch1 = rowdata.TaxSch;
			var actflag = rowdata.Actflag;

			this.mainodata.remove("/Es_PortalDetailsSet(Syid='" + SyId1 + "',Method='" + Method1 + "',Username='" + Username1 + "',Password='" +
				Password1 + "')", {
					method: "DELETE",

					success: function (oData, oResponse) {
						debugger
						that.onInit();
						// that.onclear1();
						sap.m.MessageToast.show("Deleted Successfully");
					},
					error: function (cc, vv) {
						console.log(error);

					}
				});
		},
		onclear: function () {
			sap.ui.getCore().byId("activedeactiveportdet").setSelected(false);
			sap.ui.getCore().byId("sapsystemidport").setValue("");
			sap.ui.getCore().byId("modeofprocess").setValue("");
			sap.ui.getCore().byId("aspuserid").setValue("");
			sap.ui.getCore().byId("asppass").setValue("");
			sap.ui.getCore().byId("portalversion").setValue("");
			sap.ui.getCore().byId("payload").setValue("");
			sap.ui.getCore().byId("taxschema").setValue("");

		},
		onclear1: function () {
			sap.ui.getCore().byId("activedeactiveportdet1").setSelected(false);
			/*		sap.ui.getCore().byId("sapsystemidport1").setValue("");
					sap.ui.getCore().byId("modeofprocess1").setValue("");
					sap.ui.getCore().byId("aspuserid1").setValue("");
					sap.ui.getCore().byId("asppass1").setValue("");*/
			sap.ui.getCore().byId("portalversion1").setValue("");
			sap.ui.getCore().byId("payload1").setValue("");
			sap.ui.getCore().byId("taxschema1").setValue("");

		},
		portalDetails: function (oEvent) {

		}
	});

});

// sap.ui.define([
// 	"sap/ui/core/mvc/Controller",
// 	"sap/ui/core/routing/History",
// 	"sap/ui/core/UIComponent"
// ], function (Controller, History, UIComponent) {
// 	"use strict";
// 	var ServiceUrl = "/sap/opu/odata/SAP/ZEINVOICE_SRV/";
// 	var oModel = new sap.ui.model.odata.ODataModel(ServiceUrl);

// 	return Controller.extend("com.dink.Einvoice.controller.Portal_Details", {

// 		/**
// 		 * Called when a controller is instantiated and its View controls (if available) are already created.
// 		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
// 		 * @memberOf com.dink.Einvoice.view.Portal_Details
// 		 */
// 		onInit: function () {

// 		},
// 		onBack: function () {
// 			/*	var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
// 			oRouter.navTo("Create_Compliance_Repository", null, true);*/
// 			var oHistory = History.getInstance();
// 			var sPreviousHash = oHistory.getPreviousHash();
// 			if (sPreviousHash !== undefined) {
// 				window.history.go(-1);
// 			} else {
// 				var oRouter = UIComponent.getRouterFor(this);
// 				oRouter.navTo("Master_Page", {}, true);
// 			}
// 		},
// 		onAdd: function (oEvent) {

// 			if (!this._oDialog) {
// 				this._oDialog = sap.ui.xmlfragment("com.dink.Einvoice.fragment.Addportaldetails", this);

// 				this._oDialog.setModel(this.getView().getModel());
// 			}
// 			this._oDialog.open();

// 		},
// 		onEdit : function (oEvent) {

// 			if (!this._oDialog) {
// 				this._oDialog = sap.ui.xmlfragment("com.dink.Einvoice.fragment.Editportaldetails", this);

// 				this._oDialog.setModel(this.getView().getModel());
// 			}
// 			this._oDialog.open();

// 		},
// 		onCancel: function () {
// 			this._oDialog.close();
// 		},
// 		oncreate: function () {
// 		
// 			var oTable = this.byId("portalDetails");
// 			var that = this;
// 			var oEntry = {};
// 			var active = sap.ui.getCore().byId("activedeactive").getSelected();
// 			if (active == true) {
// 				oEntry.Actflag = "X";
// 			} else {
// 				oEntry.Actflag = " ";
// 			}
// 			oEntry.Syid = sap.ui.getCore().byId("sapsystemid").getValue();
// 			oEntry.Method = sap.ui.getCore().byId("modeofprocess").getValue();
// 			oEntry.Username = sap.ui.getCore().byId("aspuserid").getValue();
// 			oEntry.Password = sap.ui.getCore().byId("asppass").getValue();
// 			oEntry.Version = sap.ui.getCore().byId("portalversion").getValue();
// 			oEntry.VersionJson = sap.ui.getCore().byId("payload").getValue();
// 			oEntry.TaxSch = sap.ui.getCore().byId("taxschema").getValue();

// 			oModel.create("/Portal_detailsSet", oEntry, {
// 				method: "POST",

// 				success: function (oData, oResponse) {
// 					that._oDialog.close();
// 					oTable.getModel().refresh(true);
// 					oTable.getBinding("items").refresh(true);
//                      that.onclear();
// 				},
// 				error: function (cc, vv) {

// 				}
// 			});
// 		},
// 		oncreate1: function () {
// 		
// 			var oTable = this.byId("Editportaldetails");
// 			var that = this;
// 			var oEntry = {};
// 			var active = sap.ui.getCore().byId("activedeactive").getSelected();
// 			if (active == true) {
// 				oEntry.Actflag = "X";
// 			} else {
// 				oEntry.Actflag = " ";
// 			}
// 			oEntry.Syid = sap.ui.getCore().byId("sapsystemid").getValue();
// 			oEntry.Method = sap.ui.getCore().byId("modeofprocess").getValue();
// 			oEntry.Username = sap.ui.getCore().byId("aspuserid").getValue();
// 			oEntry.Password = sap.ui.getCore().byId("asppass").getValue();
// 			oEntry.Version = sap.ui.getCore().byId("portalversion").getValue();
// 			oEntry.VersionJson = sap.ui.getCore().byId("payload").getValue();
// 			oEntry.TaxSch = sap.ui.getCore().byId("taxschema").getValue();

// 			oModel.create("/Portal_detailsSet", oEntry, {
// 				method: "POST",

// 				success: function (oData, oResponse) {
// 					that._oDialog.close();
// 					oTable.getModel().refresh(true);
// 					oTable.getBinding("items").refresh(true);
//                      that.onclear();
// 				},
// 				error: function (cc, vv) {

// 				}
// 			});
// 		},
// 		onclear: function () {
// 			sap.ui.getCore().byId("activedeactive").setSelected(false);
// 			sap.ui.getCore().byId("sapsystemid").setValue("");
// 			sap.ui.getCore().byId("modeofprocess").setValue("");
// 			sap.ui.getCore().byId("aspuserid").setValue("");
// 			sap.ui.getCore().byId("asppass").setValue("");
// 			sap.ui.getCore().byId("portalversion").setValue("");
// 			sap.ui.getCore().byId("payload").setValue("");
// 			sap.ui.getCore().byId("taxschema").setValue("");

// 		}
// 	});

// });