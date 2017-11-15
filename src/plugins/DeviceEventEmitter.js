const EventEmitter = require('events').EventEmitter;

const DeviceEventEmitter = new EventEmitter();
DeviceEventEmitter.setMaxListeners(0);

module.exports = DeviceEventEmitter;
