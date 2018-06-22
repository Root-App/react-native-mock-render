var EventEmitter=require('events').EventEmitter;

var DeviceEventEmitter=new EventEmitter();
DeviceEventEmitter.setMaxListeners(0);

module.exports=DeviceEventEmitter;