import React from 'react'; /* eslint no-unused-vars:0 */
import { expect } from 'chai';
import Subscribable from '../../src/mixins/Subscribable.js';
import DeviceEventEmitter from '../../src/plugins/DeviceEventEmitter.js';
import createReactClass from 'create-react-class';

describe('Subscribable.Mixin', () => {
  it('Can mount and unmount with a DeviceEventEmitter subscribed. Does not interupt existing events.', () => {
    const SubscribableClass = createReactClass({
      displayName: 'SubscribableClass',
      mixins: [Subscribable.Mixin],
      render() {
        return null;
      },
    });
    const subscribableComponent = new SubscribableClass();
    const existingEventType = 'Existing Event';
    DeviceEventEmitter.addListener(existingEventType, () => {}, context);
    expect(DeviceEventEmitter.listeners(existingEventType)).to.have.length(1);

    subscribableComponent.componentWillMount();
    subscribableComponent.addListenerOn(DeviceEventEmitter, 'Test Event Type', () => {});
    subscribableComponent.componentWillUnmount();

    expect(DeviceEventEmitter.listeners(existingEventType)).to.have.length(1);
  });
});
