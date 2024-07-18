"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Urls = void 0;
const webservicesExport_1 = require("../../webservicesExport");
const environment = webservicesExport_1.Constants.commandLineArguments.env;
/**
 * BaseUrl's for different environments(Eg: DEV, QA)
 * @returns
 */
function getBaseUrl() {
    switch (environment) {
        case 'qa': return 'https://reqres.in';
        case 'dev': return 'https://reqres.in';
        default: return '';
    }
}
var Urls;
(function (Urls) {
    Urls.baseUrl = getBaseUrl();
    Urls.TestUrls = {
        getAllUsers: `${Urls.baseUrl}/api/users?page=PAGENO`,
        getSpecificUserData: `${Urls.baseUrl}/api/users/ID`,
        createUser: `${Urls.baseUrl}/api/users`,
        loginUser: `${Urls.baseUrl}/api/login`,
    };
})(Urls = exports.Urls || (exports.Urls = {}));
