sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/core/routing/History",
    "sap/ui/core/UIComponent"
], function (Controller, Filter, FilterOperator, History, UIComponent) {
    "use strict";

    return Controller.extend("einvoiceewaybill.controller.einvoicegen", {

        /**
        * Called when a controller is instantiated and its View controls (if available) are already created.
        * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
        * @memberOf Eway_Bill.Eway_Bill.view.GenerateEinvoice
        */
        onInit: function () {
            debugger
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.getRoute("E-InvoiceGen").attachPatternMatched(this._onObjectMatched, this);

            var jsondata = {
                "data": [
                    {
                        DocNo: "01",
                        DocType: "Pdf",
                        DocDate: "12.02.2024",
                        UserName: "Zaid",
                        Payer: "Daffodils",
                        ODNNo: "1 (XXXXXXX1)",
                        CompanyCode: "Dink",
                        BusinessPlace: "Ahmedabad, IN",
                        Currency: "INR",
                        Plant: "company",
                        ShowMore: "...."
                    },
                    {
                        DocNo: "02",
                        DocType: "Pdf",
                        DocDate: "12.02.2024",
                        UserName: "Ahmed",
                        Payer: "KPMG",
                        ODNNo: "1 (XXXXXXX1)",
                        CompanyCode: "KPMG",
                        BusinessPlace: "Ahmedabad, IN",
                        Currency: "INR",
                        Plant: "company",
                        ShowMore: "...."
                    },
                    {
                        DocNo: "03",
                        DocType: "Pdf",
                        DocDate: "12.02.2024",
                        UserName: "Pritesh",
                        Payer: "Daffodils",
                        ODNNo: "1 (XXXXXXX1)",
                        CompanyCode: "Dink",
                        BusinessPlace: "Ahmedabad, IN",
                        Currency: "INR",
                        Plant: "company",
                        ShowMore: "...."
                    },
                    {
                        DocNo: "04",
                        DocType: "Pdf",
                        DocDate: "12.02.2024",
                        UserName: "Nimesh",
                        Payer: "KPMG",
                        ODNNo: "1 (XXXXXXX1)",
                        CompanyCode: "KPMG",
                        BusinessPlace: "Ahmedabad, IN",
                        Currency: "INR",
                        Plant: "company",
                        ShowMore: "...."
                    },
                    {
                        DocNo: "05",
                        DocType: "Pdf",
                        DocDate: "12.02.2024",
                        UserName: "Dev",
                        Payer: "Daffodils",
                        ODNNo: "1 (XXXXXXX1)",
                        CompanyCode: "Dink",
                        BusinessPlace: "Ahmedabad, IN",
                        Currency: "INR",
                        Plant: "company",
                        ShowMore: "...."
                    },
                    {
                        DocNo: "06",
                        DocType: "Pdf",
                        DocDate: "12.02.2024",
                        UserName: "Archit",
                        Payer: "KPMG",
                        ODNNo: "1 (XXXXXXX1)",
                        CompanyCode: "KPMG",
                        BusinessPlace: "Ahmedabad, IN",
                        Currency: "INR",
                        Plant: "company",
                        ShowMore: "...."
                    },
                    {
                        DocNo: "07",
                        DocType: "Pdf",
                        DocDate: "12.02.2024",
                        UserName: "Sanjay",
                        Payer: "Daffodils",
                        ODNNo: "1 (XXXXXXX1)",
                        CompanyCode: "Dink",
                        BusinessPlace: "Ahmedabad, IN",
                        Currency: "INR",
                        Plant: "company",
                        ShowMore: "...."
                    },
                    {
                        DocNo: "08",
                        DocType: "Pdf",
                        DocDate: "12.02.2024",
                        UserName: "Rakesh",
                        Payer: "KPMG",
                        ODNNo: "1 (XXXXXXX1)",
                        CompanyCode: "KPMG",
                        BusinessPlace: "Ahmedabad, IN",
                        Currency: "INR",
                        Plant: "company",
                        ShowMore: "...."
                    },
                    {
                        DocNo: "09",
                        DocType: "Pdf",
                        DocDate: "12.02.2024",
                        UserName: "Reshma",
                        Payer: "Daffodils",
                        ODNNo: "1 (XXXXXXX1)",
                        CompanyCode: "Dink",
                        BusinessPlace: "Ahmedabad, IN",
                        Currency: "INR",
                        Plant: "company",
                        ShowMore: "...."
                    },
                    {
                        DocNo: "10",
                        DocType: "Pdf",
                        DocDate: "12.02.2024",
                        UserName: "Khushboo",
                        Payer: "KPMG",
                        ODNNo: "1 (XXXXXXX1)",
                        CompanyCode: "KPMG",
                        BusinessPlace: "Ahmedabad, IN",
                        Currency: "INR",
                        Plant: "company",
                        ShowMore: "...."
                    },
                ]
            }
            var json = new sap.ui.model.json.JSONModel(jsondata)
            this.getView().setModel(json, "maindata")

        },
        _onObjectMatched: function (oEvent) {
            debugger

            // var DocFrom = oEvent.getParameter("arguments").docFrom;
            // var DocTo = oEvent.getParameter("arguments").docTo;

            // var DateFrom = oEvent.getParameter("arguments").from
            // var DateTo = oEvent.getParameter("arguments").to

            // // DocFrom = DocFrom.padStart(10, 0);
            // // DocTo = DocTo.padStart(10, 0);
            // var aFilter = [];
            // debugger;

            var CompanyCode = oEvent.getParameter("arguments").companyCode;

            var CompanyCode = oEvent.getParameter("arguments").companyCode;
            var ofilter = new Filter("CompanyCode", FilterOperator.Contains, CompanyCode);
            var filterr = this.byId("generateEinvoice").getBinding("rows").filter(ofilter)
            console.log(filterr);



            if (filterr.oCombinedFilter.oValue1 === "" || filterr.oCombinedFilter.oValue1 === undefined) {
                alert("OKK")
            }



            // var datalenght = this.getView().getModel("maindata").getData().data.length
            // var arr = [];
            // for(var i=0; i<datalenght; i++){
            //     var Ddate = this.getView().getModel("maindata").getData().data[i].DocDate
            //     var Dno = this.getView().getModel("maindata").getData().data[i].DocNo
            //     var Ccode = this.getView().getModel("maindata").getData().data[i].CompanyCode
            //     var obj = {Ddate, Dno, Ccode}
            //     arr.push(obj)
            // }

            // var length = arr.length;
            // var CompCode = []
            // for(var j=0; j<length; j++){
            //     var code = arr[j].Ccode
            //     CompCode.push(code);
            // }

            // var CompanyCode = oEvent.getParameter("arguments").companyCode;
            // var ofilter = new Filter ("CompanyCode", FilterOperator.Contains, CompanyCode);
            // var filterr = CompCode.filter(ofilter, FilterType.Application)
            // console.log(filterr);

            // if (DateFrom !== "" && DateTo !== "" && DateFrom !== "0000-00-00T00:00:00" && DateTo !== "0000-00-00T00:00:00") {
            //     aFilter.push(new Filter("DocDate", FilterOperator.Contains, DateFrom, DateTo));
            // }
            // if (DocFrom !== "" && DocTo !== "" && DocFrom !== "0000000000" && DocTo !== "0000000000") {
            //     aFilter.push(new Filter("DocNo", FilterOperator.Contains, DocFrom, DocTo));
            // }
            // if (DocFrom !== "" && DocTo !== "" && DocFrom !== "0000000000" && DocTo == "0000000000") {
            //     aFilter.push(new Filter("DocNo", FilterOperator.Contains, DocFrom));
            // }
            // if (CompanyCode !== "" && CompanyCode !== "0") {
            //     aFilter.push(new Filter("CompanyCode", FilterOperator.Contains, CompanyCode));
            // }

            // // filter binding
            // var oList = this.byId("generateEinvoice");
            // var oBinding = oList.getBinding("rows").oList;
            // oBinding.filter(aFilter);
            // // oList.bindItems("/EinvgenSet");
            // /*oList.bindAggregation("items", {
            // path: "/EinvgenSet",
            // filters: aFilter
            // });*/

            // /* oList.bindAggregation("items",{path: "/EinvgenSet",filters: aFilter});*/

        },
        onDocumentNoPress: function (oEvent) {

            var documentno = oEvent.oSource.mProperties.text;

            if (documentno.length < 10) {

                documentno = documentno.padStart(10, 0);
            }

            var otable = this.byId("documentitem");
            /* otable.bindAggregation("items", {
            path: "/EinvgenSet('"+documentno+"')/NavFromEinvgenToEinvgen_item"
            
            });*/
            otable.bindRows("/EinvgenSet('" + documentno + "')/NavFromEinvgenToEinvgen_item");

            otable.setVisible(true);
            var oList1 = this.byId("generateEinvoice1");
            oList1.setVisible(false);

        },
        onPressGenerate: function (oEvent) {
            debugger
            var selrow_data = []
            var finalarr = []
            var index = this.getView().byId("generateEinvoice")
            var data = index.getSelectedIndices()
            for (var i = 0; i<data.length; i++) {
                var dat = data[i]
                    // var rowindex = this.getView().byId("generateEinvoice").mBindingInfos.rows.binding.aIndices[dat];
                    // selrow_data.push(rowindex)
                    selrow_data.push(this.getView().byId("generateEinvoice").mBindingInfos.rows.binding.aIndices[dat]);
            }
            for (var i1 = 0; i1 < selrow_data.length; i1++) {
                var obj = this.getView().getModel("maindata").getData().data[selrow_data[i1]]
                finalarr.push(obj);
            }
            // console.log(selrow_data);

            var newjson = {
                    finalarr
            }
            var jsondata = new sap.ui.model.json.JSONModel(newjson);
            this.getView().setModel(jsondata, "newdata");

            this.byId("panel2").setVisible(true);
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
        onShowMore: function (oEvent) {
            if (!this._oDialogShow) {
                this._oDialogShow = sap.ui.xmlfragment("com.dink.Einvoice.Fragments.ShowMore", this);

                this._oDialogShow.setModel(this.getView().getModel());
            }
            this._oDialogShow.open();

            var documentno = oEvent.getSource().getBindingContext().getObject().Vbeln;

            if (documentno.length < 10) {

                documentno = documentno.padStart(10, 0);
            }

            var otable = sap.ui.getCore().byId("documentitem");
            /* otable.bindAggregation("items", {
            path: "/EinvgenSet('"+documentno+"')/NavFromEinvgenToEinvgen_item"
            
            });*/
            otable.bindRows("/EinvgenSet('" + documentno + "')/NavFromEinvgenToEinvgen_item");

            otable.setVisible(true);
            var oList1 = this.byId("generateEinvoice1");
            oList1.setVisible(false);

        },
        onclose: function (oEvent) {
            this._oDialogShow.close();
        },
        DateFormatter: function (oEvent) {
            debugger
            var a = new Date(oEvent).toLocaleDateString();
            return a
        }

        /**
        * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
        * (NOT before the first rendering! onInit() is used for that one!).
        * @memberOf Eway_Bill.Eway_Bill.view.GenerateEinvoice
        */
        // onBeforeRendering: function() {
        //
        // },

        /**
        * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
        * This hook is the same one that SAPUI5 controls get after being rendered.
        * @memberOf Eway_Bill.Eway_Bill.view.GenerateEinvoice
        */
        // onAfterRendering: function() {
        //
        // },

        /**
        * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
        * @memberOf Eway_Bill.Eway_Bill.view.GenerateEinvoice
        */
        // onExit: function() {
        //
        // }

    });

});