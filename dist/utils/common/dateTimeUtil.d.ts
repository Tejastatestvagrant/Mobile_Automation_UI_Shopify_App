/**
 * DateTime helper will have common reusable methods related to date and time
 * refer page -https://www.npmjs.com/package/dateformat
 */
export declare module DateTimeUtil {
    /**
     * get today date
     * @returns
     */
    function getTodayDate(): Promise<string>;
    /**
     * convert passed date to specific format
     * @param date
     * @param format
     * @returns
     */
    function convertDate(date: Date, format: string): Promise<string>;
    /**
     * get date difference in days
     * @param date1
     * @param date2
     * @returns
     */
    function getDifferenceInDays(date1: Date, date2: Date): Promise<number>;
    /**
     * get date difference in hours
     * @param date1
     * @param date2
     * @returns
     */
    function getDifferenceInHours(date1: Date, date2: Date): Promise<number>;
    /**
     * get date difference in minutes
     * @param date1
     * @param date2
     * @returns
     */
    function getDifferenceInMinutes(date1: Date, date2: Date): Promise<number>;
    /**
     * get date difference in seconds
     * @param date1
     * @param date2
     * @returns
     */
    function getDifferenceInSeconds(date1: Date, date2: Date): Promise<number>;
    /**
     * get date difference in milli seconds
     * @param date1
     * @param date2
     * @returns
     */
    function getDifferenceInMilliSeconds(date1: Date, date2: Date): Promise<number>;
    /**
     * adds minutes to passed date object
     * @param date
     * @param minutes
     * @returns
     */
    function addMinutesToDate(date: Date, minutes: number): Promise<Date>;
}
