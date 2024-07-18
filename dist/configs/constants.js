"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Constants = void 0;
// import { JsonReaderHelper } from '../utils/services/fileUtil/jsonReaderHelper';
const basicConfig_1 = require("./basicConfig");
const env_properties_1 = require("./env.properties");
var Constants;
(function (Constants) {
    let sendNotification = '';
    if (process.env.SendNotification === undefined)
        sendNotification = env_properties_1.EnvProperties.SendNotification;
    else
        sendNotification = process.env.SendNotification;
    let browserHeadless = '';
    if (process.env.Headless === undefined)
        browserHeadless = env_properties_1.EnvProperties.Headless.toString();
    else
        browserHeadless = process.env.Headless;
    // store the command line  arguments
    Constants.commandLineArguments = {
        env: process.env.Env ?? env_properties_1.EnvProperties.Env.toString(),
        platform: process.env.Platform ?? env_properties_1.EnvProperties.Platform.toString(),
        os: process.env.Os ?? env_properties_1.EnvProperties.Os.toString(),
        browser: process.env.Browser ?? env_properties_1.EnvProperties.Browser.toString(),
        headless: browserHeadless,
        cloudUserName: process.env.CloudUserName ?? env_properties_1.EnvProperties.CloudUserName.toString(),
        cloudKey: process.env.CloudKey ?? env_properties_1.EnvProperties.CloudKey.toString(),
        sendNotification,
        implicitTimeout: env_properties_1.EnvProperties.ImplicitTimeout,
    };
    Constants.env = Constants.commandLineArguments.env;
    Constants.projectPath = process.cwd();
    Constants.dataFolderPath = `${Constants.projectPath}/webservices/resources/testdata/${Constants.env}`;
    Constants.mobileApkFolderPath = `${Constants.projectPath}/ui/resources/apk`;
    Constants.uiDataFolderPath = `${Constants.projectPath}/ui/resources/testdata/`;
    Constants.tokensFolderPath = `${Constants.projectPath}/tokens`;
    const EnvJson = JSON.parse(JSON.stringify(basicConfig_1.BasicConfig));
    Constants.baseUrlUi = EnvJson[Constants.env].url;
})(Constants = exports.Constants || (exports.Constants = {}));
