export interface INotificationReporter {
    resetNotification(headerMessage: string): void;
    prepareNotificationJson(results: any): Promise<void>;
    sendNotification(sendSlackNotifications: boolean, webhookUrl: string): Promise<void>;
}
