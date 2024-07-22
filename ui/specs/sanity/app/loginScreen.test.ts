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

  it('Verify user cannot login with null credentials  @Smoke @Regression', async () => {
    try {
      const accountDetails = { email: '', password: '' };
      await loginScreenActions.login(accountDetails);
      const emailFieldErrorMessage = await loginScreen.getEmailFieldErrorMessage();
      const passwordErrorMessage = await loginScreen.getPasswordFieldErrorMessage();
      expect(emailFieldErrorMessage).to.equal('Email field cannot be empty');
      expect(passwordErrorMessage).to.equal('Password field cannot be empty');
    } catch (error) {
      console.error(`failed: ${error.message}`);
      expect.fail(`failed: ${error.message}`);
    }
  });

  it('Verify user cannot login with null email and valid password  @Smoke', async () => {
    try {
      const accountDetails = { email: '', password: 'validPassword123' };
      await loginScreenActions.login(accountDetails);
      const emailFieldErrorMessage = await loginScreen.getEmailFieldErrorMessage();
      expect(emailFieldErrorMessage).to.equal('Email field cannot be empty');
    } catch (error) {
      console.error(`failed: ${error.message}`);
      expect.fail(`failed: ${error.message}`);
    }
  });

  it('Verify user cannot login with invalid email format and valid password  @Smoke ', async () => {
    try {
      const accountDetails = { email: 'invalidEmail', password: 'validPassword123' };
      await loginScreenActions.login(accountDetails);
      const emailFieldErrorMessage = await loginScreen.getEmailFormatErrorMessage();
      expect(emailFieldErrorMessage).to.equal('Email format is incorrect');
    } catch (error) {
      console.error(`failed: ${error.message}`);
      expect.fail(`failed: ${error.message}`);
    }
  });

  it('Verify user cannot login with valid email and null password  @Smoke @Regression', async () => {
    try {
      const accountDetails = { email: 'validEmail@example.com', password: '' };
      await loginScreenActions.login(accountDetails);
      const passwordErrorMessage = await loginScreen.getPasswordFieldErrorMessage();
      expect(passwordErrorMessage).to.equal('Password field cannot be empty');
    } catch (error) {
      console.error(`failed: ${error.message}`);
      expect.fail(`failed: ${error.message}`);
    }
  });

  it('Verify user cannot login with valid email and short password  @Smoke @Regression ', async () => {
    try {
      const accountDetails = { email: 'validEmail@example.com', password: 'short' };
      await loginScreenActions.login(accountDetails);
      expect(await registrationScreen.isRegisterScreenDisplayed()).to.be.true;
      await registrationScreen.tapLoginLink();
    } catch (error) {
      console.error(`failed: ${error.message}`);
      expect.fail(`failed: ${error.message}`);
    }
  });

  it('Verify user can navigate to Register page  @Smoke @Regression', async () => {
    try {
      await loginScreen.tapOnRegisterLink();
      expect(await registrationScreen.isRegisterScreenDisplayed()).to.be.true;
      await registrationScreen.tapLoginLink();
    } catch (error) {
      console.error(`failed: ${error.message}`);
      expect.fail(`failed: ${error.message}`);
    }
  });

  it('Verify user can navigate to Forgot Password page  @Smoke @Regression', async () => {
    try {
      await loginScreen.tapForgotPasswordLink();
      expect(await forgotPasswordScreen.isForgotPasswordScreenDisplayed()).to.be.true;
    } catch (error) {
      console.error(`failed: ${error.message}`);
      expect.fail(`failed: ${error.message}`);
    }
  });
});
