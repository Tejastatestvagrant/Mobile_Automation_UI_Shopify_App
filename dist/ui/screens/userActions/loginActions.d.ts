import { Browser } from 'webdriverio';
import { BaseScreen, LoginScreen } from '../../../uiExport';
import { HomeScreen } from '../common/homeScreen';
export declare class LoginActions extends BaseScreen {
    loginScreen: LoginScreen;
    homeScreen: HomeScreen;
    constructor(driver: Browser<'async'>);
    login(accountDetails: {
        username: string;
        password: string;
    }): Promise<void>;
}
