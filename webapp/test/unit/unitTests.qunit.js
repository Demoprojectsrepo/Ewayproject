/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"einvoice_ewaybill_/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
