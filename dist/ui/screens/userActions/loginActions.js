"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginActions = void 0;
const uiExport_1 = require("../../../uiExport");
const homeScreen_1 = require("../common/homeScreen");
class LoginActions extends uiExport_1.BaseScreen {
    constructor(driver) {
        super(driver);
        this.loginScreen = new uiExport_1.LoginScreen(driver);
        this.homeScreen = new homeScreen_1.HomeScreen(driver);
    }
    async login(accountDetails) {
        await this.loginScreen.fillLoginDetails(accountDetails);
        await this.waitForDisplayed(await this.homeScreen.productLabelEle());
    }
}
exports.LoginActions = LoginActions;
