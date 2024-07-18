"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscordNotification = void 0;
const fs_1 = __importDefault(require("fs"));
const superagent_1 = __importDefault(require("superagent"));
const loggerHelper_1 = require("./loggerHelper");
class DiscordNotification {
    constructor() {
        this.notificationJsonFile = './notifications/notification.json';
        this.allureReportLink = './notifications/allureReportLink.txt';
        this.branchNameFile = './notifications/branchName.txt';
        this.setupStatus = './tokens/setup_status.txt';
        this.passedColor = '65280';
        this.failedColor = '15299665';
        this.normalColor = '16777215';
        this.pendingColor = '13882323';
    }
    resetNotification(title) {
        try {
            const parseJson = {
                username: 'Webhook',
                embeds: [{
                        title, color: '', description: '', fields: [],
                    }],
            };
            fs_1.default.writeFileSync(this.notificationJsonFile, JSON.stringify(parseJson));
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async prepareNotificationJson(results) {
        let passedSpecsAsString = '';
        let failedSpecsAsString = '';
        let pendingSpecAsString = '';
        let numPassedTestSuites = 0;
        let numFailedTestSuites = 0;
        let numPendingTestSuites = 0;
        let numTotalTestSuites = 0;
        let numPassingTests = 0;
        let numFailingTests = 0;
        let numPendingTests = 0;
        let numTotalTests = 0;
        let testFileName = '';
        try {
            numPassedTestSuites = results.numPassedTestSuites;
            numFailedTestSuites = results.numFailedTestSuites;
            numPendingTestSuites = results.numPendingTestSuites;
            numTotalTestSuites = results.numTotalTestSuites;
            const reportLink = fs_1.default.readFileSync(this.allureReportLink, 'utf-8');
            // get each spec level details
            for (let index = 0; index < results.testResults.length; index += 1) {
                const tempFilePath = results.testResults[index].testFilePath.split('/');
                testFileName = tempFilePath[tempFilePath.length - 1];
                let tempNumPassingTests = 0;
                let tempNumFailingTests = 0;
                let tempNumPendingTests = 0;
                let tempNumTotalTests = 0;
                tempNumPassingTests = results.testResults[index].numPassingTests;
                tempNumFailingTests = results.testResults[index].numFailingTests;
                tempNumPendingTests = results.testResults[index].numPendingTests;
                numPassingTests += tempNumPassingTests;
                numFailingTests += tempNumFailingTests;
                numPendingTests += tempNumPendingTests;
                tempNumTotalTests = tempNumPassingTests + tempNumFailingTests + tempNumPendingTests;
                numTotalTests += tempNumTotalTests;
                if (tempNumPendingTests > 0) {
                    pendingSpecAsString += `${testFileName} (Total tests:${tempNumTotalTests}, Passed tests-${tempNumPassingTests}, Failed tests-${tempNumFailingTests}, Pending tests-${tempNumPendingTests})\n`;
                }
                else if (tempNumFailingTests > 0) {
                    failedSpecsAsString += `${testFileName} (Total tests:${tempNumTotalTests}, Passed tests-${tempNumPassingTests}, Failed tests-${tempNumFailingTests}, Pending tests-${tempNumPendingTests})\n`;
                }
                else {
                    passedSpecsAsString += `${testFileName} (Total tests:${tempNumTotalTests}, Passed tests-${tempNumPassingTests}, Failed tests-${tempNumFailingTests}, Pending tests-${tempNumPendingTests})\n`;
                }
            }
            // read notification json file content
            const dataFileContent = fs_1.default.readFileSync(this.notificationJsonFile, 'utf-8');
            const notificationPayload = JSON.parse(dataFileContent);
            const totalExecutedSuites = numPassedTestSuites + numFailedTestSuites + numPendingTestSuites;
            notificationPayload.embeds[0].color = this.normalColor;
            // removing port number
            notificationPayload.embeds[0].description = `[***__View Detailed HTML Report__***](${reportLink.replace(/:\d{4}/, '')})`;
            notificationPayload.embeds[0].fields.push({
                name: 'Overall sepcs summary',
                value: `Total Suites: ${numTotalTestSuites} \t Suites Executed: ${totalExecutedSuites} \tPassed: ${numPassedTestSuites}  \tFailed: ${numFailedTestSuites} \tPending: ${numPendingTestSuites}`,
            });
            notificationPayload.embeds[0].fields.push({
                name: 'Overall tests summary',
                value: `Total: ${numTotalTests} \tPassed: ${numPassingTests} \tFailed: ${numFailingTests} \tPending: ${numPendingTests}`,
            });
            notificationPayload.embeds.push({
                title: 'Failed specs',
                color: this.failedColor,
                description: failedSpecsAsString,
                fields: [],
            });
            notificationPayload.embeds.push({
                title: 'Passed specs',
                color: this.passedColor,
                description: passedSpecsAsString,
                fields: [],
            });
            notificationPayload.embeds.push({
                title: 'Pending specs',
                color: this.pendingColor,
                description: pendingSpecAsString,
                fields: [],
            });
            // write the details to notification json file
            fs_1.default.writeFileSync(this.notificationJsonFile, JSON.stringify(notificationPayload));
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async sendNotification(sendSlackNotifications, webhookUrl) {
        try {
            let requestResponse;
            const dataFileContent = await fs_1.default.readFileSync(this.notificationJsonFile, 'utf-8');
            const headersParam = {
                'Content-Type': 'application/json',
            };
            if (sendSlackNotifications) {
                requestResponse = await superagent_1.default.post(webhookUrl).set(headersParam).send(dataFileContent);
                if (requestResponse.status === 204 || requestResponse.status === 200)
                    loggerHelper_1.LOGGER.info('Notification sent to Discord');
                else {
                    console.error(`notification response status-${requestResponse.status}`);
                    console.error(`notification response status-${await requestResponse.statusCode}`);
                    throw new Error('Something went wrong while sending notification to Discord');
                }
            }
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
}
exports.DiscordNotification = DiscordNotification;
