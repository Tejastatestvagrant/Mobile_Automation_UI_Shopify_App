"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomGenerator = void 0;
const faker_1 = require("@faker-js/faker");
var RandomGenerator;
(function (RandomGenerator) {
    async function generateAlphabets(length) {
        let random = '';
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        for (let counter = 0; counter < length; counter += 1)
            random += possible.charAt(Math.floor(Math.random() * possible.length));
        return random;
    }
    RandomGenerator.generateAlphabets = generateAlphabets;
    async function generateNumbers(length) {
        return Math.random().toString().slice(2, length);
    }
    RandomGenerator.generateNumbers = generateNumbers;
    /**
     * return random number between range specified
     * @param min
     * @param max
     * @returns
     */
    async function getRandomInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    RandomGenerator.getRandomInteger = getRandomInteger;
    async function generateAlphaNumeric(length) {
        let random = '';
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let counter = 0; counter < length; counter += 1)
            random += possible.charAt(Math.floor(Math.random() * possible.length));
        return random;
    }
    RandomGenerator.generateAlphaNumeric = generateAlphaNumeric;
    async function generatePhoneNumber() {
        const firstDigit = faker_1.faker.datatype.number({ min: 1, max: 5 });
        const restDigits = faker_1.faker.phone.phoneNumber('#'.repeat(9));
        return firstDigit + restDigits;
    }
    RandomGenerator.generatePhoneNumber = generatePhoneNumber;
})(RandomGenerator = exports.RandomGenerator || (exports.RandomGenerator = {}));
