"use strict";
/* eslint no-unused-vars: "off" */
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const constants_1 = require("../configs/constants");
const webservicesExport_1 = require("../webservicesExport");
const env_properties_1 = require("../configs/env.properties");
const env_properties_enums_1 = require("../configs/env.properties.enums");
const env = constants_1.Constants.commandLineArguments.env;
const group = process.env.group;
const platform = constants_1.Constants.commandLineArguments.platform;
const headless = Boolean(constants_1.Constants.commandLineArguments.headless);
// slack notification
let slackDefaultMessage = '';
const dateForReporting = `${new Date().toLocaleDateString('en-IN', {
    year: '2-digit', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', timeZone: 'Asia/Kolkata',
})}`;
if (platform === undefined) {
    slackDefaultMessage = `_API_ ${group} Test Report on ENV-_${(env).toUpperCase()}_ Date-${dateForReporting}`;
}
else if (platform.toLowerCase().includes('web')) {
    slackDefaultMessage = `_WEB_ ${group} Test Report on ENV-_${(env).toUpperCase()}_ Date-${dateForReporting}`;
}
else {
    slackDefaultMessage = `_APP_ ${group} Test Report on ENV-_${(env).toUpperCase()}_ Date-${dateForReporting}`;
}
// allure
const allureResultDir = './allure-results';
const allureEnvPropFile = `${allureResultDir}/environment.properties`;
module.exports = async () => {
    try {
        webservicesExport_1.LoggerHelper.setupLogger('Setup');
        console.log('------Running SETUP---------');
        // send slack notification
        if (constants_1.Constants.commandLineArguments.sendNotification === 'true') {
            if (env_properties_1.EnvProperties.NotificationType === env_properties_enums_1.EnvPropertiesEnums.NotificationType.Slack) {
                const notification = new webservicesExport_1.SlackNotification();
                notification.resetNotification(slackDefaultMessage);
            }
            else if (env_properties_1.EnvProperties.NotificationType === env_properties_enums_1.EnvPropertiesEnums.NotificationType.Discord) {
                const notification = new webservicesExport_1.DiscordNotification();
                notification.resetNotification(slackDefaultMessage);
            }
        }
        // details on html report
        if (!(0, fs_1.existsSync)(allureResultDir)) {
            (0, fs_1.mkdirSync)(allureResultDir);
        }
        (0, fs_1.writeFileSync)(allureEnvPropFile, `ENV=${env}`);
        (0, fs_1.appendFileSync)(allureEnvPropFile, `\nUI_Url=${constants_1.Constants.baseUrlUi}`);
        (0, fs_1.appendFileSync)(allureEnvPropFile, `\nApi_Url=${webservicesExport_1.Urls.baseUrl}`);
        (0, fs_1.appendFileSync)(allureEnvPropFile, `\nSuite=${group}`);
        (0, fs_1.appendFileSync)(allureEnvPropFile, `\nPLATFORM=${platform}`);
        (0, fs_1.appendFileSync)(allureEnvPropFile, `\nHEADLESS=${headless}`);
    }
    catch (error) {
        console.error(error);
        // throw new Error('-------Something went badly wrong while executing setup.js!!!------');
        console.error('-------Something went badly wrong while executing setup.js!!!------');
    }
};
