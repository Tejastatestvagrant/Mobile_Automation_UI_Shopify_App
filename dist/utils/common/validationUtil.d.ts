import { RequestResponseHolder } from '../../webservicesExport';
/**
 * declare all the reponse validators here
 */
export declare module ValidationUtil {
    function attachReqResDetailsToReport(requestResponse: RequestResponseHolder): Promise<void>;
    function responseCode(requestResponse: RequestResponseHolder, expectedStatusCode?: number, errorMessage?: string): Promise<void>;
    function responseText(requestResponse: RequestResponseHolder, expectedStatusText: string): Promise<void>;
    function isEmpty(requestResponse: RequestResponseHolder, actualResponse: any): Promise<void>;
    function jsonObjDeepCompare(jsonObj1: any, jsonObj2: any): boolean;
    /**
     * Verifies actual text contanins expected string.
     * @param expectedText string to be present in the actual text.
     * @param actualText from the application API's response.
     */
    function verifyContainsText(requestResponse: RequestResponseHolder, expectedText: string, actualText: string): Promise<void>;
    function verifyValues(requestResponse: RequestResponseHolder, expected: boolean, actual: boolean, customErrMsg?: string): Promise<any>;
    function verifyValues(requestResponse: RequestResponseHolder, expected: number, actual: number, customErrMsg?: string): Promise<any>;
    function verifyValues(requestResponse: RequestResponseHolder, expected: string, actual: string, customErrMsg?: string): Promise<any>;
    function verifyValues(requestResponse: RequestResponseHolder, expected: [], actual: [], customErrMsg?: string): Promise<any>;
    function verifyValueIsGreater(requestResponse: RequestResponseHolder, expectedValue: number, actualValue: number): Promise<void>;
    function verifyValueIsLesser(requestResponse: RequestResponseHolder, expectedValue: number, actualValue: number, bufferTimeMs?: number): Promise<void>;
    /**
     * check json data matches with schema
     * Use site if needed for json to schema convertion
     * @param requestResponse
     * @param schemaObjectOrFilePath
     * @param jsonObjectOrFilePath
     * @returns
     */
    function validateSchema(requestResponse: RequestResponseHolder, schemaObjectOrFilePath: any, jsonObjectOrFilePath: any): Promise<void>;
    /**
     * verifies value whether NULL or Empty
     * @param requestResponse
     * @param jsonPathOrValue
     */
    function validateNotNullOrEmpty(requestResponse: RequestResponseHolder, jsonPathOrValue: any): Promise<void>;
    /**
     * validate value from json path
     * @param requestResponse
     * @param expectedValue
     * @param jsonPath
     */
    function validateValueFromJson(requestResponse: RequestResponseHolder, expectedValue: string, jsonPath: string): Promise<void>;
}
