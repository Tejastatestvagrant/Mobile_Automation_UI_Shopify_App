"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDataClient = void 0;
const path_1 = __importDefault(require("path"));
const webservicesExport_1 = require("../../webservicesExport");
const createUserJson = path_1.default.join(webservicesExport_1.Constants.dataFolderPath, '/jsonRequests/user/createUser.json');
const loginUserJson = path_1.default.join(webservicesExport_1.Constants.dataFolderPath, '/jsonRequests/user/loginUser.json');
var UserDataClient;
(function (UserDataClient) {
    async function createUserDataRequest(userData) {
        const request = webservicesExport_1.JsonReaderHelper.readAttribute('$', createUserJson);
        request.name = userData.name;
        request.job = userData.job;
        return request;
    }
    UserDataClient.createUserDataRequest = createUserDataRequest;
    async function loginUserDataRequest(userLoginData) {
        const request = webservicesExport_1.JsonReaderHelper.readAttribute('$', loginUserJson);
        request.email = userLoginData.email;
        request.password = userLoginData.password;
        return request;
    }
    UserDataClient.loginUserDataRequest = loginUserDataRequest;
})(UserDataClient = exports.UserDataClient || (exports.UserDataClient = {}));
