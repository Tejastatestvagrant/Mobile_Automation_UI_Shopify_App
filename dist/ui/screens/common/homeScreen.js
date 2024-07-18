"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeScreen = void 0;
const uiExport_1 = require("../../../uiExport");
class HomeScreen extends uiExport_1.BaseScreen {
    constructor() {
        super(...arguments);
        this.selectors = {
            productLabel: { android: "//*[@text='PRODUCTS']", ios: "//*[@name='PRODUCTS']" },
        };
    }
    async productLabelEle() {
        return this.getElement(uiExport_1.XpathUtil.getXpath(this.driver, this.selectors.productLabel));
    }
}
exports.HomeScreen = HomeScreen;
