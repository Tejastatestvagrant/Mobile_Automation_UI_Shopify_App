import { Element } from 'webdriverio';
import { BaseScreen } from '../../../uiExport';
export declare class LoginScreen extends BaseScreen {
    private selectors;
    usernameTextEle(): Promise<Element<'async'>>;
    passwordTextEle(): Promise<Element<'async'>>;
    loginButtonEle(): Promise<Element<'async'>>;
    fillLoginDetails(accountDetails: {
        username: string;
        password: string;
    }): Promise<void>;
}
