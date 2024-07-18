"use strict";
/* eslint no-shadow: "off" */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvPropertiesEnums = void 0;
var EnvPropertiesEnums;
(function (EnvPropertiesEnums) {
    let Env;
    (function (Env) {
        Env["qa"] = "qa";
        Env["dev"] = "dev";
    })(Env = EnvPropertiesEnums.Env || (EnvPropertiesEnums.Env = {}));
    let Os;
    (function (Os) {
        Os["android"] = "android";
        Os["ios"] = "ios";
    })(Os = EnvPropertiesEnums.Os || (EnvPropertiesEnums.Os = {}));
    let Platform;
    (function (Platform) {
        Platform["localWeb"] = "localWeb";
        Platform["lambdatestWeb"] = "lambdatestWeb";
        Platform["browserstackWeb"] = "browserstackWeb";
        Platform["localApp"] = "localApp";
        Platform["lambdatestApp"] = "lambdatestApp";
        Platform["browserstackApp"] = "browserstackApp";
    })(Platform = EnvPropertiesEnums.Platform || (EnvPropertiesEnums.Platform = {}));
    let Headless;
    (function (Headless) {
        Headless["true"] = "true";
        Headless["false"] = "false";
    })(Headless = EnvPropertiesEnums.Headless || (EnvPropertiesEnums.Headless = {}));
    let Browser;
    (function (Browser) {
        Browser["chrome"] = "chrome";
        Browser["firefox"] = "firefox";
        Browser["safari"] = "safari";
    })(Browser = EnvPropertiesEnums.Browser || (EnvPropertiesEnums.Browser = {}));
    let SendNotification;
    (function (SendNotification) {
        SendNotification["true"] = "true";
        SendNotification["false"] = "false";
    })(SendNotification = EnvPropertiesEnums.SendNotification || (EnvPropertiesEnums.SendNotification = {}));
    let NotificationType;
    (function (NotificationType) {
        NotificationType["Slack"] = "Slack";
        NotificationType["Discord"] = "Discord";
    })(NotificationType = EnvPropertiesEnums.NotificationType || (EnvPropertiesEnums.NotificationType = {}));
})(EnvPropertiesEnums = exports.EnvPropertiesEnums || (exports.EnvPropertiesEnums = {}));
