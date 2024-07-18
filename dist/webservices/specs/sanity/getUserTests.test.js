"use strict";
/**
 * @group Sanity
 */
Object.defineProperty(exports, "__esModule", { value: true });
const webservicesExport_1 = require("../../../webservicesExport");
const specName = 'Get User details Tests';
let requestResponse;
function skipOrExecuteSpec() {
    return describe;
}
skipOrExecuteSpec()(specName, () => {
    beforeAll(async () => {
        webservicesExport_1.LoggerHelper.setupLogger(specName);
        webservicesExport_1.LOGGER.info('Logger setup completed');
    });
    beforeEach(async () => {
        webservicesExport_1.LOGGER.info('before each called');
    });
    afterEach(async () => {
        webservicesExport_1.LOGGER.info('after each called');
    });
    afterAll(async () => {
        webservicesExport_1.LOGGER.info('after all');
    });
    it('Verify get specific user', async () => {
        const userID = 2;
        requestResponse = await webservicesExport_1.UserServices.getSpecificUser(userID);
        const getSpecificUserDataResp = await webservicesExport_1.UserServices.readGetSpecificUserResponse(requestResponse);
        webservicesExport_1.LOGGER.info(JSON.stringify(getSpecificUserDataResp));
        await webservicesExport_1.ValidationUtil.responseCode(requestResponse, 200, 'Expected status code-200');
        await webservicesExport_1.ValidationUtil.verifyValues(requestResponse, userID, getSpecificUserDataResp.data.id, 'get specific user failed');
        await webservicesExport_1.ValidationUtil.validateNotNullOrEmpty(requestResponse, getSpecificUserDataResp.data.email);
    });
});
