/**
 * Detox uses Matchers to find UI elements in your app, Actions to emulate
 * user interaction with those elements and Expectations to verify values on those elements.
 * Matchers find elements in your app that match one or more properties.
 * NOTE: Whenever possible we recommend to match elements by.id, these are
 * more resilient to layout restructuring and text/language changes
 */

import { by, element } from 'detox';

export const byId = (id: string) => element(by.id(id));

export const byText = (text: string) => element(by.text(text));

export const byLabel = (label: string) => element(by.label(label));

export const byType = (nativeViewType: string) => element(by.type(nativeViewType));

export const and = (id: string, andMatcher: any) => element(by.id(id).and(andMatcher));

export const withAncestor = (id: string, ancestorElement: any) => element(by.id(id)
    .withAncestor(ancestorElement));

export const withDescendant = (id: string, descendantElement: any) => element(by.id(id)
    .withDescendant(descendantElement));
