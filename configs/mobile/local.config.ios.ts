import { JsonReaderHelper, Constants } from '../../webservicesExport';
import { BasicConfig } from '../basicConfig';
// const basicConfigFilePath: string = Constants.basicConfigFilePath;
const apkName = JsonReaderHelper.readAttribute(`$.${Constants.commandLineArguments.env}.apkName`, BasicConfig);

const apkFilePath = `${Constants.mobileApkFolderPath}/${apkName}`;
export const LocalConfigIos = {
  // if you guys using appium commandline for starting server then try using cmd
  // appium --base-path /wd/hub
  // change hostname to 0.0.0.0 if in case doesn't work for localhost
  // we tried appium desktop version 1.21.0
  hostname: 'localhost',
  port: 4723,
  path: '/wd/hub',
  logLevel: 'error',
  services: [
    [
      'appium',
      {
        command: 'appium',
        args: {
          // relaxedSecurity: true,
          platformName: 'iOS',
          // allowInsecure: 'chromedriver_autodownload',
        },
      },
    ],
  ],
  capabilities: {
    'appium:app': apkFilePath,
    platformName: 'iOS',
    'appium:deviceName': 'iPhone 14 Plus',
    'appium:platformVersion': '17.5',
    'appium:automationName': 'XCUITest',
    'appium:orientation': 'PORTRAIT',
    // 'appium:udid': 'F64602BC-4655-4967-A158-B5B4CBBF0B66',
    // 'appium:appPackage': 'com.swaglabsmobileapp',
    // 'appium:appActivity': 'com.swaglabsmobileapp.MainActivity',
    // 'appium:appWaitPackage': 'com.android.chrome',
    // 'appium:appWaitActivity': '*.TraderWebAppActivity,*.TwaTraderLauncherActivity,*.TranslucentCustomTabActivity',
    'appium:noReset': false,
    // 'appium:fullReset': true,
    // 'appium:gpsEnabled': false,
    // 'appium:enforceAppInstall': true,
    'appium:newCommandTimeout': 240,
    // 'appium:nativeWebScreenshot': true,
    'appium:autoGrantPermissions': true,
    'appium:autoAcceptAlerts': true,
  },
  coloredLogs: false,
  deprecationWarnings: true,
  bail: 0,
  waitforTimeout: 30000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 1,
};
