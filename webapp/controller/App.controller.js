sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast",
   "sap/ui/model/json/JSONModel",
   "sap/ui/model/resource/ResourceModel",
   "sap/m/MessageBox"
 ], (Controller, MessageToast, JSONModel, ResourceModel, MessageBox) => {
   "use strict";
 
   return Controller.extend("com.sap.fiori.basics.sapfioribasics.controller.App", {
     onInit() {
       const oData = {
         recipient: {
           name: "World",
           wrappingName: "Srija",
           streetNo: "Chaitanya Bharathi",
           zipcode: "500081",
           country: "India"
         }
       };
 
       const oModel = new JSONModel(oData);
       this.getView().setModel(oModel);
 
       const i18nModel = new ResourceModel({
         bundleName: "com.sap.fiori.basics.sapfioribasics.i18n.i18n"
       });
       this.getView().setModel(i18nModel, "i18n");
     },
 
     onNavToEmployees: function () { // Ensure this is a regular function
       const oRouter = this.getOwnerComponent().getRouter();
       oRouter.navTo("EmployeeList");
     },
 
     onErrorMessageBoxPress: function () {
       MessageBox.error("Select a team in the \"Development\" area.\n\"Marketing\" isn't assigned to this area.");
     },
 
     onShowHello() {
       const oBundle = this.getView().getModel("i18n").getResourceBundle();
       const sRecipient = this.getView().getModel().getProperty("/recipient/name");
       const sMsg = oBundle.getText("helloMsg", [sRecipient]);
       MessageToast.show(sMsg);
     }
   });
 });
 