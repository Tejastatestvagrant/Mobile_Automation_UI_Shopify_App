/**
 * @group Sanity
 */

import { Browser } from 'webdriverio';
import { Driver, LoginScreenActions } from '../../../../uiExport';

/**
 * Home Page Validation
 */
let driver: Browser<'async'>;
let loginActions: LoginScreenActions;

declare let reporter: any;
const specName = 'Login app validation';
describe(specName, () => {
  beforeAll(async () => {
    driver = await Driver.getDriver(specName);
    loginActions = new LoginScreenActions(driver);
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
  it('verify login', async () => {
    await loginActions.login({ username: 'standard_user', password: 'secret_sauce' });
  });
});
