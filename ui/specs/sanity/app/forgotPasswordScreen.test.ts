/**
 * @group Sanity
 * @group Smoke
 * @group Regression
 */

import { Browser } from 'webdriverio';
import { expect } from 'chai';
import {
  Driver, LoginScreen, ForgotPasswordScreen,
} from '../../../../uiExport';
import { HomeScreenUiValidationAction } from '../../../screens/userActions/HomeScreenActions/homeScreenUiValidationAction';
import { ProfileScreenAction } from '../../../screens/userActions/ProfileScreenActions/profileScreenAction';

let driver: Browser<'async'>;
let loginScreen : LoginScreen;
let homeScreenUiValidationAction: HomeScreenUiValidationAction;
let profileScreenAction: ProfileScreenAction;
let forgotPasswordScreen: ForgotPasswordScreen;

const specName = 'Forgot Password  screen tests';
declare let reporter: any;

describe(specName, () => {
  beforeAll(async () => {
    try {
      driver = await Driver.getDriver(specName);
      loginScreen = new LoginScreen(driver);
      homeScreenUiValidationAction = new HomeScreenUiValidationAction(driver);
      profileScreenAction = new ProfileScreenAction(driver);
      forgotPasswordScreen = new ForgotPasswordScreen(driver);

      // Navigate to Profile screen
      await homeScreenUiValidationAction.tapProfileButton();
      await profileScreenAction.tapOnLoginButton();
      await loginScreen.tapForgotPasswordLink();
      expect(await forgotPasswordScreen.isForgotPasswordScreenDisplayed()).to.equal(true);
    } catch (error) {
      console.error(`Error during setup: ${error.message}`);
      expect.fail(`Setup failed: ${error.message}`);
    }
  });

  afterEach(async () => {
    await Driver.attachScreenshots(driver, reporter);
  });

  afterAll(async () => {
    await Driver.closeDrivers([driver]);
  });

  it('Verify user cannot Proceed with null credentials', async () => {
    const accountDetails = { email: '', password: '' };
    await forgotPasswordScreen.fillForgotPasswordEmail(accountDetails.email);
    const errorMsg = await forgotPasswordScreen.getEmailFieldEmptyErrorMsg();
    expect(errorMsg).to.be.equal('Email field cannot be empty');
  });

  it('Verify user cannot Proceed with incorrect Format of the Email credentials', async () => {
    const accountDetails = { email: 'incorrectEmail', password: '' };
    await forgotPasswordScreen.fillForgotPasswordEmail(accountDetails.email);
    expect(await forgotPasswordScreen.getEmailFieldFormatErrorMsg()).to.be.equal('Email format is incorrect');
  });

  it('Verify user cannot Proceed with unregistered  Email credentials', async () => {
    const accountDetails = { email: 'validEmail@gmail.com', password: '' };
    await forgotPasswordScreen.fillForgotPasswordEmail(accountDetails.email);
    // expect(forgotPasswordScreen.getEmailFieldFormatErrorMsg()).to.be.equal('Email-unregistered');
  });
});
