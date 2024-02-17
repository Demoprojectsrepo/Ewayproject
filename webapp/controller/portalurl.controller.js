sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/ui/core/UIComponent"
], function (Controller, History, UIComponent) {
	"use strict";
	var ServiceUrl = "/sap/opu/odata/sap/ZODATA_EINVOICE_SRV/";
	var oModel = new sap.ui.model.odata.ODataModel(ServiceUrl);

	return Controller.extend("einvoiceewaybill.controller.portalurl", {

		onInit: function () {
			debugger
			var odata = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/ZODATA_EINVOICE_SRV/");
			var that = this;
			odata.read("/Es_PortalUrlSet", {
				success: function (oData, oResponse) {
					debugger
					var jsonnew = oData
					var jsonno = new sap.ui.model.json.JSONModel(jsonnew);
					that.getView().setModel(jsonno, "json_portalurl");
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
            oRouter.navTo("MasterPage");
			// /*	var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			// oRouter.navTo("Create_Compliance_Repository", null, true);*/
			// var oHistory = History.getInstance();
			// var sPreviousHash = oHistory.getPreviousHash();
			// if (sPreviousHash !== undefined) {
			// 	window.history.go(-1);
			// } else {
			// 	var oRouter = UIComponent.getRouterFor(this);
			// 	oRouter.navTo("Master_Page", {}, true);
			// }
		},
		onAdd: function (oEvent) {
			debugger
			if (!this._addDialog2) {
				this._addDialog2 = sap.ui.xmlfragment("einvoiceewaybill.fragment.addportalurl", this);
			}

			this._addDialog2.open();
		},
		onCancel: function () {

			this._addDialog2.close();
		},
		onCancel1: function () {

			this._oDialog3.close();
		},
		oncreate: function () {
debugger
			var oTable = this.byId("portal_url");
			var that = this;
			var oEntry = {};
			// var active = sap.ui.getCore().byId("activedeactive").getSelected();
			// if (active == true) {
			// 	oEntry.Actflag = true;
			// } else {
			// 	oEntry.Actflag = false;
			// }
			var Sysid1 = sap.ui.getCore().byId("sapsystemid").getValue();
			var Method1 = sap.ui.getCore().byId("moprodessporturl").getSelectedKey();
			var Function1 = sap.ui.getCore().byId("function").getValue();
			var Url11 = sap.ui.getCore().byId("url1").getValue();
			var Url21 = sap.ui.getCore().byId("url2").getValue();
			var Url31 = sap.ui.getCore().byId("url3").getValue();
			var Url41 = sap.ui.getCore().byId("url4").getValue();
			var Url51 = sap.ui.getCore().byId("url5").getValue();
			var Url61 = sap.ui.getCore().byId("url6").getValue();
			var Url71 = sap.ui.getCore().byId("url7").getValue();
			var Url81 = sap.ui.getCore().byId("url8").getValue();
			var Url91 = sap.ui.getCore().byId("url9").getValue();
			var Url101 = sap.ui.getCore().byId("url10").getValue();
			var space = /^\s/;
			if (Sysid1 == "" || Sysid1.match(space)) {
				sap.ui.getCore().byId("sapsystemid").setValueState("Error");
			} else {
				sap.ui.getCore().byId("sapsystemid").setValueState("None");
			}
			if (Method1 == "" || Method1.match(space)) {
				sap.ui.getCore().byId("moprodessporturl").setValueState("Error");
			} else {
				sap.ui.getCore().byId("moprodessporturl").setValueState("None");
			}
			if (Function1 == "" || Function1.match(space)) {
				sap.ui.getCore().byId("function").setValueState("Error");
			} else {
				sap.ui.getCore().byId("function").setValueState("None");

			}
			if (Sysid1 == "" || Sysid1.match(space) || Method1 == "" || Method1.match(space) || Function1 == "" || Function1.match(space)) {
				sap.m.MessageToast.show("Space is not allowed");
			} else {
				sap.ui.getCore().byId("sapsystemid").setValueState("None");
				sap.ui.getCore().byId("moprodessporturl").setValueState("None");
				sap.ui.getCore().byId("function").setValueState("None");

				oEntry.Sysid = Sysid1;
				oEntry.Method = Method1;
				oEntry.Function = Function1;
				oEntry.Url1 = Url11;
				oEntry.Url2 = Url21;
				oEntry.Url3 = Url31;
				oEntry.Url4 = Url41;
				oEntry.Url5 = Url51;
				oEntry.Url6 = Url61;
				oEntry.Url7 = Url71;
				oEntry.Url8 = Url81;
				oEntry.Url9 = Url91;
				oEntry.Url10 = Url101;

				oModel.create("/Es_PortalUrlSet", oEntry, {
					method: "POST",

					success: function (oData, oResponse) {
						debugger
						that.onInit();
						oTable.getModel().refresh(true);
						oTable.getBinding("rows").refresh(true);
						that.onclear();
						that._addDialog2.close();
					},
					error: function (cc, vv) {
						debugger

					}
				});
			}
		},
		oncreate1: function () {
			debugger
			var oTable = this.byId("portal_url");
			var that = this;
			var oEntry = {};
			// var active = sap.ui.getCore().byId("activedeactive1").getSelected();
			// if (active == true) {
			// 	oEntry.Actflag = "X";
			// } else {
			// 	oEntry.Actflag = " ";
			// }
			var SyId1 = sap.ui.getCore().byId("sapsystemid1").getValue();
			var Method1 = sap.ui.getCore().byId("moprodessporturl1").getSelectedKey();
			var Function11 = sap.ui.getCore().byId("function1").getValue();
			var Url11 = sap.ui.getCore().byId("url11").getValue();
			var Url22 = sap.ui.getCore().byId("url21").getValue();
			var Url33 = sap.ui.getCore().byId("url31").getValue();
			var Url44 = sap.ui.getCore().byId("url41").getValue();
			var Url55 = sap.ui.getCore().byId("url51").getValue();
			var Url66 = sap.ui.getCore().byId("url61").getValue();
			var Url77 = sap.ui.getCore().byId("url71").getValue();
			var Url88 = sap.ui.getCore().byId("url81").getValue();
			var Url99 = sap.ui.getCore().byId("url91").getValue();
			var Url100 = sap.ui.getCore().byId("url101").getValue();

			oEntry.Sysid = SyId1;
			oEntry.Method = Method1;
			oEntry.Function = Function11;
			oEntry.Url1 = Url11;
			oEntry.Url2 = Url22;
			oEntry.Url3 = Url33;
			oEntry.Url4 = Url44;
			oEntry.Url5 = Url55;
			oEntry.Url6 = Url66;
			oEntry.Url7 = Url77;
			oEntry.Url8 = Url88;
			oEntry.Url9 = Url99;
			oEntry.Url10 = Url100;

			oModel.update("/Es_PortalUrlSet(Sysid='" + SyId1 + "',Method='" + Method1 + "',Function='" + Function11 + "')", oEntry, {
				method: "PUT",

				success: function (oData, oResponse) {
					debugger
					that.onInit();
					that._oDialog3.close();
					oTable.getModel().refresh(true);
					oTable.getBinding("rows").refresh(true);
					that.onclear1();
				},
				error: function (cc, vv) {

				}
			});
		},
		onclear: function () {

			sap.ui.getCore().byId("activedeactive").setSelected(false);
			sap.ui.getCore().byId("sapsystemid").setValue("");
			sap.ui.getCore().byId("moprodessporturl").setSelectedKey("");
			sap.ui.getCore().byId("function").setValue("");
			sap.ui.getCore().byId("url1").setValue("");
			sap.ui.getCore().byId("url2").setValue("");
			sap.ui.getCore().byId("url3").setValue("");
			sap.ui.getCore().byId("url4").setValue("");
			sap.ui.getCore().byId("url5").setValue("");
			sap.ui.getCore().byId("url6").setValue("");
			sap.ui.getCore().byId("url7").setValue("");
			sap.ui.getCore().byId("url8").setValue("");
			sap.ui.getCore().byId("url9").setValue("");
			sap.ui.getCore().byId("url10").setValue("");

		},
		onclear1: function () {

			sap.ui.getCore().byId("activedeactive1").setSelected(false);
			/*sap.ui.getCore().byId("sapsystemid1").setValue("");
			sap.ui.getCore().byId("moprodessporturl1").setSelectedKey("");
			sap.ui.getCore().byId("function1").setValue("");*/
			sap.ui.getCore().byId("url11").setValue("");
			sap.ui.getCore().byId("url21").setValue("");
			sap.ui.getCore().byId("url31").setValue("");
			sap.ui.getCore().byId("url41").setValue("");
			sap.ui.getCore().byId("url51").setValue("");
			sap.ui.getCore().byId("url61").setValue("");
			sap.ui.getCore().byId("url71").setValue("");
			sap.ui.getCore().byId("url81").setValue("");
			sap.ui.getCore().byId("url91").setValue("");
			sap.ui.getCore().byId("url101").setValue("");

		},
		onEdit: function (oEvent) {
			debugger

			if (!this._oDialog3) {
				this._oDialog3 = sap.ui.xmlfragment("einvoiceewaybill.fragment.editportalurl", this);

			}
			this._oDialog3.open();

			var oTable = this.byId("portal_url");
			var spath = oEvent.getSource().getParent().getParent().oBindingContexts.json_portalurl.sPath.split("/").pop()
			var rowdata =  this.getView().getModel("json_portalurl").getData().results[parseInt(spath)];
			sap.ui.getCore().byId("sapsystemid1").setValue(rowdata.Sysid);
			sap.ui.getCore().byId("moprodessporturl1").setSelectedKey(rowdata.Method);
			sap.ui.getCore().byId("function1").setValue(rowdata.Function);
			sap.ui.getCore().byId("url11").setValue(rowdata.Url1);
			sap.ui.getCore().byId("url21").setValue(rowdata.Url2);
			sap.ui.getCore().byId("url31").setValue(rowdata.Url3);
			sap.ui.getCore().byId("url41").setValue(rowdata.Url4);
			sap.ui.getCore().byId("url51").setValue(rowdata.Url5);
			sap.ui.getCore().byId("url61").setValue(rowdata.Url6);
			sap.ui.getCore().byId("url71").setValue(rowdata.Url7);
			sap.ui.getCore().byId("url81").setValue(rowdata.Url8);
			sap.ui.getCore().byId("url91").setValue(rowdata.Url9);
			sap.ui.getCore().byId("url101").setValue(rowdata.Url10);

			// var oTable = this.byId("portal_url");
			// var selectedRow = oTable.getSelectedIndex();
			// var dataContext = oTable.getBinding("rows").getContexts();

			// sap.ui.getCore().byId("sapsystemid1").setValue(oEvent.getSource().getBindingContext().getObject().Sysid);
			// sap.ui.getCore().byId("moprodessporturl1").setSelectedKey(oEvent.getSource().getBindingContext().getObject().Method);
			// sap.ui.getCore().byId("function1").setValue(oEvent.getSource().getBindingContext().getObject().Function);
			// sap.ui.getCore().byId("url11").setValue(oEvent.getSource().getBindingContext().getObject().Url1);
			// sap.ui.getCore().byId("url21").setValue(oEvent.getSource().getBindingContext().getObject().Url2);
			// sap.ui.getCore().byId("url31").setValue(oEvent.getSource().getBindingContext().getObject().Url3);
			// sap.ui.getCore().byId("url41").setValue(oEvent.getSource().getBindingContext().getObject().Url4);
			// sap.ui.getCore().byId("url51").setValue(oEvent.getSource().getBindingContext().getObject().Url5);
			// sap.ui.getCore().byId("url61").setValue(oEvent.getSource().getBindingContext().getObject().Url6);
			// sap.ui.getCore().byId("url71").setValue(oEvent.getSource().getBindingContext().getObject().Url7);
			// sap.ui.getCore().byId("url81").setValue(oEvent.getSource().getBindingContext().getObject().Url8);
			// sap.ui.getCore().byId("url91").setValue(oEvent.getSource().getBindingContext().getObject().Url9);
			// sap.ui.getCore().byId("url101").setValue(oEvent.getSource().getBindingContext().getObject().Url10);
			// if (oEvent.getSource().getBindingContext().getObject().Actflag == "X") {
			// 	sap.ui.getCore().byId("activedeactive1").setSelected(true);
			// } else {
			// 	sap.ui.getCore().byId("activedeactive1").setSelected(false);
			// }

		},
		deleteportalurl: function (oEvent) {
debugger
			// var oTable = this.byId("portal_url");
			// var Syid1 = oEvent.getSource().getBindingContext().getObject().Sysid;
			// var Method1 = oEvent.getSource().getBindingContext().getObject().Method;
			// var Function11 = oEvent.getSource().getBindingContext().getObject().Function;


			var spath = oEvent.getSource().getParent().getParent().oBindingContexts.json_portalurl.sPath.split("/").pop()
			var rowdata =  this.getView().getModel("json_portalurl").getData().results[parseInt(spath)];
			var that = this;
			var oTable = this.byId("portal_url");
			var path = oEvent.getSource().getParent().getParent().getParent().oPropagatedProperties.oModels.json_portalurl.aBindings[0].sPath
			var SyId1 = rowdata.Sysid;
			var Method1 = rowdata.Method;
			var Function = rowdata.Function;

			oModel.remove("/Es_PortalUrlSet(Sysid='" + SyId1 + "',Method='" + Method1 + "',Function='" + Function + "')", {
				method: "DELETE",

				success: function (oData, oResponse) {
					debugger
					that.onInit();
					//	that._oDialog3.close();
					oTable.getModel().refresh(true);
					oTable.getBinding("rows").refresh(true);
					//that.onclear1();
					sap.m.MessageToast.show("Deleted Successfully");
				},
				error: function (cc, vv) {
					debugger

				}
			});
		},
	});

});