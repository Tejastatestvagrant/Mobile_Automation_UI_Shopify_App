import { BaseScreen } from '../base/baseScreen';
/**
 * Here you'll find some swipe methods for a native iOS or Android app
 */
export declare class SwipeUtil extends BaseScreen {
    SCREEN_SIZE: {
        width: number;
        height: number;
    };
    /**
     * The values in the below object are percentages of the screen
     */
    SWIPE_DIRECTION: {
        down: {
            start: {
                x: number;
                y: number;
            };
            end: {
                x: number;
                y: number;
            };
        };
        left: {
            start: {
                x: number;
                y: number;
            };
            end: {
                x: number;
                y: number;
            };
        };
        right: {
            start: {
                x: number;
                y: number;
            };
            end: {
                x: number;
                y: number;
            };
        };
        up: {
            start: {
                x: number;
                y: number;
            };
            end: {
                x: number;
                y: number;
            };
        };
    };
    /**
     * Check if an element is visible and if not scroll down a portion of the screen to
     * check if it visible after a x amount of scrolls
     *
     * @param {element} element
     * @param {number} maxScrolls
     * @param {number} amount
     */
    checkIfVisibleWithScrollDown(element: string, maxScrolls: number, amount?: number): Promise<void>;
    /**
     * Swipe down based on a percentage
     * @param {float} percentage
     */
    swipeDown(percentage?: number): Promise<void>;
    /**
     * Swipe Up based on a percentage
     * @param {float} percentage from 0 - 1
     */
    swipeUp(percentage?: number): Promise<void>;
    /**
     * Swipe left based on a percentage
     * @param {float} percentage from 0 - 1
     */
    swipeLeft(percentage?: number): Promise<void>;
    /**
     * Swipe right based on a percentage
     * @param {float} percentage from 0 - 1
     */
    swipeRight(percentage?: number): Promise<void>;
    /**
     * Swipe from coordinates (from) to the new coordinates (to). The given coordinates are
     * percentages of the screen.
     * @param {object} from { x: 50, y: 50 }
     * @param {object} to { x: 25, y: 25 }
     * @example
     * <pre>
     *   // This is a swipe to the left
     *   const from = { x: 50, y:50 }
     *   const to = { x: 25, y:50 }
     * </pre>
     */
    swipeOnPercentage(from: {}, to: {}): Promise<void>;
    /**
     * Swipe from coordinates (from) to the new coordinates (to). The given coordinates are in pixels.
     *
     * @param {object} from { x: 50, y: 50 }
     * @param {object} to { x: 25, y: 25 }
     *
     * @example
     * <pre>
     *   // This is a swipe to the left
     *   const from = { x: 50, y:50 }
     *   const to = { x: 25, y:50 }
     * </pre>
     */
    swipe(from: {}, to: {}): Promise<void>;
    /**
     * Get the screen coordinates based on a device his screensize
     * @param {number} screenSize the size of the screen
     * @param {object} coordinates like { x: 50, y: 50 }
     * @return {{x: number, y: number}}
     */
    static getDeviceScreenCoordinates(screenSize: any, coordinates: any): Promise<{
        x: number;
        y: number;
    }>;
    /**
     * Calculate the x y coordinates based on a percentage
     * @param {object} coordinates
     * @param {float} percentage
     * @return {{x: number, y: number}}
     */
    static calculateXY({ x, y }: any, percentage: number): Promise<{
        x: number;
        y: number;
    }>;
}
