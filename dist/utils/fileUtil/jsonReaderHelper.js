"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonReaderHelper = void 0;
const jsonpath_plus_1 = require("jsonpath-plus");
const fs_1 = require("fs");
const webservicesExport_1 = require("../../webservicesExport");
/**
 * Helps in reading the json files attribute based json path
 */
var JsonReaderHelper;
(function (JsonReaderHelper) {
    function readAttribute(jsonPathExpression, jsonFilePathOrObject) {
        let value;
        try {
            if (jsonFilePathOrObject instanceof Object)
                value = (0, jsonpath_plus_1.JSONPath)({ path: jsonPathExpression, json: jsonFilePathOrObject });
            else
                value = (0, jsonpath_plus_1.JSONPath)({ path: jsonPathExpression, json: JSON.parse((0, fs_1.readFileSync)(jsonFilePathOrObject, 'utf-8')) });
        }
        catch (error) {
            webservicesExport_1.LOGGER.log(error.stack);
            throw new Error(error);
        }
        if (value.length === 1)
            return value[0];
        return value;
    }
    JsonReaderHelper.readAttribute = readAttribute;
})(JsonReaderHelper = exports.JsonReaderHelper || (exports.JsonReaderHelper = {}));
