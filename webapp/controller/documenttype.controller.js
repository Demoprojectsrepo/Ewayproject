
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/ui/core/UIComponent"
], function (Controller, History, UIComponent) {
	"use strict";
	var ServiceUrl = "/sap/opu/odata/sap/ZODATA_EINVOICE_SRV/";
	var oModel = new sap.ui.model.odata.ODataModel(ServiceUrl);

	return Controller.extend("einvoiceewaybill.controller.documenttype", {
		onInit: function () {
			debugger
			// var oJSONModel = new sap.ui.model.json.JSONModel();
			// this.getView().setModel(oJSONModel, "jsonofodata");
			// var sUrl = "/sap/opu/odata/sap/ZODATA_EINVOICE_SRV";
			// var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
			// oModel.read("/Es_DocType", {
			// 	success: function (data) {
			// 		oJSONModel.setData({
			// 			Es_DocType: data.results
			// 		});
			// 	}
			// });

			var odata = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/ZODATA_EINVOICE_SRV/");
			var that = this;
			odata.read("/Es_DocTypeSet", {
				success: function (oData, oResponse) {
					debugger
					var jsonnew = oData
					var jsonno = new sap.ui.model.json.JSONModel(jsonnew);
					that.getView().setModel(jsonno, "json_doctype");
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
		onAdd: function () {
			if (!this._addDialogdoctype) {
				this._addDialogdoctype = sap.ui.xmlfragment("einvoiceewaybill.fragment.adddoctype", this);
			}

			this._addDialogdoctype.open();

		},
		// checkbox:function(oEvent){
		// 	var invoiceflag = this.byId("einvoiceflag1").getSelected()

		// 	var waybillflag = this.byId("ewaybillflag1").getSelected()

		// 	var autoflag = this.byId("autoflag1").getSelected()

		// },
		onEdit: function (oEvent) {
			debugger
			if (!this._editDialogdoctype) {
				this._editDialogdoctype = sap.ui.xmlfragment("einvoiceewaybill.fragment.editdoctype", this);
			}

			this._editDialogdoctype.open();

			var spath = oEvent.getSource().getParent().getParent().oBindingContexts.json_doctype.sPath.split("/").pop()
			var rowdata =  this.getView().getModel("json_doctype").getData().results[parseInt(spath)];
			sap.ui.getCore().byId("govdtypdoctype1").setValue(rowdata.GovDtyp);
			sap.ui.getCore().byId("sapdoctyp1").setValue(rowdata.SapDtyp);
			sap.ui.getCore().byId("suptyp1").setValue(rowdata.SupTyp);
			sap.ui.getCore().byId("zmodule1").setValue(rowdata.Zmodule);
			sap.ui.getCore().byId("service1").setValue(rowdata.Service);
			sap.ui.getCore().byId("regrev1").setValue(rowdata.Regrev);
			sap.ui.getCore().byId("igstonintra1").setValue(rowdata.Igstonintra);

			// this.checkbox();
			// if (oEvent.getSource().getBindingContext().getObject().PortalFlag == true) {
			// 	sap.ui.getCore().byId("einvoiceflag1").setSelected(true);
			// } else {
			// 	sap.ui.getCore().byId("einvoiceflag1").setSelected(false);
			// }

			// if (oEvent.getSource().getBindingContext().getObject().EwayBill == true) {
			// 	sap.ui.getCore().byId("ewaybillflag1").setSelected(true);
			// } else {
			// 	sap.ui.getCore().byId("ewaybillflag1").setSelected(false);
			// }

			// if (oEvent.getSource().getBindingContext().getObject().Vf01Flag == true) {
			// 	sap.ui.getCore().byId("autoflag1").setSelected(true);
			// } else {
			// 	sap.ui.getCore().byId("autoflag1").setSelected(false);
			// }

		},
		closedocumenttype: function () {
			this._addDialogdoctype.close();
		},
		closedocumenttype1: function () {
			this._editDialogdoctype.close();
		},
		oncreate: function () {
			debugger
			var oTable = this.byId("document_type");
			var that = this;
			var oEntry = {};

			var e_invoiceflag = sap.ui.getCore().byId("einvoiceflag").getSelected();
			var e_waybillflag = sap.ui.getCore().byId("ewaybillflag").getSelected();
			var PortalFlagflag = sap.ui.getCore().byId("ewaybillflag").getSelected();
			var autoflag = sap.ui.getCore().byId("autoflag").getSelected();
			var GovDocType = sap.ui.getCore().byId("govdtypdoctype").getSelectedKey();
			var SapDocType = sap.ui.getCore().byId("sapdoctyp").getValue();
			// if (e_invoiceflag == true) {
			// 	oEntry.e_invoiceflag = true;
			// } else {
			// 	oEntry.autoflag = false;
			// }
			// if (e_waybillflag == true) {
			// 	oEntry.EwayBill = true;
			// } else {
			// 	oEntry.EwayBill = false;
			// }
			// if (autoflag == true) {
			// 	oEntry.Vf01Flag = true;
			// } else {
			// 	oEntry.Vf01Flag = false;
			// }
			var space = /^\s/;
			if (GovDocType == "" || GovDocType.match(space)) {
				sap.ui.getCore().byId("govdtypdoctype").setValueState("Error");
			} else {
				sap.ui.getCore().byId("govdtypdoctype").setValueState("None");
			}
			if (SapDocType == "" || SapDocType.match(space)) {
				sap.ui.getCore().byId("sapdoctyp").setValueState("Error");
			} else {
				sap.ui.getCore().byId("sapdoctyp").setValueState("None");
			}
			if (GovDocType == "" || GovDocType.match(space) || SapDocType == "" || SapDocType.match(space)) {
				sap.m.MessageToast.show("Space is not allowed");
			} else {
				sap.ui.getCore().byId("sapdoctyp").setValueState("None");
				sap.ui.getCore().byId("govdtypdoctype").setValueState("None");
				oEntry.GovDtyp = GovDocType;
				oEntry.SapDtyp = SapDocType;
				oEntry.SupTyp = sap.ui.getCore().byId("suptyp").getSelectedKey();
				oEntry.Zmodule = sap.ui.getCore().byId("zmodule").getSelectedKey();
				oEntry.Service = sap.ui.getCore().byId("service").getSelectedKey();
				oEntry.Regrev = sap.ui.getCore().byId("regrev").getSelectedKey();
				oEntry.Igstonintra = sap.ui.getCore().byId("igstonintra").getSelectedKey();

				oModel.create("/Es_DocTypeSet", oEntry, {
					method: "POST",

					success: function (oData, oResponse) {
						debugger
						that.onInit();
						oTable.getModel().refresh(true);
						oTable.getBinding("rows").refresh(true);
						that.onclear();
						that._addDialogdoctype.close();
					},
					error: function (cc, vv) {
						debugger
					}
				});
			}
		},
		oncreate1: function () {
			debugger
			var oTable = this.byId("document_type");
			var that = this;
			var oEntry = {};
			// var Ef = sap.ui.getCore().byId("einvoiceflag1").getSelected();
			// if (Ef == true) {
			// 	oEntry.PortalFlag = true;
			// } else {
			// 	oEntry.PortalFlag = false;
			// }

			// var Ewf = sap.ui.getCore().byId("ewaybillflag1").getSelected();
			// if (Ewf == true) {
			// 	oEntry.EwayBill = true;
			// } else {
			// 	oEntry.EwayBill = false;
			// }

			// var Af = sap.ui.getCore().byId("autoflag1").getSelected();
			// if (Af == true) {
			// 	oEntry.Vf01Flag = true;
			// } else {
			// 	oEntry.Vf01Flag = false;
			// }
			var SyId1 = sap.ui.getCore().byId("govdtypdoctype1").getSelectedKey();
			var Method1 = sap.ui.getCore().byId("sapdoctyp1").getValue();
			var Username1 = sap.ui.getCore().byId("suptyp1").getSelectedKey();
			var Password1 = sap.ui.getCore().byId("zmodule1").getSelectedKey();
			var Version1 = sap.ui.getCore().byId("service1").getSelectedKey();
			var VersionJson1 = sap.ui.getCore().byId("regrev1").getSelectedKey();
			var TaxSch1 = sap.ui.getCore().byId("igstonintra1").getSelectedKey();

			oEntry.GovDtyp = SyId1;
			oEntry.SapDtyp = Method1;
			oEntry.SupTyp = Username1;
			oEntry.Zmodule = Password1;
			oEntry.Service = Version1;
			oEntry.Regrev = VersionJson1;
			oEntry.Igstonintra = TaxSch1;

			oModel.update("/Es_DocTypeSet(GovDtyp='" + SyId1 + "',SapDtyp='" + Method1 + "')", oEntry, {
				method: "PUT",

				success: function (oData, oResponse) {
					debugger
					that.onInit()
					that._editDialogdoctype.close();
					that.onclear1();
						// that.onclear1();
						sap.m.MessageToast.show("Edited Successfully");
				},
				error: function (cc, vv) {
					debugger

				}
			});
		},
		onclear: function () {
			sap.ui.getCore().byId("govdtypdoctype").setSelectedKey("");
			sap.ui.getCore().byId("sapdoctyp").setValue("");
			sap.ui.getCore().byId("suptyp").setSelectedKey("");
			sap.ui.getCore().byId("zmodule").setSelectedKey("");
			sap.ui.getCore().byId("service").setSelectedKey("");
			sap.ui.getCore().byId("regrev").setSelectedKey("");
			sap.ui.getCore().byId("igstonintra").setSelectedKey("");

			sap.ui.getCore().byId("einvoiceflag").setSelected(false);
			sap.ui.getCore().byId("ewaybillflag").setSelected(false);
			sap.ui.getCore().byId("autoflag").setSelected(false);
		},
		onclear1: function () {
			/*sap.ui.getCore().byId("govdtypdoctype1").setSelectedKey("");
			sap.ui.getCore().byId("sapdoctyp1").setValue("");*/
			sap.ui.getCore().byId("suptyp1").setSelectedKey("");
			sap.ui.getCore().byId("zmodule1").setSelectedKey("");
			sap.ui.getCore().byId("service1").setSelectedKey("");
			sap.ui.getCore().byId("regrev1").setSelectedKey("");
			sap.ui.getCore().byId("igstonintra1").setSelectedKey("");

			sap.ui.getCore().byId("einvoiceflag1").setSelected(false);
			sap.ui.getCore().byId("ewaybillflag1").setSelected(false);
			sap.ui.getCore().byId("autoflag1").setSelected(false);
		},
		portalDetails: function (oEvent) {
			;

		},
		deletedocumenttype: function (oEvent) {
			debugger
			// var Syid1 = oEvent.getSource().getBindingContext().getObject().GovDtyp;
			// var Method1 = oEvent.getSource().getBindingContext().getObject().SapDtyp;
			
			var spath = oEvent.getSource().getParent().getParent().oBindingContexts.json_doctype.sPath.split("/").pop()
			var rowdata =  this.getView().getModel("json_doctype").getData().results[parseInt(spath)];
			var that = this;
			var oModel = new sap.ui.model.odata.ODataModel(ServiceUrl);
			var oTable = this.byId("document_type");
			var path = oEvent.getSource().getParent().getParent().getParent().oPropagatedProperties.oModels.json_doctype.aBindings[0].sPath
			var SyId1 = rowdata.GovDtyp;
			var Method1 = rowdata.SapDtyp;


			oModel.remove("/Es_DocTypeSet(GovDtyp='" + SyId1 + "',SapDtyp='" + Method1 + "')", {
				method: "DELETE",

				success: function (oData, oResponse) {
					debugger
						that.onInit()
						sap.m.MessageToast.show("Deleted Successfully");
				},
				error: function (cc, vv) {

				}
			});
		},
	});

});