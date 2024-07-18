"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uiExport_1 = require("../../../../uiExport");
const webservicesExport_1 = require("../../../../webservicesExport");
/**
 * Home page validation
 */
let driver;
let homeActions;
const specName = 'Ekam home page validation';
describe('specName', () => {
    beforeAll(async () => {
        driver = await uiExport_1.Driver.getDriver(specName);
        homeActions = new uiExport_1.HomeActions(driver);
    });
    afterEach(async () => {
        await uiExport_1.Driver.attachScreenshots(driver, reporter);
    });
    afterAll(async () => {
        await uiExport_1.Driver.closeDrivers([driver]);
    });
    it('Home Page Validation', async () => {
        await homeActions.clickingOnDocsLink(uiExport_1.EkamNavBarHyperLinks.Docs);
    });
    // use of apis during ui automation
    it('Home Page Validation', async () => {
        // make calls to api if necessary as below
        // prepare user LoginData
        const email = 'eve.holt@reqres.in';
        const password = 'cityslicka';
        const userLoginData = {
            email, password,
        };
        // Login to App and get authorization token
        const requestResponse = await webservicesExport_1.UserServices.loginUser(userLoginData);
        const loginUserResp = await webservicesExport_1.UserServices.readLoginUserResponse(requestResponse);
        await webservicesExport_1.ValidationUtil.responseCode(requestResponse, 200, 'Expected status code-200');
        const authorizationToken = loginUserResp.token;
        webservicesExport_1.LOGGER.info(`authorizationToken-${authorizationToken}`);
        // use the response object to fetch required details and pass to ui tests
        await homeActions.clickingOnDocsLink(uiExport_1.EkamNavBarHyperLinks.Docs);
    });
});
