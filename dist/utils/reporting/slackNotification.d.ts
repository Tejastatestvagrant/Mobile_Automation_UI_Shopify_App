import { INotificationReporter } from './reportingInterface';
export declare class SlackNotification implements INotificationReporter {
    notificationJsonFile: string;
    allureReportLink: string;
    branchNameFile: string;
    setupStatus: string;
    attachments: any[];
    failedColor: string;
    normalColor: string;
    resetNotification(headerMessage: string): void;
    prepareNotificationJson(results: any): Promise<void>;
    sendNotification(sendSlackNotifications: boolean, webhookUrl: string): Promise<void>;
}
