"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerHelper = exports.LOGGER = void 0;
/* eslint import/no-mutable-exports: "off" */
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const winston_1 = __importDefault(require("winston"));
var LoggerHelper;
(function (LoggerHelper) {
    /**
     * this method will help in setting the logger
     */
    function setupLogger(specName) {
        const reportFolderPath = `${process.cwd()}/logs`;
        let loggerFileName = 'log.log';
        try {
            if (!(0, fs_1.existsSync)(reportFolderPath))
                (0, fs_1.mkdirSync)(reportFolderPath);
            if (!(specName === undefined || specName === '' || specName === null)) {
                loggerFileName = `${specName.replace(/[^\w\d]/gi, '_')}.log`;
            }
            // declare format of the logger
            const myformat = winston_1.default.format.combine(winston_1.default.format.colorize(), winston_1.default.format.timestamp({ format: 'DD-MM-YYYY HH:mm:ss' }), winston_1.default.format.align(), winston_1.default.format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`));
            if (!(0, fs_1.existsSync)(path_1.default.join(reportFolderPath, loggerFileName)))
                (0, fs_1.writeFileSync)(path_1.default.join(reportFolderPath, loggerFileName), '');
            // initialize the logger
            // if (LOGGER == undefined || LOGGER == null) {
            exports.LOGGER = winston_1.default.createLogger({
                level: 'debug',
                format: myformat,
                transports: [
                    new winston_1.default.transports.File({
                        filename: path_1.default.join(reportFolderPath, loggerFileName),
                        level: 'info',
                        maxsize: 5120000,
                    }),
                    new winston_1.default.transports.Console({
                        level: 'debug',
                    }),
                ],
            });
            exports.LOGGER.info('-----------------------------');
            exports.LOGGER.info('LOGGER setup complete');
            exports.LOGGER.info('-----------------------------');
            exports.LOGGER.info(`generating log file at ${reportFolderPath}/${loggerFileName}`);
            // }
        }
        catch (error) {
            console.info('-----------------------------');
            console.info('LOGGER setup Failed');
            console.info('-----------------------------');
            throw new Error(error);
        }
    }
    LoggerHelper.setupLogger = setupLogger;
})(LoggerHelper = exports.LoggerHelper || (exports.LoggerHelper = {}));
