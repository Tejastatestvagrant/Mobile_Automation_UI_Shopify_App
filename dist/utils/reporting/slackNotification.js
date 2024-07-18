"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlackNotification = void 0;
const fs_1 = __importDefault(require("fs"));
const webhook_1 = require("@slack/webhook");
class SlackNotification {
    constructor() {
        this.notificationJsonFile = './notifications/notification.json';
        this.allureReportLink = './notifications/allureReportLink.txt';
        this.branchNameFile = './notifications/branchName.txt';
        this.setupStatus = './tokens/setup_status.txt';
        this.attachments = [];
        this.failedColor = '#dc3545';
        this.normalColor = '#36a64f';
    }
    resetNotification(headerMessage) {
        try {
            const parseJson = { text: `*${headerMessage}*`, attachments: this.attachments };
            fs_1.default.writeFileSync(this.notificationJsonFile, JSON.stringify(parseJson));
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async prepareNotificationJson(results) {
        // let passedSpecsAsString = '';
        let failedSpecsAsString = '';
        // let pendingSpecAsString = '';
        let numPassedTestSuites = 0;
        let numFailedTestSuites = 0;
        let numPendingTestSuites = 0;
        let numTotalTestSuites = 0;
        let numPassingTests = 0;
        let numFailingTests = 0;
        let numPendingTests = 0;
        let numTotalTests = 0;
        // let testFilePath: string = '';
        try {
            numPassedTestSuites = results.numPassedTestSuites;
            numFailedTestSuites = results.numFailedTestSuites;
            numPendingTestSuites = results.numPendingTestSuites;
            numTotalTestSuites = results.numTotalTestSuites;
            const jenkinsJobLink = await fs_1.default.readFileSync(this.allureReportLink, 'utf-8');
            // const whoTriggeredJob = await fs.readFileSync(whoTriggeredJobFile, 'utf-8');
            const branchName = await fs_1.default.readFileSync(this.branchNameFile, 'utf-8');
            // let passedSpecNumbering:number = 1;
            let failedSpecNumbering = 1;
            // let pendingSpecNumbering:number = 1;
            // get each spec level details
            for (let index = 0; index < results.testResults.length; index += 1) {
                const tempFilePath = results.testResults[index].testFilePath.split('/');
                const testFilePath = tempFilePath[tempFilePath.length - 1].replace('.test.ts', '');
                let specName = '';
                if (results.testResults[index].testResults[0] !== undefined)
                    specName = results.testResults[index].testResults[0].ancestorTitles[0];
                else
                    specName = `Spec name not found ${testFilePath}`;
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
                if (tempNumFailingTests > 0) {
                    failedSpecsAsString += `${failedSpecNumbering}. ${specName} \t(*Failed tests - ${tempNumFailingTests}*)\n`;
                    failedSpecNumbering += 1;
                }
                // else if (tempNumPendingTests > 0) {
                //   pendingSpecAsString += `${pendingSpecNumbering}.${specName} (Total tests:${tempNumTotalTests}, Passed tests-${tempNumPassingTests}, Failed tests-${tempNumFailingTests}, Pending tests-${tempNumPendingTests})\n`;
                //   pendingSpecNumbering += 1;
                // } else {
                //   passedSpecsAsString += `${passedSpecNumbering}.${specName} (Total tests:${tempNumTotalTests}, Passed tests-${tempNumPassingTests}, Failed tests-${tempNumFailingTests}, Pending tests-${tempNumPendingTests})\n`;
                //   passedSpecNumbering += 1;
                // }
            }
            // read notification json file content
            const dataFileContent = await fs_1.default.readFileSync(this.notificationJsonFile);
            const parseJson = await JSON.parse(dataFileContent.toString());
            const totalExecutedSuites = numPassedTestSuites + numFailedTestSuites + numPendingTestSuites;
            await parseJson.attachments.push({
                color: this.normalColor,
                // pretext: '*Summary of execution*',
                text: `*Overall Test Suites Summary* - Total - *${numTotalTestSuites}* \t Executed - *${totalExecutedSuites}* \tPassed - *${numPassedTestSuites}*  \tFailed - *${numFailedTestSuites}* \tSkipped - *${numPendingTestSuites}* \n *Overall Test Case Summary* - Total - *${numTotalTests}* \tPassed - *${numPassingTests}* \tFailed - *${numFailingTests}* \tSkipped - *${numPendingTests}* \n Executed by using *${branchName.replace('\n', '')}* automation branch`,
                actions: [
                    {
                        type: 'button',
                        text: 'Click Here To View Report',
                        url: jenkinsJobLink.replace('\n', ''),
                    },
                ],
            });
            if (fs_1.default.readFileSync(this.setupStatus, 'utf-8') === 'FAILED') {
                await parseJson.attachments.push({
                    color: this.failedColor,
                    text: 'Pre-requisite script failed\nAll The Tests Got FAILED/SKIPPED!!!\nPlease see pipeline execution logs for more details',
                });
            }
            else if (numFailingTests > 0) {
                await parseJson.attachments.push({
                    color: this.failedColor,
                    pretext: 'Failed Test Suites',
                    text: failedSpecsAsString,
                });
            }
            else {
                await parseJson.attachments.push({
                    color: this.normalColor,
                    text: 'All The Tests Got Passed!!!',
                });
            }
            await fs_1.default.writeFileSync(this.notificationJsonFile, JSON.stringify(parseJson));
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async sendNotification(sendSlackNotifications, webhookUrl) {
        try {
            const dataFileContent = await fs_1.default.readFileSync(this.notificationJsonFile, 'utf-8');
            const webhook = new webhook_1.IncomingWebhook(webhookUrl);
            if (sendSlackNotifications)
                await webhook.send(await JSON.parse(dataFileContent));
        }
        catch (error) {
            throw new Error(error);
        }
    }
}
exports.SlackNotification = SlackNotification;
