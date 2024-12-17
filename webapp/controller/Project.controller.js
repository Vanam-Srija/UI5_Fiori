sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"

],
function (Controller,JSONModel) {
    "use strict";

    return Controller.extend("com.sap.fiori.basics.sapfioribasics.controller.Projects", {
        onInit: function () {

            const oProjectModel = new JSONModel("Projects.json");
            this.getView().setModel(oProjectModel, "project");
        }
    });
});