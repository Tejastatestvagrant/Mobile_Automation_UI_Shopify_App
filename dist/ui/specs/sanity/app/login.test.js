"use strict";
/**
 * @group Sanity
 */
Object.defineProperty(exports, "__esModule", { value: true });
const uiExport_1 = require("../../../../uiExport");
/**
 * Home Page Validation
 */
let driver;
let loginActions;
const specName = 'Login app validation';
describe(specName, () => {
    beforeAll(async () => {
        driver = await uiExport_1.Driver.getDriver(specName);
        loginActions = new uiExport_1.LoginActions(driver);
    });
    afterEach(async () => {
        await uiExport_1.Driver.attachScreenshots(driver, reporter);
    });
    afterAll(async () => {
        await uiExport_1.Driver.closeDrivers([driver]);
    });
    /**
   * it will verify login on both android and ios
   * pass os in env.properties file
   */
    it('verify login', async () => {
        await loginActions.login({ username: 'standard_user', password: 'secret_sauce' });
    });
});
