export declare module RandomGenerator {
    function generateAlphabets(length: number): Promise<string>;
    function generateNumbers(length: number): Promise<string>;
    /**
     * return random number between range specified
     * @param min
     * @param max
     * @returns
     */
    function getRandomInteger(min: number, max: number): Promise<number>;
    function generateAlphaNumeric(length: number): Promise<string>;
    function generatePhoneNumber(): Promise<string>;
}
