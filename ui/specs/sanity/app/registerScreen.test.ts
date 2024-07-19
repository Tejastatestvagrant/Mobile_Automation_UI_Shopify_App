/**
 * @group Sanity
 */

import { Browser } from 'webdriverio';
import { expect } from 'chai';
import {
  Driver, ProfileScreenAction, RegistrationScreenActions,
} from '../../../../uiExport';
import { registerUserCredential } from '../../../resources/Constants/constants';
import { HomeScreenUiValidationAction } from '../../../screens/userActions/HomeScreenActions/homeScreenUiValidationAction';
import OtpScreenAction from '../../../screens/userActions/ProfileScreenActions/otpScreenAction';

let driver: Browser<'async'>;
// let loginActions: LoginScreenActions;
let homeScreen : HomeScreenUiValidationAction;
let profileScreen : ProfileScreenAction;
let registrationScreen :RegistrationScreenActions;
let otpScreen : OtpScreenAction;

declare let reporter: any;
const specName = 'Login app validation';
describe(specName, () => {
  beforeAll(async () => {
    driver = await Driver.getDriver(specName);
    homeScreen = new HomeScreenUiValidationAction(driver);
    profileScreen = new ProfileScreenAction(driver);
    registrationScreen = new RegistrationScreenActions(driver);
    otpScreen = new OtpScreenAction(driver);
  });

  afterEach(async () => {
    await Driver.attachScreenshots(driver, reporter);
  });

  afterAll(async () => {
    await Driver.closeDrivers([driver]);
  });

  it('verify Registration of user is Sucessfull', async () => {
    await homeScreen.tapProfileButton();
    await profileScreen.tapOnRegisterButton();

    await registrationScreen.registerNewUser(registerUserCredential.fullName, registerUserCredential.email, registerUserCredential.password, registerUserCredential.confirmPassword, registerUserCredential.mobileNumber);
    // await registrationScreen.tapRegisterHeader();
    await otpScreen.fillOtp(registerUserCredential.otp);
    await otpScreen.tapOnVerifyButton();
    expect(1).to.be.true;
    //    expect(registrationScreen.)
  });
});
