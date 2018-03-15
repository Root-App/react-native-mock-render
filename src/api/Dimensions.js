/**
 * https://github.com/facebook/react-native/blob/master/Libraries/Utilities/Dimensions.js
 */
import invariant from 'invariant';
import DeviceEventEmitter from '../plugins/DeviceEventEmitter';

const dimensions = {
  // TODO(lmr): find the other dimensions to put in here...
  window: {
    width: 320,
    height: 768,
    scale: 2,
    fontScale: 2,
  },
};

const DEVICE_EVENT = 'didUpdateDimensions';
const _eventHandlers = {
  change: new Map(),
};

const Dimensions = {
  set(dims) {
    Object.assign(dimensions, dims);
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
      _eventHandlers[type].set(handler, DeviceEventEmitter.addListener(
        DEVICE_EVENT,
        ({ dims }) => handler(dims)
      ));
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
    listener.remove();
    _eventHandlers[type].delete(handler);
  },
};

module.exports = Dimensions;
