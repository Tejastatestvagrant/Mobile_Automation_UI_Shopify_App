"use strict";
/* eslint no-unused-vars: "off" */
Object.defineProperty(exports, "__esModule", { value: true });
const env_properties_1 = require("../configs/env.properties");
const env_properties_enums_1 = require("../configs/env.properties.enums");
const webservicesExport_1 = require("../webservicesExport");
const sendNotification = webservicesExport_1.Constants.commandLineArguments.sendNotification === 'true';
module.exports = async () => {
    try {
        console.log('------Running TEARDOWN---------');
        // if (process.env.npm_lifecycle_event.toLowerCase().includes('local')) sendNotification = false;
        console.log(`--------send slack notification---------${sendNotification}`);
        if (sendNotification) {
            if (env_properties_1.EnvProperties.NotificationType === env_properties_enums_1.EnvPropertiesEnums.NotificationType.Slack) {
                const notification = new webservicesExport_1.SlackNotification();
                const webhookUrl = env_properties_1.EnvProperties.WebhookUrl;
                await notification.sendNotification(sendNotification, webhookUrl);
            }
            else if (env_properties_1.EnvProperties.NotificationType === env_properties_enums_1.EnvPropertiesEnums.NotificationType.Discord) {
                const notification = new webservicesExport_1.DiscordNotification();
                const webhookUrl = env_properties_1.EnvProperties.WebhookUrl;
                await notification.sendNotification(sendNotification, webhookUrl);
            }
        }
        await webservicesExport_1.WaitUtil.sleep(5000);
    }
    catch (error) {
        console.error(error);
    }
};
