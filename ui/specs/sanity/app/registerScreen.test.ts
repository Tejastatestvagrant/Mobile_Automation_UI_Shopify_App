/**
 * @group Sanity
 */

import { Browser } from 'webdriverio';
import {
  Driver, ProfileScreenAction, RegistrationScreenActions,
} from '../../../../uiExport';
import { registerUserCredential } from '../../../resources/Constants/constants';
import { HomeScreenUiValidationAction } from '../../../screens/userActions/HomeScreenActions/homeScreenUiValidationAction';

let driver: Browser<'async'>;
// let loginActions: LoginScreenActions;
let homeScreen : HomeScreenUiValidationAction;
let profileScreen : ProfileScreenAction;
let registrationScreen :RegistrationScreenActions;

declare let reporter: any;
const specName = 'Login app validation';
describe(specName, () => {
  beforeAll(async () => {
    driver = await Driver.getDriver(specName);
    homeScreen = new HomeScreenUiValidationAction(driver);
    profileScreen = new ProfileScreenAction(driver);
    registrationScreen = new RegistrationScreenActions(driver);
  });

  afterEach(async () => {
    await Driver.attachScreenshots(driver, reporter);
  });

  afterAll(async () => {
    await Driver.closeDrivers([driver]);
  });

  it('verify Registration of user is Successful', async () => {
    await homeScreen.tapProfileButton();
    await profileScreen.tapOnRegisterButton();
    await registrationScreen.registerNewUser(registerUserCredential.fullName, registerUserCredential.email, registerUserCredential.password, registerUserCredential.confirmPassword, registerUserCredential.mobileNumber);
  });
});
