import { by, waitFor } from 'detox';
import { DEFAULT_TIMEOUT } from '../index';

export const toBeVisible = async (id: string, timeout: number = DEFAULT_TIMEOUT) => await waitFor(element(by.id(id)))
    .toBeVisible().withTimeout(timeout);

export const toNotBeVisible = async (id: string, timeout: number = DEFAULT_TIMEOUT) => await waitFor(element(by.id(id)))
    .toBeNotVisible().withTimeout(timeout);

export const toExist = async (id: string, timeout: number = DEFAULT_TIMEOUT) => await waitFor(element(by.id(id)))
    .toExist().withTimeout(timeout);

export const toNotExist = async (id: string, timeout: number = DEFAULT_TIMEOUT) => await waitFor(element(by.id(id)))
    .toNotExist().withTimeout(timeout);

export const toHaveText = async (id: string, text: string, timeout: number = DEFAULT_TIMEOUT) => await waitFor(
    element(by.id(id))
).toHaveText(text).withTimeout(timeout);

export const toHaveValue = async (id: string, text: string, timeout: number = DEFAULT_TIMEOUT) => await waitFor(
    element(by.id(id))
).toHaveValue(text).withTimeout(timeout);
