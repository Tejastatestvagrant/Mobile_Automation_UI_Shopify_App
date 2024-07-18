"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginScreen = void 0;
const uiExport_1 = require("../../../uiExport");
class LoginScreen extends uiExport_1.BaseScreen {
    constructor() {
        super(...arguments);
        this.selectors = {
            usernameText: { android: "//*[@text='Username']", ios: "//*[@name='test-Username']" },
            passwordText: { android: "//*[@text='Password']", ios: "//*[@name='test-Password']" },
            loginButton: { android: "//*[@content-desc='test-LOGIN']", ios: "//*[@name='test-LOGIN']" },
        };
    }
    async usernameTextEle() {
        return this.getElement(uiExport_1.XpathUtil.getXpath(this.driver, this.selectors.usernameText));
    }
    async passwordTextEle() {
        return this.getElement(uiExport_1.XpathUtil.getXpath(this.driver, this.selectors.passwordText));
    }
    async loginButtonEle() {
        return this.getElement(uiExport_1.XpathUtil.getXpath(this.driver, this.selectors.loginButton));
    }
    async fillLoginDetails(accountDetails) {
        await this.setValue(await this.usernameTextEle(), accountDetails.username);
        await this.setValue(await this.passwordTextEle(), accountDetails.password);
        await this.click(await this.loginButtonEle());
    }
}
exports.LoginScreen = LoginScreen;
