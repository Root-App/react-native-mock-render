# react-native-mock-render

A fork of [react-native-mock](https://github.com/RealOrangeOne/react-native-mock) that renders components

## Requirements
- Node.js 4+
- The latest version of react-native

## Installation

```bash
npm i react-native-mock-render --save-dev
```

```js
/* file-that-runs-before-all-of-my-tests.js */

// This will mutate `react-native`'s require cache with `react-native-mock`'s.
require('react-native-mock-render/mock'); // <-- side-effects!!!
```

### Jest

Jest [doesn't support](https://github.com/Root-App/react-native-mock-render/issues/23) `require.cache`, so the correct way to do the mocking is using `jest.mock('react-native', () => require('react-native-mock-render'), {virtual: true})` in your tests setup file.

## Why?

We wanted to be able deeply render React Native components in our integration tests and already used `react-native-mock`.

### Contributors

- [Root Insurance's Dev Team](https://joinroot.com)

### [react-native-mock](https://github.com/RealOrangeOne/react-native-mock) Core Contributors
- [Jake Howard](https://github.com/RealOrangeOne)
- [Leland Richardson](https://github.com/lelandrichardson) (Original Creator)
