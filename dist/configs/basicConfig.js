"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicConfig = void 0;
const credentials_1 = require("./credentials");
exports.BasicConfig = {
    qa: {
        apkName: 'ul-shopify.app',
        appCloudUrl: 'bs://b043f4d863699604ac6f924957d3375ae1c9451b',
        url: 'https://ekam.studio/',
        credentials: {
            testUser: credentials_1.Credentials.user1,
        },
    },
    dev: {
        apkName: 'app-twa-trafyn.apk',
        appCloudUrl: '',
        url: 'https://www.flipkart.com/',
        credentials: {
            testUser: credentials_1.Credentials.user1,
        },
    },
};
