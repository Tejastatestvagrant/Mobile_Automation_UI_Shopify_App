/**
 * @group Sanity
 */

import { Browser } from 'webdriverio';
import { expect } from 'chai';
import {
  Driver, ProfileScreenAction,
} from '../../../../uiExport';
import { HomeScreenUiValidationAction } from '../../../screens/userActions/HomeScreenActions/homeScreenUiValidationAction';
// import { OtpVerificationScreen } from '../../../screens/common/ProfileScreens/otpScreen';
/**
 * Home Page Validation
 */
let driver: Browser<'async'>;
// let loginActions: LoginScreenActions;
let homeScreen : HomeScreenUiValidationAction;
let profileScreen : ProfileScreenAction;

declare let reporter: any;
const specName = 'Login app validation';
describe(specName, () => {
  beforeAll(async () => {
    driver = await Driver.getDriver(specName);
    homeScreen = new HomeScreenUiValidationAction(driver);
    profileScreen = new ProfileScreenAction(driver);
  });

  afterEach(async () => {
    await Driver.attachScreenshots(driver, reporter);
  });

  afterAll(async () => {
    await Driver.closeDrivers([driver]);
  });

  it('verify ProfileScreen', async () => {
    await homeScreen.tapProfileButton();

    expect(await profileScreen.isWelcomeTextDisplayed()).to.be.true;
    expect(await profileScreen.isLogoDisplayed()).to.be.true;
    expect(await profileScreen.isRegisterButtonDisplayed()).to.be.true;
    expect(await profileScreen.isLoginButtonDisplayed()).to.be.true;
  });
});
