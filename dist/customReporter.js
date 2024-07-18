"use strict";
/* eslint no-underscore-dangle: 0 */
/* eslint class-methods-use-this: 0 */
/* eslint no-promise-executor-return: 0 */
Object.defineProperty(exports, "__esModule", { value: true });
const webservicesExport_1 = require("./webservicesExport");
const env_properties_1 = require("./configs/env.properties");
const env_properties_enums_1 = require("./configs/env.properties.enums");
class MyCustomReporter {
    constructor(globalConfig) {
        this._globalConfig = this;
        this._globalConfig = globalConfig;
        //   this._options = options;
    }
    /**
       * on execution complete get results
       * @param {*} contexts
       * @param {*} results
       */
    async onRunComplete(contexts, results) {
        // waiting for 2sec to print the log messages if any pending
        await this.sleep(10000);
        if (env_properties_1.EnvProperties.NotificationType === env_properties_enums_1.EnvPropertiesEnums.NotificationType.Slack) {
            const notification = new webservicesExport_1.SlackNotification();
            await notification.prepareNotificationJson(results);
        }
        else if (env_properties_1.EnvProperties.NotificationType === env_properties_enums_1.EnvPropertiesEnums.NotificationType.Discord) {
            const notification = new webservicesExport_1.DiscordNotification();
            await notification.prepareNotificationJson(results);
        }
        console.log('------RUN COMPLETE------');
    }
    async sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
}
module.exports = MyCustomReporter;
