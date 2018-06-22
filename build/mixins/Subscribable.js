
var SubscribableMixin={
componentWillMount:function(){function componentWillMount(){
this._subscriptions=[];
}return componentWillMount;}(),

componentWillUnmount:function(){function componentWillUnmount(){
this._subscriptions.forEach(
function(subscription){return subscription.eventEmitter.removeListener(subscription.eventType,subscription.listener);});

this._subscriptions=null;
}return componentWillUnmount;}(),

addListenerOn:function(){function addListenerOn(eventEmitter,eventType,listener,context){
eventEmitter.addListener(eventType,listener,context);
this._subscriptions.push({eventEmitter:eventEmitter,eventType:eventType,listener:listener});
}return addListenerOn;}()};


var Subscribable={
Mixin:SubscribableMixin};


module.exports=Subscribable;