import { INotificationReporter } from './reportingInterface';
export declare class DiscordNotification implements INotificationReporter {
    notificationJsonFile: string;
    allureReportLink: string;
    branchNameFile: string;
    setupStatus: string;
    passedColor: string;
    failedColor: string;
    normalColor: string;
    pendingColor: string;
    resetNotification(title: string): void;
    prepareNotificationJson(results: any): Promise<void>;
    sendNotification(sendSlackNotifications: boolean, webhookUrl: string): Promise<void>;
}
