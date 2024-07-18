"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const uiExport_1 = require("../../../../uiExport");
/**
 * Docs page validation
 */
let driver;
let docsActions;
const specName = 'Ekam home page validation';
describe('specName', () => {
    beforeAll(async () => {
        driver = await uiExport_1.Driver.getDriver(specName);
        docsActions = new uiExport_1.DocsActions(driver);
    });
    afterEach(async () => {
        await uiExport_1.Driver.attachScreenshots(driver, reporter);
    });
    afterAll(async () => {
        await uiExport_1.Driver.closeDrivers([driver]);
    });
    it('Docs Page Validation', async () => {
        const expectedGettingStartedText = 'Getting started';
        const result = await docsActions.isGettingStartedTextVisible(expectedGettingStartedText);
        (0, chai_1.expect)(result).to.be.equal(true);
    });
});
