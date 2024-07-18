"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserServices = void 0;
const webservicesExport_1 = require("../../webservicesExport");
class UserServices extends webservicesExport_1.BaseService {
    /**
     * get specific user service
     * @param userID
     * @returns
     */
    static async getSpecificUser(userID) {
        try {
            const headers = await webservicesExport_1.HeaderDataClient.getHeadersContentType();
            const path = webservicesExport_1.Urls.TestUrls.getSpecificUserData.replace('ID', userID.toString());
            const requestResponse = await webservicesExport_1.BaseService.get(path, headers);
            return requestResponse;
        }
        catch (error) {
            webservicesExport_1.LOGGER.error(`getSpecificUser service is failed${error.message}`);
            throw new Error(`getSpecificUser service is failed\n${error.stack}`);
        }
    }
    /**
     * method will return response of the getSpecificUser api
     * @param requestResponse
     * @returns
     */
    static async readGetSpecificUserResponse(requestResponse) {
        try {
            return await webservicesExport_1.BaseService.convertResponseTo(requestResponse.response, webservicesExport_1.ReturnResponseAs.JSON);
        }
        catch (error) {
            webservicesExport_1.LOGGER.error(`readSpecificUserResponse service is failed${error.message}`);
            throw new Error(`readSpecificUserResponse service is failed\n${error.stack}`);
        }
    }
    /**
     * Service which handles Headers, Body and HTTP method and provides Response
     * @param userData
     * @returns
     */
    static async createUser(userData, token) {
        try {
            const headers = await webservicesExport_1.HeaderDataClient.getHeadersAuthorization(token);
            const path = await webservicesExport_1.Urls.TestUrls.createUser;
            const body = await webservicesExport_1.UserDataClient.createUserDataRequest(userData);
            const requestResponse = await webservicesExport_1.BaseService.post(path, body, headers);
            return requestResponse;
        }
        catch (error) {
            webservicesExport_1.LOGGER.error(`createUser service is failed${error.message}`);
            throw new Error(`createUser service is failed\n${error.stack}`);
        }
    }
    /**
     * method will return response of the createUser api
     * @param requestResponse
     * @returns
     */
    static async readCreateUserResponse(requestResponse) {
        try {
            return await webservicesExport_1.BaseService.convertResponseTo(requestResponse.response, webservicesExport_1.ReturnResponseAs.JSON);
        }
        catch (error) {
            webservicesExport_1.LOGGER.error(`readCreateUserResponse service is failed${error.message}`);
            throw new Error(`readCreateUserResponse service is failed\n${error.stack}`);
        }
    }
    static async loginUser(userLoginData) {
        try {
            const headers = await webservicesExport_1.HeaderDataClient.getHeadersContentType();
            const path = webservicesExport_1.Urls.TestUrls.loginUser;
            const body = await webservicesExport_1.UserDataClient.loginUserDataRequest(userLoginData);
            const requestResponse = await webservicesExport_1.BaseService.post(path, body, headers);
            return requestResponse;
        }
        catch (error) {
            webservicesExport_1.LOGGER.error(`loginUser service is failed${error.message}`);
            throw new Error(`loginUser service is failed\n${error.stack}`);
        }
    }
    /**
     * method will return response of the loginUser api
     * @param requestResponse
     * @returns
     */
    static async readLoginUserResponse(requestResponse) {
        try {
            return await webservicesExport_1.BaseService.convertResponseTo(requestResponse.response, webservicesExport_1.ReturnResponseAs.JSON);
        }
        catch (error) {
            webservicesExport_1.LOGGER.error(`readLoginUserResponse service is failed${error.message}`);
            throw new Error(`readLoginUserResponse service is failed\n${error.stack}`);
        }
    }
}
exports.UserServices = UserServices;
