var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};/**
 * https://github.com/facebook/react-native/blob/master/Libraries/Utilities/Dimensions.js
 */
var _invariant=require('invariant');var _invariant2=_interopRequireDefault(_invariant);
var _DeviceEventEmitter=require('../plugins/DeviceEventEmitter');var _DeviceEventEmitter2=_interopRequireDefault(_DeviceEventEmitter);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}

var dimensions={
// TODO(lmr): find the other dimensions to put in here...
window:{
width:320,
height:768,
scale:2,
fontScale:2}};



var DEVICE_EVENT='didUpdateDimensions';
var _eventHandlers={
change:new Map()};


var Dimensions={
set:function(){function set(dims){
_extends(dimensions,dims);
_DeviceEventEmitter2['default'].emit(DEVICE_EVENT,{dims:dims});
return true;
}return set;}(),
get:function(){function get(dim){
return dimensions[dim];
}return get;}(),
addEventListener:function(){function addEventListener(type,handler){
(0,_invariant2['default'])(
['change'].indexOf(type)!==-1,
'Trying to subscribe to unknown event: "%s"',type);

if(type==='change'){
_eventHandlers[type].set(handler,_DeviceEventEmitter2['default'].addListener(
DEVICE_EVENT,
function(_ref){var dims=_ref.dims;return handler(dims);}));

}
}return addEventListener;}(),
removeEventListener:function(){function removeEventListener(type,handler){
(0,_invariant2['default'])(
['change'].indexOf(type)!==-1,
'Trying to remove listener for unknown event: "%s"',type);

var listener=_eventHandlers[type].get(handler);
if(!listener){
return;
}
listener.remove();
_eventHandlers[type]['delete'](handler);
}return removeEventListener;}()};


module.exports=Dimensions;