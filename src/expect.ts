import { by, expect } from 'detox';

export const toBeVisible = async (id: string) => await expect(element(by.id(id))).toBeVisible();

export const notToBeVisible = async (id: string) => await expect(element(by.id(id))).toBeNotVisible();

export const toExist = async (id: string) => await expect(element(by.id(id))).toExist();

export const toNotExist = async (id: string) => await expect(element(by.id(id))).toNotExist();

export const toHaveText = async (id: string, text: string) => await expect(element(by.id(id))).toHaveText(text);

export const toHaveLabel = async (id: string, label: string) => await expect(element(by.id(id))).toHaveLabel(label);

export const textToHaveId = async (id: string, text: string) => await expect(element(by.text(text))).toHaveId(id);

export const toHaveValue = async (id: string, value: string) => await expect(element(by.id(id))).toHaveValue(value);
