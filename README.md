# detox-helpers
This package is a set of test helpers for [Detox](https://github.com/wix/Detox/).

## Prerequisites
* Detox should be installed. See [Detox Getting started section](https://github.com/wix/Detox/blob/master/docs/Introduction.GettingStarted.md) and setup

## Installation
```bash
// with NPM
$ npm install -D @arelstone/detox-helpers

// with NPM
$ yarn install --dev @arelstone/detox-helpers
```


## Simple Example

```js
import {expect, action} from '@arelstone/detox-helpers'

describe('My first tets', ()=>{
    it('should see Hello World', async () => {
        await expect.toExist('UniqueId205');
        await expect.toHaveText('UniqueId205', 'Hello world')
    });

    it('should type in InputField', () => {
        await expect.toExist('UniqueId210');
        await action.typeText('UniqueId210', 'Some text that is typed into the input field')
    });

    it('should replace the text in the InputField', () => {
        await action.typeText('UniqueId210', 'Some new value')
    });
});
```

## Contributing
Pull requests is VERY welcome. Just make fork, do your changes and make a pull request.

## Roadmap
- [x] Add test utilities 
- [ ] Write documentation
- [ ] Testing
