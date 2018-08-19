/**
 * https://github.com/facebook/react-native/blob/master/Libraries/ReactIOS/NativeMethodsMixin.js
 */
module.exports = {
  measure(callback) {},
  measureLayout(relativeToNativeNode, onSuccess, onFail) {},
  setNativeProps(nativeProps) {},
  focus() {},
  blur() {},
  measureInWindow(callback) {
    callback(10, 10, 10, 10);
  },
};
