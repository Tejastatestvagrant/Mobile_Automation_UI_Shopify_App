import { Response } from 'superagent';
import { RequestResponseHolder } from '../../../webservicesExport';
export declare enum ReturnResponseAs {
    'JSON' = 0,
    'TEXT' = 1,
    'BUFFER' = 2
}
/**
 * this class has all the basic http operations
 */
export declare class BaseService {
    static get(resourcePath: string, headersParam: any, queryParam?: {}): Promise<RequestResponseHolder>;
    static post(resourcePath: string, bodyParam: any, headersParam: any): Promise<RequestResponseHolder>;
    static postFile(resourcePath: string, formData: {}, headersParam: any): Promise<RequestResponseHolder>;
    static delete(resourcePath: string, bodyParam: any, headersParam: any): Promise<RequestResponseHolder>;
    static convertResponseTo(response: Response, returnResponseAs?: ReturnResponseAs): Promise<any>;
}
