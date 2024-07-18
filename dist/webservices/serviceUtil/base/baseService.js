"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseService = exports.ReturnResponseAs = void 0;
/* eslint no-param-reassign: 0 */
/* eslint no-shadow: 0 */
const superagent_1 = __importDefault(require("superagent"));
const url_1 = require("url");
const webservicesExport_1 = require("../../../webservicesExport");
var ReturnResponseAs;
(function (ReturnResponseAs) {
    ReturnResponseAs[ReturnResponseAs["JSON"] = 0] = "JSON";
    ReturnResponseAs[ReturnResponseAs["TEXT"] = 1] = "TEXT";
    ReturnResponseAs[ReturnResponseAs["BUFFER"] = 2] = "BUFFER";
})(ReturnResponseAs = exports.ReturnResponseAs || (exports.ReturnResponseAs = {}));
/**
 * this class has all the basic http operations
 */
class BaseService {
    static async get(resourcePath, headersParam, queryParam) {
        let response;
        const startTime = new Date().getTime();
        let endTime = new Date().getTime();
        try {
            if (queryParam !== undefined) {
                response = await superagent_1.default.get(resourcePath).set(headersParam).query(queryParam);
            }
            else {
                response = await superagent_1.default.get(resourcePath).set(headersParam);
            }
            endTime = new Date().getTime();
        }
        catch (error) {
            webservicesExport_1.LOGGER.error(`get request failed\n${error.message}`);
            // throw new Error(`get request failed\n${error.stack}`);
            response = error.response;
        }
        return {
            request: '', response, resourcePath, responseTime: endTime - startTime,
        };
    }
    static async post(resourcePath, bodyParam, headersParam) {
        let response;
        const startTime = new Date().getTime();
        let endTime = new Date().getTime();
        try {
            if (bodyParam instanceof url_1.URLSearchParams) {
                response = await superagent_1.default.post(resourcePath).set(headersParam).send(bodyParam);
            }
            else {
                response = await superagent_1.default.post(resourcePath).set(headersParam).send(JSON.stringify(bodyParam));
            }
            endTime = new Date().getTime();
        }
        catch (error) {
            webservicesExport_1.LOGGER.error(`post request failed\n${error.message}`);
            // throw new Error(`post request failed\n${error.stack}`);
            response = error.response;
        }
        return {
            request: bodyParam, response, resourcePath, responseTime: endTime - startTime,
        };
    }
    static async postFile(resourcePath, formData, headersParam) {
        let response;
        const startTime = new Date().getTime();
        let endTime = new Date().getTime();
        try {
            response = await superagent_1.default.post(resourcePath).set(headersParam).field(formData);
            endTime = new Date().getTime();
        }
        catch (error) {
            webservicesExport_1.LOGGER.error(`post request failed\n${error.message}`);
            // throw new Error(`post request failed\n${error.stack}`);
            response = error.response;
        }
        return {
            request: JSON.stringify(formData), response, resourcePath, responseTime: endTime - startTime,
        };
    }
    static async delete(resourcePath, bodyParam, headersParam) {
        let response;
        const startTime = new Date().getTime();
        let endTime = new Date().getTime();
        try {
            if (bodyParam instanceof url_1.URLSearchParams) {
                await superagent_1.default.delete(resourcePath).set(headersParam).send(bodyParam);
                response = await superagent_1.default.delete(resourcePath).set(headersParam).send(bodyParam);
                // request = new Request(resourcePath, { method: 'DELETE', body: bodyParam, headers: headersParam });
            }
            else if (bodyParam === undefined) {
                response = await superagent_1.default.delete(resourcePath).set(headersParam);
                // request = new Request(resourcePath, { method: 'DELETE', headers: headersParam });
            }
            else {
                response = await superagent_1.default.delete(resourcePath).set(headersParam).send(JSON.stringify(bodyParam));
                // request = new Request(resourcePath, { method: 'DELETE', body: JSON.stringify(bodyParam), headers: headersParam });
            }
            // const responseDateTime = response.headers.get('date');
            // if (!(responseDateTime === undefined || responseDateTime === '')) endTime = new Date(responseDateTime).getTime();
            endTime = new Date().getTime();
        }
        catch (error) {
            webservicesExport_1.LOGGER.error(`delete request failed\n${error.message}`);
            // throw new Error(`delete request failed\n${error.stack}`);
            response = error.response;
        }
        return {
            request: bodyParam, response, resourcePath, responseTime: endTime - startTime,
        };
    }
    static async convertResponseTo(response, returnResponseAs) {
        try {
            switch (returnResponseAs) {
                case ReturnResponseAs.JSON:
                    return response.body;
                // break;
                case ReturnResponseAs.TEXT:
                    return response.text;
                // break;
                case ReturnResponseAs.BUFFER:
                    return Buffer.from(response.text);
                // break;
                default:
                    return response.body;
                // break;
            }
        }
        catch (error) {
            webservicesExport_1.LOGGER.error(`convert response to ${returnResponseAs} failed\n${error.message}`);
            throw new Error(`convert response to ${returnResponseAs} failed\n${error.stack}`);
        }
    }
}
exports.BaseService = BaseService;
