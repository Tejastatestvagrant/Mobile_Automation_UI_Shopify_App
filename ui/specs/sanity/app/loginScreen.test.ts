/**
 * @group Sanity
 * @group Smoke
 * @group Regression
 */

import { Browser } from 'webdriverio';
import { expect } from 'chai';
import {
  Driver, LoginScreen, RegistrationScreen, ForgotPasswordScreen,
} from '../../../../uiExport';
import { HomeScreenUiValidationAction } from '../../../screens/userActions/HomeScreenActions/homeScreenUiValidationAction';
import { ProfileScreenAction } from '../../../screens/userActions/ProfileScreenActions/profileScreenAction';
import { LoginScreenActions } from '../../../screens/userActions/ProfileScreenActions/loginScreenAction';

let driver: Browser<'async'>;
let loginScreen : LoginScreen;
let homeScreenUiValidationAction: HomeScreenUiValidationAction;
let profileScreenAction: ProfileScreenAction;
let loginScreenActions: LoginScreenActions;
let registrationScreen : RegistrationScreen;
let forgotPasswordScreen: ForgotPasswordScreen;

const specName = 'Login screen tests';
declare let reporter: any;

describe(specName, () => {
  beforeAll(async () => {
    try {
      driver = await Driver.getDriver(specName);
      loginScreen = new LoginScreen(driver);
      homeScreenUiValidationAction = new HomeScreenUiValidationAction(driver);
      profileScreenAction = new ProfileScreenAction(driver);
      loginScreenActions = new LoginScreenActions(driver);
      registrationScreen = new RegistrationScreen(driver);
      forgotPasswordScreen = new ForgotPasswordScreen(driver);

      // Navigate to Profile screen
      await homeScreenUiValidationAction.tapProfileButton();
      await profileScreenAction.tapOnLoginButton();
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

  it('TC_57 Verify user cannot login with null credentials', async () => {
    try {
      const accountDetails = { username: '', password: '' };
      await loginScreenActions.login(accountDetails);
      const emailFieldErrorMessage = await loginScreen.getEmailFieldErrorMessage();
      const passwordErrorMessage = await loginScreen.getPasswordFieldErrorMessage();
      expect(emailFieldErrorMessage).to.equal('Email field cannot be empty');
      expect(passwordErrorMessage).to.equal('Password field cannot be empty');
    } catch (error) {
      console.error(`TC_57 failed: ${error.message}`);
      expect.fail(`TC_57 failed: ${error.message}`);
    }
  });

  it('TC_58 Verify user cannot login with null email and valid password', async () => {
    try {
      const accountDetails = { username: '', password: 'validPassword123' };
      await loginScreenActions.login(accountDetails);
      const emailFieldErrorMessage = await loginScreen.getEmailFieldErrorMessage();
      expect(emailFieldErrorMessage).to.equal('Email field cannot be empty');
    } catch (error) {
      console.error(`TC_58 failed: ${error.message}`);
      expect.fail(`TC_58 failed: ${error.message}`);
    }
  });

  it('TC_59 Verify user cannot login with invalid email format and valid password', async () => {
    try {
      const accountDetails = { username: 'invalidEmail', password: 'validPassword123' };
      await loginScreenActions.login(accountDetails);
      const emailFieldErrorMessage = await loginScreen.getEmailFormatErrorMessage();
      expect(emailFieldErrorMessage).to.equal('Email format is incorrect');
    } catch (error) {
      console.error(`TC_59 failed: ${error.message}`);
      expect.fail(`TC_59 failed: ${error.message}`);
    }
  });

  it('TC_60 Verify user cannot login with valid email and null password', async () => {
    try {
      const accountDetails = { username: 'validEmail@example.com', password: '' };
      await loginScreenActions.login(accountDetails);
      const passwordErrorMessage = await loginScreen.getPasswordFieldErrorMessage();
      expect(passwordErrorMessage).to.equal('Password field cannot be empty');
    } catch (error) {
      console.error(`TC_60 failed: ${error.message}`);
      expect.fail(`TC_60 failed: ${error.message}`);
    }
  });

  it('TC_61 Verify user cannot login with valid email and short password', async () => {
    try {
      const accountDetails = { username: 'validEmail@example.com', password: 'short' };
      await loginScreenActions.login(accountDetails);
      expect(await registrationScreen.isRegisterScreenDisplayed()).to.be.true;
      await registrationScreen.tapLoginLink();
    } catch (error) {
      console.error(`TC_61 failed: ${error.message}`);
      expect.fail(`TC_61 failed: ${error.message}`);
    }
  });

  it('TC_63 Verify user can navigate to Register page', async () => {
    try {
      await loginScreen.tapOnRegisterLink();
      expect(await registrationScreen.isRegisterScreenDisplayed()).to.be.true;
      await registrationScreen.tapLoginLink();
    } catch (error) {
      console.error(`TC_63 failed: ${error.message}`);
      expect.fail(`TC_63 failed: ${error.message}`);
    }
  });

  it('TC_62 Verify user can navigate to Forgot Password page', async () => {
    try {
      await loginScreen.tapForgotPasswordLink();
      expect(await forgotPasswordScreen.isForgotPasswordScreenDisplayed()).to.be.true;
    } catch (error) {
      console.error(`TC_62 failed: ${error.message}`);
      expect.fail(`TC_62 failed: ${error.message}`);
    }
  });
});
