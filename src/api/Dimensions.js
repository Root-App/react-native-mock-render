/**
 * https://github.com/facebook/react-native/blob/master/Libraries/Utilities/Dimensions.js
 */
import invariant from 'invariant';
import DeviceEventEmitter from '../plugins/DeviceEventEmitter';

const DEFAULT_DIMENSIONS = Object.freeze({
  width: 320,
  height: 768,
  scale: 2,
  fontScale: 2,
});

let dimensions = {
  window: DEFAULT_DIMENSIONS,
  screen: DEFAULT_DIMENSIONS
};

const DEVICE_EVENT = 'didUpdateDimensions';
const _eventHandlers = {
  change: new Map(),
};

const Dimensions = {
  set(dims) {
    dimensions = Object.assign({}, dimensions, dims);
    DeviceEventEmitter.emit(DEVICE_EVENT, { dims });
    return true;
  },
  get(dim) {
    return dimensions[dim];
  },
  addEventListener(type, handler) {
    invariant(
      ['change'].indexOf(type) !== -1,
      'Trying to subscribe to unknown event: "%s"', type
    );
    if (type === 'change') {
      const listener = ({ dims }) => handler(dims);
      DeviceEventEmitter.addListener(DEVICE_EVENT, listener);
      _eventHandlers[type].set(handler, listener);
    }
  },
  removeEventListener(type, handler) {
    invariant(
      ['change'].indexOf(type) !== -1,
      'Trying to remove listener for unknown event: "%s"', type
    );
    const listener = _eventHandlers[type].get(handler);
    if (!listener) {
      return;
    }
    DeviceEventEmitter.removeListener(DEVICE_EVENT, listener);
    _eventHandlers[type].delete(handler);
  },
};

module.exports = Dimensions;
