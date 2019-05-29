import { device } from 'detox';

import * as action from './src/action';
import * as expect from './src/expect';
import * as matcher from './src/matcher';
import * as waitFor from './src/waitFor';

export const DEFAULT_TIMEOUT = 2000;

export {
    action,
    expect,
    waitFor,
    matcher,
    device,
};
