"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateTimeUtil = void 0;
const dateformat_1 = __importDefault(require("dateformat"));
const webservicesExport_1 = require("../../webservicesExport");
/**
 * DateTime helper will have common reusable methods related to date and time
 * refer page -https://www.npmjs.com/package/dateformat
 */
var DateTimeUtil;
(function (DateTimeUtil) {
    /**
     * get today date
     * @returns
     */
    async function getTodayDate() {
        let date;
        try {
            date = new Date().toString();
            // date = dateFormat();
        }
        catch (error) {
            webservicesExport_1.LOGGER.error(error.stack);
            throw new Error(error);
        }
        return date;
    }
    DateTimeUtil.getTodayDate = getTodayDate;
    /**
     * convert passed date to specific format
     * @param date
     * @param format
     * @returns
     */
    async function convertDate(date, format) {
        let convertedDate;
        try {
            convertedDate = (0, dateformat_1.default)(date, format);
        }
        catch (error) {
            webservicesExport_1.LOGGER.error(error.stack);
            throw new Error(error);
        }
        return convertedDate;
    }
    DateTimeUtil.convertDate = convertDate;
    /**
     * get date difference in days
     * @param date1
     * @param date2
     * @returns
     */
    async function getDifferenceInDays(date1, date2) {
        try {
            const diffInMs = Math.abs(date2.getTime() - date1.getTime());
            return diffInMs / (1000 * 60 * 60 * 24);
        }
        catch (error) {
            webservicesExport_1.LOGGER.error(error.stack);
            throw new Error(error);
        }
    }
    DateTimeUtil.getDifferenceInDays = getDifferenceInDays;
    /**
     * get date difference in hours
     * @param date1
     * @param date2
     * @returns
     */
    async function getDifferenceInHours(date1, date2) {
        try {
            const diffInMs = Math.abs(date2.getTime() - date1.getTime());
            return diffInMs / (1000 * 60 * 60);
        }
        catch (error) {
            webservicesExport_1.LOGGER.error(error.stack);
            throw new Error(error);
        }
    }
    DateTimeUtil.getDifferenceInHours = getDifferenceInHours;
    /**
     * get date difference in minutes
     * @param date1
     * @param date2
     * @returns
     */
    async function getDifferenceInMinutes(date1, date2) {
        try {
            const diffInMs = Math.abs(date2.getTime() - date1.getTime());
            return diffInMs / (1000 * 60);
        }
        catch (error) {
            webservicesExport_1.LOGGER.error(error.stack);
            throw new Error(error);
        }
    }
    DateTimeUtil.getDifferenceInMinutes = getDifferenceInMinutes;
    /**
     * get date difference in seconds
     * @param date1
     * @param date2
     * @returns
     */
    async function getDifferenceInSeconds(date1, date2) {
        try {
            const diffInMs = Math.abs(date2.getTime() - date1.getTime());
            return diffInMs / 1000;
        }
        catch (error) {
            webservicesExport_1.LOGGER.error(error.stack);
            throw new Error(error);
        }
    }
    DateTimeUtil.getDifferenceInSeconds = getDifferenceInSeconds;
    /**
     * get date difference in milli seconds
     * @param date1
     * @param date2
     * @returns
     */
    async function getDifferenceInMilliSeconds(date1, date2) {
        try {
            const diffInMs = Math.abs(date2.getTime() - date1.getTime());
            return diffInMs;
        }
        catch (error) {
            webservicesExport_1.LOGGER.error(error.stack);
            throw new Error(error);
        }
    }
    DateTimeUtil.getDifferenceInMilliSeconds = getDifferenceInMilliSeconds;
    /**
     * adds minutes to passed date object
     * @param date
     * @param minutes
     * @returns
     */
    async function addMinutesToDate(date, minutes) {
        try {
            return new Date(date.getTime() + minutes * 60000);
        }
        catch (error) {
            webservicesExport_1.LOGGER.error(error.stack);
            throw new Error(error);
        }
    }
    DateTimeUtil.addMinutesToDate = addMinutesToDate;
})(DateTimeUtil = exports.DateTimeUtil || (exports.DateTimeUtil = {}));
