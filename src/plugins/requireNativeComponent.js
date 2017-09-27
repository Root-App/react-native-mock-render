/**
 * https://github.com/facebook/react-native/blob/master/Libraries/ReactIOS/requireNativeComponent.js
 */
/* eslint no-unused-vars:0 */
import React from 'react';
import createReactClass from 'create-react-class';

function requireNativeComponent(viewName, componentInterface, extraConfig) {
  return createReactClass({
    displayName: viewName,
    render() {
      return null;
    },
  });
}

module.exports = requireNativeComponent;
