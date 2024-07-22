import { Browser } from 'webdriverio';
import {
  BaseScreen, LoginScreenActions, ProfileScreen,
} from '../../../../uiExport';
import { HomeScreenUiValidationAction } from '../HomeScreenActions/homeScreenUiValidationAction';
import { loginUserCredential } from '../../../resources/Constants/constants';
import OtpScreenAction from './otpScreenAction';

export class E2eLoginAction extends BaseScreen {
  homeScreenAction: HomeScreenUiValidationAction;

  profileScreen: ProfileScreen;

  loginScreenAction: LoginScreenActions;

  otpScreenAction: OtpScreenAction;

  constructor(driver: Browser<'async'>) {
    super(driver);
    this.profileScreen = new ProfileScreen(driver);
    this.homeScreenAction = new HomeScreenUiValidationAction(driver);
    this.loginScreenAction = new LoginScreenActions(driver);
    this.otpScreenAction = new OtpScreenAction(driver);
  }

  async login() {
    await this.homeScreenAction.tapProfileButton();
    await this.profileScreen.tapLoginButton();
    await this.loginScreenAction.login(loginUserCredential);
    await this.otpScreenAction.fillOtp('0000');
  }
}
