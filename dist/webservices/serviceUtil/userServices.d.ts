import { BaseService, CreateUserResp, GetSpecificUserDataResp, LoginUserResp, RequestResponseHolder, UserData, UserLoginData } from '../../webservicesExport';
export declare class UserServices extends BaseService {
    /**
     * get specific user service
     * @param userID
     * @returns
     */
    static getSpecificUser(userID: number): Promise<RequestResponseHolder>;
    /**
     * method will return response of the getSpecificUser api
     * @param requestResponse
     * @returns
     */
    static readGetSpecificUserResponse(requestResponse: RequestResponseHolder): Promise<GetSpecificUserDataResp>;
    /**
     * Service which handles Headers, Body and HTTP method and provides Response
     * @param userData
     * @returns
     */
    static createUser(userData: UserData, token?: string): Promise<RequestResponseHolder>;
    /**
     * method will return response of the createUser api
     * @param requestResponse
     * @returns
     */
    static readCreateUserResponse(requestResponse: RequestResponseHolder): Promise<CreateUserResp>;
    static loginUser(userLoginData: UserLoginData): Promise<RequestResponseHolder>;
    /**
     * method will return response of the loginUser api
     * @param requestResponse
     * @returns
     */
    static readLoginUserResponse(requestResponse: RequestResponseHolder): Promise<LoginUserResp>;
}
