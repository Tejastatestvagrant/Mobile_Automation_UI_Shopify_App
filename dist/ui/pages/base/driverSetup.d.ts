import { Reporter } from 'jest-allure/dist/Reporter';
import { Browser } from 'webdriverio';
import { EnvPropertiesEnums } from '../../../configs/env.properties.enums';
export declare module Driver {
    function getMobileDriver(specName: string, platform?: EnvPropertiesEnums.Platform): Promise<Browser<'async'>>;
    function getWebDriver(specName: string, platform?: EnvPropertiesEnums.Platform, optURL?: string): Promise<Browser<'async'>>;
    function attachScreenshots(driver: Browser<'async'>, reporter: Reporter): Promise<void>;
    /**
     * get driver based on PLATFORM parameter
     * @param specName
     * @param platform
     * @returns
     */
    function getDriver(specName: string, platform?: EnvPropertiesEnums.Platform, optURL?: string): Promise<Browser<'async'>>;
    /**
     * helps in closing the drivers
     * @param drivers
     */
    function closeDrivers(drivers: Browser<'async'>[]): Promise<void>;
}
