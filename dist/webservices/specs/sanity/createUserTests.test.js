"use strict";
/**
 * @group Sanity
 */
Object.defineProperty(exports, "__esModule", { value: true });
const webservicesExport_1 = require("../../../webservicesExport");
const specName = 'Create User Tests';
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
    it('Login and create a new user using Authorization token', async () => {
        // prepare user LoginData
        const email = 'eve.holt@reqres.in';
        const password = 'cityslicka';
        const userLoginData = {
            email, password,
        };
        // Login to App and get authorization token
        requestResponse = await webservicesExport_1.UserServices.loginUser(userLoginData);
        const loginUserResp = await webservicesExport_1.UserServices.readLoginUserResponse(requestResponse);
        await webservicesExport_1.ValidationUtil.responseCode(requestResponse, 200, 'Expected status code-200');
        const authorizationToken = await loginUserResp.token;
        // Create a new user using token
        // prepare new user data
        const name = `User_${await webservicesExport_1.RandomGenerator.getRandomInteger(1000, 100000)}`;
        const job = `Job_${await webservicesExport_1.RandomGenerator.getRandomInteger(1000, 100000)}`;
        const userData = {
            name, job,
        };
        requestResponse = await webservicesExport_1.UserServices.createUser(userData, authorizationToken);
        const createUserResp = await webservicesExport_1.UserServices.readCreateUserResponse(requestResponse);
        await webservicesExport_1.ValidationUtil.responseCode(requestResponse, 201, 'Expected status code-201');
        await webservicesExport_1.ValidationUtil.verifyValues(requestResponse, userData.name, createUserResp.name, 'created user name mismatch');
        await webservicesExport_1.ValidationUtil.verifyValues(requestResponse, userData.job, createUserResp.job, 'created user job mismatch');
        await webservicesExport_1.ValidationUtil.validateNotNullOrEmpty(requestResponse, createUserResp.id);
    });
});
