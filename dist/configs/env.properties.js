"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvProperties = void 0;
const env_properties_enums_1 = require("./env.properties.enums");
var EnvProperties;
(function (EnvProperties) {
    // common properties
    EnvProperties.Env = env_properties_enums_1.EnvPropertiesEnums.Env.qa;
    EnvProperties.Platform = env_properties_enums_1.EnvPropertiesEnums.Platform.localApp;
    EnvProperties.Os = env_properties_enums_1.EnvPropertiesEnums.Os.ios;
    EnvProperties.Headless = env_properties_enums_1.EnvPropertiesEnums.Headless.false;
    EnvProperties.Browser = env_properties_enums_1.EnvPropertiesEnums.Browser.chrome;
    // Notification related
    EnvProperties.SendNotification = env_properties_enums_1.EnvPropertiesEnums.SendNotification.false;
    EnvProperties.NotificationType = env_properties_enums_1.EnvPropertiesEnums.NotificationType.Slack;
    EnvProperties.WebhookUrl = '';
    // Cloud related credentials
    EnvProperties.CloudUserName = '';
    EnvProperties.CloudKey = '';
    // Global timeouts
    EnvProperties.ImplicitTimeout = 30000;
})(EnvProperties = exports.EnvProperties || (exports.EnvProperties = {}));
