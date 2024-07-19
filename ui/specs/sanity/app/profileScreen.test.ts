/**
 * @group Sanity
 */

import { Browser } from 'webdriverio';
import { expect } from 'chai';
import {
  Driver, ProfileScreen,
} from '../../../../uiExport';
import { HomeScreenUiValidationAction } from '../../../screens/userActions/HomeScreenActions/homeScreenUiValidationAction';
// import { OtpVerificationScreen } from '../../../screens/common/ProfileScreens/otpScreen';
/**
 * Home Page Validation
 */
let driver: Browser<'async'>;
// let loginActions: LoginScreenActions;
let homeScreen : HomeScreenUiValidationAction;
let profileScreen : ProfileScreen;
// let registerScreen : RegistrationScreen;
// let otpScreen : OtpVerificationScreen;

declare let reporter: any;
const specName = 'Login app validation';
describe(specName, () => {
  beforeAll(async () => {
    driver = await Driver.getDriver(specName);
    homeScreen = new HomeScreenUiValidationAction(driver);
    profileScreen = new ProfileScreen(driver);
    // otpScreen = new OtpVerificationScreen(driver);
  });

  afterEach(async () => {
    await Driver.attachScreenshots(driver, reporter);
  });

  afterAll(async () => {
    await Driver.closeDrivers([driver]);
  });

  /**
 * it will verify login on both android and ios
 * pass os in env.properties file
 */
  it('verify ProfileScreen', async () => {
    await homeScreen.tapProfileButton();

    const welcomeText = await profileScreen.welcomeTextEle();
    expect(welcomeText).to.be.true;

    const appLogo = await profileScreen.isAppLogoDisplayed();
    expect(appLogo).to.be.true;

    // const registerButton = await profileScreen.registerButtonEle
    // expect(registerButton).to.be.enabled
  });
});
