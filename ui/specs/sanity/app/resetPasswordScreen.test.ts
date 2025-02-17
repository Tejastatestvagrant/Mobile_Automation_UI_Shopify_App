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
import { ResetPasswordScreenActions } from '../../../screens/userActions/ProfileScreenActions/resetPasswordScreenAction';
import { loginUserCredential } from '../../../resources/Constants/constants';

let driver: Browser<'async'>;
let loginScreen : LoginScreen;
let homeScreenUiValidationAction: HomeScreenUiValidationAction;
let profileScreenAction: ProfileScreenAction;
let forgotPasswordScreen: ForgotPasswordScreen;
let resetPasswordScreenAction: ResetPasswordScreenActions;

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
      resetPasswordScreenAction = new ResetPasswordScreenActions(driver);

      // Navigate to Reset Password screen
      await homeScreenUiValidationAction.tapProfileButton();
      await profileScreenAction.tapOnLoginButton();
      await loginScreen.tapForgotPasswordLink();
      await forgotPasswordScreen.fillForgotPasswordEmail(loginUserCredential.email);
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

  it('Verify user cannot Proceed with null credentials  @Smoke @Regression ', async () => {
    await resetPasswordScreenAction.tapResetPasswordButton();
    const passwordError = await resetPasswordScreenAction.getPasswordEmptyErrorMsg();
    const confirmPassError = await resetPasswordScreenAction.getConfirmPasswordEmptyErrorMsg();
    expect(passwordError).to.be.equal('Password field cannot be empty');
    expect(confirmPassError).to.be.equal('Confirm password field cannot be empty');
  });

  it('Verify user cannot Proceed with null credentials  @Smoke ', async () => {
    const accountDetails = { newPassword: '', confirmPassword: '' };
    await resetPasswordScreenAction.resetPassword(accountDetails);
    const passwordError = await resetPasswordScreenAction.getPasswordFormatErrorMsg();
    const confirmPassError = await resetPasswordScreenAction.getConfirmPasswordEmptyErrorMsg();
    expect(passwordError).to.be.equal('Password should be minimum of 5 characters');
    expect(confirmPassError).to.be.equal('Confirm password field cannot be empty');
  });

  it('Verify user cannot Proceed with invalid Format credentials  @Smoke  ', async () => {
    const accountDetails = { newPassword: 'T', confirmPassword: '' };
    await resetPasswordScreenAction.resetPassword(accountDetails);
    expect(await resetPasswordScreenAction.getPasswordFormatErrorMsg()).to.be.equal('Password should be minimum of 5 characters');
    expect(await resetPasswordScreenAction.getConfirmPasswordNotMatchedErrorMsg()).to.be.equal('Confirm password is not matched with password');
  });

  it('Verify user cannot Proceed with new and confirm password not matches @Smoke @Regression', async () => {
    const accountDetails = { newPassword: 'Password', confirmPassword: 'password' };
    await resetPasswordScreenAction.resetPassword(accountDetails);
    expect(await resetPasswordScreenAction.getConfirmPasswordNotMatchedErrorMsg()).to.be.equal('Confirm password is not matched with password');
  });

  it('Verify user can Proceed with valid Password  @Smoke @Regression', async () => {
    const accountDetails = { newPassword: 'Password', confirmPassword: 'Password' };
    await resetPasswordScreenAction.resetPassword(accountDetails);
    expect(await resetPasswordScreenAction.validateSuccessPopup()).to.be.equal(true);
  });
});
