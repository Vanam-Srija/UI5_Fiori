sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("ui5.sapfioribasics.controller.InvoiceList", {
        onInit() {
			//loading currency and price

            const oViewModel = new JSONModel({
                currency: "EUR"
            });
            this.getView().setModel(oViewModel, "view");

            // Load the invoice data
            const oInvoiceModel = new JSONModel("Invoices.json");
            this.getView().setModel(oInvoiceModel, "invoice");
        },
        onPress() {
			const oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("detail");
		}

    });
});
