/**
 * Helps in reading the json files attribute based json path
 */
export declare module JsonReaderHelper {
    /**
     * get the value from json for particular attribute
     * @param jsonFilePath
     * @param jsonPathExpression
     */
    function readAttribute(jsonPathExpression: string, jsonFilePath: string): any;
    function readAttribute(jsonPathExpression: string, jsonObject: {}): any;
}
