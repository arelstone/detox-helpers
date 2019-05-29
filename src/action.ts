/**
 * Detox uses Matchers to find UI elements in your app, Actions to emulate user
 * interaction with those elements and Expectations to verify values on those elements.
 */

import { element, by, expect } from 'detox';

export const tap = async (id: string) => await element(by.id(id)).tap();

export const longPress = async (id: string) => await element(by.id(id)).longPress();

export const multitap = async (id: string, times: number) => await element(by.id(id)).multiTap(times);

export const tapAtPoint = async (id: string, coordinates: { x: number; y: number }) => await element(by.id(id))
    .tapAtPoint(coordinates);

export const typeText = async (id: string, text: string) => await element(by.id(id)).typeText(text);

export const replaceText = async (id: string, text: string) => await element(by.id(id)).replaceText(text);

export const clearText = async (id: string) => await element(by.id(id)).clearText();

export const scroll = async (
    id: string,
    pixels: number,
    direction: 'top' | 'bottom' | 'left' | 'right'
) => await element(by.id(id)).scroll(pixels, direction);

export const scrollTo = async (
    id: string,
    edge: 'top' | 'bottom' | 'left' | 'right'
) => await element(by.id(id)).scrollTo(edge);

export const scrollToTop = async (id: string) => await element(by.id(id)).scrollTo('top');

export const scrollToBottom = async (id: string) => await element(by.id(id)).scrollTo('bottom');

export const swipe = async (
    id: string,
    direction: 'top' | 'bottom' | 'left' | 'right',
    speed: 'fast' | 'slow' = 'fast',
    percentage: number = 0.5
) => await element(by.id(id)).swipe(direction, speed, percentage);

export const tapBackspaceKey = async (id: string) => await element(by.id(id)).tapBackspaceKey();

export const pinch = async (
    id: string,
    direction: 'inward' | 'outward',
    speed: 'fast' | 'slow' = 'slow',
    angle: number = 0
) => {
    if (device.getPlatform() === 'ios') {
        await element(by.id(id)).pinchWithAngle(direction, speed, angle);
    } else {
        throw new Error('Pinch is only IOS');
    }
};

export const setDatePickerDate = async (
    id: string,
    dateString: string = new Date().toISOString(),
    format: string = 'yyyy-MM-dd\'T\'HH:mm:ssZZZZZ'
) => {
    if (!dateString.includes('T')) {
        throw new Error('dateString is probberly the wrong format. It should be in an ISOString');
    }

    await expect(element(by.type(id))).toBeVisible();
    await element(by.id(id)).setDatePickerDate(dateString, format);
};
