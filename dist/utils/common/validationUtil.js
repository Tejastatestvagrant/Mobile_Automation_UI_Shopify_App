"use strict";
/* eslint no-param-reassign: 0 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationUtil = void 0;
const chai_1 = require("chai");
const fs_1 = require("fs");
const jsonschema_1 = require("jsonschema");
const webservicesExport_1 = require("../../webservicesExport");
/**
 * declare all the reponse validators here
 */
var ValidationUtil;
(function (ValidationUtil) {
    async function attachReqResDetailsToReport(requestResponse) {
        try {
            const requestBody = Buffer.from(JSON.stringify(requestResponse.request));
            const responseBody = await webservicesExport_1.BaseService.convertResponseTo(requestResponse.response, webservicesExport_1.ReturnResponseAs.BUFFER);
            reporter.addAttachment('request.json', requestBody);
            reporter.addAttachment('response.json', responseBody);
            if (requestResponse.schema !== undefined) {
                const schema = Buffer.from(JSON.stringify(requestResponse.schema));
                reporter.addAttachment('schema.json', schema);
            }
            // let requestHeaders='';
            // let headers:Headers=BaseService.request.headers;
            // headers.forEach(( value: string, key: string)=>{
            //   if(!value.includes('Bearer'))
            //   requestHeaders+=`${key}:${value}\n`
            // });
            // reporter.description(`Url:\n${BaseService.request.url}\nHeaders:\n${requestHeaders}`);
            const description = requestResponse.customDescription === undefined
                ? `Url:\n${requestResponse.resourcePath}` : `Url:\n${requestResponse.resourcePath}\n${requestResponse.customDescription}`;
            reporter.description(description);
        }
        catch (error) {
            webservicesExport_1.LOGGER.warn(`Failed to attach request and response files to report\n${error.message}`);
        }
    }
    ValidationUtil.attachReqResDetailsToReport = attachReqResDetailsToReport;
    async function responseCode(requestResponse, expectedStatusCode, errorMessage) {
        try {
            const expStatusCode = expectedStatusCode === undefined ? 200 : expectedStatusCode;
            (0, chai_1.expect)(expStatusCode, `response code did not match expected-${expStatusCode}, actual-${requestResponse.response.status}`).equal(requestResponse.response.status);
        }
        catch (error) {
            if (errorMessage)
                webservicesExport_1.LOGGER.info(`${errorMessage}`);
            await attachReqResDetailsToReport(requestResponse);
            webservicesExport_1.LOGGER.error('could not validate response code');
            throw new Error(`could not validate response code\n${error.stack}`);
        }
    }
    ValidationUtil.responseCode = responseCode;
    async function responseText(requestResponse, expectedStatusText) {
        try {
            (0, chai_1.expect)(expectedStatusText, `response code did not match expected-${expectedStatusText}, actual-${requestResponse.response.status}`).equal(requestResponse.response.status);
        }
        catch (error) {
            await attachReqResDetailsToReport(requestResponse);
            webservicesExport_1.LOGGER.info('could not validate response text');
            throw new Error(`could not validate response text\n${error.stack}`);
        }
    }
    ValidationUtil.responseText = responseText;
    async function isEmpty(requestResponse, actualResponse) {
        try {
            (0, chai_1.expect)(actualResponse, 'The Actual response is not empty').to.be.empty;
        }
        catch (error) {
            await attachReqResDetailsToReport(requestResponse);
            webservicesExport_1.LOGGER.info('could not validate given expected response');
            throw new Error(`could not validate given response \n${error.stack}`);
        }
    }
    ValidationUtil.isEmpty = isEmpty;
    function jsonObjDeepCompare(jsonObj1, jsonObj2) {
        if (Object.prototype.toString.call(jsonObj1) === Object.prototype.toString.call(jsonObj2)) {
            if (Object.prototype.toString.call(jsonObj1) === '[object Object]' || Object.prototype.toString.call(jsonObj1) === '[object Array]') {
                if (Object.keys(jsonObj1).length !== Object.keys(jsonObj2).length) {
                    return false;
                }
                return (Object.keys(jsonObj1).every((key) => jsonObjDeepCompare(jsonObj1[key], jsonObj2[key])));
            }
            return (jsonObj1 === jsonObj2);
        }
        return false;
    }
    ValidationUtil.jsonObjDeepCompare = jsonObjDeepCompare;
    /**
     * Verifies actual text contanins expected string.
     * @param expectedText string to be present in the actual text.
     * @param actualText from the application API's response.
     */
    async function verifyContainsText(requestResponse, expectedText, actualText) {
        try {
            webservicesExport_1.LOGGER.info(`Expected text - ${expectedText}`);
            webservicesExport_1.LOGGER.info(`Actual text - ${actualText}`);
            (0, chai_1.expect)(actualText, `actual text -${actualText} doesn't contain the expected text-${expectedText}`).includes(expectedText);
        }
        catch (error) {
            await attachReqResDetailsToReport(requestResponse);
            webservicesExport_1.LOGGER.error(`could not validate the given expected text- ${expectedText}`);
            throw new Error(`could not validate the given expected text- ${actualText}`);
        }
    }
    ValidationUtil.verifyContainsText = verifyContainsText;
    async function verifyValues(requestResponse, expected, actual, customErrMsg = '') {
        try {
            let matched = false;
            switch (typeof expected) {
                case 'boolean':
                    if (expected === actual)
                        matched = true;
                    break;
                case 'string':
                    if (expected === actual)
                        matched = true;
                    break;
                case 'number':
                    if (expected === actual)
                        matched = true;
                    break;
                case 'object':
                    if (Array.isArray(expected)) {
                        if (JSON.stringify(expected.sort()) === JSON.stringify(actual.sort()))
                            matched = true;
                    }
                    else if (expected === actual)
                        matched = true;
                    else {
                        matched = false;
                    }
                    break;
                default:
                    if (expected === actual)
                        matched = true;
                    break;
            }
            if (!matched)
                throw new Error(`${customErrMsg}\n values not matching expected-${expected}, actual-${actual}`);
        }
        catch (error) {
            await attachReqResDetailsToReport(requestResponse);
            webservicesExport_1.LOGGER.error(`${customErrMsg}\n values not matching expected-${expected}, actual-${actual}`);
            throw new Error(`${customErrMsg}\n values not matching expected-${expected}, actual-${actual}`);
        }
    }
    ValidationUtil.verifyValues = verifyValues;
    async function verifyValueIsGreater(requestResponse, expectedValue, actualValue) {
        try {
            (0, chai_1.expect)(expectedValue, `expected value -${expectedValue} isn't greater than the actual value-${actualValue}`).greaterThanOrEqual(actualValue);
        }
        catch (error) {
            await attachReqResDetailsToReport(requestResponse);
            webservicesExport_1.LOGGER.error(`actual value ${actualValue} isn't greater than the expected value ${expectedValue}`);
            throw new Error(`actual value ${actualValue} isn't greater than the expected value ${expectedValue}`);
        }
    }
    ValidationUtil.verifyValueIsGreater = verifyValueIsGreater;
    async function verifyValueIsLesser(requestResponse, expectedValue, actualValue, bufferTimeMs = 0) {
        try {
            actualValue -= bufferTimeMs;
            if (!(actualValue > 0 && actualValue < expectedValue))
                throw new Error(`actual value ${actualValue} isn't lesser than the expected value ${expectedValue}`);
        }
        catch (error) {
            await attachReqResDetailsToReport(requestResponse);
            webservicesExport_1.LOGGER.error(`actual value ${actualValue} isn't lesser than the expected value ${expectedValue}`);
            throw new Error(`actual value ${actualValue} isn't lesser than the expected value ${expectedValue}`);
        }
    }
    ValidationUtil.verifyValueIsLesser = verifyValueIsLesser;
    /**
     * check json data matches with schema
     * Use site if needed for json to schema convertion
     * @param requestResponse
     * @param schemaObjectOrFilePath
     * @param jsonObjectOrFilePath
     * @returns
     */
    async function validateSchema(requestResponse, schemaObjectOrFilePath, jsonObjectOrFilePath) {
        let schemaObject = {};
        let jsonObject = {};
        let schemaValidationStatus = false;
        let validationResult;
        try {
            if (typeof schemaObjectOrFilePath === 'string') {
                schemaObject = JSON.parse((0, fs_1.readFileSync)(schemaObjectOrFilePath, 'utf8'));
            }
            else
                schemaObject = schemaObjectOrFilePath;
            if (typeof jsonObjectOrFilePath === 'string') {
                schemaObject = JSON.parse((0, fs_1.readFileSync)(jsonObjectOrFilePath, 'utf8'));
            }
            else
                jsonObject = jsonObjectOrFilePath;
            const validator = new jsonschema_1.Validator();
            validationResult = validator.validate(jsonObject, schemaObject);
            webservicesExport_1.LOGGER.info(`schema validation status-${validationResult.valid}`);
            schemaValidationStatus = validationResult.valid;
            requestResponse.schema = schemaObject;
        }
        catch (error) {
            schemaValidationStatus = false;
            webservicesExport_1.LOGGER.error(`could not validate schema code\n${error.stack}`);
            throw new Error(`could not validate schema code\n${error.stack}`);
        }
        await verifyValues(requestResponse, true, schemaValidationStatus, `Schema validation failed\n${validationResult.errors.toString()}`);
        // return schemaValidationStatus;
    }
    ValidationUtil.validateSchema = validateSchema;
    /**
     * verifies value whether NULL or Empty
     * @param requestResponse
     * @param jsonPathOrValue
     */
    async function validateNotNullOrEmpty(requestResponse, jsonPathOrValue) {
        let actualValue = jsonPathOrValue;
        try {
            const responseJson = await webservicesExport_1.BaseService.convertResponseTo(requestResponse.response, webservicesExport_1.ReturnResponseAs.JSON);
            if (typeof jsonPathOrValue === 'string' && jsonPathOrValue.includes('$'))
                actualValue = webservicesExport_1.JsonReaderHelper.readAttribute(jsonPathOrValue, responseJson);
            if (actualValue === undefined || actualValue === '' || actualValue === null)
                throw new Error(`value at jsonPath ${jsonPathOrValue} is NULL or EMPTY`);
        }
        catch (error) {
            await attachReqResDetailsToReport(requestResponse);
            webservicesExport_1.LOGGER.error(`value at jsonPath ${jsonPathOrValue} is NULL or EMPTY`);
            throw error;
        }
    }
    ValidationUtil.validateNotNullOrEmpty = validateNotNullOrEmpty;
    /**
     * validate value from json path
     * @param requestResponse
     * @param expectedValue
     * @param jsonPath
     */
    async function validateValueFromJson(requestResponse, expectedValue, jsonPath) {
        let actualValue = jsonPath;
        const responseJson = await webservicesExport_1.BaseService.convertResponseTo(requestResponse.response, webservicesExport_1.ReturnResponseAs.JSON);
        actualValue = webservicesExport_1.JsonReaderHelper.readAttribute(jsonPath, responseJson);
        await verifyValues(requestResponse, expectedValue, actualValue);
    }
    ValidationUtil.validateValueFromJson = validateValueFromJson;
})(ValidationUtil = exports.ValidationUtil || (exports.ValidationUtil = {}));
