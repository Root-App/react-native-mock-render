
const SubscribableMixin = {
  componentWillMount() {
    this._subscriptions = [];
  },

  componentWillUnmount() {
    this._subscriptions.forEach(
      (subscription) => subscription.eventEmitter.removeListener(subscription.eventType, subscription.listener)
    );
    this._subscriptions = null;
  },

  addListenerOn(eventEmitter, eventType, listener, context) {
    eventEmitter.addListener(eventType, listener, context);
    this._subscriptions.push({ eventEmitter, eventType, listener });
  }
};

const Subscribable = {
  Mixin: SubscribableMixin,
};

module.exports = Subscribable;
