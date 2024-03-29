sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"sap/ui/core/routing/History",
	"sap/ui/core/UIComponent"
], function (Controller, Filter, FilterOperator, History, UIComponent) {
	"use strict";

	return Controller.extend("einvoiceewaybill.controller.einvoicedisplay", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.dink.Einvoice.view.EinvoiceDisplay
		 */
		onInit: function () {
            debugger

            var jsondata = {
                "data": [
                    {
                        DocNo: "01",
                        DocType: "Pdf",
                        DocDate: "12.02.2024",
                        ODNNo: "1 (XXXXXXX1)",
                        InvoiceRefNo: "2021/INV/017",
                        AckNo: "01XYZ001",
                        AckDate: "2024-02-13T11:01:38",
                        ActiveStatus : "Active",
                        CancelDate : "12.02.2024",
                        ErrorCode: "400",
                        ErrorMsg: "Better Luck Next Time!"
                    },
                    {
                        DocNo: "02",
                        DocType: "Pdf",
                        DocDate: "12.02.2024",
                        ODNNo: "1 (XXXXXXX1)",
                        InvoiceRefNo: "2021/INV/017",
                        AckNo: "01XYZ001",
                        AckDate: "2024-02-13T11:01:38",
                        ActiveStatus : "Active",
                        CancelDate : "12.02.2025",
                        ErrorCode: "400",
                        ErrorMsg: "Better Luck Next Time!"
                    },
                    {
                        DocNo: "03",
                        DocType: "Pdf",
                        DocDate: "12.02.2024",
                        ODNNo: "1 (XXXXXXX1)",
                        InvoiceRefNo: "2021/INV/017",
                        AckNo: "01XYZ001",
                        AckDate: "2024-02-13T11:01:38",
                        ActiveStatus : "Active",
                        CancelDate : "12.02.2025",
                        ErrorCode: "400",
                        ErrorMsg: "Better Luck Next Time!"
                    },
                    {
                        DocNo: "04",
                        DocType: "Pdf",
                        DocDate: "12.02.2024",
                        ODNNo: "1 (XXXXXXX1)",
                        InvoiceRefNo: "2021/INV/017",
                        AckNo: "01XYZ001",
                        AckDate: "2024-02-13T11:01:38",
                        ActiveStatus : "Active",
                        CancelDate : "12.02.2025",
                        ErrorCode: "400",
                        ErrorMsg: "Better Luck Next Time!"
                    },
                    {
                        DocNo: "05",
                        DocType: "Pdf",
                        DocDate: "12.02.2024",
                        ODNNo: "1 (XXXXXXX1)",
                        InvoiceRefNo: "2021/INV/017",
                        AckNo: "01XYZ001",
                        AckDate: "2024-02-13T11:01:38",
                        ActiveStatus : "Active",
                        CancelDate : "12.02.2025",
                        ErrorCode: "400",
                        ErrorMsg: "Better Luck Next Time!"
                    },
                    {
                        DocNo: "06",
                        DocType: "Pdf",
                        DocDate: "12.02.2024",
                        ODNNo: "1 (XXXXXXX1)",
                        InvoiceRefNo: "2021/INV/017",
                        AckNo: "01XYZ001",
                        AckDate: "2024-02-13T11:01:38",
                        ActiveStatus : "Active",
                        CancelDate : "12.02.2025",
                        ErrorCode: "400",
                        ErrorMsg: "Better Luck Next Time!"
                    },
                    {
                        DocNo: "07",
                        DocType: "Pdf",
                        DocDate: "12.02.2024",
                        ODNNo: "1 (XXXXXXX1)",
                        InvoiceRefNo: "2021/INV/017",
                        AckNo: "01XYZ001",
                        AckDate: "2024-02-13T11:01:38",
                        ActiveStatus : "Active",
                        CancelDate : "12.02.2025",
                        ErrorCode: "400",
                        ErrorMsg: "Better Luck Next Time!"
                    },
                    {
                        DocNo: "08",
                        DocType: "Pdf",
                        DocDate: "12.02.2024",
                        ODNNo: "1 (XXXXXXX1)",
                        InvoiceRefNo: "2021/INV/017",
                        AckNo: "01XYZ001",
                        AckDate: "2024-02-13T11:01:38",
                        ActiveStatus : "Active",
                        CancelDate : "12.02.2025",
                        ErrorCode: "400",
                        ErrorMsg: "Better Luck Next Time!"
                    },
                    {
                        DocNo: "09",
                        DocType: "Pdf",
                        DocDate: "12.02.2024",
                        ODNNo: "1 (XXXXXXX1)",
                        InvoiceRefNo: "2021/INV/017",
                        AckNo: "01XYZ001",
                        AckDate: "2024-02-13T11:01:38",
                        ActiveStatus : "Active",
                        CancelDate : "12.02.2025",
                        ErrorCode: "400",
                        ErrorMsg: "Better Luck Next Time!"
                    },
                    {
                        DocNo: "10",
                        DocType: "Pdf",
                        DocDate: "12.02.2024",
                        ODNNo: "1 (XXXXXXX1)",
                        InvoiceRefNo: "2021/INV/017",
                        AckNo: "01XYZ001",
                        AckDate: "2024-02-13T11:01:38",
                        ActiveStatus : "Active",
                        CancelDate : "12.02.2025",
                        ErrorCode: "400",
                        ErrorMsg: "Better Luck Next Time!"
                    },
                ]
            }
            var json = new sap.ui.model.json.JSONModel(jsondata)
            this.getView().setModel(json, "maindata")


			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("E-InvoiceDisplay").attachPatternMatched(this._onObjectMatched, this);
		},
		_onObjectMatched: function (oEvent) {
			debugger;
			// var From = oEvent.getParameter("arguments").from;
			// var To = oEvent.getParameter("arguments").to;
			// var DocFrom = oEvent.getParameter("arguments").docFrom;
			// var DocTo = oEvent.getParameter("arguments").docTo;
			// var CompanyCode = oEvent.getParameter("arguments").companyCode;
			// DocFrom = DocFrom.padStart(10, 0);
			// DocTo = DocTo.padStart(10, 0);
			// var aFilter = [];

			// if (From !== "" && To !== "") {
			// 	aFilter.push(new Filter("Fkdat", FilterOperator.BT, From, To));
			// }
			// if (DocFrom !== "" && DocTo !== "" && DocFrom !== "0000000000" && DocTo !== "0000000000") {
			// 	aFilter.push(new Filter("Vbeln", FilterOperator.BT, DocFrom, DocTo));
			// }
			// if (DocFrom !== "" && DocTo !== "" && DocFrom !== "0000000000" && DocTo == "0000000000") {
			// 	aFilter.push(new Filter("Vbeln", FilterOperator.EQ, DocFrom));
			// }
			// if (CompanyCode !== "" && CompanyCode !== "0") {
			// 	aFilter.push(new Filter("Bukrs", FilterOperator.EQ, CompanyCode));
			// }

			// // filter binding
			// var oList = this.byId("cancelEinvoice");
			// var oBinding = oList.getBinding("rows");
			// oBinding.filter(aFilter);
			// // oList.bindItems("/EinvgenSet");
			// /*oList.bindAggregation("items", {
			// 	path: "/EinvgenSet",
			// 	filters: aFilter
			// });*/

			// /*	oList.bindAggregation("items",{path: "/EinvgenSet",filters: aFilter});*/

		},
		onBack: function () {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				oRouter.navTo("E-Invoice");
			}

		},
        DateFormatter:function(oEvent){
            debugger
            var a = new Date(oEvent).toLocaleDateString();
            return a
        }

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf com.dink.Einvoice.view.EinvoiceDisplay
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.dink.Einvoice.view.EinvoiceDisplay
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.dink.Einvoice.view.EinvoiceDisplay
		 */
		//	onExit: function() {
		//
		//	}

	});

});