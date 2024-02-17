sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/webc/fiori/library"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, webcFioriLib) {
        "use strict";

        return Controller.extend("einvoiceewaybill.controller.masterpage", {
            onInit: function () {
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
                            ShowMore: "....",
                            title: "Portal Details (NIC)"
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
                            ShowMore: "....",
                            title: "User Access Details"
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
                            ShowMore: "....",
                            title: "Portal URL"
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
                            ShowMore: "....",
                            title: "Document Type"
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
                            ShowMore: "....",
                            title: "State Code"
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
                            ShowMore: "....",
                            title: "UOM Code"
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
                            ShowMore: "....",
                            title: "Condition Type"
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
                            ShowMore: "....",
                            title: "E-Invoice Authorization"
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
                            ShowMore: "....",
                            title: "Transporter Details"
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
                            ShowMore: "....",
                            title: "E-way Bill Authorization"
                        }
                    ]
                }
                var json = new sap.ui.model.json.JSONModel(jsondata)
                this.getView().setModel(json, "maindata")
            },
            home: function (oEvent) {
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteView1");
            },
            masterpage: function (oEvent) {
                debugger
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("MasterPage");
            },
            einvoice: function (oEvent) {
                debugger
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("E-Invoice");
            },
            ewaybill: function (oEvent) {
                debugger
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("E-WayBill");
            },
            PortalDetails: function (oEvent) {
                debugger
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("PortalDetails");
            },
            UserAccDetails: function (oEvent) {
                debugger
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("UserAccessDetails");
            },
            PortalURL: function (oEvent) {
                debugger
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("PortalURL");
            },
            DocType: function (oEvent) {
                debugger
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("SplitAppMasterPage");
            },
            StateCode: function (oEvent) {
                debugger
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("StateCode");
            },
            UOMCode: function (oEvent) {
                debugger
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("UOMCode");
            },
            ConditionType: function (oEvent) {
                debugger
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("ConditionType");
                
            },
            EInvAuth: function (oEvent) {
                debugger
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("E-InvoiceAuthorization");
            },
            TransporterDetails: function (oEvent) {
                debugger
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("TransporterDetails");
            },
            EwaybillAuth: function (oEvent) {
                debugger
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("EwaybillAuthorization");
            },
            onStartColumnListItemPress: function (oEvent) {
                debugger
                var oItem = oEvent.getParameter("item");
                this.byId("pageContainer").to(this.getView().createId(oItem.getKey()));
                // if(oEvent.getSource().getSelectedKey() === 'DocumentType'){
                //     var oRouter = this.getOwnerComponent().getRouter();
                //     oRouter.navTo("DocumentType");
                // }else if(oEvent.getSource().getSelectedKey() === 'StateCode'){
                //     var oRouter = this.getOwnerComponent().getRouter();
                //     oRouter.navTo("StateCode");

                // }
                // if (oEvent.getSource().mAssociations.selectedItem === '__item0-__list0-0') {

                //     this.byId("pageContainer").to(this.byId("page01"))
                //     // this.getView().byId("fcl").setLayout("TwoColumnsMidExpanded");
                // }
                // else if (oEvent.getSource().mAssociations.selectedItem ===  '__item0-__list0-1') {
                //     // this.byId("SplitAppMasterPage").to(this.byId("page02"))
                //     this.byId("pageContainer").to(this.byId("page02"))
                // }
                // else if (oEvent.getSource().mProperties.title === 'Portal URL') {
                //     this.byId("SplitAppMasterPage").to(this.byId("PortalURL"))
                // }
                // else if (oEvent.getSource().mProperties.title === 'Document Type') {
                //     this.byId("SplitAppMasterPage").to(this.byId("DocumentType"))
                // }
                // else if (oEvent.getSource().mProperties.title === 'State Code') {
                //     this.byId("SplitAppMasterPage").to(this.byId("StateCode"))
                // }
                // else if (oEvent.getSource().mProperties.title === 'UOM Code') {
                //     this.byId("SplitAppMasterPage").to(this.byId("UOMCode"))
                // }
                // else if (oEvent.getSource().mProperties.title === 'Condition Type') {
                //     this.byId("SplitAppMasterPage").to(this.byId("ConditionType"))
                // }
                // else if (oEvent.getSource().mProperties.title === 'E-Invoice Authorization') {
                //     this.byId("SplitAppMasterPage").to(this.byId("E-InvoiceAuthorization"))
                // }
                // else if (oEvent.getSource().mProperties.title === 'Transporter Details') {
                //     this.byId("SplitAppMasterPage").to(this.byId("TransporterDetails"))
                // }
                // else if (oEvent.getSource().mProperties.title === 'E-way Bill Authorization') {
                //     this.byId("SplitAppMasterPage").to(this.byId("EwaybillAuthorization"))
                // }
            },
            onPress: function (oEvent) {

                debugger
                this.getView().byId("fcl").setLayout("OneColumn");
            }
        });
    });
