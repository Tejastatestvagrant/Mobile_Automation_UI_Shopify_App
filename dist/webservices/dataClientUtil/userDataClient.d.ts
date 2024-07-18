import { CreateUserReq, UserData, UserLoginData } from '../../webservicesExport';
import { LoginUserReq } from '../models/request/user/loginUserReq';
export declare module UserDataClient {
    function createUserDataRequest(userData: UserData): Promise<CreateUserReq>;
    function loginUserDataRequest(userLoginData: UserLoginData): Promise<LoginUserReq>;
}
